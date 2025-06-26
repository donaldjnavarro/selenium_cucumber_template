/**
 * @file Custom utilities developed for this project
 */

const process = require('process');
const { Builder, Browser } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const VALID_BROWSERS = Object.values(Browser)
  .map(b => b
    .toUpperCase()
    .replace(/\s+/g, '_')
  );

/**
 * Configure the current browser in the .env file
 * Default to Chrome
 * Standardize to upper case
 * @returns {string} Name of the browser to be used
 * @throws {Error} If the BROWSER environment variable is missing or invalid
 */
function getBrowser () {
  const browser = process.env.BROWSER?.toUpperCase();

  if (!browser) {
    throw new Error(
      `Missing BROWSER variable from .env - Must be one of: ${VALID_BROWSERS.join(', ')}`
    );
  }

  if (!VALID_BROWSERS.includes(browser)) {
    throw new Error(
      `Invalid value BROWSER=${browser} in .env - Must be one of: ${VALID_BROWSERS.join(', ')}`
    );
  }
  return browser;
}
exports.getBrowser = getBrowser;

/**
 * Open a web browser
 * @param {string} browserName - See the case switch within for supported options and syntax
 * @returns {Promise<void>}
 */
async function startBrowser (browserName = getBrowser()) {
  try {
    logger.info(`Attempting to launch browser: ${browserName}`);
    switch (browserName) {
      case 'CHROME': {
        /** Set Chrome-specific options */
        const options = new chrome.Options();
        if (process.env.HEADLESS?.toLowerCase() === 'true') {
          options.addArguments('headless');
        }
        /** Start the browser instance */
        return await new Builder()
          .forBrowser(Browser[browserName])
          .setChromeOptions(options)
          .build();
      }
      default:
        /** Start the browser instance based on generic configurations */
        return await new Builder()
          .forBrowser(Browser[browserName])
          .build();
    }
  } catch (err) {
    logger.error(`Error while launching browser '${browserName}': ${err}`);
  }
}
exports.startBrowser = startBrowser;
