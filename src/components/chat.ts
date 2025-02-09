import { Page, Locator, expect } from "@playwright/test";

export class Chat {
    constructor(protected readonly page: Page) {
        this.page = page;
    }
    private get chatBox(): Locator {
        return this.page.getByRole("application");
    }
    private get sendChatBtn(): Locator {
        return this.page.locator(".chat-btn");
    }

    private get chatPnl() {
        return this.page.locator(`//span[./label[text()="Chat"] and ./preceding-sibling::i]`);
    }

    public async verifyChatIsVisible(): Promise<void> {
        await expect.soft(this.chatPnl).toBeVisible();
    }
}