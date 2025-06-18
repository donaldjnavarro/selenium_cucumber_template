/**
 * @file Run cucumber-js tests and generate report.
 */
const { execSync } = require('child_process');

/**
 * Prepare a new test run by nuking the previous test results
 */
// Always run the report
try {
  execSync('node scripts/clean_report.js', { stdio: 'inherit' });
  console.log('🧹 Reports folder deleted.');
} catch (err) {
  console.log('⚠️ Failed to delete reports folder:', err.message);
  process.exit(1);
}

/**
 * Run the Cucumber test command
 */

// Get any CLI args passed after `npm run test-report`
const args = process.argv.slice(2).join(' ');
const testCommand = `npx cucumber-js --format json:reports/cucumber_report.json ${args}`;
try {
  execSync(testCommand, { stdio: 'inherit' });
} catch {
  console.warn(`⚠️ Test run failed`);
}

/**
 * Convert the JSON report into a beautiful HTML
 */
try {
  execSync('node scripts/create_report.js', { stdio: 'inherit' });
} catch (err) {
  console.error('❌ Failed to generate report:', err.message);
  process.exit(1);
}
