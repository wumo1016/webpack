const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

const resolve = paths => path.resolve(__dirname, paths)

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },
  devServer: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@ass': resolve('./src/assets'),
    }
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // 可以将css插入到dom中
          'css-loader', // 处理 @import和url()
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg)/,
        use: [
          {
            loader: 'url-loader', // 功能大于file-loader 比它多limit参数
            options: {
              esModule: false, // require之后不用使用default取值
              name: '[hash:10].[ext]', // 文件名 [hash:]取10位hash值 [ext]原来的扩展名
              limit: 10 * 1024, // 8k 小于8k就是转成base64字符串
              outputPath: 'img/' // 图片输出路径
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        use: [
          { // 需安装包 babel-loader @babel/core @babel/preset-env
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: '>0.25%, not dead'
                  }
                ]
              ],
              plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                ['@babel/plugin-proposal-private-methods', { loose: true }],
              ]
            },
          }
        ]
      },
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./public/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve('./src/static'),
          to: resolve('./dist/static')
        }
      ]
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*']
    })
  ],
};
