const Hook = require('./Hook')

const HookCodeFactory = require('./HookCodeFactory')

class AsyncParallelHookCodeFactory extends HookCodeFactory {
  content() {
    return this.callTapsParallel()
  }
}

let factory = new AsyncParallelHookCodeFactory()

class AsyncParallelHook extends Hook {
  compile(options) {
    factory.setup(this, options)
    return factory.create(options)
  }
}

module.exports = AsyncParallelHook

// 编译结果
// ;(function anonymous(a, _callback) {
//   var _x = this._x
//   var _counter = 3
//   var _done = function () {
//     _callback()
//   }

//   var _fn0 = _x[0]
//   _fn0(a, function (_err0) {
//     if (--_counter === 0) _done()
//   })
//   var _fn1 = _x[1]
//   _fn1(a, function (_err1) {
//     if (--_counter === 0) _done()
//   })
//   var _fn2 = _x[2]
//   _fn2(a, function (_err2) {
//     if (--_counter === 0) _done()
//   })
// })
