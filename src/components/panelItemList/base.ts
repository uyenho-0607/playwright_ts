import { Page, Locator, expect } from "@playwright/test";

export class BaseItemList {
    constructor(protected readonly page: Page) {
        this.page = page;
    }
}