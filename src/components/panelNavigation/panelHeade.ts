import { Page, Locator, expect } from "@playwright/test";

export class PanelHeader {
    constructor(protected readonly page: Page) {
        this.page = page;
    }
}