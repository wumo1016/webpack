const utils = require('loader-utils')

// content就是less-loader处理后的css内容 需要返回一个js脚本

function loader(content) {}

// remainingRequest 还没经过的loader => E:\wumo\other\webpack\6.loader\loaders\less-loader.js!E:\wumo\other\webpack\6.loader\src\index.less
// previousRequest 已经经过的loader => {}
// data 这里的data会挂在再loader函数中的this上

loader.pitch = function (remainingRequest, previousRequest, data) {
  const script = `
    const style = document.createElement('style')
    style.innerHTML = require(${utils.stringifyRequest(
      this,
      '!!' + remainingRequest
    )})
    document.head.appendChild(style)
  `
  return script
}

module.exports = loader
