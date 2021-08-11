const path = require('path')
const JSZip = require('jszip')
// const { RawSource } = require('webpack-sources')

class RawSource {
  constructor(content) {
    this.content = content
  }
  source() {
    return this.content
  }
}

class ZipPlugin {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('ZipPlugin', (stats, callback) => {
      const zip = new JSZip() // 压缩包
      for (const filename in stats.assets) {
        const source = stats.assets[filename].source()
        zip.file(filename, source)
      }
      zip.generateAsync({ type: 'nodebuffer' }).then(content => {
        stats.assets[this.options.filename] = new RawSource(content)
        callback()
      })
    })
  }
}

module.exports = ZipPlugin
