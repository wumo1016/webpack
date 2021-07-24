## tapable

- 1.SyncHook: 同步钩子
  - 从前往后触发
- 2.SyncBailHook: 同步保险钩子
  - 一旦中间有一个注册的函数返回的不是undefined 后面注册的函数不再执行
- 3.SyncWaterfallHook
  - 前一个函数返回的结果 会作为后一个函数的参数
  - 如果后一个函数没有返回值 会拿前面一个函数的返回值作为参数
- 4.SyncLoopHook: 同步循环钩子
  - 不停的循环执行函数 直到函数返回的结果都是undefined为止
  - 每次循环都是从头开始
- 5.AsyncParallelHook: 异步并行钩子
  - 所有注册的方法(包括异步)都执行完毕后 才会执行最后的回调
- 6.AsyncParallelBailHook: 异步并行保险钩子
- 7.AsyncSeriesHook: 异步串行钩子
- 8.AsyncSeriesBailHook: 异步串行保险钩子
- 9.AsyncSeriesWaterfallHook

## 其他
  - new Function('a, b', 'return a - b')
    - 第一个参数代表函数的参数 以逗号分隔
    - 第二个代表函数的返回值
  