## tapable

- SyncHook
  - 从前往后触发
- SyncBailHook
  - 一旦中间有一个注册的函数返回的不是undefined 后面注册的函数不再执行
- SyncWaterfallHook
  - 前一个函数返回的结果 会作为后一个函数的参数
  - 如果后一个函数没有返回值 会拿前面一个函数的返回值作为参数
- SyncLoopHook
  - 不停的循环执行函数 直到函数返回的结果都是undefined为止
  - 每次循环都是从头开始