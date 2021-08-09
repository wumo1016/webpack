// const { SyncHook } = require('tapable')
const { SyncHook } = require('../my-tapable')

// before是一个数组 里面放的是name数组 表示当前回调需要放在所有name的tap回调之前 如果找不到就放在最前面
const hook = new SyncHook(['name'])
hook.tap({ name: '1' }, name => {
  console.log(1, name)
})
hook.tap({ name: '3' }, name => {
  console.log(3, name)
})
// hook.tap({ name: '4' }, name => {
//   console.log(4, name)
// })
hook.tap({ name: '2', before: ['3', '4'] }, name => {
  console.log(2, name)
})

hook.call('wyb')
