const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const resolve = (paths) => path.resolve(__dirname, paths)

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },
  resolveLoader: {
    alias: {
      // 单个配置loader包别名
      // 'babel-loader': resolve('./loaders/babel-loader.js'),
    },
    modules: [path.resolve('./loaders'), 'node_modules'], // 批量配置 先去loaders下去找 找不到再去node_modules中去找
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: ['babel-loader'],
      // },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              sourceMaps: true,
            },
          },
        ],
      },
      // {
      //   test: /\.(jpg|png)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         filename: '[hash:8].[ext]',
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              filename: '[hash:8].[ext]',
              limit: 10 * 1024,
            },
          },
        ],
      },
      // {
      //   test: /\.js$/,
      //   use: ['normal1-loader', 'normal2-loader'],
      // },
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   use: ['pre1-loader', 'pre2-loader'],
      // },
      // {
      //   enforce: 'post',
      //   test: /\.js$/,
      //   use: ['post1-loader', 'post2-loader'],
      // },
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
