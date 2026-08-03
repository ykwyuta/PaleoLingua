// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://paleolingua.pages.dev',
  integrations: [
    starlight({
      title: 'PaleoLingua',
      description:
        'AIが自律的に執筆・拡充する、オープンかつ完全無料の多言語（日本語・英語）ニッチ古代言語Web教科書',
      defaultLocale: 'root',
      locales: {
        root: { label: '日本語', lang: 'ja' },
        en: { label: 'English', lang: 'en' },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ykwyuta/paleolingua',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        ThemeProvider: './src/components/EmptyThemeProvider.astro',
        ThemeSelect: './src/components/EmptyThemeSelect.astro',
      },
      sidebar: [
        {
          label: 'シュメール語',
          translations: { en: 'Sumerian' },
          items: [
            {
              label: '文字と音韻',
              translations: { en: 'Script & Phonology' },
              items: [{ autogenerate: { directory: 'sumerian/script-and-phonology' } }],
            },
            {
              label: '基礎文法',
              translations: { en: 'Basic Grammar' },
              items: [{ autogenerate: { directory: 'sumerian/grammar' } }],
            },
            {
              label: '読解・例文',
              translations: { en: 'Readings & Examples' },
              items: [{ autogenerate: { directory: 'sumerian/readings' } }],
            },
          ],
        },
        {
          label: 'アッカド語',
          translations: { en: 'Akkadian' },
          items: [
            {
              label: '文字と音韻',
              translations: { en: 'Script & Phonology' },
              items: [{ autogenerate: { directory: 'akkadian/script-and-phonology' } }],
            },
            {
              label: '基礎文法',
              translations: { en: 'Basic Grammar' },
              items: [{ autogenerate: { directory: 'akkadian/grammar' } }],
            },
            {
              label: '読解・例文',
              translations: { en: 'Readings & Examples' },
              items: [{ autogenerate: { directory: 'akkadian/readings' } }],
            },
          ],
        },
        {
          label: 'サンスクリット語',
          translations: { en: 'Sanskrit' },
          items: [
            {
              label: '文字と音韻',
              translations: { en: 'Script & Phonology' },
              items: [{ autogenerate: { directory: 'sanskrit/script-and-phonology' } }],
            },
            {
              label: '基礎文法',
              translations: { en: 'Basic Grammar' },
              items: [{ autogenerate: { directory: 'sanskrit/grammar' } }],
            },
            {
              label: '読解・例文',
              translations: { en: 'Readings & Examples' },
              items: [{ autogenerate: { directory: 'sanskrit/readings' } }],
            },
          ],
        },
        {
          label: '古ノルド語',
          translations: { en: 'Old Norse' },
          items: [
            {
              label: '文字と音韻',
              translations: { en: 'Script & Phonology' },
              items: [{ autogenerate: { directory: 'old-norse/script-and-phonology' } }],
            },
            {
              label: '基礎文法',
              translations: { en: 'Basic Grammar' },
              items: [{ autogenerate: { directory: 'old-norse/grammar' } }],
            },
            {
              label: '読解・例文',
              translations: { en: 'Readings & Examples' },
              items: [{ autogenerate: { directory: 'old-norse/readings' } }],
            },
          ],
        },
        {
          label: '古エジプト語',
          translations: { en: 'Old Egyptian' },
          items: [
            {
              label: '文字と音韻',
              translations: { en: 'Script & Phonology' },
              items: [{ autogenerate: { directory: 'old-egyptian/script-and-phonology' } }],
            },
            {
              label: '基礎文法',
              translations: { en: 'Basic Grammar' },
              items: [{ autogenerate: { directory: 'old-egyptian/grammar' } }],
            },
            {
              label: '読解・例文',
              translations: { en: 'Readings & Examples' },
              items: [{ autogenerate: { directory: 'old-egyptian/readings' } }],
            },
          ],
        },
        {
          label: 'ヒッタイト語',
          translations: { en: 'Hittite' },
          items: [
            {
              label: '文字と音韻',
              translations: { en: 'Script & Phonology' },
              items: [{ autogenerate: { directory: 'hittite/script-and-phonology' } }],
            },
            {
              label: '基礎文法',
              translations: { en: 'Basic Grammar' },
              items: [{ autogenerate: { directory: 'hittite/grammar' } }],
            },
            {
              label: '読解・例文',
              translations: { en: 'Readings & Examples' },
              items: [{ autogenerate: { directory: 'hittite/readings' } }],
            },
          ],
        },
      ],
    }),
  ],
});
