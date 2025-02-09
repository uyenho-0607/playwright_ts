import { Page, Locator, expect } from "@playwright/test";
import { TodoWorkspace } from "../components/workspace/todos";
import { TodoLocalFilter } from "../components/panelLocalFilter/todos";
import { TodoItemList } from "../components/panelItemList/todos";
import { PanelFooter } from "../components/panelNavigation/panelFooter";
import { PanelHeader } from "../components/panelNavigation/panelHeade";


export class TodoPage {

    workspace: TodoWorkspace;
    localFilter: TodoLocalFilter;
    footer: PanelFooter;
    header: PanelHeader;
    itemList: TodoItemList;


    constructor(protected readonly page: Page) {
        this.page = page;
        this.workspace = new TodoWorkspace(this.page);
        this.footer = new PanelFooter(this.page);
        this.header = new PanelHeader(this.page);
        this.localFilter = new TodoLocalFilter(this.page);
        this.itemList = new TodoItemList(this.page);
    }
}