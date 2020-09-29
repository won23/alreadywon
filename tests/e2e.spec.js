import config from '../src/configs/app.config';

const URI =
  process.env.NODE_ENV === 'test' ? 'http://web:3000' : 'http://localhost:3000';

const { chromium } = require('playwright');
let browser;
let page;

beforeAll(async () => {
  browser = process.env.GITHUB_ACTIONS
    ? await chromium.launch()
    : await chromium.launch({ headless: true });
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

it('should work', async () => {
  await page.goto(URI);
  expect(await page.title()).toBe(config.siteTitle);
  await page.click('"Explore"');
  expect(page.url());
});

export {};
