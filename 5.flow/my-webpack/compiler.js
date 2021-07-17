const { SyncHook } = require('tapable')
const fs = require('fs')
const Complication = require('./complication')
const path = require('path')

class Compiler {
  constructor(options) {
    this.options = options
    this.hooks = {
      run: new SyncHook(), // 开始编译
      emit: new SyncHook(['assets']), // 将要写入文件的时候触发
      done: new SyncHook(), // 完成编译的时候触发
    }
  }
  /* 4.执行compiler的run方法开始编译 */
  run(cb) {
    // 开始编译钩子
    this.hooks.run.call()
    this.compiler((error, assets) => {
      // 写入文件系统前的回调
      this.hooks.emit.call(assets)

      // 10.在确定好输出内容后 根据配置确定输出的路径和文件名 把文件内容写入到文件系统
      for (const filename in assets) {
        const filepath = path.join(this.options.output.path, filename)
        fs.writeFileSync(filepath, assets[filename], 'utf8')
      }

      cb(null, {
        toJson: () => {
          return {
            assets: this.assets,
            chunks: this.chunks,
            modules: this.modules,
            entrypoints: this.entrypoints,
          }
        },
      })
    })
    // 监听入口文件变化 如果变化 重新编译
    /* fs.watchFile(this.options.entry, () => {
      this.compiler(cb)
    }) */

    // 编译结束钩子
    this.hooks.done.call()
  }
  compiler(cb) {
    const complication = new Complication(this.options)
    complication.make(cb)
  }
}

module.exports = Compiler
