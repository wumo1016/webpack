const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              name: '[hash:10].[ext]',
              limit: 10 * 1024,
              outputPath: 'static/images'
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
          from: resolve('./public/static'),
          to: resolve('./dist/static')
        }
      ]
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*']
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css'
    })
  ],
};
