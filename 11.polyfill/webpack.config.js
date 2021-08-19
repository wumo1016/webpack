const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // mode: 'development',
  mode: 'production',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env'
                  // {
                  //   // useBuiltIns: false, // 全量打包 @babel/polyfill
                  //   // useBuiltIns: 'entry', // 只会引入浏览器不兼容的 polyfill
                  //   useBuiltIns: 'usage', // 只会引入浏览器不兼容的 polyfill
                  //   corejs: 3
                  // }
                ]
              ],
              plugins: [
                [
                  '@babel/plugin-transform-runtime',
                  {
                    corejs: 3 // 当代码中使用 ES对象或方法的时候 会自动引入 babel-runtime/core-js
                  }
                ]
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
