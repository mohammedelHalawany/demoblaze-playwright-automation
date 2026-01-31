import { Page, Locator } from '@playwright/test';
import { RegisterPageLocators } from  '../locators/RegisterPageLocators';

export class RegisterPage {
  page: Page;
  username: Locator;
  password: Locator;
  submitBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator(RegisterPageLocators.usernameInput);
    this.password = page.locator(RegisterPageLocators.passwordInput);
    this.submitBtn = page.locator(RegisterPageLocators.registerButton);
  }

  async register(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.submitBtn.click();
  }
}
