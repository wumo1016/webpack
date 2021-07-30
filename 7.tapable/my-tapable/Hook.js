const call_delegate = function (...args) {
  this.call = this._createCall('sync') // 返回拼装好的 new Function
  return this.call(...args)
}

const call_async_delegate = function (...args) {
  this.callAsync = this._createCall('async') // 返回拼装好的 new Function
  return this.callAsync(...args)
}

class Hook {
  constructor(args = []) {
    this._args = args
    this.taps = [] // 保存的是事件对象函数 [{ name, fn }]
    this.call = call_delegate // 用户调用的call方法
    this.callAsync = call_async_delegate
    this._x = undefined // 真正存放事件函数的数组 [fn]
  }

  _createCall(type) {
    return this.compile({
      taps: this.taps, // 需要执行的函数
      args: this._args, // 事件函数接受的参数
      type, // 执行的类型 同步或异步
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

  _tap(type, options, fn) {
    if (typeof options === 'string') {
      options = { name: options }
    }
    const tap = {
      ...options,
      type,
      fn,
    }
    this._insert(tap)
  }

  _insert(tap) {
    this._resetCompilation()
    this.taps.push(tap)
  }

  // 重新编译执行函数
  _resetCompilation() {
    this.call = call_delegate
  }
}

module.exports = Hook
