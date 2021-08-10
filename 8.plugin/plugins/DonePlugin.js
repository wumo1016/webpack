class DonePlugin {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    // done是一个异步串行钩子

    /* --------------- 同步写法 ------------- */
    // compiler.hooks.done.tap('DonePlugin', assets => {
    //   console.log(this.options.name)
    // })

    /* ------------ 异步写法 --------------- */
    compiler.hooks.done.tapAsync('DonePlugin', (assets, callback) => {
      console.log(this.options.name)
      callback()
    })
  }
}

module.exports = DonePlugin
