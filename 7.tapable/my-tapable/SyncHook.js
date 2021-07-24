const Hook = require('Hook')

const HookCodeFactory = require('./HookCodeFactory')

class SyncHookCodeFactory extends HookCodeFactory {
  constent() {
    return this.callTapsSeries()
  }
}

let factory = new SyncHookCodeFactory()
class SyncHook extends Hook {
  compile() {
    factory.setup(this, options)
    return factory.create(options)
  }
}
