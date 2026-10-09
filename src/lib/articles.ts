import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articles'>;

export const isPublishable = (a: Article) => !a.data.draft && a.data.reviewed;

/** Published articles in production; every article (including drafts) in `astro dev` for previewing. */
export async function getArticles() {
  const all = await getCollection('articles', (a) => import.meta.env.DEV || isPublishable(a));
  return all.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
