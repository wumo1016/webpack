const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = paths => path.resolve(__dirname, paths)

const bootstrap = resolve('node_modules/bootstrap/dist/css/bootstrap.min.css')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: {
    main: './src/index.js',
    vendor: ['lodash'],
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },
  resolve: {
    // 可以不添加后缀 按照这个顺序查找
    extensions: ['.js', '.json'],
    // 依赖别名
    alias: {
      bootstrap,
    },
    // 指定依赖的查找位置 如果有的依赖不在node_modules中 可以添加
    modules: ['node_modules', 'my-modules'],
    // 打包target 为web|webworker时 默认值为 ['browser', 'module', 'main']
    // 为其他值时 默认值为 ['module', 'main']
    mainFields: ['root', 'browser', 'module', 'main'],
    // 查找文件夹下面默认的文件 默认值时 ['index']
    mainFiles: ['main', 'index'],
  },
  // 如何查找loader的配置
  resolveLoader: {},
  module: {
    noParse: /jquery|lodash/, // 正则表达式
    // 或者使用函数
    noParse(content) {
      // 不解析他们的依赖 就是不再分析里面有没有require和import了
      return /jquery|lodash/.test(content)
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['main'], // 表示需要插入的脚本
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify('1.0.0'),
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale/, // 引入模块路径的表达式
      contextRegExp: /moment$/, // 模块的名称或目录
    }),
  ],
}
