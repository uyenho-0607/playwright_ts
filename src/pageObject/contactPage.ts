import { Page, Locator, expect } from "@playwright/test";
import { ContactWorkspace } from "../components/workspace/contacts";
import { ContactLocalFilter } from "../components/panelLocalFilter/contacts";
import { ContactItemList } from "../components/panelItemList/contacts";
import { PanelFooter } from "../components/panelNavigation/panelFooter";
import { PanelHeader } from "../components/panelNavigation/panelHeade";


export class ContactPage {

    workspace: ContactWorkspace;
    localFilter: ContactLocalFilter;
    footer: PanelFooter;
    header: PanelHeader;
    itemList: ContactItemList;


    constructor(protected readonly page: Page) {
        this.page = page;
        this.workspace = new ContactWorkspace(this.page);
        this.footer = new PanelFooter(this.page);
        this.header = new PanelHeader(this.page);
        this.localFilter = new ContactLocalFilter(this.page);
        this.itemList = new ContactItemList(this.page);
    }
}