import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Ancient-language slug this article is about. Matches a folder name under
// public/images/characters/<slug>/ and drives the mascot art used as the
// article's thumbnail in the YouTube-style article grid on the top page.
// Left unset on placeholder ("準備中") articles so they're excluded from
// that grid until they have real content.
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
