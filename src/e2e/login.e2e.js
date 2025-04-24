import puppeteer from 'puppeteer';

describe('Login', () => {
  let browser;
  let page;

  beforeAll(async () => {
    // Launch the browser with no sandbox (if required for your environment)
    browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  });

  beforeEach(async () => {
    page = await browser.newPage();
    // Navigate to the login page and wait until the page is fully loaded
    await page.goto('http://localhost:8000/en/login', {
      waitUntil: 'networkidle2',
    });
  });

  afterEach(async () => {
    // Ensure the page is closed after each test
    await page.close();
  });

  it('should login with failure', async () => {
    // Wait for the username field to appear using waitForSelector
    await page.waitForSelector('#username', { timeout: 3000 });
    // Type wrong credentials
    await page.type('#username', 'wrong_user');
    await page.type('#password', 'wrong_password');
    await page.click('button[type="button"]');
    // Wait for the error indicator to appear
    await page.waitForSelector('.anticon-close-circle', { timeout: 5000 });
  });

  it('should login successfully', async () => {
    // Wait for the username field to be available
    await page.waitForSelector('#username', { timeout: 3000 });
    await page.type('#username', 'admin');
    await page.type('#password', 'admin');
    await page.click('button[type="button"]');
    // Wait for the footer element to indicate a successful login
    await page.waitForSelector('.ant-layout-footer', { timeout: 5000 });
    // Evaluate the page content and assert the expected text is present
    const text = await page.evaluate(() => document.body.innerHTML);
    expect(text).toContain('Ant Design Admin');
  });

  afterAll(async () => {
    await browser.close();
  });
});