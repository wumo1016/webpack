const { AsyncSeriesWaterfallHook } = require('tapable')

const hook = new AsyncSeriesWaterfallHook(['a'])

/* ------------------------ 第一种写法 --------------------------- */
/* console.time('async')
hook.tapAsync('1', (name, cb) => {
  setTimeout(() => {
    console.log(1, name)
    cb('res1')
  }, 1000)
})

hook.tapAsync('2', (name, cb) => {
  setTimeout(() => {
    console.log(2, name)
    cb('res2')
  }, 2000)
})

hook.tapAsync('3', (name, cb) => {
  setTimeout(() => {
    console.log(3, name)
    cb('res3')
  }, 3000)
})

hook.callAsync('wyb', err => {
  console.timeEnd('async')
  console.log(err)
}) */

/* 
1 wyb
async: 1.017s
res1
*/

/* ------------------------ 第三种写法 --------------------------- */
console.time('async')
hook.tapPromise('1', name => {
  return new Promise((r, j) => {
    setTimeout(() => {
      console.log(1, name)
      r('res1')
    }, 1000)
  })
})

hook.tapPromise('2', (name, cb) => {
  return new Promise((r, j) => {
    setTimeout(() => {
      console.log(2, name)
      r('res2')
    }, 2000)
  })
})

hook.tapPromise('3', (name, cb) => {
  return new Promise((r, j) => {
    setTimeout(() => {
      console.log(3, name)
      r('res3')
    }, 3000)
  })
})

hook.promise('wyb').then(res => {
  console.timeEnd('async')
})

/* 
1 wyb
2 res1
3 res2
async: 6.035s
*/
