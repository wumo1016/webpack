const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // publicPath: '/test' // 打包后文件的前缀
  },
  devServer: {
    port: 8080,
    open: true, // 是否打开浏览器
    contentBase: path.resolve(__dirname, 'assets'), // 额外的静态文件内容的目录
    compress: true, // 是否启用压缩
    // publicPath: '/' // 自己优先 没有就用output的
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: [ // 执行顺序是从后往前
          'style-loader', // 第一个返回的一定是js 因为它的结果需要给webpack用
          {
            loader: 'css-loader'
          },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader' // css 预处理器
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV2': JSON.stringify('development'), // 'development' 会被当成一个变量 可以直接写成 "'production'"
      'NODE_ENV2': JSON.stringify('development')
    })
  ]
}