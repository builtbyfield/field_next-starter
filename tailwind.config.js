module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    myPlugin: {
      prefix: "--prefix",
      themes: {
        ".light": {
          colors: {
            primary: "#fff000", // custom color instead of default color
          },
          textColor: {
            primary: "#000000",
          },
          spacing: {
            2: "8px",
          },
        },
        ".dark": {
          colors: {
            primary: "#666666", // custom color instead of default color
          },
          spacing: {
            2: "8px",
          },
        },
      },
    },
    extend: {
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
    },
  },
  plugins: [require("./tailwind/myPlugin")],
};
