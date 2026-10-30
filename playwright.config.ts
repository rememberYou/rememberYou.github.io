// Browser tests against the built site (dist/), served by `astro preview`:
// what a visitor sees, not how the components are written.
import { defineConfig, devices } from '@playwright/test';

const port = 4329;

export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: {
    baseURL: `http://localhost:${port}`,
    // The theme follows the visitor's clock; tests that depend on it set both.
    timezoneId: 'Europe/Brussels',
    locale: 'en-GB',
  },
  // Every test in Chrome and in Safari's engine, which draws some things its
  // own way: it once cropped the name's T while it faded in.
  projects: [
    {
      name: 'chrome',
      testIgnore: 'lighthouse.spec.ts',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'safari',
      testIgnore: 'lighthouse.spec.ts',
      use: { ...devices['Desktop Safari'] },
    },
    // Last, alone: performance is not measured while other tests run.
    { name: 'lighthouse', testMatch: 'lighthouse.spec.ts', dependencies: ['chrome', 'safari'] },
  ],
  webServer: {
    command: `npm run preview -- --port ${port} --ignore-lock`,
    url: `http://localhost:${port}`,
    reuseExistingServer: !process.env.CI,
  },
});
