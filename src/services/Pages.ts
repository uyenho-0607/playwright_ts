import { Page } from 'playwright/test';
import { LoginPage } from '../pageObject/loginPage';
import { CallPage } from '../pageObject/callPage';
import { TopNavbar } from '../components/topNavBar';
import { GeneralPage } from '../pageObject/generalPage';
import { NotePage } from '../pageObject/notePage';
import { TodoPage } from '../pageObject/todoPage';
import { CollectionPickerPage } from '../pageObject/collectionPickerPage';
import { CollectionViewPage } from '../pageObject/collectionViewPage';

export class Pages {
  private page;
  public generalPage!: GeneralPage;
  public loginPage!: LoginPage;
  public topNav!: TopNavbar;
  public callPage!: CallPage;
  public notePage!: NotePage;
  public todoPage!: TodoPage;
  public collectionPickerPage!: CollectionPickerPage;
  public CollectionViewPage!: CollectionViewPage;

  constructor(page: Page) {
    this.page = page;
    this.generalPage = new GeneralPage(this.page);
    this.loginPage = new LoginPage(this.page);
    this.callPage = new CallPage(this.page);
    this.topNav = new TopNavbar(this.page);
    this.notePage = new NotePage(this.page);
    this.todoPage = new TodoPage(this.page);
    this.collectionPickerPage = new CollectionPickerPage(this.page);
    this.CollectionViewPage = new CollectionViewPage(this.page);
  }
}
