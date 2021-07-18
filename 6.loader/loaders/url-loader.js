const { getOptions, interpolateName } = require('loader-utils')
const mime = require('mime')

function loader(content) {
  const options = getOptions(this) || {}
  let { limit } = options
  const fileType = mime.getType(this.resourcePath)
  // 如果小于指定值 返回base64编码
  if ((limit = parseInt(limit, 10) && content.length < limit)) {
    const base64 = `data:${fileType};base64,${content.toString('base64')}`
    return `module.exports = ${JSON.stringify(base64)}`
  }
  const filename = interpolateName(this, options.filename, {
    content,
  })
  // 向输出目录输出一个文件
  this.emitFile(filename, content)
  return `module.exports = ${JSON.stringify(filename)}`
}

loader.raw = true // 如果希望传递buffer

module.exports = loader
