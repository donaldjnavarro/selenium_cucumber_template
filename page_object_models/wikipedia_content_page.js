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

}

module.exports = WikipediaContentPage;
