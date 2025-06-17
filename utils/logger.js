/**
 * @file Logger with enhanced functionality
 */
const { createLogger, format, transports, config } = require('winston');
const fs = require('fs');
const path = require('path');

/**
 * Create a fresh log file every run
 */
const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}
const logFile = path.join(__dirname, '../logs/latest.log');
fs.writeFileSync(logFile, '', { flag: 'w' });


/**
 * Validate log level configured in .env
 */
// Check if .env has a value and normalize capitalization
const envLevel = process.env.LOG_LEVEL?.toLowerCase();

// Collect the list of valid log levels
const validLevels = Object.keys(config.npm.levels);

// Default to debug if no valid values provided by .env
const defaultLogLevel = 'debug';
const level = validLevels.includes(envLevel) ? envLevel : defaultLogLevel;

/**
 * Create the logger instance
 */
const timestampFormat = 'YYYY-MM-DD HH:mm:ss';
const logger = createLogger({
  level,
  transports: [
    // Console with colors
    new transports.Console({
      format: format.combine(
        format.colorize({ all: false }),
        format.timestamp({ format: timestampFormat }),
        format.printf(({ timestamp, level, message }) => {
          return `[${timestamp}] [${level}]: ${message}`;
        })
      )
    }),

    // File without colors
    new transports.File({
      filename: logFile,
      format: format.combine(
        format.timestamp({ format: timestampFormat }),
        format.printf(({ timestamp, level, message }) => {
          return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
        })
      )
    })
  ]
});
module.exports = logger;

// Warn users if their .env has an invalid value for LOG_LEVEL
if (!validLevels.includes(envLevel)) {
  logger.warn(`Invalid value set in .env: LOG_LEVEL=${process.env.LOG_LEVEL} but expected one of ${JSON.stringify(validLevels)} so defaulting to LOG_LEVEL=${defaultLogLevel}`);
}
logger.info(`Winston logger initialized with LOG_LEVEL=${level}`);
