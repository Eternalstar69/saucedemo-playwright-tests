# SauceDemo Web Automation Testing

Automated end-to-end tests for the [SauceDemo](https://www.saucedemo.com/) web application using Playwright with TypeScript.  
This project follows the Page Object Model (POM) design pattern to ensure clean, maintainable, and scalable test code.

## Project Structure

WEB AUTOMATION TESTING WITH PLAYWRIGHT/
```
├── playwright.config.ts        # Playwright configuration file
├── package.json                # Project dependencies
├── pages/                      # Page Object Model classes for each page
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── CheckoutViewPage.ts
│   ├── ConfirmationPage.ts
│   ├── LoginPage.ts
│   └── ProductsPage.ts
├── tests/                      # Test specifications
│   ├── login.test.ts
│   └── purchase.spec.ts
└── README.md                   # Project documentation
```

## How to Run Tests

1. Install project dependencies:
```bash
npm install
```
2. Install Playwright browsers:
```bash
npx playwright install
```
3. Run all tests:
```bash
npx playwright test
```
4. Run a specific test file:
```bash
npx playwright test tests/purchase.spec.ts
```
5. View the latest HTML test report:
```bash
npx playwright show-report
```

Test Scenarios
Login Test
1. Verify successful login with valid credentials.
2. Verify error message is displayed with invalid credentials.

End-to-End Purchase Test
1. Login with valid credentials.

2. Add a product to the cart.

3. Complete the checkout process.

4. Verify the "Thank you for your order!" message is displayed on the confirmation page.

Design Decisions
=> Page Object Model (POM)
All page elements and actions are separated into individual classes under the pages/ directory.
This improves code readability, maintainability, and makes it easier to scale the test framework.

=>Test Configuration

Configured testDir and testMatch in playwright.config.ts to locate test files with .test.ts and .spec.ts extensions.

Enabled parallel execution (fullyParallel: true) to reduce test execution time.

Configured html reporter for clean and visual test result reporting.

=>Test Structure

All test scenarios are organized inside the tests/ directory.

Clear separation between test logic and page element locators/actions via the POM structure.

Dependencies
-Playwright
-TypeScript

Notes
** Test credentials are available directly on the SauceDemo login page.
** All users use the same password: secret_sauce.
Author
Theratep Krataytong
