import { Page, Locator } from '@playwright/test';
import { LoginPageLocators } from '../locators/LoginPageLocators'; 

export class LoginPage {
  page: Page;
  username: Locator;
  password: Locator;
  loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator(LoginPageLocators.usernameInput);
    this.password = page.locator(LoginPageLocators.passwordInput);
    this.loginBtn = page.locator(LoginPageLocators.loginButton);
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}
