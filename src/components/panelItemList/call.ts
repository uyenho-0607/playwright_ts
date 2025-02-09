import { Page, Locator, expect } from "@playwright/test";
import { BaseItemList } from "./base";
import { CallContextMenu } from "../contextMenu/call";
import { CallWorkspace } from "../workspace/call";

export class CallItemList extends BaseItemList {
  private contextMenu: CallContextMenu;
  private workSpace: CallWorkspace;

  constructor(page: Page) {
    super(page);
    this.contextMenu = new CallContextMenu(this.page);
    this.workSpace = new CallWorkspace(this.page);
  }

  private callItem(title: string): Locator {
    return this.page.getByTitle(title);
  }

  public async openWorkSpace(title: string): Promise<CallWorkspace> {
   await this.callItem(title).click();
   return this.workSpace;
  }
}
