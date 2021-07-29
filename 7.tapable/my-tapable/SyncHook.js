const Hook = require('./Hook')

const HookCodeFactory = require('./HookCodeFactory')

class SyncHookCodeFactory extends HookCodeFactory {
  content() {
    return this.callTapsSeries()
  }
}

let factory = new SyncHookCodeFactory()
class SyncHook extends Hook {
  compile(options) {
    factory.setup(this, options)
    return factory.create(options)
  }
}

module.exports = SyncHook

/* 编译结果
(function anonymous(a
) {
"use strict";
var _context;
var _x = this._x;
var _fn0 = _x[0];
_fn0(a);
var _fn1 = _x[1];
_fn1(a);
var _fn2 = _x[2];
_fn2(a);
})
*/