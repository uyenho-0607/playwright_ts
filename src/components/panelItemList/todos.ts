import { Page, Locator, expect } from "@playwright/test";
import { BaseItemList } from "./base";
import { TodoContextMenu } from "../contextMenu/todos";

export class TodoItemList extends BaseItemList {
    contextMenu: TodoContextMenu;

    constructor(page: Page) {
        super(page);
        this.contextMenu = new TodoContextMenu(this.page);
    }
}