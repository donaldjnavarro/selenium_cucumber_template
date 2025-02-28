const { BeforeAll, AfterAll, After, Before, Status } = require('cucumber');
const { startBrowser } = require('../../utilities')

// BeforeAll(async function () {
//   console.log(`BeforeAll`);
// });

Before(async function () {
  // console.log(`Before`);

  /** Open a web browser to use for the testing */
  this.driver = await startBrowser();
});

After(async function ({ pickle, result }) {
  // console.log(`After`);
  
  /** Teardown browser if one is open */
  if (this.driver) {
    this.driver.quit();
  }
});

// AfterAll(async function () {
//   console.log(`AfterAll`);
// });
