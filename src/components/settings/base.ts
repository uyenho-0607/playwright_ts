import { Page, Locator, expect } from "@playwright/test";

export class BaseSetting {
    constructor(protected readonly page: Page) {
        this.page = page;
    }
}