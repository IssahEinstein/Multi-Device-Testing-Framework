// import { expect } from '@playwright/test';
// import type { Page } from '@playwright/test';
import { type Page, expect } from '@playwright/test';


export class InventoryPage {
  constructor(private page: Page) {}

  private title = '.title';

  async verifyLoaded() {
    await expect(this.page.locator(this.title)).toHaveText('Products');
  }
}