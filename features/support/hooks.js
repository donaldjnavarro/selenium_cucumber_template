/**
 * @file Cucumber hooks
 */
const { After, Before, setDefaultTimeout } = require('@cucumber/cucumber');
const { startBrowser } = require('../../utils/browser');
const logger = require('../../utils/logger');

/** Set global timeout for Cucumber */
// If .env doesn't provide a valid timeout value, warn the user and set a default
const defaultTimeout = 20000;
if (!Number(process.env.TIMEOUT)) {
  logger.warn(`.env value TIMEOUT=${process.env.TIMEOUT} is not valid, so defaulting to ${defaultTimeout}`);

}
const timeout = Number(process.env.TIMEOUT || defaultTimeout);
// Set the timeout for Cucumber
setDefaultTimeout(timeout);
logger.info(`Timeout set to ${timeout} ms`);

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
