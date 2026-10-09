# Toolwise AI — pre-launch checklist

## Deployment
- [ ] Repository contains project files at its root (including `package.json`, `astro.config.mjs`, `netlify.toml`, `src/`, and `public/`).
- [ ] Netlify build command is `npm run build` and publish directory is `dist`.
- [ ] Set `SITE_URL` to the real Netlify production URL, then later to the chosen canonical custom domain.
- [ ] Confirm homepage and `/articles/` load without 404; click every article link.
- [ ] Check 404 page, mobile layout, navigation, keyboard focus and reduced-motion behavior.
- [ ] Add sitemap URL to `robots.txt` only after `SITE_URL` is correct.

## Editorial quality
- [ ] Confirm the five launch articles are accurate and useful; add at least one original example/template to each.
- [ ] Review the other fifteen drafts before setting `draft: false` and `reviewed: true`.
- [ ] Verify product details and prices from current primary sources.
- [ ] Do not claim hands-on tests unless performed; label tests and dates honestly.
- [ ] Add source links where factual claims need support and check internal links.
- [ ] Confirm author identity and contact information.

## Trust and monetization
- [ ] Complete privacy and consent setup for actual analytics/advertising technologies and target audiences.
- [ ] Review affiliate disclosure against programs actually joined.
- [ ] Do not add invented affiliate links or AdSense identifiers.
- [ ] Add the exact AdSense verification/ad code only when available, through a controlled configuration.
- [ ] Submit for AdSense review only when the site is complete; approval and serving are not guaranteed.
