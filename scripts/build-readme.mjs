import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const locale = JSON.parse(
  readFileSync(join(root, "locales", "en.json"), "utf-8")
);
const r = locale.readme;

function badge(social) {
  return `[![${social.label}](https://img.shields.io/badge/${social.badge}?style=for-the-badge&logo=${social.logo}&logoColor=white)](${social.url})`;
}

function faqEntry({ q, a }) {
  return `**Q: ${q}**\n\nA: ${a}`;
}

const lines = [
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

const readme = lines.join("\n");
writeFileSync(join(root, "README.md"), readme);
console.log("README.md generated successfully.");
