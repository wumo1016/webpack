// commonjs 加载 esmodule
var modules = {
  './src/index.js': (module, exports, require) => {
    require.r(exports)
    require.d(exports, {
      'default': () => ('title'),
      'age': () => ('age')
    })
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

require.r = (exports) => {
  Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
  Object.defineProperty(exports, '_esModule', { value: true })
}

let title = require('./src/index.js')
console.log(title);