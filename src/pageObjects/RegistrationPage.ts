import BasePage from './BasePage';
import {Locator, Page} from '@playwright/test';
import LoginPage from './LoginPage';

export default class RegistrationPage extends BasePage {
  protected readonly loginButton: Locator;

  constructor(page: Page) {
    super(page, '/registration');
    this.loginButton = page.getByRole('link', {name: 'Login'});
  }

  async openLoginPage() {
    await this.loginButton.click();
    return new LoginPage(this.page);
  }
}
