import { Page, Locator, expect } from "@playwright/test"
import { BaseLocalFilter } from "./base";

export class EventLocalFilter extends BaseLocalFilter {
    constructor(page: Page) {
        super(page);
    }
}