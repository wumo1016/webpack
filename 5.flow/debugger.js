// const webpack = require('webpack')
// const webpackOptions = require('./webpack.config')

const webpack = require('./my-webpack')
const webpackOptions = require('./my.webpack.config')

// compiler代表整个编译过程 run代表启动编译
const compiler = webpack(webpackOptions)
compiler.run((err, status) => {
  let res = status.toJson({
    assets: true, // 产出的文件
    assets: true, // 生成的资源
    chunk: true, // 生成的代码块
    module: true, // 模块信息
    entries: true // 入口信息
  })
  console.log(JSON.stringify(res));
})