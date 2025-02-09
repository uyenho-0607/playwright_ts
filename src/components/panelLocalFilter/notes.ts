import { Page, Locator, expect } from "@playwright/test"
import { BaseLocalFilter } from "./base";

export class NoteLocalFilter extends BaseLocalFilter {
    constructor(page: Page) {
        super(page);
    }
}