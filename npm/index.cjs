'use strict';

/**
 * Is iCloud's free tier still 5GB?
 *
 * @returns {true} Yes.
 */
function isIcloud5gb() {
  // Yes.
  return true;
}

module.exports = isIcloud5gb;
module.exports.isIcloud5gb = isIcloud5gb;
module.exports.default = isIcloud5gb;
