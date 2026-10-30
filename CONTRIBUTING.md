# Contributing

How this site is changed, so that it stays fast, accessible and current.

## Changing the content

Everything the page says is in `src/data/profile.ts`. Components lay it out
and hold no text of their own, except section headings.

- A new job goes at the top of `experience`.
- A new certification goes in its tier in `certifications`, with its badge
  in `src/assets/badges/` (the Credly image, 240 px is enough).
- A new company logo goes in `src/assets/logos/`, as SVG when one exists.

## Making a change

1. Branch from `develop`.
2. Run `npm run dev` and check the page in a light and a dark theme: the
   theme follows the clock, so change the hour, or set `data-season` and
   `data-time` on `<html>` in the browser's inspector.
3. Before pushing: `npm run format`, then `npm run build && npm run lighthouse`.
4. Open a pull request into `develop`. CI runs the same checks; it must pass.
5. To publish, merge `develop` into `master`. `deploy.yml` builds and deploys.

## Standards the checks hold

| Check                              | Budget                          | Where               |
| ---------------------------------- | ------------------------------- | ------------------- |
| Formatting                         | Prettier, no diff               | `npm run format`    |
| Types                              | `astro check`, strict, 0 errors | `npm run build`     |
| Lighthouse performance             | ≥ 95                            | `lighthouserc.json` |
| Accessibility, best practices, SEO | 100                             | `lighthouserc.json` |
| Layout shift (CLS)                 | ≤ 0.01                          | `lighthouserc.json` |
| Page weight                        | ≤ 250 KB                        | `lighthouserc.json` |

Text colours must meet WCAG AA (4.5:1) in all four themes: a new colour is
checked against every background it sits on.

## Style

- Astro components, one per section, with scoped styles. Global tokens and
  base styles live in `src/styles/global.css`; no colour is written outside it.
- TypeScript strict. Data shapes are typed in `src/data/profile.ts`.
- Comments say why, not what. A file opens with what it is for when that is
  not obvious from its name.
- Images go through `astro:assets` (`<Image>`, `<Picture>`), never as raw
  `<img src>` from `public/`, so they are resized and converted.
- No JavaScript for what CSS can do. The page must read correctly without
  JavaScript.

## Dependencies

- Every version is exact (`.npmrc` sets `save-exact`), in `package.json` and
  in workflows (`actions/checkout@v4.2.2`, not `@v4`).
- Only stable releases at least two weeks old. Dependabot enforces it with a
  14-day `cooldown`.
- Dependabot opens one grouped pull request a month for npm and one for
  GitHub Actions, into `develop`. Merge it when CI is green.
- Node follows the active LTS (`.nvmrc`).

## Commits

`type(scope): subject`, imperative, lower case, no final full stop.
Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`.
