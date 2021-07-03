const path = rerquire('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const resolve = paths => path.resolve(__dirname, paths)

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: '[name].js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: resolve('./src/index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*']
    }),
  ]
}