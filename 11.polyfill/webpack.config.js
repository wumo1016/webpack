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
                  '@babel/preset-env',
                  {
                    // useBuiltIns: false, // 全量打包 @babel/polyfill
                    // useBuiltIns: 'entry', // 只会引入浏览器不兼容的 polyfill
                    useBuiltIns: 'usage', // 只会引入浏览器不兼容的 polyfill
                    corejs: 3
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
