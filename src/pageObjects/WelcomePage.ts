import BasePage from './BasePage';
import {Page} from '@playwright/test';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';
import RegistrationPage from './RegistrationPage';

export class WelcomePage extends BasePage {
  public readonly header: Header;
  public readonly navigationMenu: NavigationMenu;

  constructor(page: Page) {
    super(page, '/');
    this.header = new Header(this.page);
    this.navigationMenu = new NavigationMenu(this.page);
  }

  async openRegistrationPage() {
    await this.header.signInButton.click();
    return new RegistrationPage(this.page);
  }
}
