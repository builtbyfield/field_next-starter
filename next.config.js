const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.alias["components"] = path.join(__dirname, "src/components");
    config.resolve.alias["utils"] = path.join(__dirname, "src/utils");
    return config;
  },
};
