import { Page, Locator, expect } from "@playwright/test";

export class Popup {
  constructor(protected readonly page: Page) {
    this.page = page;
  }

}
