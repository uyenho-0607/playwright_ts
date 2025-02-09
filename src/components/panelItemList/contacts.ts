import { Page, Locator, expect } from "@playwright/test";
import { BaseItemList } from "./base";
import { ContactContextMenu } from "../contextMenu/contacts";

export class ContactItemList extends BaseItemList {
    contextMenu: ContactContextMenu; 

    constructor(page: Page) {
        super(page);
        this.contextMenu = new ContactContextMenu(this.page);
    }
}