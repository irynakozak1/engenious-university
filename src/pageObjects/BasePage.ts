import {Page} from '@playwright/test';

export default class BasePage {
  protected readonly page: Page;
  private readonly url: string;

  constructor(page: Page, url: string) {
    this.page = page;
    this.url = url;
  }

  async navigate() {
    await this.page.goto(this.url);
  }
}
