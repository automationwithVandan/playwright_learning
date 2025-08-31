// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './testcases_website_10',
  timeout: 40*1000,
  expect :{
    timeout: 5*1000,
  },
  reporter:'html',
  use: {
    browserName:'chromium'
  }, 
});
module.exports=config;



