# DemoBlaze Playwright Automation

A comprehensive test automation project for demoblaze.com using Playwright with TypeScript, implementing the Page Object Model (POM) design pattern.

## Project Overview

This project automates the following test scenarios for demoblaze.com:

1. **User Registration** - Register with valid data
2. **User Login** - Log in with valid credentials
3. **User Logout** - Log out from the system
4. **Order Creation** - Create an order for an Apple monitor 24

## Project Structure

```
├── locators/                 # Locator constants
│   ├── HomePageLocators.ts  # Home page selectors
│   ├── LoginPageLocators.ts # Login page selectors
│   ├── ProductPageLocators.ts # Product page selectors
│   └── RegisterPageLocators.ts # Register page selectors
├── pages/                    # Page Object Model classes
│   ├── HomePage.ts          # Home page object
│   ├── LoginPage.ts         # Login page object
│   ├── ProductPage.ts       # Product page object
│   └── RegisterPage.ts      # Register page object
├── tests/                    # Test specifications
│   └── demoblaze.spec.ts    # All test scenarios
├── eslint.config.mjs        # ESLint configuration
├── playwright.config.ts     # Playwright configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies
├── .gitignore               # Git ignore rules
└── README.md                # Project documentation
```

## Technologies Used

- **Playwright** - Modern web automation framework
- **TypeScript** - Strong typing for JavaScript
- **Node.js** - JavaScript runtime
- **ESLint** - Code quality and linting tool
- **Page Object Model (POM)** - Design pattern for test automation
- **Locator Pattern** - Separate locators from page objects for better maintainability

## Installation

### Prerequisites

- Node.js
- npm
### Steps

1. Clone the repository:
```bash
git clone https://github.com/mohammedelHalawany/demoblaze-playwright-automation.git
cd demoblaze-playwright-automation
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode with specific scenario
```bash
npx playwright test -g "Scenario 2: User can login" --headed
```

###Architecture

### Locator Pattern
All element selectors are centralized in separate locator files:
- **HomePageLocators** - Selectors for home page elements
- **LoginPageLocators** - Selectors for login modal elements
- **ProductPageLocators** - Selectors for product page elements
- **RegisterPageLocators** - Selectors for registration modal elements

### Page Object Model
Each page has its own class that uses the locators:
- **HomePage** - Main store page with navigation and user actions
- **LoginPage** - Login modal interactions
- **ProductPage** - Product selection and add to cart functionality
- **RegisterPage** - User registration functionality

### Benefits of this Architecture:
1. **Maintainability** - Update selectors in one place
2. **Reusability** - Locators can be shared across multiple pages/tests
3. **Readability** - Clear separation of concerns
4. **Type Safety** - Full TypeScript support with Locator types

## Test Features and debugging
 **Screenshot & Video Capture** - Automatic capture on failures
 **HTML Reports** - HTML report, detailed test execution reports
 **Trace Recording** - Full trace for debugging, Only on failure
 **Browser**: Chromium

