const { AsyncSeriesBailHook } = require('tapable')

const hook = new AsyncSeriesBailHook(['name'])

hook.tapAsync('tap1', (name, cb) => {
  if (name === 'jquery') {
    cb(null, { externalModule: 'jquery' })
  } else {
    cb()
  }
})

hook.tapAsync('tap2', (name, cb) => {
  cb(null, { normalModule: name })
})

hook.callAsync('jquery', (err, module) => {
  console.log(module)
})
