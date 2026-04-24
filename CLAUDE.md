# Kaptea Website — Project Instructions

## Git Deployment Workflow

**Always follow this branch order. Never push directly to main.**

1. `git add <files>`
2. `git commit -m "..."`
3. `git push origin Brendan`
4. `git checkout main && git merge Brendan && git push origin main`
5. `git checkout Robert && git merge main && git push origin Robert`
6. `git checkout Brendan`

Vercel deploys automatically from `main`. `Robert` is the designer's branch and must stay in sync.

## File Structure

- `img/brand/` — logos, favicon, brand SVGs
- `img/illustrations/` — product screenshots, SVGs
- `img/integrations/` — integration partner icons
- `img/logos/` — customer/partner logos
- `styles.css` — global stylesheet (loaded by all pages)
- `nav.js` — global nav (injected into every page)
- `footer.js` — global footer (injected into every page)

## Writing & Copy Rules

- **No em dashes (—).** Replace with: commas, colons, semicolons, parentheses, or split into two sentences. This applies to all copy across every page, meta description, and JS file.

## Page Conventions

- Always link `styles.css`, `nav.js`, and `footer.js`
- Favicon: `<link rel="icon" href="img/brand/favicon.svg" type="image/svg+xml" />`
- Page-specific styles go inline in `<style>` tags, not in `styles.css`
- Brand red: `#dc2727` — Brand dark navy: `#131521`
