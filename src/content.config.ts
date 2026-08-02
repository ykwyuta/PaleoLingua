import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Ancient-language slug this article is about. Matches a folder name under
// public/images/characters/<slug>/ and drives the mascot icon shown next to
// the article title in the article list on the top page.
// Left unset on placeholder ("準備中") articles so they're excluded from
// that list until they have real content.
export const TOPICS = [
  'sumerian',
  'akkadian',
  'sanskrit',
  'hittite',
  'old-egyptian',
  'aramaic',
  'maya',
  'old-norse',
] as const;

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        topic: z.enum(TOPICS).optional(),
      }),
    }),
  }),
};
