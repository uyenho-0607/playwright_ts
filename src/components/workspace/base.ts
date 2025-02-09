import { Page, Locator, expect } from "@playwright/test";

export class BaseWorkspace{
    constructor(protected readonly  page: Page) {
        this.page = page;
    }
}