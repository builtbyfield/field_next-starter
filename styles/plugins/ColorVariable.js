/**
 * https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo/issues/1#issuecomment-770595786
 */

module.exports = function ColorVariable(cssVariable) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(--${cssVariable}),${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `hsla(var(--${cssVariable}),var(${opacityVariable}, 1))`;
    }
    return `hsl(var(--${cssVariable}))`;
  };
};
