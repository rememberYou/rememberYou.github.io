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
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `npm run preview -- --port ${port} --ignore-lock`,
    url: `http://localhost:${port}`,
    reuseExistingServer: !process.env.CI,
  },
});
