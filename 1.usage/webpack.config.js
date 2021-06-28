const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        loader: "raw-loader"
      },
      { // 需要安装包 style-loader css-loader
        test: /\.css$/,
        use: [
          'style-loader', // 可以将css插入到dom中
          'css-loader', // 处理 @import和url()
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
