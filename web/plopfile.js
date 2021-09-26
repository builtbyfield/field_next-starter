module.exports = function (plop) {
  // Component generator
  plop.setGenerator("component", {
    description: "Create new Component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "templates/Component/Component.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.js",
        templateFile: "templates/Component/index.js.hbs",
      },
    ],
  });
  // View generator
  plop.setGenerator("view", {
    description: "Create new View",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "View name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/views/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "templates/View/View.js.hbs",
      },
      {
        type: "add",
        path: "src/views/{{pascalCase name}}/index.js",
        templateFile: "templates/View/index.js.hbs",
      },
    ],
  });
};
