const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              // [ // 需要安装包 babel-plugin-import 支持 tree-shaking 按需打包 支持支特定库
              //   "import", {
              //     libraryName: 'lodash',
              //   }
              // ]
              [
                path.resolve(__dirname, 'doc/4.babel-plugin-import.js'),
                {
                  libraryName: 'lodash'
                }
              ]
            ]
          }
        },
      },
    ],
  },
};