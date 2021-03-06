const Hook = require('./Hook')

const HookCodeFactory = require('./HookCodeFactory')

class AsyncParallelHookCodeFactory extends HookCodeFactory {
  content({ onDone }) {
    return this.callTapsParallel({ onDone })
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

// 普通编译结果
/*
;(function anonymous(a, _callback) {
  var _x = this._x
  var _counter = 3
  var _done = function () {
    _callback()
  }

  var _fn0 = _x[0]
  _fn0(a, function (_err0) {
    if (--_counter === 0) _done()
  })
  var _fn1 = _x[1]
  _fn1(a, function (_err1) {
    if (--_counter === 0) _done()
  })
  var _fn2 = _x[2]
  _fn2(a, function (_err2) {
    if (--_counter === 0) _done()
  })
})
*/

// promise编译结果
/* 
;(function anonymous(a) {
  var _x = this._x
  return new Promise(function (_resolve, _reject) {
    var _counter = 3
    var _done = function () {
      _resolve()
    }

    var _fn0 = _x[0]
    var _promise0 = _fn0(a)
    _promise0.then(function (_result0) {
      if (--_counter === 0) _done()
    })

    var _fn1 = _x[1]
    var _promise1 = _fn1(a)
    _promise1.then(function (_result1) {
      if (--_counter === 0) _done()
    })

    var _fn2 = _x[2]
    var _promise2 = _fn2(a)
    _promise2.then(function (_result2) {
      if (--_counter === 0) _done()
    })
  })
})
*/
