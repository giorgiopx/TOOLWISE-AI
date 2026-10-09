# Toolwise AI — Netlify starter

A lightweight Astro static website starter for Toolwise AI. It is designed to deploy through a Git repository connected to Netlify, not as a WordPress theme.

## Included
- Responsive homepage and article library
- About, editorial policy, affiliate disclosure, privacy, contact and 404 pages
- Three English starter articles, intentionally marked as drafts and not approved for publication
- Article content collection with draft/review flags
- Automatic sitemap integration
- Netlify build configuration
- No AdSense publisher ID, affiliate IDs, tracking scripts or made-up credentials

## Deploy to Netlify
1. Unzip this folder.
2. Create a private or public GitHub repository and upload the contents of this folder to its root.
3. In Netlify, choose **Add new project / Import an existing project**, connect GitHub and select the repository.
4. Build command: `npm run build`; publish directory: `dist`. `netlify.toml` already contains these values.
5. Deploy first to the temporary `*.netlify.app` address and check all pages.
6. After choosing and purchasing a domain, update `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt` to the real canonical domain, then commit and redeploy.

## Article workflow
Articles live in `src/content/articles/` as Markdown. Each file needs frontmatter fields similar to the included examples. Keep `draft: true` and `reviewed: false` until a human has checked it. To publish an article, set `draft: false` and `reviewed: true`, then commit and push. Netlify will rebuild and deploy automatically.

## Before public launch
- Replace the placeholder domain and contact email.
- Review and complete the privacy policy and cookie/consent setup for the actual services used.
- Review the affiliate disclosure against the affiliate programs you actually join.
- Add real author information and a contact channel.
- Verify product facts, pricing and every outbound affiliate link.
- Add real AdSense code only after it is supplied by your AdSense account and you are ready to submit the site for review. Never invent a publisher ID. Approval is not guaranteed.
- Test mobile layout, navigation, 404, canonical URL, sitemap and all links.

## Brand
- Midnight Navy: `#17243A`
- Warm Paper: `#F6F5F1`
- Mint: `#7FE1C3`
- Soft Slate: `#DCE4EF`
- Tagline: “Practical AI tools. Honest comparisons. Better work.”

## Notes
This starter has not been deployed or tested against a live domain. Review all copy and legal pages before launch. The sample articles are not publication-approved and contain editorial notes that must be removed only after the required checks are complete.
