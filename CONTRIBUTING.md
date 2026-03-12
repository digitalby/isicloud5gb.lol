# Contributing to isicloud5gb.lol

Thanks for wanting to help remind the world that Apple — a $3+ trillion company — still gives you 5GB of free iCloud storage. Since 2011.

## Translating

The easiest way to contribute is to help translate the site into your language.

**Use Weblate** (preferred): Head to our [Weblate project](https://hosted.weblate.org/engage/isicloud5gb/) and translate directly in the browser. No dev setup needed.

**Or contribute manually**: Translation files live in `locales/` as JSON. Copy `locales/en.json` to `locales/{your-language-code}.json` and translate the values (not the keys). A few things to keep in mind:

- Keys ending in `_html` contain raw HTML. Translate the text but keep the tags intact.
- The `readme` section powers the generated README, not the website — you can skip it unless you want to translate the README too.
- Strings are grouped by section (`meta`, `main`, `info`, `timeline`, `share`, etc.) so you can work through them in order.

## Website and Assets

The site lives in `www/` and is served by Vercel.

If you're changing images or assets, keep file sizes reasonable. This is a one-word-answer website; it shouldn't take longer to load than it takes to read.

## The README

**Do not edit `README.md` directly.** It's generated from `locales/en.json` (the `readme` section) by running:

```
node scripts/build-readme.mjs
```

A GitHub Action also exists to facilitate automating this building process.

If you want to change README content, edit the `readme` keys in `locales/en.json` and/or the build script at `scripts/build-readme.mjs`, then run the command above.

## Tone

This project has a specific voice: deadpan, dry, mildly exasperated. Think "I can't believe we still have to talk about this" energy. When writing copy or translating:

- Keep it short. The answer is one word.
- Sarcasm is fine. Anger is not.
- We're poking fun at a corporate decision, not at people.

## Be Kind

This is a silly project about cloud storage. Let's keep it that way.

- Be respectful to other contributors.
- Don't punch down. The joke is about a trillion-dollar company, not about "people who can't afford more storage".
- Keep discussions constructive and welcoming.
- If something feels off, it probably is — use common sense.

## Opening a PR

- Keep changes focused. One thing per PR is easier to review than five.
- If you're not sure whether something fits, open an issue first to discuss it.
- Test your changes locally before submitting.

That's it. The bar is low, the storage is 5GB, and we're glad you're here.
