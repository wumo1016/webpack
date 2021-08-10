const call_delegate = function (...args) {
  this.call = this._createCall('sync') // 返回拼装好的 new Function
  return this.call(...args)
}

const call_async_delegate = function (...args) {
  this.callAsync = this._createCall('async') // 返回拼装好的 new Function
  return this.callAsync(...args)
}

const promise_delegate = function (...args) {
  this.promise = this._createCall('promise') // 返回拼装好的 new Function
  return this.promise(...args)
}

class Hook {
  constructor(args = []) {
    this._args = args
    this.taps = [] // 保存的是事件对象函数 [{ name, fn }]
    this.call = call_delegate // 用户调用的call方法
    this.callAsync = call_async_delegate
    this.promise = promise_delegate
    this._x = undefined // 真正存放事件函数的数组 [fn]
    this.interceptors = [] // 拦截器
  }

  _createCall(type) {
    return this.compile({
      taps: this.taps, // 需要执行的函数
      args: this._args, // 事件函数接受的参数
      type, // 执行的类型 同步或异步
      interceptors: this.interceptors,
    })
  }

  compile(options) {
    throw new Error('Abstruct: 此方法应该被子类重写')
  }

  // options就是订阅事件的名字
  tap(options, fn) {
    this._tap('sync', options, fn)
  }

  tapAsync(options, fn) {
    this._tap('async', options, fn)
  }

  tapPromise(options, fn) {
    this._tap('promise', options, fn)
  }

  _tap(type, options, fn) {
    if (typeof options === 'string') {
      options = { name: options }
    }
    let tapInfo = {
      ...options,
      type,
      fn,
    }
    tapInfo = this._runRegisterInterceptprs(tapInfo)
    this._insert(tapInfo)
  }

  _runRegisterInterceptprs(tapInfo) {
    for (const interceptor of this.interceptors) {
      if (interceptor.register) {
        let newTapInfo = interceptor.register(tapInfo)
        if (newTapInfo) {
          tapInfo = newTapInfo
        }
      }
    }
    return tapInfo
  }

  _insert(item) {
    this._resetCompilation()
    // let stage = tapInfo.stage
    // let before = tapInfo.before
    // if (typeof stage === 'number') {
    //   let index = this.taps.findIndex(v => v.stage > stage)
    //   if (index === -1) {
    //     index = this.taps.length
    //   }
    //   this.taps.splice(index, 0, tapInfo)
    // }
    // if (Array.isArray(before)) {
    //   let length = this.taps.length
    //   let index = length
    //   for (let i = 0; i < before.length; i++) {
    //     let tapIndex = this.taps.findIndex(v => v.name === before[i])
    //     if (tapIndex === -1) {
    //       index = 0
    //       break
    //     } else if (tapIndex < index) {
    //       index = tapIndex
    //     }
    //   }
    //   this.taps.splice(index, 0, tapInfo)
    // } else {
    //   this.taps.push(tapInfo)
    // }

    let before
    if (typeof item.before === 'string') {
      before = new Set([item.before])
    } else if (Array.isArray(item.before)) {
      before = new Set(item.before)
    }
    let stage = 0
    if (typeof item.stage === 'number') {
      stage = item.stage
    }
    let i = this.taps.length
    while (i > 0) {
      i--
      const x = this.taps[i]
      this.taps[i + 1] = x
      const xStage = x.stage || 0
      if (before) {
        if (before.has(x.name)) {
          before.delete(x.name)
          continue
        }
        if (before.size > 0) {
          continue
        }
      }
      if (xStage > stage) {
        continue
      }
      i++
      break
    }
    this.taps[i] = item
  }

  // 重新编译执行函数
  _resetCompilation() {
    this.call = call_delegate
  }

  intercept(interceptor) {
    this.interceptors.push(interceptor)
  }
}

module.exports = Hook
