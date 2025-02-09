
import { Page, Locator, expect } from "@playwright/test";
import { BaseKanban } from "./base";

export class SystemKanban extends BaseKanban{
    constructor(page: Page, kanbanName: string) {
        super(page, kanbanName);
    }
}