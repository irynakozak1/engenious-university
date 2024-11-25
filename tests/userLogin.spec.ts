import {test, expect} from '@playwright/test';
import {WelcomePage} from '../src/pageObjects/WelcomePage';
import {USERS} from '../src/data/users';

test.describe('Sign In', () => {
  test('User should be able to sign in with valid credentials', async ({page}) => {
    const welcomePage = new WelcomePage(page);
    await welcomePage.navigate();

    const registrationPage = await welcomePage.openRegistrationPage();
    const loginPage = await registrationPage.openLoginPage();
    await loginPage.emailInput.fill(USERS.IRYNA_KOZAK.email);
    await loginPage.passwordInput.fill(USERS.IRYNA_KOZAK.password);
    await loginPage.loginButton.click();

    await expect(page, 'User should be redirected to welcome page').toHaveURL('');

    await welcomePage.header.menuToggle.click();

    await expect(welcomePage.navigationMenu.userCard).toBeVisible();
    await expect(welcomePage.navigationMenu.userCard).toContainText('Iryna Kozak');
  });
});
