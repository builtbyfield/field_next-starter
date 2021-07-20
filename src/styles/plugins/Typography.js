const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase, theme }) {
  const breakpoints = theme("screens", {});
  const fontFamilies = theme("fontFamilies", {});
  const textStyles = theme("textStyles", {});

  const firstBp = Object.keys(breakpoints)[0];

  const families = Object.entries(fontFamilies).map((a) => {
    const [name, family] = a;
    return {
      ":root": {
        [`--font-${name}`]: family,
      },
    };
  });

  const styles = Object.entries(textStyles).map((a) => {
    const [name, typo] = a;
    const className = `.ts-${name}`;

    return Object.entries(typo).map((b) => {
      const [bp, settings] = b;
      if (bp === firstBp) {
        return {
          [className]: {
            ...settings,
          },
        };
      } else {
        return {
          [`@screen ${bp}`]: {
            [className]: {
              ...settings,
            },
          },
        };
      }
    });
  });

  addBase(families);
  addBase(styles);
});
