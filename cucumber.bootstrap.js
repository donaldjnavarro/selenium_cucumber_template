
/**
 * @file
 * Bootstrap file for initializing global configuration and logging for the Selenium Cucumber template project.
 *
 * Ensures that global and environment variables are accessible throughout the test suite.
 */

// Load .env file
require('dotenv').config();

// Load logger
const logger = require('./utils/logger');
global.logger = logger;

// Set the cucumber timeout
const { setTimeout } = require('./utils/timeout');
setTimeout();

logger.info('Cucumber bootstrap loaded');
