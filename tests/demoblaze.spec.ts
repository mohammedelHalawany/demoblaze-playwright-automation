import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';

test.describe('Demoblaze Automation', () => {

  const username = `halawany`;
  const password = 'password123';

  test('Scenario 1: User can register', async ({ page }) => {
    const home = new HomePage(page);
    const register = new RegisterPage(page);

    await home.open();
    await home.clickSignUp();
    await register.register(username, password);

    page.on('dialog', dialog => dialog.accept());
  });

  test('Scenario 2: User can login', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);

    await home.open();
    await home.clickLogin();
    await login.login(username, password);

    // Assert welcome message is visible
    await expect(home.welcomeMessage).toBeVisible();

  });

  test('Scenario 3: User can logout', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);


    await home.open();
    await home.clickLogin();
    await login.login(username, password);
    await home.logout();

    await expect(page.locator('#login2')).toBeVisible();
  });

  test('Scenario 4: Create order for Apple Monitor 24', async ({ page }) => {
  const product = new ProductPage(page);
  const home = new HomePage(page);
  const login = new LoginPage(page);

  await home.open();
  await home.clickLogin();
  await login.login(username, password);
  await product.selectAppleMonitor();

  const [dialog] = await Promise.all([
  page.waitForEvent('dialog'),
  product.addToCart()
    ]);

  expect(dialog.message()).toBe('Product added.');
  await dialog.accept();
});

});
