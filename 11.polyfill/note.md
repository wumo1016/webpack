## 三个概念

- 最新 ES 语法: 如箭头函数
- 最新 ES API: 如 Promise
- 最新 ES 实例方法: 如 String.prototype.includes

## polyfill

- `@babel/preset-env`

  - 只会转化新的 js 语法 而不会转换新的 API 比如: Promise Porxy Set Map 等全局对象
  - 有比如在 Array 对象上新增了 from 方法 babel 不会转码

- `babel-polyfill`
  - 通过向全局对象或内置对象上 prototype 上添加方法来实现的
