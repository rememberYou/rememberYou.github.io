# rememberyou.github.io

The personal website of Terencio Agozzino, Solutions Architect:
[rememberyou.github.io](https://rememberyou.github.io).

One page, built with [Astro](https://astro.build) into static HTML. No framework
runs in the browser: the only JavaScript picks the theme and fades sections in.

## Working on it

Node, the active LTS (see `.nvmrc`; it updates itself).

```bash
npm ci
npm run dev           # http://localhost:4321, reloads on save
npm run build         # type-checks, then builds into dist/
npm run preview       # serves dist/ as it will be deployed
npm run format        # Prettier, Astro files included
npm test              # browser tests, then Lighthouse budgets, on the last build
```

## Where things are

| Path                  | What it holds                                                         |
| --------------------- | --------------------------------------------------------------------- |
| `src/data/profile.ts` | **All the content**: experience, certifications, publications, links  |
| `src/components/`     | One component per section of the page                                 |
| `src/layouts/`        | The HTML shell: metadata, fonts, theme selection                      |
| `src/styles/`         | Design tokens for the four themes, and base styles                    |
| `src/assets/`         | Portrait, badges and logos; optimised at build time (AVIF, WebP)      |
| `public/`             | Files served as they are: favicons                                    |
| `.github/workflows/`  | `ci.yml` checks pull requests; `deploy.yml` publishes `main` to Pages |

To update the site, edit `src/data/profile.ts`. A new badge or logo goes in
`src/assets/` and is imported there.

## Design

The palette is an autumn / winter colour analysis. The page picks one of four
themes from the visitor's clock, before the first paint:

| Theme           | When                          | Background | Accent     |
| --------------- | ----------------------------- | ---------- | ---------- |
| Autumn, day     | April to November, 7:00–19:00 | cream      | terracotta |
| Autumn, evening | April to November, otherwise  | espresso   | terracotta |
| Winter, day     | December to March, 7:00–19:00 | ivory      | blackberry |
| Winter, evening | December to March, otherwise  | navy       | blackberry |

Every text colour meets WCAG AA (4.5:1) in every theme. Fonts: Cinzel Decorative
for the name only, Plus Jakarta Sans for headings, Inter for text; all three are
served from this site.

## Deployment

A push to `main` builds the site and publishes it with GitHub Actions
(`deploy.yml`). Work happens on `develop`; pull requests are checked by `ci.yml`.
Dependencies, and Node, update and deploy themselves once CI passes
(`dependabot-merge.yml`, `node-lts.yml`).

How to change the site, and the standards CI holds it to: [CONTRIBUTING.md](CONTRIBUTING.md).
