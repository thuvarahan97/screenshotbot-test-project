const playwright = require('playwright')

describe('Main & Finish Page', () => {
    let browser;
    let page;
  
    it('should render in Chrome', async () => {
      browser = await playwright.chromium.launch();
      page = await browser.newPage();
      await page.goto('http://localhost:8080/');
      await page.screenshot({ path: 'test/screenshots/main_page--chrome.png', fullPage: true });
      await page.locator('#submitBtn').click();
      setTimeout(function () {
      }, 1000);
      await page.screenshot({ path: 'test/screenshots/finish_page--chrome.png', fullPage: true });
    });

    after(async () => {
      await browser.close();
    });
  
    it('should render in Firefox', async () => {
      browser = await playwright.firefox.launch();
      page = await browser.newPage();
      await page.goto('http://localhost:8080/');
      await page.screenshot({ path: 'test/screenshots/main_page--firefox.png', fullPage: true });
      await page.locator('#submitBtn').click();
      setTimeout(function () {
      }, 1000);
      await page.screenshot({ path: 'test/screenshots/finish_page--firefox.png', fullPage: true });
    });

    after(async () => {
      await browser.close();
    });
  
    it('should render in Nexus 5', async () => {
      browser = await playwright.chromium.launch();
      const nexus5 = playwright.devices['Nexus 5'];
      const context = await browser.newContext({
        ...nexus5,
      });
      page = await context.newPage();
      await page.goto('http://localhost:8080/');
      await page.screenshot({ path: 'test/screenshots/main_page--nexus 5.png', fullPage: true });
      await page.locator('#submitBtn').click();
      setTimeout(function () {
      }, 1000);
      await page.screenshot({ path: 'test/screenshots/finish_page--nexus 5.png', fullPage: true });
    });

    after(async () => {
      await browser.close();
    });
});