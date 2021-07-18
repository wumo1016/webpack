const { getOptions, interpolateName } = require('loader-utils')

function loader(content) {
  const options = getOptions(this) || {}
  const filename = interpolateName(this, options.filename, {
    content,
  })
  // 向输出目录输出一个文件
  this.emitFile(filename, content)
  return `module.exports = ${JSON.stringify(filename)}`
}

loader.raw = true // 如果希望传递buffer

module.exports = loader
