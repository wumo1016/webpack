// commonjs 加载 commonjs
var modules = {
  './src/index.js': module => {
    module.exports = 'title'
  }
}

function require(moduleId) {
  let module = {
    exports: {}
  }
  modules[moduleId](module)
  return module.exports
}

let title = require('./src/index.js')
console.log(title);