/**
 * 1.自动实现 externals
 * 2.自动向产出的html中插入脚本
 */

const { ExternalModule } = require('webpack')

/**
 * 1.通过AST语法树检测当前项目的脚本中引入哪些模块 是否引入了 jquery
 * 2.如果发现引入了 则要自动插入CDN脚本
 */

class AutoExternalPlugin {
  constructor(options) {
    this.options = options
    this.externalModules = Object.keys(this.options) // ['jquery', 'lodash']
    this.importedModules = new Set() // 存放所有外部导入的模块
  }

  apply(compiler) {
    compiler.hooks.normalModuleFactory.tap(
      'AutoExternalPlugin',
      normalModuleFactory => {
        normalModuleFactory.hooks.parser
          .for('javascript/auto')
          .tap('AutoExternalPlugin', parser => {
            parser.hooks.import.tap(
              // 在语法树中找到import语句
              'AutoExternalPlugin',
              (statement, source) => {
                if (this.externalModules.includes(source)) {
                  this.importedModules.add(source)
                }
              }
            )
            // 拦截require语法调用
            parser.hooks.call
              .for('require')
              .tap('AutoExternalPlugin', experssion => {
                let value = experssion.arguments[0].value
                if (this.externalModules.includes(value)) {
                  this.importedModules.add(value)
                }
              })
          })
        // 改造创建模块的过程
        normalModuleFactory.hooks.factorize.tapAsync(
          'AutoExternalPlugin',
          (resolveData, callback) => {
            let request = resolveData.request // jquery
            if (this.importedModules.has(request)) {
              // 如果是外部模块 进行拦截
              let expose = this.options[request].expose
              // 创建一个外部模块并返回 jquery = window._
              callback(null, new ExternalModule(expose, 'window', request))
            } else {
              callback()
            }
          }
        )
      }
    )
  }
}

module.exports = AutoExternalPlugin
