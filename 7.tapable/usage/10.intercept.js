const { SyncHook } = require('tapable')

const hook = new SyncHook(['name'])

let interceptor1 = {
  // 当注册一个新的事件函数的时候触发
  // 上一个拦截器的 tapInfo 会传给下一个拦截器 可以修改tapInfo
  register(tapInfo) {
    console.log('拦截器1 register', tapInfo)
    return tapInfo
  },
  // 调用call的时候 所有拦截器的call立即触发
  call() {
    console.log('拦截器1 call', arguments)
  },
  // tap拦截器会在事件函数触发的时候才执行
  // 上一个拦截器的 tapInfo 会传给下一个拦截器 可以修改tapInfo
  tap(tapInfo) {
    console.log('拦截器1 tap', tapInfo)
    return tapInfo
  },
}

let interceptor2 = {
  register(tapInfo) {
    console.log('拦截器2 register', tapInfo)
    return tapInfo
  },
  call() {
    console.log('拦截器2 call', arguments)
  },
  tap(tapInfo) {
    console.log('拦截器2 tap', tapInfo)
    return tapInfo
  },
}

hook.intercept(interceptor1)
hook.intercept(interceptor2)

hook.tap('事件函数1', name => {
  console.log('事件函数1', name)
})

hook.tap('事件函数2', name => {
  console.log('事件函数2', name)
})

hook.call('wyb')
