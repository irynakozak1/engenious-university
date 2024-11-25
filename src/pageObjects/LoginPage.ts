import BasePage from './BasePage';
import {Locator, Page} from '@playwright/test';

export default class LoginPage extends BasePage {
  public readonly emailInput: Locator;
  public readonly passwordInput: Locator;
  public readonly loginButton: Locator;

  constructor(page: Page) {
    super(page, '/login');
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', {name: 'Login', exact: true});
  }
}
