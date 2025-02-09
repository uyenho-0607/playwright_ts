import { Page, Locator, expect } from "@playwright/test";
import { CollectionPickerPage } from "../pagesObject/collectionPickerPage";
import { EmailPage } from "../pagesObject/emailPage";
import { EventPage } from "../pagesObject/eventPage";
import { NotePage } from "../pagesObject/notePage";
import { CallPage } from "../pagesObject/callPage";
import { TodoPage } from "../pagesObject/todoPage";
import { ContactPage } from "../pagesObject/contactPage";
import { WebsitePage } from "../pagesObject/websitePage";
import { SystemCollections } from "../enums";
import { SHORT_TIMEOUT } from "../const";

export class TopNavigation {
  collectionPickerPage: CollectionPickerPage;
  emailPage: EmailPage;
  todoPage: TodoPage;
  contactPage: ContactPage;
  callPage: CallPage;
  notePage: NotePage;
  eventPage: EventPage;
  websitePage: WebsitePage;

  constructor(private page: Page) {
    this.collectionPickerPage = new CollectionPickerPage(this.page);
    this.emailPage = new EmailPage(this.page);
    this.todoPage = new TodoPage(this.page);
    this.contactPage = new ContactPage(this.page);
    this.callPage = new CallPage(this.page);
    this.notePage = new NotePage(this.page);
    this.eventPage = new EventPage(this.page);
    this.websitePage = new WebsitePage(this.page);
  }

  // ---- Locators -----
  private get topNavBar(): Locator {
    return this.page.locator("//div[contains(@class, 'nav-bar-on-top')]");
  }

  private get collectionPicker(): Locator {
    return this.page.locator("li[class*=icollection-info]");
  }

  private toolTipTitle(name: SystemCollections | string): Locator {
    return this.page.locator(`a[tooltip-template=${name}]`);
  }

  private get acctiveTabList(): Promise<Array<Locator>> {
    return this.page.locator("//span[contains(@class, 'title') and ./ancestor::li[@aria-hidden='false']//a[@aria-selected]]").all();
  }

  private get threeDotCloseActiveTabIc(): Locator {
    return this.page.locator("//a[./parent::li[@aria-hidden='false' and @data-more-menu-item]]");
  }

  private closeActiveTabIc(tabName: string): Locator {
    return this.page.locator(`//i[contains(@class, 'i-close-view')
       and ./preceding-sibling::span[text()='${tabName}']  and ./ancestor::li[@aria-hidden='false']]`)
  }

  private activeTab(tabName: string): Locator {
    return this.page.locator(`//span[text()='${tabName}' and ./ancestor::li[@aria-hidden='false']]`)
  }

  // ---- Methods -----

  public async openCollectionPicker(): Promise<CollectionPickerPage> {
    if (
      (await this.collectionPicker.getAttribute("analytics-open")) === "true"
    ) {
      await this.collectionPicker.click();
    }
    return this.collectionPickerPage;
  }

  private async openPanelPage(panelName: string) {
    const classAttr = await this.toolTipTitle(panelName).getAttribute("class");
    if (classAttr && !classAttr.includes("active")) {
      await this.toolTipTitle(panelName).click();
    }
  }

  public async openEmailPanel(): Promise<EmailPage> {
    await this.openPanelPage(SystemCollections.Email);
    return this.emailPage;
  }

  public async openTodoPanel(): Promise<TodoPage> {
    await this.openPanelPage(SystemCollections.ToDos);
    return this.todoPage;
  }

  public async openContactPanel(): Promise<ContactPage> {
    await this.openPanelPage(SystemCollections.Contacts);
    return this.contactPage;
  }

  public async openCallPanel(): Promise<CallPage> {
    await this.openPanelPage(SystemCollections.Calls);
    return this.callPage;
  }
  public async openNotePanel(): Promise<NotePage> {
    await this.openPanelPage(SystemCollections.Notes);
    return this.notePage;
  }
  public async openEventPanel(): Promise<EventPage> {
    await this.openPanelPage(SystemCollections.Calendar);
    return this.eventPage;
  }
  public async openWebsitePanel(): Promise<WebsitePage> {
    await this.openPanelPage(SystemCollections.Websites);
    return this.websitePage;
  }

  private async isActiveTabVisibleOnToolbar(tabName: string): Promise<boolean> {
    const lstActiveTabName = (await this.acctiveTabList).map(
      element => element.textContent.toString()?.trim() || ""
    );
    return lstActiveTabName.includes(tabName);
  }

  public async removeActiveTab(tabName: string): Promise<void> {
    if (!this.isActiveTabVisibleOnToolbar) {
      if (await this.threeDotCloseActiveTabIc.isVisible()) {
        await this.threeDotCloseActiveTabIc.click()
      }
    }
  }
}
