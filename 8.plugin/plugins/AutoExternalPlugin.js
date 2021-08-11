/**
 * 1.自动实现 externals
 * 2.自动向产出的html中插入脚本
 */

/**
 * 1.通过AST语法树检测当前项目的脚本中引入哪些模块 是否引入了 jquery
 * 2.如果发现引入了 则要自动插入CDN脚本
 */

class AutoExternalPlugin {
  constructor() {}
}

module.exports = AutoExternalPlugin
