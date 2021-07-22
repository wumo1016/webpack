const { SyncBailHook } = require('tapable')

const hook = new SyncBailHook(['a'])

hook.tap('1', name => {
  console.log(1, name)
})

hook.tap('2', name => {
  console.log(2, name)
  return '2'
})

hook.tap('3', name => {
  console.log(3, name)
})

hook.tap('4', name => {
  console.log(4, name)
})

hook.call('wyb')

/* 
1 wyb
2 wyb
*/
