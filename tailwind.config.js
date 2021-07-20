const {
  ColorVariable,
  GenerateScale,
  Container,
  DevTools,
  SetupShared,
  SetupThemes,
  Typography,
} = require("./src/styles/plugins");
const theme = require("./src/styles/theme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: false,
  plugins: [DevTools, SetupShared, SetupThemes, Container, Typography],
  corePlugins: { container: false },
  theme: {
    screens: theme.breakpoints,
    container: theme.container,
    innerGutters: theme.gutters.inner,
    outerGutters: theme.gutters.outer,
    columnCount: theme.columns,
    fontFamilies: theme.fontFamilies,
    textStyles: theme.textStyles,
    colors: {
      // Base
      transparent: "var(--transparent)",
      current: "var(--current)",
      black: ColorVariable("black"),
      white: ColorVariable("white"),
      // Scales
      gray: GenerateScale("gray", 12),
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      app: ColorVariable("background-app"),
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: ColorVariable("border-subtle"),
      subtle: ColorVariable("border-subtle"),
      strong: ColorVariable("border-strong"),
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: ColorVariable("text-primary"),
      secondary: ColorVariable("text-secondary"),
    }),
    extend: {
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
    },
  },
  themes: {
    light: {
      colors: {
        ...theme.lightTheme,
      },
    },
  },
};
