import { Browser, BrowserContext, Page, chromium, firefox, webkit } from 'playwright/test';
import { Pages } from '../services/Pages';

export class PageManager {
private browser!: Browser;
  private contextList: BrowserContext[] = [];
  private pageList: Page[] = [];

  private readonly browserName: string;
  private readonly headless: boolean;

  constructor(browserName: string = 'chrome') {
    this.browserName = process.env.BROWSER || browserName;
    this.headless = process.env.HEADLESS === 'true';
  }

  public async createBrowserSession(): Promise<PageManager> {
    switch (this.browserName) {
      case 'firefox':
        this.browser = await firefox.launch({ headless: this.headless });
        break;

      case 'webkit':
        this.browser = await webkit.launch({ headless: this.headless });
        break;

      default:
        this.browser = await chromium.launch({ headless: this.headless, channel: 'chrome' });
    }
    return this;
  }

  public async initPage(): Promise<Pages> {

    console.log('Init new context');
    const context = await this.browser.newContext({ permissions: ['microphone', 'camera'] });
    this.contextList.push(context);

    console.log('Init new page');
    const page = await context.newPage();
    this.pageList.push(page);

    return new Pages(page);
  }

  public async closePage(): Promise<void> {
    console.log('Closing all pages...');
    for (const page of this.pageList) {
      if (page) await page.close();
    }
    this.pageList = [];

    console.log('Closing all contexts...');
    for (const context of this.contextList) {
      if (context) await context.close();
    }
    this.contextList = [];

    console.log('Closing browser...');
    await this.browser.close();
  }
}
