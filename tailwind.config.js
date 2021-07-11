const path = require("path");

const {
  ApplyColorVariables,
  ColorTokens,
  Container,
  DevTools,
  FontFamilies,
  GridGap,
  RatioBox,
  Setup,
  TextStyles,
} = require("./src/tailwind/plugins");
const theme = require("./src/tailwind/theme");

module.exports = {
  mode: "jit",
  purge: [
    path.join(__dirname, "/src/components/**/*.{js,ts,jsx,tsx}"),
    path.join(__dirname, "/src/pages/**/*.{js,ts,jsx,tsx}"),
  ],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    container: false,
  },
  plugins: [
    ColorTokens,
    Container,
    DevTools,
    FontFamilies,
    GridGap,
    RatioBox,
    Setup,
    TextStyles,
  ],
  theme: {
    screens: theme.breakpoints,
    mainColWidths: theme.container,
    innerGutters: theme.gutters.inner,
    outerGutters: theme.gutters.outer,
    columnCount: theme.columns,
    fontFamilies: theme.fontFamilies,
    textStyles: theme.textStyles,
    colors: theme.color.tokens,
    backgroundColor: ApplyColorVariables(
      theme.color.tokens,
      theme.color.backgroundColor
    ),
    borderColor: ApplyColorVariables(
      theme.color.tokens,
      theme.color.borderColor
    ),
    textColor: ApplyColorVariables(theme.color.tokens, theme.color.textColor),
    ratios: theme.ratios,
    extend: {
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
    },
  },
};
