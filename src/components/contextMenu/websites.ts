import { Page, Locator, expect } from "@playwright/test";
import { BaseContextMenu } from "./base";

export class WebsiteContextMenu extends BaseContextMenu {
    constructor(page: Page) {
        super(page);
    }

}