/**
 * @file
 */
const fs = require('fs');
const path = require('path');
const reportsPath = path.join(process.cwd(), 'reports');

if (fs.existsSync(reportsPath)) {
  fs.rmSync(reportsPath, { recursive: true, force: true });
} else {
  throw new Error(`Folder ${reportsPath} did not exist`);
}
