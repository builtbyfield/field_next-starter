const ColorVariable = require("./ColorVariable");

module.exports = function GenerateScale(color, length) {
  let lengthArray = [];
  let newScale = {};

  lengthArray = Array.apply(0, Array(length)).map(function (x, i) {
    return i + 1;
  });

  newScale = lengthArray.reduce(
    (a, key) => Object.assign(a, { [key]: ColorVariable(`${color}-${key}`) }),
    {}
  );

  return newScale;
};
