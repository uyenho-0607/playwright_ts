import { Page, Locator, expect } from "@playwright/test";
import { BaseItemList } from "./base";
import { WebsiteContextMenu } from "../contextMenu/websites";

export class WebsiteItemList extends BaseItemList {
    contextMenu: WebsiteContextMenu;

    constructor(page: Page) {
        super(page);
        this.contextMenu = new WebsiteContextMenu(this.page);
    }
}