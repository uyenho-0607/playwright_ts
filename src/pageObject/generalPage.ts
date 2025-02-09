import { Page } from "playwright/test";

export class GeneralPage {
    constructor(protected readonly page: Page) {
        this.page = page;
    }

    public async navigateTo(url: string): Promise<void> {
        await this.page.goto(url)
    }
}