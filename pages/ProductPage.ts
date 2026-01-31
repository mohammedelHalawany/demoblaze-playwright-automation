import { Locator, Page } from '@playwright/test';
import { ProductPageLocators } from '../locators/ProductPageLocators';

export class ProductPage {
  page: Page;
  monitorsCategory: Locator;
  appleMonitor: Locator;
  addToCartBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.monitorsCategory = page.getByText(ProductPageLocators.monitorCategory);
    this.appleMonitor = page.getByText(ProductPageLocators.appleMonitor);
    this.addToCartBtn = page.getByText(ProductPageLocators.addToCartButton);
  }

  async clickMonitorsCategory() {
    await this.monitorsCategory.click();
  }

  async selectAppleMonitor() {
    // First click on Monitors category to filter products
    await this.clickMonitorsCategory();
    
    // Then select Apple monitor 24
    await this.appleMonitor.click();
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }
}
