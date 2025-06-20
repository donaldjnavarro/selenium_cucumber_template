/**
 * @file WikipediaContentPage page object model
 */
const BasePage = require('../base_page');

/**
 * Page model for all wikipedia "wiki" pages
 */
class WikipediaContentPage extends BasePage {

  constructor(driver) {
    super(driver);
    this.driver = driver;
    this.locators = {
      menu: '//input[@aria-label = \'Main menu\']',
      search: '//input[@name = \'search\' and @accesskey= \'f\']',
    };
    this.expected = {
      url: 'https://en.wikipedia.org/wiki/'
    };
  }

  /**
   * Click the hamburger menu in the header
   * @returns {Promise<void>}
   */
  async clickMenu () {
    await this.clickElement(this.locators.menu);
  }

  /**
   * Type text into search bar in the global header and press enter
   * @param {string} searchText - Text to be typed
   */
  async inputSearch(searchText){
    await this.inputText(
      {
        xpath: this.locators.search,
        text: searchText,
        thenHitEnter: true
      }
    );
  }
}

module.exports = WikipediaContentPage;
