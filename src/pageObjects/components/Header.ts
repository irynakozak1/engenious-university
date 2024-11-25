import BaseComponent from './BaseComponent';
import {Locator, Page} from '@playwright/test';

export default class Header extends BaseComponent {
  public readonly signInButton: Locator;
  public readonly menuToggle: Locator;

  constructor(page: Page) {
    super(page);
    this.signInButton = page.getByRole('button', {name: 'Sign in'});
    this.menuToggle = page.getByLabel('open drawer');
  }
}
