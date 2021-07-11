const { SyncHook } = require('tapable')
const fs = require('fs')
const Complication = require('./complication')

class Compiler {
  constructor(options) {
    this.options = options
    this.hooks = {
      run: new SyncHook(), // 开始编译
      emit: new SyncHook(), // 将要写入文件的时候触发
      done: new SyncHook(), // 完成编译的时候触发
    }
  }
  /* 4.执行compiler的run方法开始编译 */
  run(cb) {
    // 开始编译钩子
    this.hooks.run.call()
    this.compiler(cb)
    // 监听入口文件变化 如果变化 重新编译
    /* fs.watchFile(this.options.entry, () => {
      this.compiler(cb)
    }) */

    // 编译结束钩子
    this.hooks.done.call()
    cb(null, {
      toJson(options) {
        return {
          entrypoints: [],
          assets: [],
          chunks: [],
          modules: [],
        }
      }
    })
  }
  compiler(cb) {
    const complication = new Complication(this.options)
    complication.make(cb)
  }
}

module.exports = Compiler