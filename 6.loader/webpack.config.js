const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const resolve = (paths) => path.resolve(__dirname, paths)

import TestLoader from './loaders/post2'

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['normal1-loader', 'normal2-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: ['pre1-loader', 'pre2-loader'],
      },
      {
        enforce: 'post',
        test: /\.js$/,
        use: ['post1-loader', 'post2-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./src/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*'],
    }),
  ],
}
