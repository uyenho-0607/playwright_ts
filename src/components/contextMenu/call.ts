import { Page, Locator, expect } from "@playwright/test";
import { BaseContextMenu } from "./base";

export class CallContextMenu extends BaseContextMenu {
    constructor(page: Page) {
        super(page);
    }

}