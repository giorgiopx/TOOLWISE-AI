import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://toolwiseai.netlify.app', // Replace with your real domain after purchase
  integrations: [sitemap()],
  output: 'static'
});
