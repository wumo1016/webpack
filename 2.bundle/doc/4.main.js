// esmodule 加载 commonjs
var modules = {
  './src/index.js': (module, exports, require) => {
    module.exports = {
      name: 'wyb',
      age: 18,
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

require.d = (exports, definiton) => {
  for (const key in definiton) {
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: definiton[key]
    })
  }
}

require.n = module => {
  var getter = module && module.__esModule ?
    () => (module.default) :
    () => (module)
  require.d(getter, { a: getter })
  return getter
}

let _title_ = require('./src/index.js')
let _title_default = require.n(_title_)
console.log(_title_default(), _title_.age);