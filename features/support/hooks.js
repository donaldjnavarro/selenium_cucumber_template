/**
 * @file Cucumber hooks
 */
const { After, Before } = require('@cucumber/cucumber');
const { startBrowser } = require('../../utilities');

// BeforeAll(async function () {
//   console.log(`BeforeAll`);
// });

Before(async function () {

  /** Open a web browser to use for the testing */
  this.driver = await startBrowser();
});

After(async function () {
  /** Teardown browser if one is open */
  if (this.driver) {
    this.driver.quit();
  }
});

// After(async function ({ pickle, result }) {
//   if (result.status === 'FAILED') {
//     console.log('\nTEST FAILED:');
//     console.log(`- Scenario: ${pickle.name}`);
//     console.log(`- File: ${pickle.uri}`);
//   }
// });

// AfterAll(async function () {
//   console.log(`AfterAll`);
// });
