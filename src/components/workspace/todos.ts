import {Page, Locator, expect } from "@playwright/test"
import { BaseWorkspace } from "./base";

export class TodoWorkspace extends BaseWorkspace {

    constructor(page: Page) {
        super(page);
    }
}
