const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = paths => path.resolve(__dirname, paths)
const bootstrap = resolve('node_modules/bootstrap/dist/css/bootstrap.min.css')
// 打包耗时分析
const SMWP = require('speed-measure-webpack-plugin')
const smwp = new SMWP()
// 打包结果分析
// const {
//   BundleAnalyzerPlugin: WebpackBundleAnalyzer,
// } = require('webpack-bundle-analyzer')

module.exports = smwp.wrap({
  mode: 'production',
  devtool: false,
  entry: {
    main: './src/index.js',
    // vendor: ['lodash'],
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      // 同步就是 使用import直接导入资源
      // 异步就是 比如点击按钮才使用import加载资源
      chunks: 'all', // 代码分割应用于哪些情况 initial(同步)/async(异步)/all(所有)
      minSize: 0, // 分割的最小大小 默认是30k
      minChunks: 2, // 一个模块最小被引用的次数才分割
      // name: true, // 打包后的名称 默认规则是 引用名称~chunk 可选值 false/string/function
      automaticNameDelimiter: '~', // 分割符 引用于name
      maxAsyncRequests: 3,
      maxInitialRequests: 5,
      cacheGroups: {
        // 设置缓存组来 满足不同规则的chunk 会覆盖上面的默认配置
        // 有些模块 会同时属于多个缓存组 越大权重越大
        // 为什么设置为负数: 因为默认缓存组的权重是 0
        vendors: {
          chunks: 'all',
          test: /node_modules/, // 如果request的路径包含node_modules
          priority: -10, // 权重
        },
        default: {
          chunks: 'all',
          minSize: 0,
          minChunks: 2,
          priority: -20,
        },
      },
    },
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
    // new WebpackBundleAnalyzer(),
  ],
})
