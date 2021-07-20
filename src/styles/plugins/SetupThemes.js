const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase, config }) {
  const themes = config("themes", {});

  let styles = {};

  Object.entries(themes).forEach((theme) => {
    const [themeName, themeValues] = theme;
    styles[`.theme-${themeName}`] = {};

    Object.entries(themeValues.colors).forEach((scale) => {
      const [scaleName, scaleValues] = scale;

      Object.entries(scaleValues).forEach((color) => {
        setColor(color, themeName, scaleName);
      });
    });
  });

  function setColor(color, themeName, scaleName) {
    const [name, value] = color;

    if (typeof value === "string") {
      const colorName = `${scaleName}-${name}`;

      styles[`.theme-${themeName}`][`--${colorName}`] = value;
    }
  }

  addBase(styles);
});
