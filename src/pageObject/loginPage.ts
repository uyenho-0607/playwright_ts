import { Page, Locator } from '@playwright/test';

export class LoginPage {

  // ----- Locators ----- //
  private readonly usernameTxt: Locator;
  private readonly passwordTxt: Locator;
  private readonly loginBtn: Locator;

  constructor(protected readonly page: Page) {
    this.page = page;

    // ----- Locators ----- //
    this.usernameTxt = this.page.getByPlaceholder('Username');
    this.passwordTxt = this.page.getByPlaceholder('Password');
    this.loginBtn = this.page.getByRole('button', { name: 'Sign In' });
  }

  public async login(username: string, password: string): Promise<void> {
    await this.usernameTxt.fill(username);
    await this.passwordTxt.fill(password);
    await this.loginBtn.click();
  }
}
