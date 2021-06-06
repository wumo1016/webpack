const path = require('path')
const HtmlWebpackPligin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = (env) => {
  return {
    // mode: 'development',
    entry: {
      main: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    },
    module: {
      rules: [{
        test: /\.txt$/,
        use: ['raw-loader']
      }]
    },
    plugins: [
      new HtmlWebpackPligin({
        template: './src/index.html',
        filename: 'index.html'
      }),
      // 定义全局变量的插件
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env.production ? 'production' : 'development')
      })
    ]
  }
}