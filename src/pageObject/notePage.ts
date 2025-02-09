import { Page, Locator, expect } from '@playwright/test';
import { NoteWorkspace } from '../components/workspace/notes';
import { NoteLocalFilter } from '../components/panelLocalFilter/notes';
import { NoteItemList } from '../components/panelItemList/notes';
import { PanelFooter } from '../components/panelNavigation/panelFooter';
import { PanelHeader } from '../components/panelNavigation/panelHeade';

export class NotePage {
  workspace: NoteWorkspace;
  localFilter: NoteLocalFilter;
  footer: PanelFooter;
  header: PanelHeader;
  itemList: NoteItemList;

  constructor(protected readonly page: Page) {
    this.page = page;
    this.workspace = new NoteWorkspace(this.page);
    this.footer = new PanelFooter(this.page);
    this.header = new PanelHeader(this.page);
    this.localFilter = new NoteLocalFilter(this.page);
    this.itemList = new NoteItemList(this.page);
  }
}
