// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.PlaywrightDevPage = class PlaywrightDevPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.getStartedLink = page.locator('text=Get started');
    this.coreConceptsLink = page.locator('text=Core concepts');
    this.tocList = page.locator('article ul > li > a');
  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.coreConceptsLink).toBeVisible();
  }

  async coreConcepts() {
    await this.getStarted();
    await this.page.click('text=Guides');
    await this.coreConceptsLink.click();
    await expect(this.page.locator('h1').locator("text=Core concepts")).toBeVisible();
  }
}