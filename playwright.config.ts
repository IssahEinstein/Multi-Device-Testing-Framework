import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  retries: 2,

  workers: 4,

  expect: {
    timeout: 5000
  },

  use: {
    baseURL: 'https://www.saucedemo.com',

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'desktop',
      use: {}
    },

    {
      name: 'iPhone 13',
      use: { ...devices['iPhone 13'] }
    },

    {
      name: 'Pixel 5',
      use: { ...devices['Pixel 5'] }
    }
  ]
});