const path = require('path')
const DonePlugin = require('./plugins/DonePlugin')
const AssetPlugin = require('./plugins/AssetPlugin')
const ZipPlugin = require('./plugins/ZipPlugin')
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
    new ZipPlugin({ filename: 'main.zip' }),
  ],
}
