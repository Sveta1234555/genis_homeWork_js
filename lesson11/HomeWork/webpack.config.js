const path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    filename: ".bundle.js",
    path: path.resolve(__dirname, "dist"),
    // "dist" - это каталог , создавшийся в проекте после "npx webpack –mode development ./index.js"
    clean: true,
  },
};
