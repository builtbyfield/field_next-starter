const keywords = require("css-color-names");
const Color = require("color");

const isRgb = function (str) {
  const regex = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
  return regex.test(str);
};
const isRgba = function (str) {
  const regex =
    /^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/;
  return regex.test(str);
};
const isHsl = function (str) {
  const regex =
    /^hsl\(\s*(\d+)\s*,\s*(\d*(?:\.\d+)?%)\s*,\s*(\d*(?:\.\d+)?%)\)$/;
  return regex.test(str);
};
const isHsla = function (str) {
  const regex = /^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)$/;
  return regex.test(str);
};
const isHex = function (str) {
  const regex = /^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/i;
  return regex.test(str);
};
const isKeyword = function (str) {
  return keywords.hasOwnProperty(str);
};
const isInherit = function (str) {
  return str === "inherit";
};
const isCurrentColor = function (str) {
  return str === "currentColor" || str === "currentcolor";
};
const isTransparent = function (str) {
  return str === "transparent";
};

const isColor = (str) => {
  return (
    isRgb(str) || isRgba(str) || isHsl(str) || isHsla(str) || isHex(str)
    // ||
    // isKeyword(str) ||
    // isInherit(str) ||
    // isCurrentColor(str) ||
    // isTransparent(str)
  );
};

const toHslString = (color) => {
  let c = [];
  c = Color(color).hsl().array();
  return `${c[0]},${parseFloat(c[1].toFixed(1))}%,${c[2].toFixed(1)}%`;
};

const colorVariable = (cssVariable) => {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${cssVariable}),${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `hsla(var(${cssVariable}),var(${opacityVariable},1))`;
    }
    return `hsl(var(${cssVariable}))`;
  };
};

module.exports.isColor = isColor;
module.exports.toHslString = toHslString;
module.exports.colorVariable = colorVariable;
