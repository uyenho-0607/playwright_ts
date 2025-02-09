import { Page, Locator, expect } from "@playwright/test";

export class PanelFooter {
    constructor(protected readonly page: Page) {
        this.page = page;
    }
}