import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://rememberyou.github.io',
  build: {
    // One page: its CSS is small enough to inline, which removes a
    // render-blocking request.
    inlineStylesheets: 'always',
  },
  // Fonts are served from this site, from the pinned @fontsource packages: no
  // request to a third party, and Astro generates metric-matched fallbacks so
  // the page does not shift when they load. Latin only: the site is in English.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Cinzel Decorative',
      cssVariable: '--font-name',
      fallbacks: ['serif'],
      // The name is a logotype: drawn in a substitute font it reads as another
      // word (Cinzel has only capitals). It waits for its font, preloaded and
      // a few kilobytes, instead of swapping; the body text still swaps.
      display: 'block',
      options: {
        variants: [
          {
            src: ['@fontsource/cinzel-decorative/files/cinzel-decorative-latin-400-normal.woff2'],
            weight: 400,
            style: 'normal',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-title',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: [
              '@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2',
            ],
            weight: '200 800',
            style: 'normal',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-body',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/inter/files/inter-latin-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
