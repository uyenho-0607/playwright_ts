import { Page, Locator, expect } from "@playwright/test";
import { KanbanSetting } from "../components/settings/kanbans";
import { NoteSetting } from "../components/settings/notes";
import { TodoSetting } from "../components/settings/todos";
import { EventSetting } from "../components/settings/events";
import { WebsiteSetting } from "../components/settings/websites";
import { CallSetting } from "../components/settings/call";



export class SettingPage {

    kanban: KanbanSetting;
    note: NoteSetting;
    todo: TodoSetting;
    event: EventSetting;
    call: CallSetting;

    constructor(private page: Page) {

        this.page = page;
        this.kanban = new KanbanSetting(this.page);
        this.todo = new TodoSetting(this.page);
        this.note = new NoteSetting(this.page);
        this.event = new EventSetting(this.page);
        this.call = new CallSetting(this.page);
    }
}


