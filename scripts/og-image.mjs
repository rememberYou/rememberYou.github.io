// Draws the image shown when the site is shared (LinkedIn, Slack, WhatsApp…):
// 1200×630, as the hero looks by day, with the site's own fonts. Run it again
// after a change to the name, the role or the photo:
//   npm run og-image
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

import { chromium } from '@playwright/test';

const require = createRequire(import.meta.url);
const asDataUrl = (path, type) => `data:${type};base64,${readFileSync(path).toString('base64')}`;
const font = (pkg) => asDataUrl(require.resolve(pkg), 'font/woff2');

const html = `<!doctype html>
<style>
  @font-face { font-family: Name; src: url(${font('@fontsource/cinzel-decorative/files/cinzel-decorative-latin-400-normal.woff2')}); }
  @font-face { font-family: Title; font-weight: 200 800; src: url(${font('@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2')}); }
  @font-face { font-family: Body; font-weight: 100 900; src: url(${font('@fontsource-variable/inter/files/inter-latin-wght-normal.woff2')}); }
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; padding: 0 80px;
    display: flex; align-items: center; justify-content: space-between; gap: 56px;
    background: #f4f0e2; color: #282019; font-family: Body;
    border-bottom: 12px solid #a3583e;
  }
  h1 { font: 400 76px/1.04 Name; letter-spacing: 1px; padding-left: 0.09em; }
  .role { margin-top: 26px; font: 600 28px Title; letter-spacing: -0.3px; white-space: nowrap; }
  .role span { color: #a3583e; }
  .site { margin-top: 30px; font: 500 22px Body; color: #585042; }
  img { width: 380px; height: 380px; border-radius: 36px; object-fit: cover; flex: none;
        box-shadow: 0 24px 48px -16px rgb(40 32 25 / 0.35); }
</style>
<div>
  <h1>Terencio<br>Agozzino</h1>
  <p class="role">Solutions Architect <span>|</span> AWS &amp; Azure Certified</p>
  <p class="site">rememberyou.github.io</p>
</div>
<img src="${asDataUrl('src/assets/portrait.png', 'image/png')}" alt="">`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'src/assets/og.png' });
await browser.close();
console.log('wrote src/assets/og.png');
