import { Page, Locator, expect } from '@playwright/test';
import { BaseKanban } from './base';
import { KanbanList, MemberRoles } from '../../enums';
import { sleep } from '../../utils/commonUtil';
import { MemberContextMenu } from '../../components/contextMenu/members';
import { ConfigManager } from '../../base/configManager';

export class MembersKanban extends BaseKanban {
  contextMenu: MemberContextMenu;

  constructor(page: Page, kanbanName = KanbanList.Members) {
    super(page, kanbanName);
    this.contextMenu = new MemberContextMenu(this.page);
  }

  // ------ Locators ------
  private get addMembersTxt(): Locator {
    return this.page.getByText('Add Members').first();
  }

  private get inviteMemberPh(): Locator {
    return this.page.locator("input[placeholder='Invite Member']");
  }
  private get changeRoleBtn(): Locator {
    return this.page.locator('#btn-change-access');
  }

  private memberRoleOptions(role: string = MemberRoles.Editor): Locator {
    return this.page.locator(`//member-kanban-quick-add-card//a[contains(text(), '${role}')]`);
  }

  private get inviteBtn(): Locator {
    return this.page.locator('.invite-member-btn');
  }

  // private memberCard(username: string): Locator {
  //   return this.page.locator(
  //     `//contact-kanban-card//span[contains(@class, "kb-card-info")]//span[normalize-space(text())="${capitalCase(
  //       username,
  //     )}"]`,
  //   );
  // }
  // private roleMemberCard(username: string, role: string = MemberRoles.Editor): Locator {
  //   return this.page.locator(
  //     `//span[text()="${role}"]/ancestor::span[contains(@class, "kb-card-info")]//span[normalize-space(text())="${capitalCase(
  //       username,
  //     )}"]`,
  //   );
  // }

  // ------ Methods ------
  public async addMemberToSharedCollection(
    memberList: string | string[],
    role: string = MemberRoles.Editor,
  ): Promise<void> {
    if (typeof memberList === 'string') {
      memberList = [memberList];
    }

    for (const username of memberList) {
      await this.addMembersTxt.click();
      await this.inviteMemberPh.fill(`${username}@${ConfigManager.getConfig().domain}`);
      await this.changeRoleBtn.click();
      await this.memberRoleOptions(role).click();
      await this.inviteBtn.click();
      await sleep(500);
    }
  }

  // public async selectMemberRoleInContextMenu(
  //   memberName: string,
  //   role: string = MemberRoles.Viewer,
  // ): Promise<void> {
  //   await this.memberCard(memberName).click({ button: 'right' });
  //   await this.contextMenu.selectMemberRole(role);
  // }

  // public async removeMemberInContextMenu(memberName: string): Promise<void> {
  //   await this.memberCard(memberName).click({ button: 'right' });
  //   await this.contextMenu.selectRemoveFromThisCollection();
  // }
// 
  // ------ Verify ------
  // public async verifyMemberIsAdded(
  //   username: string,
  //   role: string = MemberRoles.Editor,
  // ): Promise<void> {
  //   Promise.all([
  //     await expect(this.memberCard(username)).toBeVisible(),
  //     await expect(this.roleMemberCard(username, role)).toBeVisible(),
  //   ]);
  // }

  // public async verifyMemberIsNotAdded(memberName: string | string[]): Promise<void> {
  //   if (typeof memberName === 'string') {
  //     memberName = [memberName];
  //   }
  //   for (const member in memberName) {
  //     await expect(this.memberCard(member)).toBeHidden();
  //   }
  // }

  // verifyMemberIsRemoved = this.verifyMemberIsAdded.bind(this);

  // public async verifyRoleIsSelected(
  //   memberName: string,
  //   role: string = MemberRoles.Editor,
  // ): Promise<void> {
  //   await this.memberCard(memberName).click({ button: 'right' });
  //   await this.contextMenu.verifyRoleIsSelected(role);
  // }
}
