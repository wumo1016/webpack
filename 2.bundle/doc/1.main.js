// 使用 commonjs 导入 commonjs
var modules = {
  './src/index.js': module => {
    module.exports = {
      name: 'wyb',
      age: 18
    }
  }
}

function require(moduleId) {
  let module = {
    exports: {}
  }
  modules[moduleId](module, module.exports, require)
  return module.exports
}

const res = require('./src/index.js')
console.log(res);