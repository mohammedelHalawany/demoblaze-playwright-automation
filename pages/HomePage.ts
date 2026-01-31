import { Page, Locator } from '@playwright/test';
import { HomePageLocators } from '../locators/HomePageLocators';

export class HomePage {
  page: Page;
  signUpBtn: Locator;
  loginBtn: Locator;
  logoutBtn: Locator;
  welcomeMessage: Locator;
  homePageUrl: string = 'https://www.demoblaze.com/';

  constructor(page: Page) {
    this.page = page;
    this.signUpBtn = page.locator(HomePageLocators.signUpBtn);
    this.loginBtn = page.locator(HomePageLocators.loginBtn);
    this.logoutBtn = page.locator(HomePageLocators.logoutBtn);
    this.welcomeMessage = page.locator(HomePageLocators.welcomeMessage);
  }

  async open() {
    await this.page.goto(this.homePageUrl);
  }

  async clickSignUp() {
    await this.signUpBtn.click();
  }

  async clickLogin() {
    await this.loginBtn.click();
  }

  async logout() {
    await this.logoutBtn.click();
  }

}
