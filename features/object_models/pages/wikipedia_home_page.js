/**
 * @file WikipediaHomePage page object model
 */
const BasePage = require ('../base_page');

/**
 *
 */
class WikipediaHomePage extends BasePage{

  constructor(driver){
    super(driver);
    this.driver = driver;
    this.expected = {
      url: 'https://www.wikipedia.org',
      pageTitle: 'Wikipedia'
    };
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
