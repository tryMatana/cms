/**
 * @note
 * - make sure local dev environment is ready (pnpm dev)
 */

import { test, expect } from '@playwright/test';

/** replace with env vars if needed */
const LOCAL_HOST_URL = 'http://localhost:3000/';
const APP_NAME = 'nextarter-chakra';
const USE_THIS_TEMPLATE_TEXT = 'Use This Template';
const OPEN_IN_GITHUB_TEXT = 'Open in Github';
const REPO_URL = `https://github.com/tryMatana/${APP_NAME}`;
const TEMPLATE_URL = `${REPO_URL}/generate`;

test('should shown home page', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(page.locator('h1')).toContainText(APP_NAME);
  await expect(
    page.locator('a', { hasText: USE_THIS_TEMPLATE_TEXT })
  ).toBeVisible();
  await expect(
    page.locator('a', { hasText: OPEN_IN_GITHUB_TEXT })
  ).toBeVisible();
});

test('click use this template should redirect to github generate project', async ({
  context,
  page,
}) => {
  await page.goto(LOCAL_HOST_URL);
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('a', { hasText: USE_THIS_TEMPLATE_TEXT }).click(), // Opens a new tab
  ]);

  await newPage.waitForLoadState();
  expect(newPage.url()).toBe(TEMPLATE_URL);
});

test('click use this template should redirect to github repo', async ({
  context,
  page,
}) => {
  await page.goto(LOCAL_HOST_URL);
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('a', { hasText: OPEN_IN_GITHUB_TEXT }).click(), // Opens a new tab
  ]);

  await newPage.waitForLoadState();
  expect(newPage.url()).toBe(REPO_URL);
});
