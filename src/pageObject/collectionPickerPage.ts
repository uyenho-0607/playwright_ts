import { Locator, Page } from "@playwright/test";
import { CollectionViewPage } from "./collectionViewPage";

export class CollectionPickerPage {
  // Components 
  collectionViewPage: CollectionViewPage;

  // Locators
  private readonly acceptBtn: Locator;
  private readonly declineBtn: Locator;
  private readonly createCollectionBtn: Locator;
  private readonly collectionNameTxt: Locator;
  private readonly sharedCollectionCheckbox: Locator;


  constructor(protected readonly page: Page) {
    this.page = page;
    this.collectionViewPage = new CollectionViewPage(this.page);

    // ------ Locators ------
    this.acceptBtn = this.page.locator(".accept-button");
    this.declineBtn = this.page.locator(".decline-button");
    this.createCollectionBtn = this.page.getByRole("button").getByText("Create Collection");
    this.collectionNameTxt = this.page.getByPlaceholder("Untitled Collection").last();
    this.sharedCollectionCheckbox = this.page.locator("label[for*='shared-collection-on-chk']")

  }

  private newCollectionBtn(collectionType: string): Locator {
    return this.page.locator(
      `//span[contains(text(), '${collectionType}')]/following-sibling::button/span`
    );
  }

  private collectionItem(collectionName: string): Locator {
    return this.page.getByTitle(collectionName);
  }
  
  // ------ Methods ------

  public async openCollection(collectionName: string): Promise<CollectionViewPage> {
    if (!(await this.collectionViewPage.isCollectionKanbanModeVisible(collectionName))) {
      await this.collectionItem(collectionName).click();
    }
    await this.collectionViewPage.waitForCollectionViewPageVisible(collectionName);
    return this.collectionViewPage;
  }

  public async acceptJoinSharedCollection(): Promise<CollectionViewPage> {
    await this.acceptBtn.click();
    return this.collectionViewPage;
  }

  public async declineJoinSharedCollection(): Promise<CollectionViewPage> {
    await this.declineBtn.click();
    return this.collectionViewPage;
  }
}
