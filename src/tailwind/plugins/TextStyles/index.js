const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase, theme }) {
  const breakpoints = theme("screens", {});
  const textStyles = theme("textStyles", {});
  const firstBp = Object.keys(breakpoints)[0];

  const styles = Object.entries(textStyles).map((a) => {
    const [name, typo] = a;
    const className = `.f-${name}`;

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

  addBase(styles);
});
