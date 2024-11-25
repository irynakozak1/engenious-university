import {Page} from '@playwright/test';

export default class BaseComponent {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
