// What must hold for every visitor, whatever the content: the page renders
// without errors, every image and internal link works, nothing overflows on a
// phone, the theme follows the clock, and the page reads without JavaScript.
// Content itself lives in src/data/profile.ts and is checked by its types.
import { expect, test, type Page } from '@playwright/test';

const sections = ['expertise', 'experience', 'certifications', 'research', 'contact'];

/** Scrolls to the bottom, so every block is revealed and every lazy image loads. */
async function scrollThrough(page: Page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight / 2) {
      // Instant: the page scrolls smoothly, which would never reach the end.
      window.scrollTo({ top: y, behavior: 'instant' });
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  });
}

test('renders every section without errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });

  await page.goto('/');
  await scrollThrough(page);

  await expect(page.locator('h1')).toHaveText(/Terencio\s+Agozzino/, { useInnerText: true });
  for (const id of sections) {
    await expect(page.locator(`#${id} h2`)).toBeVisible();
  }
  await expect(page.locator('.employer').first()).toBeVisible();
  expect(errors).toEqual([]);
});

test('never draws the name in a substitute font', async ({ page }) => {
  await page.goto('/');
  // block: the name waits for Cinzel, preloaded, rather than showing in Times.
  const display = await page.evaluate(() =>
    [...document.fonts]
      .filter(({ family }) => family.includes('Cinzel') && !family.includes('fallback'))
      .map((font) => font.display),
  );
  expect(display).toEqual(['block']);
});

test('loads every image', async ({ page }) => {
  await page.goto('/');
  await scrollThrough(page);
  await page.waitForLoadState('networkidle');

  const broken = await page.evaluate(() =>
    [...document.images].filter((img) => !img.complete || !img.naturalWidth).map((img) => img.src),
  );
  expect(broken).toEqual([]);
});

test('serves the CV, the thesis and the icons', async ({ request }) => {
  const files = {
    '/terencio-agozzino-cv.pdf': 'application/pdf',
    '/terencio-agozzino-master-thesis.pdf': 'application/pdf',
    '/favicon.svg': 'image/svg+xml',
    '/favicon.ico': 'image/',
    '/apple-touch-icon.png': 'image/png',
  };
  for (const [path, type] of Object.entries(files)) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    expect(response.headers()['content-type'], path).toContain(type);
  }
});

test('links only to anchors that exist, and to secure sites', async ({ page }) => {
  await page.goto('/');
  const hrefs = await page
    .locator('a[href]')
    .evaluateAll((links) => links.map((link) => link.getAttribute('href') ?? ''));

  for (const href of hrefs.filter((href) => href.startsWith('#'))) {
    await expect(page.locator(href), href).toHaveCount(1);
  }
  const external = hrefs.filter((href) => /^[a-z]+:/i.test(href) && !href.startsWith('mailto:'));
  expect(external.filter((href) => !href.startsWith('https://'))).toEqual([]);
  await expect(page.locator('#contact a[href^="mailto:"]')).toHaveCount(1);
});

for (const width of [320, 390, 600, 768, 1280]) {
  test(`fits a ${width}px screen, centred`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await scrollThrough(page);

    const layout = await page.evaluate(() => {
      const viewport = document.documentElement.clientWidth;
      const gutters = [...document.querySelectorAll('.wrap')].map((wrap) => {
        const box = wrap.getBoundingClientRect();
        return Math.round(box.left) - Math.round(viewport - box.right);
      });
      // Logos differ in height: one row is the logos whose centres are close.
      const rows: { middle: number; count: number }[] = [];
      for (const logo of document.querySelectorAll('.logos li')) {
        const box = logo.getBoundingClientRect();
        const middle = box.top + box.height / 2;
        const row = rows.find((row) => Math.abs(row.middle - middle) < 12);
        if (row) row.count += 1;
        else rows.push({ middle, count: 1 });
      }
      return {
        viewport,
        scroll: document.documentElement.scrollWidth,
        gutters,
        logosPerRow: rows.map(({ count }) => count),
      };
    });
    expect(layout.scroll).toBe(layout.viewport);
    // Every block has the same space on its left as on its right.
    expect(new Set(layout.gutters)).toEqual(new Set([0]));
    // Full rows of logos: none left alone at the end.
    expect(new Set(layout.logosPerRow).size).toBe(1);
  });
}

