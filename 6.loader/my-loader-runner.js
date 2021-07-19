// resource: 要加载的文件
// loaders: 所有loader
// loaderContext: loader执行时的上下文对象
// readResource

function runLoaders(options, cb) {
  let { resource, loaders, context: loaderContext, readResource } = options
  loaderContext = loaderContext || {}
  readResource = readResource || false.readFile
  // 构建loader对象
  const loaderObjects = loaders.map(createLoaderObject)

  loaderContext.resource = resource
  loaderContext.loaderContext = loaderContext
  loaderContext.loaders = loaderObjects
  loaderContext.loaderIndex = 0 // 当前正在执行的loader索引
  loaderContext.callback = null // 返回多个值
  loaderContext.async = null // 将loader的执行变成异步

  Object.defineProperty(loaderContext, 'request', {
    get() {
      return loaderContext.loaders
        .map((v) => v.path)
        .concat(loaderContext.resource)
        .join('!')
    },
  })

  Object.defineProperty(loaderContext, 'remainingRequest', {
    get() {
      return loaderContext.loaders
        .slice(loaderContext.loaderIndex + 1)
        .map((v) => v.path)
        .concat(loaderContext.resource)
        .join('!')
    },
  })

  Object.defineProperty(loaderContext, 'currentRequest', {
    get() {
      return loaderContext.loaders
        .slice(loaderContext.loaderIndex)
        .map((v) => v.path)
        .concat(loaderContext.resource)
        .join('!')
    },
  })

  Object.defineProperty(loaderContext, 'previousRequest', {
    get() {
      return loaderContext.loaders
        .slice(0, loaderContext.loaderIndex)
        .map((v) => v.path)
        .concat(loaderContext.resource)
        .join('!')
    },
  })

  Object.defineProperty(loaderContext, 'data', {
    get() {
      return loaderContext.loaders[loaderContext.loaderIndex].data
    },
  })

  const processOptions = {
    resourceBuffer: null, // 存放原始内容对应的buffer
    readResource,
  }
  // 从左往右执行每个loader的pitch方法
  interatePitchLoaders(processOptions, loaderContext, (err, res) => {
    cb(null, {
      res,
      resourceBuffer: processOptions.resourceBuffer,
    })
  })
}

function interatePitchLoaders(options, ctx, cb) {
  let curLoaderObject = ctx.loaders[ctx.loaderIndex] // 获取当前loader
  if (curLoaderObject.pitchExecuted) {
    ctx.loaderIndex++
    return interatePitchLoaders(options, ctx, cb)
  }
  loaderLoader(curLoaderObject, () => {
    // 获取当前loader的pitch函数
    let pitchFn = curLoaderObject.pitch
    curLoaderObject.pitchExecuted = true
    // 如果当前loader没有pitch就直接执行下一个loader的pitch
    if (!pitchFn) {
      return interatePitchLoaders(options, ctx, cb)
    }
    runSyncOrAsync(
      pitchFn,
      ctx,
      [ctx.remainingRequest, ctx.previousRequest, ctx.data],
      (err, ...args) => {
        // todo
      }
    )
  })
}

function runSyncOrAsync(pitchFn, ctx, args, cb) {
  let isSync = true // 默认同步

  const innerCallback = (ctx.callback = () => {
    isSync = false
    cb.apply(null, args)
  })

  ctx.async = () => {
    isSync = false
    return innerCallback
  }

  const res = pitchFn.apply(pitchFn, args)
  if (isSync) {
    if (res == undefined) {
      return cb()
    }
    return cb(null, res)
  }
}

function loaderLoader(loaderObject, cb) {
  const module = require(loaderObject.path)
  loaderObject.normal = module
  loaderObject.pitch = module.pitch
  loaderObject.raw = module.raw
  cb()
}

function createLoaderObject(loaderPath) {
  const loaderObj = {
    path: loaderPath,
    normal: null, // loader的 normal 函数(就是loader函数自身)
    pitch: null, // loader的 pitch 函数
    raw: false, // 是否要转成buffer raw=true 结果就要转成Buffer 否则就要转成字符串
    data: {}, // 每个loader都有自己的data自定义对象 可以用来存放一些自定义的数据
    pitchExecuted: false, // pitch 函数是否执行过
    normalExcuted: false, // normal 函数是否执行过
  }
  return loaderObj
}

exports.runLoaders = runLoaders
