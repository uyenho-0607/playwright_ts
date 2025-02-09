import { test, expect } from '../testHooks';

test('Test Example - Verify Something After Login', async ({ ownerPage }) => {
  await test.step('Verify logged in success', async () => {
    await ownerPage.topNav.verifyLoginSuccess();
  });
});
