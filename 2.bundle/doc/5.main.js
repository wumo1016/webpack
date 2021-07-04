// 异步加载模块
var modules = {}

function require(moduleId) {
  let module = {
    exports: {}
  }
  modules[moduleId](module, module.exports, require)
  return module.exports
}

require.r = (exports) => {
  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  }
  Object.defineProperty(exports, '__esModule', { value: true });
};

// 查找代码块的方法
require.f = {}

// 已经安装或加载好的chunk 也可能是加载中的
var installedChunks = {
  main: 0 // 当前文件: 0表示ok
}

// 通过jsonp异步加载指定的代码块
require.e = (chunkId) => {
  let promises = []
  require.f.j(chunkId, promises)
  return Promise.all(promises)
}

// 添加jsonp方法
require.f.j = (chunkId, promises) => {
  let installChunkData
  let promise = new Promise((resolve, reject) => {
    installChunkData = installedChunks[chunkId] = [resolve, reject]
  })
  installChunkData[2] = promise
  promises.push(promise)

  let url = `${chunkId}.js`
  require.l(url)
}
// 加载脚本
require.l = url => {
  let script = document.createElement('script')
  script.src = url
  document.head.appendChild(script)
}
// jsonp 回调
var webpackJsonpCallback = ([chunkIds, moreModules]) => {
  // 将传入的modules合并到main的modules上
  for (const moduleId in moreModules) {
    modules[moduleId] = moreModules[moduleId]
  }
  // 拿到对应模块的promise 执行其resolve
  let resolves = []
  for (let i = 0; i < chunkIds.length; i++) {
    let chunkId = chunkIds[i]
    resolves.push(installedChunks[chunkId][0]) // 将chunk对应的resolve方法 添加到对对应的resolves数组中去
    installedChunks[chunkId] = 0  // 表示加载已经完成
  }
  while (resolves.length) {
    resolves.shift()() // 让promise的resolve执行
  }
}

var chunkLoadingGlobal = self["webpackChunk_2_bundle"] = self["webpackChunk_2_bundle"] || [];
chunkLoadingGlobal.push = webpackJsonpCallback

// 加载模块并处理返回值
require.t = function (value) {
  var res = Object.create(null)
  value = this(value)
  require.r(res)
  var def = {}
  Object.getOwnPropertyNames(value).forEach(key => ((def[key] = () => value[key])))
  def['default'] = () => value
  require.d(res, def)
  return res
}

require.d = (exports, definition) => {
  for (var key in definition) {
    Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  }
};

require.e("title").then(require.t.bind(require, "./src/title.js")).then(res => {
  console.log(res);
})