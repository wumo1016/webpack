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