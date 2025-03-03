/**
 * @file Example step definitions
 */
const { Given, Then, When } = require('@cucumber/cucumber');
const { Builder, Browser, Key, By, until } = require('selenium-webdriver');
const { startBrowser } = require('../../utilities.js');
const { assert } = require('console');
const WikipediaHomePage = require('../../page_object_models/wikipedia_home_page.js');

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
  const homepage = await new WikipediaHomePage(this.driver);
  await homepage.inputSearch(searchTerm);
});

Then('I am navigated to the URL {string}', async function (url) {
  await this.driver.wait(until.urlContains(url), 10000);
  const currentUrl = await this.driver.getCurrentUrl();
  assert(currentUrl.includes(url));
});

Then('the page title is {string}', async function (pageTitle) {
  await this.driver.wait(until.titleIs(pageTitle), 2000);
  assert(await this.driver.getTitle() === pageTitle);
});

Given('I close the web browser', async function () {
  await this.driver.quit();
});
