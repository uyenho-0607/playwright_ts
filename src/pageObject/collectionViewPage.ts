import { Locator, Page, expect } from "@playwright/test";
import { MembersKanban } from "../components/kanbans/members";
import { NotificationsKanban } from "../components/kanbans/notifications";
import { SystemKanban } from "../components/kanbans/system";
import { KanbanSetting } from "../components/settings/kanbans";
import { KanbanList } from "../enums";
import { Chat } from "../components/chat";

export class CollectionViewPage {
    // Components
    setting: KanbanSetting;
    memberKanban: MembersKanban;
    notificationKanban: NotificationsKanban;
    todoKanban: SystemKanban;
    noteKanban: SystemKanban;
    eventKanban: SystemKanban;
    websiteKanban: SystemKanban;
    chat: Chat

    // Locators


    constructor(protected readonly page: Page) {
        this.page = page;
        this.memberKanban = new MembersKanban(this.page);
        this.notificationKanban = new NotificationsKanban(this.page);
        this.todoKanban = new SystemKanban(this.page, KanbanList.ToDos);
        this.noteKanban = new SystemKanban(this.page, KanbanList.Notes);
        this.eventKanban = new SystemKanban(this.page, KanbanList.Events);
        this.websiteKanban = new SystemKanban(this.page, KanbanList.Website);
        this.setting = new KanbanSetting(this.page);
        this.chat = new Chat(this.page);
    }

    // Locators
    public userKanban(kanbanName: string): SystemKanban {
        return new SystemKanban(this.page, kanbanName);
    }

    protected kanbanFooterChk(kanbanName: string) {
        return this.page.locator(`//label[text()="${kanbanName}" and ./preceding-sibling::input]`);
    }

    private collectionKanbanMode(collectionName: string): Locator {
        return this.page.locator(
            `//span[contains(@class, 'view-title')]//span[contains(text(), '${collectionName}')]`
        );
    }

    // Method

    public async isCollectionKanbanModeVisible(collectionName: string): Promise<boolean> {
        return await this.collectionKanbanMode(collectionName).isVisible()
    }

    public async waitForCollectionViewPageVisible(collectionName: string): Promise<void> {
        await Promise.all([
            this.collectionKanbanMode(collectionName).waitFor({ state: "visible"}),
            this.kanbanFooterChk(KanbanList.Events).waitFor({ state: "visible"})
        ])
    }

    public async verifyKanbanSystemListIsVisible(): Promise<void> {
        const kanbanNames = Object.values(KanbanList).filter(
            kanbanName => !new Set([KanbanList.Email, KanbanList.Contact]).has(kanbanName));
        await Promise.all(
            kanbanNames.map(async (kanbanName) => {
                expect.soft(this.kanbanFooterChk(kanbanName)).toBeVisible();
            })
        );
    }
}