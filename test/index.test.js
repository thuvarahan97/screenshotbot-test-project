const playwright = require('playwright')

describe('Main & Finish Page', () => {
    let browser;
    let page;

    before(async () => {
      browser = await playwright.chromium.launch();
      page = await browser.newPage();
    });
  
    it('should render', async () => {
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
  
    it('should render in firefox', async () => {
      browser = await playwright.firefox.launch();
      page = await browser.newPage();
      await page.goto('http://localhost:8080/');
      await page.screenshot({ path: 'test/screenshots/main_page_firefox.png', fullPage: true });
      await page.locator('#submitBtn').click();
      setTimeout(function () {
      }, 1000);
      await page.screenshot({ path: 'test/screenshots/finish_page_firefox.png', fullPage: true });
    });

    after(async () => {
      await browser.close();
    });
  
    it('should render in Nexus5', async () => {
      browser = await playwright.chromium.launch();
      const nexus5 = playwright.devices['Nexus 5'];
      const context = await browser.newContext({
        ...nexus5,
      });
      page = await context.newPage();
      await page.goto('http://localhost:8080/');
      await page.screenshot({ path: 'test/screenshots/main_page_nexus5.png', fullPage: true });
      await page.locator('#submitBtn').click();
      setTimeout(function () {
      }, 1000);
      await page.screenshot({ path: 'test/screenshots/finish_page_nexus5.png', fullPage: true });
    });

    after(async () => {
      await browser.close();
    });
});