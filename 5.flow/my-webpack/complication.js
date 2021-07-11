const path = require('path')
const fs = require('fs')

class Complication {
  constructor(options) {
    this.options = options
    this.entrypoints = [] // 所有入口
    this.assets = [] // 所有产出的资源
    this.chunks = [] // 存放所有的代码块
    this.modules = [] // 存放所有的模块
  }

  make(cb) {
    // 5.根据配置文件中的entry找到入口文件
    let sourceEntry = this.options.entry
    let entry = {}
    if (typeof sourceEntry === 'string') {
      entry.main = sourceEntry
    } else if (typeof sourceEntry === 'undefined') {
      entry.main = './src/index.js'
    } else {
      entry = sourceEntry
    }
    for (const key in entry) {
      // 获取entry的绝对路径
      const entryFilePath = path.join(this.options.context || process.cwd(), entry[key])
      // 6.从入口文件触发 调用所有的配置的loader对模块进行编译
      const entryModule = this.buildModule(key, entryFilePath)
    }
  }

  buildModule(key, modulePath) {
    // 读取文件内容
    let sourceCode = fs.readFileSync(modulePath, 'utf8')
    // 找到配置文件中匹配的loader
    const rules = this.options.module.rules || []
    let loaders = [] // 寻找匹配的loader
    for (let i = 0; i < rules.length; i++) {
      if (rules[i].test.test(modulePath)) {
        loaders = [
          ...loaders,
          ...rules[i].use
        ]
      }
    }
    sourceCode = loaders.reduceRight((sourceCode, loader) => require(loader)(sourceCode), sourceCode)
    console.log(sourceCode);
  }
}

module.exports = Complication