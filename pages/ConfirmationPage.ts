import { Page, expect } from '@playwright/test';

export class ConfirmationPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async verifyOrderComplete() {
    await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
  }
}
