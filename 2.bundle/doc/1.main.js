// 使用 commonjs 导入 commonjs
var modules = {
  './src/index.js': module => {
    module.exports = 'title'
  }
}

function require(moduleId) {
  let module = {
    exports: {}
  }
  modules[moduleId](module, module.exports, require)
  return module.exports
}

let title = require('./src/index.js')
console.log(title);