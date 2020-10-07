const path = require("path");

module.exports = {
  mode: "development",
  entry: "./main.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    library: "ui",
    libraryTarget: "commonjs",
  },
  module: {
    rules: [],
  },
  devServer: {
    compress: true,
    port: 9000,
  },
};
