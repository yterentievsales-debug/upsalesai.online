# AGENTS.md

Static landing-page site. Single source of truth: `index.html` (no build, no bundler, no package.json).

## Commands
- Deploy = commit + push `main` to GitHub → GitHub Pages auto-publishes (build lags ~1–2 min).
- CSS is prebuilt (no CDN). After changing Tailwind classes in `index.html`, rebuild and commit `assets/css/tailwind.css`:
  `npx tailwindcss@3.4.17 -c tailwind.config.js -i src/tailwind.css -o assets/css/tailwind.css --minify`
  then bump `?v=N` on the `<link>` to `tailwind.css` so browsers drop the cached copy.
- `git` is NOT in PATH. Use the absolute path: `C:\Program Files\Git\cmd\git.exe`
  - Repo: `yterentievsales-debug/upsalesai.online`, branch `main`.
  - If push is rejected (remote ahead), run `git pull --rebase origin main` then push again.

## How the site works
- Markup and custom CSS/JS are inline in `index.html`. Styling: Tailwind compiled to `assets/css/tailwind.css` (config in `tailwind.config.js`) + custom classes in `<style>` (`.btn-primary`, `.glass-card`, `.input-glass`, …). Interactivity: Alpine.js + collapse plugin, pinned copies in `assets/js/`. Fonts: Google Fonts (Inter).
- Do not go back to `cdn.tailwindcss.com` / jsDelivr: they load slowly or fail from Russia, and the page then renders unstyled with a broken menu/FAQ.
- `CNAME` must stay and contain `upsalesai.online` (GitHub Pages custom domain). Do not delete.
- No backend, no forms, no databases. The lead block (`#form`) has only two external links: MAX bot and Telegram.

## Domain & hosting (important)
- Domain registered at nic.ru. DNS A-records must point to GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Enforce HTTPS in GitHub Pages settings.
- The site is served FREE by GitHub Pages. Do NOT buy nic.ru hosting — keep the domain only.

## MAX messenger links (easy to get wrong)
- Bot link format is `https://max.ru/<username>` — NOT `https://max.ru/u/<username>` (the `/u/` form returns empty `linkInfo` = not found).
  - Current bot: `https://max.ru/id780619699948_bot` (name "Юрий отвечает").
- MAX API base `https://platform-api2.max.ru`, auth via header `Authorization: <token>`. It sends NO CORS headers, so the browser cannot call it directly. Never embed the bot token in `index.html`.
- Telegram contact on site: `https://t.me/KVALIFIKATORMOY_BOT`.

## Gotchas
- `.gitignore` excludes `*.png`, `*.docx`, `*.ps1`, `*.zip`. If you add PNG images they won't be committed unless force-added or the rule is changed.
- Edit `index.html` by exact string replacement (single file, ~1226 lines); read it first.
- Verify live after deploy at `https://upsalesai.online`.
