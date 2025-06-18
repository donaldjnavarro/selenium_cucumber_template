
/**
 * @file cucumber.js
 * Configuration file for Cucumber.js test runner.
 * Specifies required bootstrap and step definition files,
 * and sets the output to be quiet when publishing.
 */
module.exports = {
  default: [
    '--require', './cucumber.bootstrap.js',
    '--require', 'features/**/*.js'
  ]
};
