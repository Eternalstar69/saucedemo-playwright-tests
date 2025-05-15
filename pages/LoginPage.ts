import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // goto login pages
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // put username + password then login
  async login(username: string, password: string) {
    await this.page.fill('[data-test="username"]', username);
    await this.page.fill('[data-test="password"]', password);
    await this.page.click('[data-test="login-button"]');
  }

  // check whether error message appear or not
  async assertErrorMessage() {
    await expect(this.page.locator('[data-test="error"]')).toBeVisible();
  }
}
