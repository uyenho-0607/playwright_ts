import { Page, Locator, expect } from "@playwright/test";
import { EmailWorkspace } from "../components/workspace/email";
import { EmailLocalFilter } from "../components/panelLocalFilter/email";
import { EmailItemList } from "../components/panelItemList/email";
import { PanelFooter } from "../components/panelNavigation/panelFooter";
import { PanelHeader } from "../components/panelNavigation/panelHeade";


export class EmailPage {

    workspace: EmailWorkspace;
    localFilter: EmailLocalFilter;
    footer: PanelFooter;
    header: PanelHeader;
    itemList: EmailItemList;


    constructor(protected readonly page: Page) {
        this.page = page;
        this.workspace = new EmailWorkspace(this.page);
        this.footer = new PanelFooter(this.page);
        this.header = new PanelHeader(this.page);
        this.localFilter = new EmailLocalFilter(this.page);
        this.itemList = new EmailItemList(this.page);
    }
}