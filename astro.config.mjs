import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical URL used for canonical tags, Open Graph URLs and the sitemap.
// Override with the SITE_URL environment variable in Netlify after connecting a custom domain.
const site = process.env.SITE_URL || 'https://toolwiseai.netlify.app';

export default defineConfig({
  site,
  integrations: [sitemap()],
});
