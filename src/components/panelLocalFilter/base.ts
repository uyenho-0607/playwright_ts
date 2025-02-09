import {Page, Locator, expect } from "@playwright/test"

export class BaseLocalFilter {
    constructor(protected readonly page: Page) {
        this.page = page;
    }
}