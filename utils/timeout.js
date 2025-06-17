/**
 * @file Configure timeout for Cucumber
 */
const { setDefaultTimeout } = require('@cucumber/cucumber');
const logger = require('../utils/logger');

/**
 * Sets the timeout for Cucumber
 * @param {number} [timeout] - Timeout in milliseconds
 * @returns {number} Number of milliseconds used when setting setDefaultTimeout()
 */
function setTimeout (timeout = Number(process.env.TIMEOUT || 20000)) {
  if (!Number(process.env.TIMEOUT)) {
    logger.warn(`.env value TIMEOUT=${process.env.TIMEOUT} is not valid, so defaulting to ${timeout}`);

  }
  // Set the timeout for Cucumber
  setDefaultTimeout(timeout);
  logger.info(`Timeout set to ${timeout} ms`);
  return timeout;
}

module.exports = {
  setTimeout,
};
