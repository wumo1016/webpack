const path = require('path')
const RunPlugin = require('./my-webpack/plugins/run-plugin.js')
const DonePlugin = require('./my-webpack/plugins/done-plugin')
const AssetsPlugin = require('./my-webpack/plugins/assets-plugin')

const resolve = (paths) => path.resolve(__dirname, paths)

module.exports = {
  mode: 'production',
  devtool: false,
  entry: {
    index1: './src/index1.js',
    index2: './src/index2.js',
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [path.resolve(__dirname, 'my-webpack/loaders/loader1.js')],
      },
    ],
  },
  plugins: [new RunPlugin(), new DonePlugin(), new AssetsPlugin()],
}
