const { BeforeAll, AfterAll, After, Before, Status } = require('@cucumber/cucumber');
const { startBrowser } = require('../../utilities');

// BeforeAll(async function () {
//   console.log(`BeforeAll`);
// });

Before(async function () {

  /** Open a web browser to use for the testing */
  this.driver = await startBrowser();
});

After(async function ({ pickle, result }) {
  /** Teardown browser if one is open */
  if (this.driver) {
    this.driver.quit();
  }
});

// AfterAll(async function () {
//   console.log(`AfterAll`);
// });
