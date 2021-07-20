const { SyncBailHook } = require('tapable')

const syncHook = new SyncBailHook(['a'])

syncHook.tap('1', (name) => {
  console.log(1, name)
})

syncHook.tap('2', (name) => {
  console.log(2, name)
  return '2'
})

syncHook.tap('3', (name) => {
  console.log(3, name)
})

syncHook.tap('4', (name) => {
  console.log(4, name)
})

syncHook.call('wyb')
