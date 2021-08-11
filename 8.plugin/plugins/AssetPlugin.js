class AssetPlugin {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    // 每当compilaer开启一次新的编译 就会创建一个新的compilation 触发一次新的compilation事件
    compiler.hooks.compilation.tap('AssetPlugin', compilation => {
      compilation.hooks.chunkAsset.tap('AssetPlugin', (chunk, filename) => {
        console.log(chunk, filename)
      })
    })
  }
}

module.exports = AssetPlugin
