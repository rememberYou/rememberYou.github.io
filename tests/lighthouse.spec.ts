// Lighthouse budgets, on its own project that runs after the other tests, so
// nothing else competes for the CPU while performance is measured.
import { chromium, expect, test } from '@playwright/test';
import lighthouse from 'lighthouse';
import desktopConfig from 'lighthouse/core/config/desktop-config.js';

const port = 9339;
const runs = 3;

test('meets the Lighthouse budgets', async ({ baseURL }) => {
  test.setTimeout(180_000);
  const browser = await chromium.launch({ args: [`--remote-debugging-port=${port}`] });
  try {
    const reports = [];
    for (let run = 0; run < runs; run++) {
      const result = await lighthouse(
        `${baseURL}/`,
        { port, output: 'json', logLevel: 'error' },
        desktopConfig,
      );
      reports.push(result!.lhr);
    }

    // Performance varies from run to run; the median is what a visitor gets.
    const performance = reports.map((lhr) => lhr.categories.performance!.score!).sort()[1];
    const [lhr] = reports;
    const scores = {
      performance,
      accessibility: lhr.categories.accessibility!.score,
      'best-practices': lhr.categories['best-practices']!.score,
      seo: lhr.categories.seo!.score,
    };
    await test.info().attach('scores', { body: JSON.stringify(scores, null, 2) });

    expect(scores.performance).toBeGreaterThanOrEqual(0.95);
    expect(scores.accessibility).toBe(1);
    expect(scores['best-practices']).toBe(1);
    expect(scores.seo).toBe(1);
    expect(lhr.audits['cumulative-layout-shift']!.numericValue).toBeLessThanOrEqual(0.01);
    // The whole page, fonts and images included.
    expect(lhr.audits['total-byte-weight']!.numericValue).toBeLessThanOrEqual(250_000);
  } finally {
    await browser.close();
  }
});
