import { Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async addItemToCart(itemName: string) {
    //  add to cart has id on item
    await this.page.click(`button[id="add-to-cart-${itemName}"]`);
  }
  async gotoCart() {
    await this.page.click('.shopping_cart_link');
  }
}
