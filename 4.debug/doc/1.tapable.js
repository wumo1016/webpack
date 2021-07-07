const { SyncHook } = require('tapable')

class MySyncHook {
  constructor() {
    this.taps = []
  }
  tap(name, fn) {
    this.taps.push(fn)
  }
  call() {
    this.taps.forEach(fn => fn())
  }
}

const syncHook = new MySyncHook()
syncHook.tap('name1', () => {
  console.log('name1');
})
syncHook.tap('name2', () => {
  console.log('name2');
})


class MyPlugin {
  apply() {
    syncHook.tap('MyPlugin', () => {
      console.log('MyPlugin');
    })
  }
}

let myPlugin = new MyPlugin()
myPlugin.apply()

syncHook.call()
