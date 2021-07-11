const path = require('path')
const RunPlugin = require('./my-webpack/plugins/run-plugin.js');
const DonePlugin = require('./my-webpack/plugins/done-plugin');

const resolve = paths => path.resolve(__dirname, paths)

module.exports = {
  mode: 'production',
  devtool: false,
  entry: {
    index: './src/index.js',
    index2: './src/index2.js',
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js'
  },
  plugins: [
    new RunPlugin(),
    new DonePlugin(),
  ]
}