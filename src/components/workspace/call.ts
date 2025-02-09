import { Page, Locator, expect } from "@playwright/test";
import { BaseWorkspace } from "./base";
import { sleep } from "../../utils/commonUtil";
import { Popup } from "../popup";
import { ConfigManager } from "../../base/configManager";

export class CallWorkspace extends BaseWorkspace {

  private popup: Popup;

  // Locators
  private readonly callTitle: Locator;
  private readonly editTitleIcon: Locator;
  private readonly editTitleTxt: Locator;
  private readonly saveBtn: Locator;
  private readonly closeViewIcon: Locator;
  private readonly participantSearchBox: Locator;
  private readonly removeMemberIcon: Locator;
  private readonly microphoneIcon: Locator;
  private readonly startCallIcon: Locator;
  private readonly endCallIcon: Locator;
  private readonly chatPanel: Locator;
  private readonly peoplePanel: Locator;
  

  constructor(page: Page) {
    super(page);
    this.popup = new Popup(this.page);

    // Locators
    this.callTitle = this.page.locator(".call-title");
    this.editTitleIcon = this.page.locator("i[class*='icon-edit']");
    this.editTitleTxt = this.page.locator("input[class*='edit-channel-title']");
    this.saveBtn = this.page.locator("//button[text()='Save']");
    this.closeViewIcon = this.page.locator(".view-header .middle i");
    this.participantSearchBox = this.page.locator("input[id='participant-search-box']");
    this.removeMemberIcon = this.page.locator(".icon-remove-member");
    this.microphoneIcon = this.page.locator("i[class*='icon-microphone']");
    this.startCallIcon = this.page.locator(".control-btn i.icon-call-fill");
    this.endCallIcon = this.page.locator(".icon-end-call");
    this.chatPanel = this.page.locator(
      "//i[contains(@class, 'icon-comment-lines')]/ancestor::div[contains(@class, 'toggle-panel-btn')]"
    );
    this.peoplePanel = this.page.locator(
      "//i[contains(@class, 'icon-user-friends')]/ancestor::div[contains(@class, 'toggle-panel-btn')]"
    );
  }

  // ------ Locator ------
  private participantEmail(email: string): Locator {
    return this.page.getByTitle(email);
  }

  // ------ Methods ------

  private async openPeoplePanel(): Promise<this> {
    const classAttr = await this.peoplePanel.getAttribute("class");
    if (classAttr && !classAttr.includes("is-open")) {
      await this.peoplePanel.click();
    }
    return this;
  }

  public async editTitle(title: string): Promise<this> {
    await this.callTitle.hover();
    await this.editTitleIcon.click();
    await this.editTitleTxt.fill(title);
    await this.saveBtn.click();
    return this;
  }

  public async addParticipants(
    pariticpantlList: string | string[]
  ): Promise<this> {
    if (typeof pariticpantlList === "string") {
      pariticpantlList = [pariticpantlList];
    }

    await this.openPeoplePanel();
    for (const username of pariticpantlList) {
      await this.participantSearchBox.fill(`${username}@${ConfigManager.getConfig().domain}`);
      await this.page.keyboard.press("Enter");
      await sleep(500);
    }
    return this;
  }

  public async removeParticipants(
    pariticpantlList: string | string[]
  ): Promise<this> {
    if (typeof pariticpantlList === "string") {
      pariticpantlList = [pariticpantlList];
    }

    await this.openPeoplePanel();
    for (const username of pariticpantlList) {
      await this.participantEmail(`${username}@${ConfigManager.getConfig().domain}`).click({
        button: "right",
      });
      await this.removeMemberIcon.click();
      await sleep(500);
    }
    return this;
  }

  public async closeCallView(): Promise<this> {
    if (await this.closeViewIcon.isVisible()) {
      await this.closeViewIcon.click();
    }
    return this;
  }

  private async muteUnmute(mute: boolean = true): Promise<void> {
    const classAttr = await this.microphoneIcon.getAttribute("class");
    if (mute && classAttr && !classAttr.includes("mute")) {
      await this.microphoneIcon.click();
      // await this.popup.closeOkGotItPopup();
    }
  }

  public async muteCall(): Promise<this> {
    await this.muteUnmute();
    return this;
  }

  public async unmuteCall(): Promise<this> {
    await this.muteUnmute(false);
    return this;
  }

  public async startCall(mute: boolean = true): Promise<this> {
    if (mute) {
      await this.muteCall();
    }
    await this.startCallIcon.click();
    // await this.popup.closeOkGotItPopup();
    return this;
  }

  public async endCall(): Promise<this> {
    await this.endCallIcon.click();
    return this;
  }
}
