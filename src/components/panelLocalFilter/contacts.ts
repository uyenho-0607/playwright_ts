import { Page, Locator, expect } from "@playwright/test"
import { BaseLocalFilter } from "./base";

export class ContactLocalFilter extends BaseLocalFilter {
    constructor(page: Page) {
        super(page);
    }
}