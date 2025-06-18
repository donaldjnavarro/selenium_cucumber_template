/**
 * @file Cucumber hooks
 */
const { After, Before } = require('@cucumber/cucumber');
const { startBrowser } = require('../../utils/browser');
const fs = require('fs');
const path = require('path');

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

After(async function (scenario) {
  if (scenario.result.status === 'FAILED' && this.driver) {
    const screenshot = await this.driver.takeScreenshot();

    // Basic validation
    if (!screenshot || screenshot.length < 100) {
      logger.warn('Screenshot data is suspiciously short or empty');
    } else {
      logger.debug(`Screenshot captured, length: ${screenshot.length}`);
    }

    // Create folder
    const dir = path.join(process.cwd(), 'reports', 'screenshots');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Save screenshot to file (optional)
    const safeName = scenario.pickle.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const filepath = path.join(dir, `${safeName}.png`);
    fs.mkdirSync(path.dirname(filepath), { recursive: true });
    fs.writeFileSync(filepath, screenshot, 'base64');
    console.log(`📸 Screenshot saved to ${filepath}`);

    // Attach screenshot to the report
    const imageBuffer = Buffer.from(screenshot, 'base64');
    this.attach(imageBuffer, 'image/png');
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
