// const { SyncHook } = require('tapable')
const { SyncHook } = require('../my-tapable')

// stage就是阶段的意思 它可以用来控制回调防止的顺序
const hook = new SyncHook(['name'])
hook.tap({ name: '1', stage: 1 }, name => {
  console.log(1, name)
})
hook.tap({ name: '3', stage: 3 }, name => {
  console.log(3, name)
})
hook.tap({ name: '4', stage: 4 }, name => {
  console.log(4, name)
})
hook.tap({ name: '2', stage: 2 }, name => {
  console.log(2, name)
})

hook.call('wyb')
