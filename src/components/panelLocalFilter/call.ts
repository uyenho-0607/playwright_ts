import { Page, Locator, expect } from "@playwright/test"
import { BaseLocalFilter } from "./base";

export class CallLocalFilter extends BaseLocalFilter {
    constructor(page: Page) {
        super(page);
    }
}