const { SyncHook } = require('tapable')

// 参数是一个数组 只是长度有用 数组必须为字符串 字符串的值没有意义
const hook = new SyncHook(['a'])

// 注册事件函数
hook.tap('1', (name) => {
  console.log(1, name)
})

hook.tap('2', (name) => {
  console.log(2, name)
})

hook.tap('3', (name) => {
  console.log(3, name)
})
// 触发
hook.call('wyb')

/* 
1 wyb
2 wyb
3 wyb
*/
