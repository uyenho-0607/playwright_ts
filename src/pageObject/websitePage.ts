import { Page, Locator, expect } from "@playwright/test";
import { WebsiteWorkspace } from "../components/workspace/websites";
import { WebsiteLocalFilter } from "../components/panelLocalFilter/websites";
import { WebsiteItemList } from "../components/panelItemList/websites";
import { PanelFooter } from "../components/panelNavigation/panelFooter";
import { PanelHeader } from "../components/panelNavigation/panelHeade";


export class WebsitePage {

    workspace: WebsiteWorkspace;
    localFilter: WebsiteLocalFilter;
    footer: PanelFooter;
    header: PanelHeader;
    itemList: WebsiteItemList;


    constructor(protected readonly page: Page) {
        this.page = page;
        this.workspace = new WebsiteWorkspace(this.page);
        this.footer = new PanelFooter(this.page);
        this.header = new PanelHeader(this.page);
        this.localFilter = new WebsiteLocalFilter(this.page);
        this.itemList = new WebsiteItemList(this.page);
    }
}