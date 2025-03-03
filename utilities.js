/**
 * @file Custom utilities developed for this project
 */

const { config } = require('dotenv');
const process = require('process');
config({ path: './.env' });
const { Builder, Browser } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

/**
 * Configure the current browser in the .env file
 * Default to Chrome
 * Standardize to upper case
 * @returns {string} Name of the browser to be used
 */
function getBrowser () {
  return process.env.BROWSER ?
    process.env.BROWSER.toUpperCase() :
    'CHROME';
}
exports.getBrowser = getBrowser;

/**
 * Open a web browser
 * @param {string} browserName - See the case switch within for supported options and syntax
 * @returns {Promise<void>}
 */
async function startBrowser (browserName = getBrowser()) {
  switch (browserName) {
    case 'CHROME': {
      /** Set Chrome-specific options */
      const options = new chrome.Options();
      if (process.env.HEADLESS?.toLowerCase() === 'true') {
        options.addArguments('headless');
      }
      /** Start the browser instance */
      return await new Builder()
        .forBrowser(Browser[getBrowser()])
        .setChromeOptions(options)
        .build();
    }
    default:
      /** Start the browser instance based on generic configurations */
      return await new Builder()
        .forBrowser(Browser[getBrowser()])
        .build();
  }
}
exports.startBrowser = startBrowser;
