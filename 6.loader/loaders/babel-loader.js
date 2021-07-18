const path = require('path')
const babel = require('@babel/core')

function loader(content) {
  // 自定义options
  /* const options = {
    presets: ['@babel/preset-env'],
    filename: this.request.split('!')[1].split('/').pop(), // 指定源码对应的源文件 以便调试源码的找到源文件
    sourceMaps: true, // 如果这个参数是空 那么下面的map就是空 再调试的时候就看不到babel转换前的代码
  } */
  // 获取webpack.config.js中配置的
  const { getOptions } = require('loader-utils')
  const options = getOptions(this) || {}
  options.filename = this.request.split('!')[1].split('/').pop()

  // code 转化后的es5代码
  // map 转化后到转换前的映射
  // ast 转换后的语法树
  let { code, map, ast } = babel.transform(content, options)
  // loader可以返回一个值
  // 也可以返回多个值 如果是多个值 就必须使用this.callback this.callback(err, 下一个loader的参数)
  return this.callback(null, code, map, ast)
}

module.exports = loader
