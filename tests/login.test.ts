import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// test for successful login
test('Successful login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/.*inventory.html/);
});

// test login with wrongcase then  error message appear
test('Error message with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('invalid_user', 'invalid_pass');
  await loginPage.assertErrorMessage();
});
