import { Page, Locator, expect } from "@playwright/test";
import { BaseContextMenu } from "./base";
import { MemberRoles } from "../../enums";

export class MemberContextMenu extends BaseContextMenu {
  constructor(page: Page) {
    super(page);
  }
  // ------ Locators ------

  private memberRole(role: string = MemberRoles.Editor): Locator {
    return this.contextMenu(role);
  }

  private selectedRoleIc(role: string): Locator {
    return this.page.locator(
      `//ul[contains(@class, 'context-menu')]//a[translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')="${role}"]/i[@class="icon-check-large")]`
    );
  }


  private get removeFromThisCollection(): Locator {
    return this.contextMenu("Remove from this Collection");
  }

  // ------ Methods ------
  public async selectMemberRole(role: string): Promise<void> {
    await this.memberRole(role).click();
  }
  public async selectRemoveFromThisCollection(): Promise<void> {
    await this.removeFromThisCollection.click();
  }


  // ------ Verify ------
  public async verifyRoleIsSelected(role: string = MemberRoles.Editor) {
    await expect(this.selectedRoleIc(role)).toBeVisible();
  }

}
