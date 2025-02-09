import { Locator, Page } from 'playwright';
import { expect } from 'playwright/test';

export class TopNavbar {
    
    private readonly Topbar: Locator;
  
    constructor(protected readonly page: Page) {
    this.page = page;
    this.Topbar = this.page.locator("#tab-bar");
  }

  public async verifyLoginSuccess(): Promise<void> {
    await expect(this.Topbar).toBeVisible();
  }
}
