const plugin = require("tailwindcss/plugin");
const _ = require("lodash");
const variablesApi = require("@mertasan/tailwindcss-variables/api");

const pluginComponents = require("./components");
const pluginThemes = require("./themes");
const { isColor, toHslString, colorVariable } = require("./utils");

const flattenOptions = (options) => {
  return _.merge(
    {},
    ..._.toPairs(options).map(([keys, value]) => {
      const flattenValue = _.isPlainObject(value)
        ? flattenOptions(value)
        : value;
      return _.fromPairs(keys.split(", ").map((key) => [key, flattenValue]));
    })
  );
};

const extractVariables = (object, value, key) => {
  if (typeof value === "object") {
    Object.keys(value).forEach((innerKey) => {
      extractVariables(value, value[innerKey], innerKey);
    });
  } else {
    if (isColor(value)) {
      object[key] = toHslString(value);
    } else {
      object[key] = value;
    }
  }
};

const setVariables = (variables) => {
  if (typeof variables === "object") {
    // console.log(variables);
    Object.keys(variables).forEach((key) => {
      extractVariables(variables, variables[key], key);
    });
  }
  return variables;
  // const something = flattenOptions(variable);

  // console.log(something);

  // _.forEach(variable, function (value, key) {
  //   console.log(key);

  //   console.log(isColor(value));

  // if (isColor(value)) {
  //   return toHslString(value);
  // } else {
  //   return value;
  // }
  // });
};

module.exports = plugin.withOptions(
  function (options) {
    // console.log(
    //   setVariables({
    //     colors: { primary: "#fff000", dark: "rgb(0,255,255)" },
    //     spacing: {},
    //   })
    // );

    return function ({ addComponents, e, theme, config }) {
      let allVariables = {};
      let allComponents = {};

      console.log(
        _.merge(
          setVariables(pluginThemes(theme).themes),
          setVariables(theme("myPlugin.themes"))
          //setVariables
        )
      );

      allVariables = variablesApi.variables(
        _.merge(
          setVariables(pluginThemes(theme).themes),
          setVariables(theme("myPlugin.themes"))
          //setVariables
        ),
        {
          variablePrefix: theme("myPlugin.prefix", "--forms"),
        }
      );

      allComponents = variablesApi.getComponents(
        ".form",
        pluginComponents(theme)
      );

      // Automatically register variables to classes via API.
      addComponents(allVariables);

      // Automatically register components via API.
      addComponents(allComponents);
    };
  },
  function (options) {
    return {
      theme: {
        colors: (theme) => ({
          gorilla: colorVariable(`${theme("myPlugin.prefix")}-colors-primary`),
        }),
      },
    };
  }
);
