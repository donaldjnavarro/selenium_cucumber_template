/**
 * @file WikipediaHomePage page object model
 */
const {Key, By } = require('selenium-webdriver');
const BasePage = require ('./base_page');

/**
 *
 */
class WikipediaHomePage extends BasePage{

  /**
   * WikipediaHomePage constructor
   * @param {object} driver - Web driver object for controlling the web browser
   */
  constructor(driver){
    super(driver);
    this.driver = driver;
    this.url = 'https://www.wikipedia.org';
  }

  /**
   * Type text into search bar and press enter
   * @param {string} searchText - Text to be typed
   */
  async inputSearch(searchText){
    await this.inputText({ xpath: '//input[@name = \'search\']', text: searchText, thenHitEnter: true });
  }
}
module.exports = WikipediaHomePage;
