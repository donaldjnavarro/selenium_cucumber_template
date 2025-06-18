
/**
 * @file Generates an HTML report from Cucumber JSON results.
 */

const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_report.html',
  screenshotsDirectory: 'reports/screenshots/',
  storeScreenshots: true,
};

reporter.generate(options);
