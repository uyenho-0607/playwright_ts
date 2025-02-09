

import { Page, Locator, expect } from "@playwright/test";
import { BaseKanban } from "./base";
import { KanbanList } from "../../enums";

export class NotificationsKanban extends BaseKanban{
    constructor(page: Page, kanbanName=KanbanList.Notifications) {
        super(page, kanbanName);
    }

    protected override get kanbanListDropdown(): Locator {
        return this.page.locator(`//label[contains(text(), "${this.kanbanName}")]/../following-sibling::kanban-list-dropdown//span[@class="icon-angle-down"]`);
    }

    private get kanbanListFilter(): Locator {
        return this.page.locator(`//label[contains(text(), "${this.kanbanName}")]/../following-sibling::kanban-list-dropdown//span[@class="xdd-close"]`);
    }


    protected override kanbanCard(kanbanCardName: string): Locator {
        return this.page.locator(`//label[contains(text(), "${this.kanbanName}")]/ancestor::div[contains(@class, "kb-panel")]//span[contains(text(), "${kanbanCardName}")]`);
    }
}