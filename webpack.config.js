const path = require('path')
const HtmlWebpackPligin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = (env) => {
  return {
    // mode: 'development',
    // 单入口
    entry: { // 简写：entry: './src/index.js',
      main: './src/index.js' // 可以写成数组形式 多个入口 [ './src/index1.js', './src/idnex2.js' ]
    },
    // 多入口 对应output中应该写成 filename: '[name].js'
    /* entry: {
      index: './src/index.js',
      index1: './src/index1.js'
    }, */
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    },
    // 默认只支持导入 js/json 文件 如需导入其他文件 就需要配置loader
    module: {
      rules: [{
        test: /\.txt$/,
        use: ['raw-loader']
      }]
    },
    plugins: [
      // 向输出目录写入一个index.html文件 并且会插入打包后的脚本
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