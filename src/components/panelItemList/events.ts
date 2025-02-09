import { Page, Locator, expect } from "@playwright/test";
import { BaseItemList } from "./base";
import { EventContextMenu } from "../contextMenu/events";

export class EventItemList extends BaseItemList {

    contextMenu: EventContextMenu;

    constructor(page: Page) {
        super(page);
        this.contextMenu = new EventContextMenu(this.page);
    }
}