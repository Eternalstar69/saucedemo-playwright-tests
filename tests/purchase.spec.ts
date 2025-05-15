import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutViewPage } from '../pages/CheckoutViewPage';
import { ConfirmationPage } from '../pages/ConfirmationPage';

test('End-to-End Purchase Test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const overviewPage = new CheckoutViewPage(page);
  const confirmationPage = new ConfirmationPage(page);

  // 1. Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // 2. Add item to cart
  await productsPage.addItemToCart('sauce-labs-backpack');

  // 3. Go to cart and checkout
  await productsPage.gotoCart();
  await cartPage.checkout();

  // 4. Fill checkout info
  await checkoutPage.fillCheckoutInformation('John', 'Doe', '12345');
  await checkoutPage.continueCheckout();

  // 5. CheckoutView page - finish order
  await overviewPage.finishCheckout();

  // 6. Confirmation page - verify message
  await confirmationPage.verifyOrderComplete();
});
