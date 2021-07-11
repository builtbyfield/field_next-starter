const path = require("path");

const {
  Setup,
  DevTools,
  Container,
  ColorTokens,
  ApplyColorVariables,
} = require("./plugins");
const theme = require("./theme");

module.exports = {
  mode: "jit",
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  // purge: [path.join(__dirname, "/src/**/*.{js,ts,jsx,tsx}")],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
    extend: {
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [Setup, Container, ColorTokens, DevTools],
};
