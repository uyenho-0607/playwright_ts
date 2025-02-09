import { test as baseTest } from '@playwright/test';
import { Pages } from './src/services/Pages';
import { PageManager } from './src/base/pageManager';
import { ConfigManager } from './src/base/configManager';

export const test = baseTest.extend<{ ownerPage: Pages }>({
  ownerPage: async ({  }, use, testInfo) => {
    console.info(`Starting test: ${testInfo.title}`);
    let config = ConfigManager.getConfig();

    console.log("- Init Pages for main user");
    const ownerPage = await (await new PageManager().createBrowserSession()).initPage();

    console.log("- Perform login for main user");
    await ownerPage.generalPage.navigateTo(config.urls.base);
    await ownerPage.loginPage.login(config.user, config.password);

    // Provide ownerPage to the test
    await use(ownerPage);
  },
});

export { expect } from '@playwright/test';
