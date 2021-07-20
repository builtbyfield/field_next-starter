const Color = require("color");

function toHslString(color) {
  let c = [];
  c = Color(color).hsl().array();
  return `${parseFloat(c[0]).toFixed(1)},${parseFloat(
    c[1].toFixed(1)
  )}%,${c[2].toFixed(1)}%`;
}

function normalizeScale(scale) {
  let newScale = {};
  Object.entries(scale).forEach((item, i) => {
    newScale[i + 1] = toHslString(item[1]);
  });
  return newScale;
}

module.exports = { toHslString, normalizeScale };
