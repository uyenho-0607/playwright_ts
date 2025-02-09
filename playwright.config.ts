import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';


dotenv.config();
// // Read from ".env" file.
// dotenv.config({ path: path.resolve(__dirname, '.env') });

// // Alternatively, read from "../my.env" file.
// dotenv.config({ path: path.resolve(__dirname, '..', 'my.env') });

export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: "http://staging.example.test/", // process.env.STAGING === '1' ? 'http://staging.example.test/' : 'http://example.test/',
    // storageState: 'state.json',
    colorScheme: 'dark', // supported values: light & dark
    viewport: { width: 1280, height: 720 },
    trace: 'on-first-retry',
    // Other Options
    // actionTimeout: 10_000, // milliseconds
    browserName: 'chromium', // chromium, firefox, or webkit
    channel: 'chrome',
    headless: false,
  },
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'
    },
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or 'msedge-dev'
    // },
  ],
  outputDir: 'test-results',
//   globalSetup: require.resolve('./global-setup'),
//   globalTeardown: require.resolve('./global-teardown'),
  timeout: 300000,
  globalTimeout: 3_600_000,
  // Expect Options
  expect: {
    timeout: 10000,
    },
});
