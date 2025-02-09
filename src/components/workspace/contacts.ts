import {Page, Locator, expect } from "@playwright/test"
import { BaseWorkspace } from "./base";

export class ContactWorkspace extends BaseWorkspace {

    constructor(page: Page) {
        super(page);
    }
}
