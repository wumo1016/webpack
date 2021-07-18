// content就是less-loader处理后的css内容 需要返回一个js脚本
function loader(content) {
  const script = `
    const style = document.createElement('style')
    style.innerHTML = ${JSON.stringify(content)}
    document.head.appendChild(style)
  `
  return script
}

module.exports = loader
