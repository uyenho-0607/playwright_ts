import { Page, Locator, expect } from "@playwright/test";
import { CallWorkspace } from "../components/workspace/call";
import { Chat } from "../components/chat";
import { CallLocalFilter } from "../components/panelLocalFilter/call";
import { PanelFooter } from "../components/panelNavigation/panelFooter";
import { PanelHeader } from "../components/panelNavigation/panelHeade";
import { CallItemList } from "../components/panelItemList/call";

export class CallPage {

  // Components 
  workspace: CallWorkspace;
  localFilter: CallLocalFilter;
  footer: PanelFooter;
  header: PanelHeader;
  itemList: CallItemList;
  chat: Chat;

  // Locators
  private readonly addCallIcon: Locator;

  constructor(protected readonly page: Page) {
    this.page = page;

    // Components 
    this.workspace = new CallWorkspace(this.page);
    this.localFilter = new CallLocalFilter(this.page);
    this.header = new PanelHeader(this.page);
    this.footer = new PanelFooter(this.page);
    this.itemList = new CallItemList(this.page);
    this.chat = new Chat(this.page);

    // Locators
    this.addCallIcon = this.page.locator(".icon-add-call");
  
  }

  public async createNewCall(title: any = "", participantList: any = []): Promise<CallWorkspace> {
    await this.addCallIcon.click();
    if (title) {
      await this.workspace.editTitle(title);
    }
    if (participantList) {
      await this.workspace.addParticipants(participantList);
    }
    return this.workspace;
  }

  public async startCall(title: any = ""): Promise<CallWorkspace> {
    if (title) {
        await this.itemList.openWorkSpace(title)
    }
    await this.workspace.startCall();
    return this.workspace;
  }

}
