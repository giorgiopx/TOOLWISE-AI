import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './site';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(CATEGORIES),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Toolwise AI Editorial'),
    affiliate: z.boolean().default(false),
    // An article is only built for production when draft is false AND reviewed is true.
    draft: z.boolean().default(true),
    reviewed: z.boolean().default(false),
  }),
});

export const collections = { articles };
