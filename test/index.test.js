const playwright = require('playwright')

describe('Main & Finish Page', () => {
    let browser;
    let page;

    before(async () => {
      browser = await playwright.chromium.launch();
      page = await browser.newPage();
    });
  
    it('should render"', async () => {
      await page.goto('http://localhost:8080/');
      await page.screenshot({ path: 'test/screenshots/main_page.png', fullPage: true });
      await page.locator('#submitBtn').click();
      setTimeout(function () {
      }, 1000);
      await page.screenshot({ path: 'test/screenshots/finish_page.png', fullPage: true });
    });

    after(async () => {
      await browser.close();
    });
});