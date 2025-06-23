/**
 * @file Utility functions for timing and waiting conditions in tests.
 */

/**
 * Waits until assertionFn returns truthy, then asserts the result.
 * If it never becomes truthy, assert will fail.
 * @param {Function} assertionFn - A function that performs an assertion and throws if it fails.
 * @param {object} [options] - Optional settings.
 * @param {number} [options.timeout] - Maximum time to wait (in ms). Default is 5000ms.
 * @param {number} [options.interval] - How often to check (in ms). Default is 100ms.
 * @returns {Promise<void>}
 */
async function waitAndAssert(
  assertionFn,
  {
    timeout = Number(process.env.ASSERTION_TIMEOUT) || 10000,
    interval = 100,
  } = {}
) {
  // Inform user if the .env value was not valid
  if (!Number(process.env.ASSERTION_TIMEOUT)) {
    logger.warn(`.env value ASSERTION_TIMEOUT=${process.env.ASSERTION_TIMEOUT} is not valid, so defaulting to ${timeout}`);
  }

  const endTime = Date.now() + timeout;
  while (Date.now() < endTime) {
    try {
      await assertionFn();
      // If the assertion passes, end the loops early
      return;
    } catch {
      // If the assertion failed, wait and do another loop
      await new Promise(res => setTimeout(res, interval));
    }
  }

  // 🧨 Final loop - let it fail naturally
  await assertionFn();
}

module.exports = waitAndAssert;
