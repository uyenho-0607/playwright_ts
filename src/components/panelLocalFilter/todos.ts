import { Page, Locator, expect } from "@playwright/test"
import { BaseLocalFilter } from "./base";

export class TodoLocalFilter extends BaseLocalFilter {
    constructor(page: Page) {
        super(page);
    }
}