for (const width of [600, 900]) {
  test(`centres the stacked hero's text above the photo at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');

    // The centre of what is drawn, not of the box: a left-aligned line in a
    // full-width box would pass otherwise.
    const centres = await page.evaluate(() => {
      const centre = (el: Element) => {
        const range = document.createRange();
        range.selectNodeContents(el);
        const box = range.getBoundingClientRect();
        return Math.round(box.left + box.width / 2);
      };
      const hero = ['h1', '.role', '.pitch', '.actions', '.photo-wrap'];
      return hero.map((selector) => centre(document.querySelector(`#top ${selector}`)!));
    });
    const photo = centres.at(-1)!;
    for (const centre of centres) {
      expect(Math.abs(centre - photo)).toBeLessThanOrEqual(2);
    }
  });
}

const themes = [
  { at: '2026-10-15T10:00:00+02:00', season: 'autumn', time: 'day', bg: '#f4f0e2' },
  { at: '2026-10-15T22:00:00+02:00', season: 'autumn', time: 'evening', bg: '#1d1712' },
  { at: '2027-01-15T10:00:00+01:00', season: 'winter', time: 'day', bg: '#ece8da' },
  { at: '2027-01-15T22:00:00+01:00', season: 'winter', time: 'evening', bg: '#11172a' },
  // Day and evening follow the sun in Brussels, not fixed hours: dark soon
  // after a 17:20 sunset in autumn, still light at 21:30 in June.
  { at: '2026-10-31T17:45:00+01:00', season: 'autumn', time: 'evening', bg: '#1d1712' },
  { at: '2026-06-21T21:30:00+02:00', season: 'autumn', time: 'day', bg: '#f4f0e2' },
  { at: '2026-12-21T08:15:00+01:00', season: 'winter', time: 'evening', bg: '#11172a' },
];

for (const { at, season, time, bg } of themes) {
  test(`picks the ${season} ${time} theme at ${at}`, async ({ page }) => {
    await page.clock.setFixedTime(new Date(at));
    await page.goto('/');

    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-season', season);
    await expect(html).toHaveAttribute('data-time', time);
    await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', bg);

    const [r, g, b] = [1, 3, 5].map((i) => parseInt(bg.slice(i, i + 2), 16));
    await expect(page.locator('body')).toHaveCSS('background-color', `rgb(${r}, ${g}, ${b})`);
  });
}

test('shows the name and the button in the navigation only once scrolled past', async ({
  page,
}) => {
  await page.goto('/');
  const name = page.locator('#nav .logo');
  const button = page.locator('#nav .small');
  await expect(name).toBeHidden();
  await expect(button).toBeHidden();

  await page.locator('#experience').scrollIntoViewIfNeeded();
  await expect(name).toBeVisible();
  await expect(button).toBeVisible();
});

test('counts the visit, and the CV, the thesis, an email and a link out', async ({ page }) => {
  // A stand-in for GoatCounter's script, which records what it is given.
  await page.route('https://gc.zgo.at/count.js', (route) =>
    route.fulfill({
      contentType: 'text/javascript',
      body: `window.counted = [location.pathname];
             window.goatcounter = { count: (vars) => window.counted.push(vars.path) };`,
    }),
  );
  // Clicks are counted, not followed.
  await page.route(/\.pdf$|linkedin\.com/, (route) => route.abort());
  await page.goto('/');
  await page.waitForFunction(() => 'goatcounter' in window);

  await page.evaluate(() => document.addEventListener('click', (event) => event.preventDefault()));
  await page.locator('#top a[download]').click();
  await page.locator(`#experience a[href$="master-thesis.pdf"]`).click();
  await page.locator('#contact a[href^="mailto:"]').click();
  await page.locator('#contact a[href*="linkedin.com"]').click();
  await page.locator('#top a[href="#contact"]').click();

  expect(await page.evaluate(() => (window as unknown as { counted: string[] }).counted)).toEqual([
    '/',
    'download terencio-agozzino-cv.pdf',
    'download terencio-agozzino-master-thesis.pdf',
    'email',
    'out www.linkedin.com/in/terencioagozzino',
  ]);
});

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('shows every block and the navigation', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#nav .logo')).toBeVisible();
    await expect(page.locator('#contact h2')).toBeVisible();
    await expect(page.locator('#contact h2')).toHaveCSS('opacity', '1');
  });
});

test.describe('with reduced motion', () => {
  test.use({ reducedMotion: 'reduce' });

  test('shows every block without waiting for an animation', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#contact h2')).toHaveCSS('opacity', '1');
    await expect(page.locator('#contact h2')).toHaveCSS('transform', 'none');
  });
});
