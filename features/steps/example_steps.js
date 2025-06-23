/**
 * @file Example step definitions
 */
const { Given, Then, When } = require('@cucumber/cucumber');
const { startBrowser } = require('../../utils/browser.js');
const assert = require('assert');
const WikipediaHomePage = require('../object_models/pages/wikipedia_home_page.js');
const WikipediaContentPage = require('../object_models/pages/wikipedia_content_page.js');
const PostmanApi = require('../object_models/apis/postman_api.js');
const waitAndAssert = require('../../utils/timing.js');

Given('I open a web browser', async function () {
  this.driver = await startBrowser();
});

Given('I navigate to {string}', async function (url) {
  try {
    await this.driver.get(url);
  } catch (err) {
    throw new Error(`Error encountered while navigating to ${url}:\n ${err}`);
  }
});

When('I input {string} into the Wikipedia search bar and press enter', async function (searchTerm) {
  const homePage = await new WikipediaHomePage(this.driver);
  await homePage.inputSearch(searchTerm);
});

When('I input {string} into the Wikipedia global header search bar and press enter', async function (searchTerm) {
  const contentPage = await new WikipediaContentPage(this.driver);
  await contentPage.inputSearch(searchTerm);
});

When('I send a demo API request', async function () {
  const postman = new PostmanApi();
  const response = await postman.getGet(
    {
      foo1: 'lorem',
      foo2: 'ipsum'
    }
  );
  logger.debug(`Demo API response.data: ${JSON.stringify(response.data)}`);
});

Then('I am navigated to the URL {string}', async function (expectedUrl) {
  await waitAndAssert(async () => {
    const currentUrl = await this.driver.getCurrentUrl();
    assert(currentUrl.includes(expectedUrl),
      `Expected URL ${expectedUrl} but found actual URL ${currentUrl}`
    );
  });
});

Then('the page title is {string}', async function (expectedTitle) {
  await waitAndAssert(async () => {
    const actualTitle = await this.driver.getTitle();
    assert(actualTitle === expectedTitle,
      `Expected page title ${expectedTitle} but actual page title ${actualTitle}`
    );
  });
});

Then('I am on a Wikipedia content page', async function () {
  const contentPage = await new WikipediaContentPage(this.driver);
  await contentPage.waitUntilOnPage();
  assert(await contentPage.isOnPage() === true,
    'Expected to be on a Wikipedia Content Page'
  );
});

Then('I am on the Wikipedia Home Page', async function () {
  const homePage = await new WikipediaHomePage(this.driver);
  await homePage.waitUntilOnPage();
  assert(await homePage.isOnPage() === true,
    'Expected to be on the Wikipedia Home Page'
  );
});
