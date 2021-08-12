const path = require('path')
const DonePlugin = require('./plugins/DonePlugin')
const AssetPlugin = require('./plugins/AssetPlugin')
const ZipPlugin = require('./plugins/ZipPlugin')
const AutoExternalPlugin = require('./plugins/AutoExternalPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = paths => path.resolve(__dirname, paths)

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },
  plugins: [
    // new DonePlugin({ name: 'wyb' }),
    // new AssetPlugin({ name: 'wyb' })
    // new ZipPlugin({ filename: 'main.zip' }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new AutoExternalPlugin({
      jquery: {
        // 模块名
        expose: '$', // cdn的全局变量
        url: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js',
      },
      lodash: {
        expose: '_', // cdn的全局变量
        url: 'https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.core.js',
      }
    }),
  ],
}
