import { Page, Locator, expect } from "@playwright/test";
import { BaseSetting } from "./base";

export class CallSetting extends BaseSetting {
    constructor(page: Page) {
        super(page);
    }
}