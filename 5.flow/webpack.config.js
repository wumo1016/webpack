const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const resolve = paths => path.resolve(__dirname, paths)

module.exports = {
  mode: 'development',
  devtool: false,
  entry: {
    index: './src/index.js',
    index2: './src/index2.js',
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./src/index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*']
    }),
  ]
}