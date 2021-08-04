// const { AsyncSeriesHook } = require('tapable')
const { AsyncSeriesHook } = require('../my-tapable')

const hook = new AsyncSeriesHook(['a'])

/* ------------------------ 第一种写法 --------------------------- */
console.time('async')
hook.tapAsync('1', (name, cb) => {
  setTimeout(() => {
    console.log(1, name)
    cb()
  }, 1000)
})

hook.tapAsync('2', (name, cb) => {
  setTimeout(() => {
    console.log(2, name)
    cb()
  }, 2000)
})

hook.tapAsync('3', (name, cb) => {
  setTimeout(() => {
    console.log(3, name)
    cb()
  }, 3000)
})

hook.callAsync('wyb', err => {
  console.timeEnd('async')
})

/* 
1 wyb
2 wyb
3 wyb
async: 6.027s
undefined
*/

/* ------------------------ 第二种写法 --------------------------- */
/* console.time('async')
hook.tapPromise('1', name => {
  return new Promise((r, j) => {
    setTimeout(() => {
      console.log(1, name)
      r()
    }, 1000)
  })
})

hook.tapPromise('2', (name, cb) => {
  return new Promise((r, j) => {
    setTimeout(() => {
      console.log(2, name)
      r()
    }, 2000)
  })
})

hook.tapPromise('3', (name, cb) => {
  return new Promise((r, j) => {
    setTimeout(() => {
      console.log(3, name)
      r()
    }, 3000)
  })
})

hook.promise('wyb').then(res => {
  console.timeEnd('async')
}) */

/* 
1 wyb
2 wyb
3 wyb
async: 6.032s
*/
