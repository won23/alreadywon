const { SERVER } = require('jest-playwright-preset');

module.exports = {
  launchOptions: {
    headless: true,
  },
  launchType: SERVER,
  contextOptions: {
    ignoreHTTPSErrors: true,
    viewport: {
      width: 1920,
      height: 1080,
    },
  },
  browsers: ['chromium', 'firefox'],
  devices: [],
};
