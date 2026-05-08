import { test, expect } from './fixtures/testBase.js';
import { users } from '../data/users.js';

test('standard user login flow', async ({ page, loginPage }) => {

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await expect(page.locator('.title')).toHaveText('Products');
});