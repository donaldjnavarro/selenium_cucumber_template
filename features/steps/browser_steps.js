/**
 * @file Step definitions for generic web browser actions that have nothing to do with page elements
 */
const { When } = require('@cucumber/cucumber');
const { Key } = require('selenium-webdriver');

When('I click the browser\'s back button', async function () {
  await this.driver.navigate().back();
});

When('I close the web browser', async function () {
  await this.driver.quit();
});

When('I wait {string} seconds', { timeout: 60 * 1000 }, async function (seconds) {
  const milliseconds = seconds * 1000;
  await new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
});

When('I refresh my browser', async function () {
  await this.driver.navigate().refresh();
});

When('I click the page background', async function () {
  const element = await this.driver.findElement({ xpath: '//body' });
  await element.click();
});

When('I hit escape', async function () {
  const element = await this.driver.findElement({ xpath: '//body' });
  await element.sendKeys(Key.ESCAPE);
});
