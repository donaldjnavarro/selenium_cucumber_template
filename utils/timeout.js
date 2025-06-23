/**
 * @file Configure timeout for Cucumber
 */
const { setDefaultTimeout } = require('@cucumber/cucumber');

/**
 * Sets the timeout for Cucumber
 * @param {number} [timeout] - Timeout in milliseconds
 * @returns {number} Number of milliseconds used when setting setDefaultTimeout()
 */
function setTimeout (timeout = Number(process.env.TEST_TIMEOUT) || 20000) {
  // Inform the user if the .env value was not valid
  if (!Number(process.env.TEST_TIMEOUT)) {
    logger.warn(`.env value TEST_TIMEOUT=${process.env.TEST_TIMEOUT} is not valid, so defaulting to ${timeout}`);
  }
  // Set the timeout for Cucumber
  setDefaultTimeout(timeout);
  logger.info(`Cucumber timeout set to ${timeout} ms`);
  return timeout;
}

module.exports = {
  setTimeout,
};
