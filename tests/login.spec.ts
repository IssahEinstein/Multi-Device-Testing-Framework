import { test } from './fixtures/testBase.js';
import { users } from '../data/users.js';
import { InventoryPage } from '../pages/InventoryPage.js';

test('standard user login flow', async ({ loginPage, page }) => {
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();

  await loginPage.login(
    users.standard.username,
    users.standard.password
  );

  await inventoryPage.verifyLoaded();
});