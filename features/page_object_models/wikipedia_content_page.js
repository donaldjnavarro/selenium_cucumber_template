/**
 * @file WikipediaContentPage page object model
 */
const BasePage = require('./base_page');

/**
 * Page model for all wikipedia "wiki" pages
 */
class WikipediaContentPage extends BasePage {

  constructor(driver) {
    super(driver);
    this.driver = driver;
    this.expected = {
      url: 'https://en.wikipedia.org/wiki/'
    };
  }

  /**
   * Click the hamburger menu in the header
   * @returns {Promise<void>}
   */
  async clickMenu () {
    await this.clickElement('//input[@aria-label = \'Main menu\']');
  }
}

module.exports = WikipediaContentPage;
