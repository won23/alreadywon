import { chromium, webkit, firefox, Page, Browser } from 'playwright';
import config from '../src/configs/app.config';

const URI = process.env.GITHUB_ACTIONS
  ? 'http://web:3000'
  : 'http://localhost:3000';

describe('E2E View Pages', () => {
  let browser: Browser;
  let page: Page;
  beforeAll(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await chromium.launch()
      : await chromium.launch({ headless: false });
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  it('Should be able to nav through pages', async () => {
    await page.goto(URI);
    expect(await page.title()).toBe(
      `${config.siteTitle} | Tech, Management, and Life`
    );
    await page.click('text="Explore"');
    await page.waitForNavigation();
    expect(await page.title()).toBe('Tim Won | Home');

    await page.click('text="Blog"');
    await page.waitForNavigation();

    expect(await page.title()).toBe('Tim Won | Blog');

    await page.click('text="About"');
    await page.waitForNavigation();

    expect(await page.title()).toBe('Tim Won | About Me');
  });
});
