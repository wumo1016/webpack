const { AsyncParallelBailHook } = require('tapable')

const hook = new AsyncParallelBailHook(['a'])

/* ------------------------ 第一种写法 --------------------------- */
/* console.time('async')
hook.tapAsync('1', (name, cb) => {
  setTimeout(() => {
    console.log(1, name)
    cb()
  }, 1000)
})

hook.tapAsync('2', (name, cb) => {
  setTimeout(() => {
    console.log(2, name)
    cb(null, 'res2')
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
  console.log(err)
}) */

/* 
1 wyb
2 wyb
async: 2.018s
null
3 wyb
*/

/* ------------------------ 第三种写法 --------------------------- */
console.time('async')
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
      j('res2')
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
}).catch(e => {})

/* 
1 wyb
2 wyb
async: 2.017s
3 wyb
*/
