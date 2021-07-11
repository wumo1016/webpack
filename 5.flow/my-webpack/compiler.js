const { SyncHook } = require('tapable')

class Compiler {
  constructor(options) {
    this.options = options
    this.hooks = {
      run: new SyncHook(), // 开始编译
      emit: new SyncHook(), // 将要写入文件的时候触发
      done: new SyncHook(), // 完成编译的时候触发
    }
  }

  run(cb) {
    // 开始编译钩子
    this.hooks.run.call()
    // 中间是编译流程
    // 编译结束钩子
    this.hooks.done.call()
    cb(null, {
      toJson(options) {
        return {
          assets: [],
          assets: [],
          chunk: [],
          module: [],
          entries: []
        }
      }
    })
  }
}

module.exports = Compiler