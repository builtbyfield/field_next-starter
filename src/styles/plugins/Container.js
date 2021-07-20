const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    ".container": {
      width:
        "calc(var(--container-width, 100%) - (2 * var(--outer-gutter, 0px)))",
      marginRight: "auto",
      marginLeft: "auto",
    },
    ".container .container": {
      width: "auto",
    },
    ".breakout": {
      position: "relative",
      left: "50%",
      width: "100vw",
      marginLeft: "-50vw",
    },
  });
});
