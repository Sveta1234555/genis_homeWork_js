const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //вход
  // для добавления babel-polyfill^
  // entry: "./index.js",   было
  // делаем массив, просто вернет строку
  // entry: ["./index.js"],
  // первым элементом массива сделаем
  // entry: ["@babel/polyfill", "./app/js", "./index.js"],
  // убираем "./app/js",
  entry: ["@babel/polyfill", "./index.js"],

  //выходная сборка
  output: {
    //Как будет называться сборка
    filename: ".bundle.js",
    path: path.resolve(__dirname, "dist"),
    // "dist" - это каталог , создавшийся в проекте после "npx webpack –mode development ./index.js"
    //для очистки папки:
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [["@babel/preset-env"]],
          },
        },
      },
    ],
  },
  devServer: {
    port: 3000,
  },
};
