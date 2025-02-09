import { Page, Locator, expect } from "@playwright/test";
import { BaseContextMenu } from "./base";

export class EmailContextMenu extends BaseContextMenu {
    constructor(page: Page) {
        super(page);
    }
}