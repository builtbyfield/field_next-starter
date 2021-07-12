// Default. Use with em() and rem() functions
export const baseFontSize = 16;

/**
 * Convert a given px unit to a rem unit
 * @param {number} px
 * @returns {string}
 */
export function rem(px) {
  return `${px / baseFontSize}rem`;
}

/**
 * Convert a given px unit to a em unit
 * @param {number} px
 * @returns {string}
 */
export function em(px) {
  return `${px / baseFontSize}em`;
}

/**
 * Convert a given px unit to its string representation
 * @param {number} value - number of pixels
 * @returns {string}
 */
export function px(value) {
  return `${value}px`;
}

// Mini-unit. Use with miniUnits() function
export const miniUnit = 8;

/**
 * Return mini-unit multipied by a count into a string representation
 * @param {number} count - number of mini-units
 * @returns {string}
 */
export function miniUnits(count) {
  return rem(miniUnit * count);
}
