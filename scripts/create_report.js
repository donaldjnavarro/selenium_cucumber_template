
/**
 * @file Generates an HTML report from Cucumber JSON results.
 */

const reporter = require('cucumber-html-reporter');
const path = require('path');

const options = {
  theme: 'bootstrap',
  jsonFile: path.join(process.cwd(), 'reports', 'cucumber_report.json'),
  output: path.join(process.cwd(), 'reports', 'cucumber_report.html'),
  screenshotsDirectory: path.join(process.cwd(), 'reports', 'screenshots'),
  storeScreenshots: true,
};

reporter.generate(options);
