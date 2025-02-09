import { Page, Locator, expect } from "@playwright/test";
import { BaseItemList } from "./base";
import { NoteContextMenu } from "../contextMenu/notes";

export class NoteItemList extends BaseItemList {
    contextMenu: NoteContextMenu;

    constructor(page: Page) {
        super(page);
        this.contextMenu = new NoteContextMenu(this.page);
    }
}