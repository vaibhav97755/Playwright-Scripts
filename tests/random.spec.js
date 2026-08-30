import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('feature-branch-123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Performance' }).click();
  await page.getByRole('link', { name: 'Time' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Kirubakaran Loganathan' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});
