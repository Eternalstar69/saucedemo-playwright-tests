# SauceDemo Web Automation Testing

Automated end-to-end tests for the [SauceDemo](https://www.saucedemo.com/) web application using Playwright with TypeScript.  
This intern exam follows the Page Object Model (POM) design pattern to ensure clean, maintainable, and scalable test code.

 Setup Instructions
 ---
 1. Clone this repository 
```
git clone https://github.com/Eternalstar69/saucedemo-playwright-tests.git 
```
 2. Navigate to the project directory 
```
cd saucedemo-playwright-tests
```
 3. Install project dependencies
```
npm install
```
 Project Structure
---

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

 How to Run Tests

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
  1.Login Test

  - Verify successful login with valid credentials.
    
  - Verify error message is displayed with invalid credentials.

  2.End-to-End Purchase Test
  
  - Login with valid credentials.

  - Add a product to the cart.

  - Complete the checkout process.

  - Verify the "Thank you for your order!" message is displayed on the confirmation page.
    
---

Design Decisions
---
=> Page Object Model (POM)
All page elements and actions are separated into individual classes under the pages/ directory.
This improves code readability, maintainability, and makes it easier to scale the test framework.

Test Configuration
---

=> Configured testDir and testMatch in playwright.config.ts to locate test files with .test.ts and .spec.ts extensions.

=> Enabled parallel execution (fullyParallel: true) to reduce test execution time.

=> Configured html reporter for clean and visual test result reporting.

Test Structure
---

=> All test scenarios are organized inside the tests/ directory.

=> Clear separation between test logic and page element locators/actions via the POM structure.

Dependencies
---

-> Playwright

-> TypeScript

Notes
** Test credentials are available directly on the SauceDemo login page.
** All users use the same password: secret_sauce.
-----

Author :
---
Theratep Krataytong
