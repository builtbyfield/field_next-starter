const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase }) {
  addBase({
    ".dev-tools": {
      position: "fixed",
      bottom: 0,
      left: 0,
      zIndex: 9999,
      fontSize: 0,
    },
    ".dev-tools::before": {
      content: 'var(--breakpoint) " • " var(--env)',
      position: "absolute",
      bottom: "100%",
      left: 0,
      zIndex: 2,
      padding: "4px 5px",
      font: "12px/1 sans-serif",
      color: "white",
      whiteSpace: "nowrap",
      background: "green",
      pointerEvents: "none",
    },
    ".dev-tools-toggle": {
      position: "relative",
      zIndex: 2,
      width: 30,
      height: 30,
      border: 0,
      font: "0/0 a",
      color: "transparent",
      background: "black",
      appearance: "none",
      cursor: "pointer",
    },
    ".dev-tools-toggle::before, .dev-tools-toggle::after": {
      content: `''`,
      position: "absolute",
      top: 10,
      left: 8,
      width: 5,
      height: 10,
      borderRight: "1px solid white",
      borderLeft: "1px solid white",
    },
    ".dev-tools-toggle::after": {
      left: 16,
    },
    ".dev-tools-grid": {
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
      width:
        "calc(var(--container-width, 100%) - (2 * var(--outer-gutter, 0)));",
      height: "100%",
      margin: "0 auto",
      background: `repeating-linear-gradient(
        90deg,
        var(--grid-column-bg),
        var(--grid-column-bg) calc((100% - (((var(--grid-columns) - 1) * var(--inner-gutter)))) / var(--grid-columns)),
        rgba(0,0,0,0) calc((100% - (((var(--grid-columns) - 1) * var(--inner-gutter)))) / var(--grid-columns)),
        rgba(0,0,0,0) calc((100% - (((var(--grid-columns) - 1) * var(--inner-gutter)))) / var(--grid-columns) + var(--inner-gutter))
      )`,
      pointerEvents: "none",
    },
  });
});
