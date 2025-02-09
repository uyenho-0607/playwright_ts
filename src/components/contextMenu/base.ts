import { Page, Locator, expect } from "@playwright/test";

export class BaseContextMenu {
  constructor(protected readonly page: Page) {
    this.page = page;
  }
  // ------ Locators ------
  protected contextMenu(option: string): Locator {
    return this.page.locator(
      `//ul[contains(@class, 'context-menu')]//a[translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')="${option}"]`
    );
  }

  private get open(): Locator {
    return this.contextMenu("Open");
  }


  // ------ Methods ------

  public async selectOpen(): Promise<void> {
    await this.open.click();
  }
}
