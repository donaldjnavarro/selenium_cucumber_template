/**
 * @file BasePage page object model
 */
const { By, Key } = require('selenium-webdriver');

/**
 * This class is the core page model that all other page models will extend. This object contains universal features that apply to all page models
 */
class BasePage{

  constructor(driver){
    this.driver = driver;
    this.expected = {
      url: undefined
    };
    driver.manage().setTimeouts({implicit: (10000)});
  }

  /**
   * Checks if we are currently viewing the page
   * @returns {Promise<boolean>} - Returns true if we are on the page
   */
  async isOnPage () {
    return (
      (await this.driver.getCurrentUrl())
        .includes(this.expected.url)
    );
  }

  /**
   * Type into a text input field
   * @param {object} params - Named parameters
   * @param {string} params.xpath - xPath matching the text field element
   * @param {string} params.text - The text to type into the field
   * @param {boolean} params.thenHitEnter - If true, then we will press the enter/return key after typing the text
   * @returns {Promise<void>}
   */
  async inputText({ xpath, text, thenHitEnter = false }){
    try {
      // Input text and hit enter
      if (thenHitEnter === true) {
        await this.driver
          .findElement(By.xpath(xpath))
          .sendKeys(text, Key.RETURN);
      // Just input text
      } else {
        await this.driver
          .findElement(By.xpath(xpath))
          .sendKeys(text);
      }
    } catch (err) {
      throw new Error(`Error encountered while using inputText() for xpath ${xpath} \n ${err}`);
    }
  }

  /**
   * Click an element on the page based on its xpath
   * @param {string} xpath - The xpath of the element to be clicked
   */
  async clickElement(xpath){
    await this.driver
      .findElement(By.xpath(xpath))
      .click();
  }

}
module.exports = BasePage;
