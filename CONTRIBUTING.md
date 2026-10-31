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
3. Before pushing: `npm run format`, then `npm run build && npm test`.
   The first time, `npx playwright install chromium webkit` downloads the test
   browsers: Chrome, and Safari's engine.
4. Open a pull request into `develop`. CI runs the same checks; it must pass.
5. To publish, merge `develop` into `main`. `deploy.yml` builds and deploys.

## Standards the checks hold

| Check                              | Budget                          | Where                      |
| ---------------------------------- | ------------------------------- | -------------------------- |
| Formatting                         | Prettier, no diff               | `npm run format`           |
| Types                              | `astro check`, strict, 0 errors | `npm run build`            |
| Browser tests (Chrome, Safari)     | All pass                        | `tests/`                   |
| Lighthouse performance             | ≥ 95                            | `tests/lighthouse.spec.ts` |
| Accessibility, best practices, SEO | 100                             | `tests/lighthouse.spec.ts` |
| Layout shift (CLS)                 | ≤ 0.01                          | `tests/lighthouse.spec.ts` |
| Page weight                        | ≤ 250 KB                        | `tests/lighthouse.spec.ts` |

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

Dependencies update themselves; nobody has to accept a pull request.

- Every Monday, Dependabot opens, against `main` and with releases at least
  14 days old (`cooldown` in `.github/dependabot.yml`), one grouped pull
  request for the minor and patch updates of npm and one of GitHub Actions,
  and one pull request per major update. Security fixes come as soon as they
  are published.
- CI runs on each: format, types, build, browser tests, Lighthouse budgets.
- If CI passes, `dependabot-merge.yml` merges it, deploys, and merges `main`
  back into `develop`.
- If CI fails, the pull request stays open, nothing ships, and a comment
  notifies the owner. A major that is not supported yet by another package
  usually passes on its own later: Dependabot rebases it as the rest updates.
- Node is not covered by Dependabot. On the 1st of each month, `node-lts.yml`
  moves `.nvmrc` to the newest Node LTS that has been LTS for 14 days, if CI
  passes on it, then deploys.
- Every version is exact (`.npmrc` sets `save-exact`), in `package.json` and in
  workflows (`actions/checkout@v7.0.1`, not `@v7`).

## Commits

`type(scope): subject`, imperative, lower case, no final full stop.
Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`.
