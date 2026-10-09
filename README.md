# Toolwise AI — Netlify starter (Astro)

A lightweight, responsive static website for Toolwise AI, designed for deployment through a GitHub repository connected to Netlify.

## Included
- Dark editorial design with a surreal animated orbital hero, lime/violet accents, responsive article cards and reduced-motion support
- Article library with search, individual article pages, SEO descriptions, Open Graph/Twitter metadata and Article JSON-LD
- About, editorial policy, affiliate disclosure, privacy, contact and 404 pages
- 20 complete English-language article drafts
- Five foundational articles configured for the initial launch; the other fifteen remain unpublished drafts
- Competitor research and editorial strategy: `RESEARCH_AND_EDITORIAL_STRATEGY.md`
- Content calendar: `CONTENT_CALENDAR.csv`
- Article automation plan and deployment checklist
- Netlify build configuration
- No AdSense publisher ID, affiliate IDs, analytics IDs or fabricated credentials

## Deploy to Netlify
1. Upload the **contents** of this folder to the root of your GitHub repository (not the ZIP file and not an extra enclosing folder).
2. In Netlify, import the existing GitHub repository.
3. Build command: `npm run build`; publish directory: `dist`. `netlify.toml` contains these values.
4. Set the Netlify environment variable `SITE_URL` to your actual public production URL, initially your assigned `https://<site-name>.netlify.app`. After purchasing a custom domain, update `SITE_URL` to the preferred canonical HTTPS domain and redeploy.
5. Verify that `/`, `/articles/`, `/about/`, `/privacy/`, and article URLs work. The project is not considered live-ready until the build and page tests pass.

## Article workflow
Articles live in `src/content/articles/` as Markdown. To publish a draft after review, set `draft: false` and `reviewed: true`, then commit and push to GitHub. Netlify will rebuild and deploy automatically. Keep drafts unpublished until product facts, sources, links, and any claims about testing have been checked.

## SEO and domain
- The project does not use `example.com` as a canonical domain.
- `SITE_URL` controls Astro's site URL, canonical tags and sitemap generation. Set it in Netlify before launch.
- After setting `SITE_URL`, update `public/robots.txt` with `Sitemap: https://YOUR-REAL-DOMAIN/sitemap-index.xml` and redeploy.
- The domain has not been purchased or verified as available.

## Before public launch
- Replace placeholder contact details with a real monitored email/contact route.
- Complete privacy, cookie/consent and disclosure pages for the services actually used and the relevant audience/jurisdictions.
- Add author information that reflects the real editorial team.
- Verify product features, pricing, plan limits and every outbound link.
- Add first-hand test results only after performing the tests; do not imply products were tested when they were not.
- Add real AdSense code only through a controlled configuration after you have the correct snippet and are ready to submit the site for review. Never share account passwords or private API keys in chat or commit secrets to a public repository. AdSense approval and ad serving are not guaranteed.
- Check mobile layout, keyboard focus, accessibility, page titles, canonical URL, sitemap and all links.

## Brand direction
- Midnight: `#101321`
- Electric lime: `#D6FF70`
- Soft violet: `#A69BFF`
- Muted lavender-gray: `#A2A7BD`
- Tone: experimental, editorial, surreal but credible; practical before hype.
- Tagline: “Practical AI tools. Honest comparisons. Better work.”

## Note
The articles are editorial drafts, not claims of hands-on product testing. Review and enrich them with original examples, evidence and sources before publishing.
