import { Page, Locator, expect } from "@playwright/test";
import { BaseItemList } from "./base";
import { EmailContextMenu } from "../contextMenu/email";

export class EmailItemList extends BaseItemList {
    contextMenu: EmailContextMenu;
    constructor(page: Page) {
        super(page);
        this.contextMenu = new EmailContextMenu(this.page);
    }
}