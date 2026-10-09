import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    draft: z.boolean().default(true),
    reviewed: z.boolean().default(false),
    author: z.string().default('Toolwise AI Editorial Team'),
    updatedDate: z.coerce.date().optional(),
    canonicalURL: z.string().url().optional()
  })
});
export const collections = { articles };
