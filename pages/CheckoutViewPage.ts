import { Page } from '@playwright/test';

export class CheckoutViewPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async finishCheckout() {
    await this.page.click('#finish');
  }
}
