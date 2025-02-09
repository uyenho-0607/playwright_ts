import { Locator, Page, expect } from "@playwright/test";
// import { KanbanList } from "../../enums";

export class BaseKanban {
  protected kanbanName: string;

  constructor(protected readonly page: Page, kanbanName: string) {
    this.page = page;
    this.kanbanName = kanbanName;
  }

  protected get kanbanListDropdown(): Locator {
    return this.page.locator(
      `//label[contains(text(), "${this.kanbanName}")]/../following-sibling::kanban-list-dropdown`
    );
  }

  protected kanbanCard(kanbanCardName: string): Locator {
    return this.page.locator(
      `//label[contains(text(), "${this.kanbanName}")]/ancestor::div[contains(@class, "kb-panel")]//span[contains(@class, "kb-card-main-info") and contains(text(), "${kanbanCardName}")]`
    );
  }

  protected kanbanListPnl(kanbanName: string) {
    return this.page.locator(`//span[./label[text()="${kanbanName}"] and ./preceding-sibling::i]`);
  }

  // public async waitForKanbanListVisible(kanbanName?: string): Promise<void> {
  //   kanbanName = kanbanName ? kanbanName : this.kanbanName;
  //   await this.kanbanListPnl(kanbanName).waitFor({ state: "visible", timeout: LONG_TIMEOUT })
  // }

  // public async verifyKanbanListIsVisible(kanbanName?: string): Promise<void> {
  //   kanbanName = kanbanName ? kanbanName : this.kanbanName;
  //   await expect.soft(this.kanbanListPnl(kanbanName)).toBeVisible({ timeout: LONG_TIMEOUT });
  // }
}
