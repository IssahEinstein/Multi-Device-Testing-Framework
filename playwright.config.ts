import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  expect: {
    timeout: 5000
  },

  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry'
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
    },
    {
      name: 'Samsung s8',
      use: { ...devices['Samsung s8'] }
    }
  ]
});