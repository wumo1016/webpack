const Hook = require('./Hook')

const HookCodeFactory = require('./HookCodeFactory')

class AsyncSeriesHookCodeFactory extends HookCodeFactory {
  content({ onDone }) {
    return this.callTapsSeries({ onDone })
  }
}

let factory = new AsyncSeriesHookCodeFactory()

class AsyncSeriesHook extends Hook {
  compile(options) {
    factory.setup(this, options)
    return factory.create(options)
  }
}

module.exports = AsyncSeriesHook

// 编译接结果
/*
;(function anonymous(a, _callback) {
  var _x = this._x
  function _next1() {
    var _fn2 = _x[2]
    _fn2(a, function (_err2) {
      _callback()
    })
  }
  function _next0() {
    var _fn1 = _x[1]
    _fn1(a, function (_err1) {
      _next1()
    })
  }
  var _fn0 = _x[0]
  _fn0(a, function (_err0) {
    _next0()
  })
})
*/