const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase, theme }) {
  const fontFamilies = theme("fontFamilies", {});

  const families = Object.entries(fontFamilies).map((a) => {
    const [name, family] = a;
    return {
      ":root": {
        [`--${name}`]: family,
      },
    };
  });

  addBase(families);
});
