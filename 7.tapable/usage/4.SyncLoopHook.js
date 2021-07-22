const { SyncLoopHook } = require('tapable')

const hook = new SyncLoopHook(['a'])

let count1 = 0
let count2 = 0
let count3 = 0

hook.tap('1', name => {
  console.log(1, count1)
  if (++count1 === 1) {
    count1 = 0
    return
  }
  return true
})

hook.tap('2', name => {
  console.log(2, count2)
  if (++count2 === 2) {
    count2 = 0
    return
  }
  return true
})

hook.tap('3', name => {
  console.log(3, count3)
  if (++count3 === 3) {
    count3 = 0
    return
  }
  return true
})

hook.call('wyb')

/* 
1 0
2 0
1 0
2 1
3 0
1 0
2 0
1 0
2 1
3 1
1 0
2 0
1 0
2 1
3 2
*/
