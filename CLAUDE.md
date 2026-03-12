# isicloud5gb.lol

A satirical single-page site answering "Is iCloud's free tier still 5GB?" (Yes.)

## Project Structure

- `www/` — site served by Vercel - HTML/CSS/JS and assets
- `locales/` — Localization JSON files (currently only `en.json`)
- `scripts/build-readme.mjs` — Generates `README.md` from `locales/en.json`
- `vercel.json` — Vercel config: serves `www/` as output, SPA rewrite to `index.html`

## Localization

- All user-facing strings live in `locales/en.json`, organized by section (`meta`, `schema`, `main`, `info`, `timeline`, `share`, `news`, `footer`, `readme`).
- The `readme` section is special — it drives the README generation, not the website itself.
- Keys ending in `_html` contain raw HTML and should not be escaped during rendering.
- Translation files follow the pattern `locales/{lang}.json`.

### Weblate

Translations are managed via [Hosted Weblate](https://hosted.weblate.org/engage/isicloud5gb/).

- `.weblate` — Project-level config (committed), points to the Hosted Weblate API and project.
- `~/.config/weblate` — User-level config (not committed), holds the API key.
- CLI tool: `wlc` (installed via `pipx install wlc`).

## Build Scripts

- `node scripts/build-readme.mjs` — Regenerates `README.md` from `locales/en.json`. Run this after changing any `readme.*` keys in the locale file.

## Conventions

- README.md is generated — do not edit it by hand. Edit `locales/en.json` (the `readme` section) and `scripts/build-readme.mjs`, then run the build script.
- Keep the tone irreverent and on-brand (deadpan humor about Apple's 5GB free tier).
