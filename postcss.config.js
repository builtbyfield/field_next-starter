module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-modules-values": {},
    "postcss-custom-media": {
      importFrom: [`${__dirname}/src/data/customMedia.js`],
    },
    "postcss-env-function": {
      importFrom: [
        {
          environmentVariables: {
            // Breakpoints
            "--bp-xs": "0px",
            "--bp-sm": "544px",
            "--bp-md": "650px",
            "--bp-lg": "990px",
            "--bp-xl": "1300px",
            "--bp-xxl": "1520px",
            // Values
            "--padding": "50px",
          },
        },
      ],
    },
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
