import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const localesDir = join(root, "locales");

const enLocale = JSON.parse(readFileSync(join(localesDir, "en.json"), "utf-8"));
const enReadme = enLocale.readme;

/**
 * Deeply merges a locale value with an English fallback.
 * Arrays are merged element-by-element; objects are merged per key.
 * Empty strings and missing values fall back to English.
 */
function mergeWithFallback(localeValue, fallbackValue) {
  if (localeValue === undefined || localeValue === null) return fallbackValue;

  if (Array.isArray(fallbackValue)) {
    if (!Array.isArray(localeValue)) return fallbackValue;
    return fallbackValue.map((fallbackItem, i) => {
      const localeItem = localeValue[i];
      if (localeItem === undefined || localeItem === null) return fallbackItem;
      if (typeof fallbackItem === "object" && !Array.isArray(fallbackItem)) {
        const merged = {};
        for (const k of Object.keys(fallbackItem)) {
          merged[k] =
            localeItem[k] !== undefined && localeItem[k] !== ""
              ? localeItem[k]
              : fallbackItem[k];
        }
        return merged;
      }
      return localeItem !== "" ? localeItem : fallbackItem;
    });
  }

  if (typeof fallbackValue === "object" && fallbackValue !== null) {
    if (typeof localeValue !== "object") return fallbackValue;
    const merged = {};
    for (const k of Object.keys(fallbackValue)) {
      merged[k] =
        localeValue[k] !== undefined && localeValue[k] !== ""
          ? localeValue[k]
          : fallbackValue[k];
    }
    return merged;
  }

  return localeValue !== "" ? localeValue : fallbackValue;
}

function badge(social) {
  return `[![${social.label}](https://img.shields.io/badge/${social.badge}?style=for-the-badge&logo=${social.logo}&logoColor=white)](${social.url})`;
}

function faqEntry({ q, a }) {
  return `**Q: ${q}**\n\nA: ${a}`;
}

function langNav(currentLang, allLangEntries) {
  return allLangEntries
    .map(({ lang, r }) => {
      const name = r.lang_name ?? lang;
      const file = lang === "en" ? "README.md" : `README.${lang}.md`;
      return lang === currentLang ? `**${name}**` : `[${name}](${file})`;
    })
    .join(" | ");
}

function buildReadme(r, lang, allLangEntries) {
  const lines = [
    `<img src="isicloud5gb.gif" alt="isicloud5gb.lol" width="56">`,
    "",
    `# [isicloud5gb.lol](${r.site_url}) - ${r.title}`,
    "",
    `**${r.answer}**`,
    "",
    r.socials.map(badge).join("\n"),
    `<a href="https://hosted.weblate.org/engage/isicloud5gb/">`,
    `<img src="https://hosted.weblate.org/widget/isicloud5gb/isicloud5gb-l10n/svg-badge.svg" alt="Translation status" />`,
    `</a>`,
    badge(r.sponsor),
    "",
    langNav(lang, allLangEntries),
    "",
    `## ${r.headings.faq}`,
    "",
    r.faq.map(faqEntry).join("\n\n"),
    "",
    `## ${r.headings.tech_stack}`,
    "",
    r.tech_stack,
    "",
    `## ${r.headings.contributing}`,
    "",
    r.contributing_intro,
    "",
    r.contributing_body,
    r.wishlist.map((item) => `- ${item}`).join("\n"),
    "",
    `${r.spread}`,
    r.spread_items.map((item) => `- ${item}`).join("\n"),
    "",
    r.shutdown_notice,
    "",
    `### ${r.translations_heading}`,
    "",
    r.translations,
    "",
    `## ${r.headings.license}`,
    "",
    "MIT.",
    "",
    r.license_joke,
    "",
  ];
  return lines.join("\n");
}

const localeFiles = readdirSync(localesDir).filter((f) => f.endsWith(".json"));

// First pass: collect all merged readme objects
const allLangEntries = localeFiles.map((file) => {
  const lang = file.replace(".json", "");
  const locale = JSON.parse(readFileSync(join(localesDir, file), "utf-8"));
  const localeReadme = locale.readme ?? {};

  const r = {};
  for (const k of Object.keys(enReadme)) {
    r[k] = mergeWithFallback(localeReadme[k], enReadme[k]);
  }
  // lang_name may not be in enReadme keys if missing from en.json; handle it explicitly
  r.lang_name = localeReadme.lang_name ?? lang;

  return { lang, r };
});

// Second pass: generate each README
for (const { lang, r } of allLangEntries) {
  const outFile =
    lang === "en" ? join(root, "README.md") : join(root, `README.${lang}.md`);
  writeFileSync(outFile, buildReadme(r, lang, allLangEntries));
  console.log(`${outFile} generated (${lang}).`);
}
