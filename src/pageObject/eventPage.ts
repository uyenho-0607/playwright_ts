import { Page, Locator, expect } from "@playwright/test";
import { EventWorkspace } from "../components/workspace/events";
import { EventLocalFilter } from "../components/panelLocalFilter/events";
import { EventItemList } from "../components/panelItemList/events";
import { PanelFooter } from "../components/panelNavigation/panelFooter";
import { PanelHeader } from "../components/panelNavigation/panelHeade";


export class EventPage {

    workspace: EventWorkspace;
    localFilter: EventLocalFilter;
    footer: PanelFooter;
    header: PanelHeader;
    itemList: EventItemList;


    constructor(protected readonly page: Page) {
        this.page = page;
        this.workspace = new EventWorkspace(this.page);
        this.footer = new PanelFooter(this.page);
        this.header = new PanelHeader(this.page);
        this.localFilter = new EventLocalFilter(this.page);
        this.itemList = new EventItemList(this.page);
    }
}