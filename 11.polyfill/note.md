## 三个概念

- 最新 ES 语法: 如箭头函数
- 最新 ES API: 如 Promise
- 最新 ES 实例方法: 如 String.prototype.includes

## polyfill

- `@babel/preset-env`

  - 只会转化新的 js 语法 而不会转换新的 API 比如: Promise Porxy Set Map 等全局对象
  - 有比如在 Array 对象上新增了 from 方法 babel 不会转码

- `babel-polyfill`

  - 为了解决兼容性
  - 通过向全局对象或内置对象上 prototype 上添加方法来实现的
  - polyfill 有两个大版本 对应配置文件中的 babel-loader 配置
    - useBuiltIns
      - false: 全量打包 @babel/polyfill 需要在入口文件引入文件
      - entry: 只会引入浏览器不兼容的 polyfill 需要在入口文件引入文件
      - usage: 按需打包 不需要要单独引入文件
    - corejs
      - core-js@2 默认使用
        - `import '@babel/polyfill'`
      - core-js@3
        - 需要安装 `cnpm i core-js@3 -D`
        - `import 'core-js'`
        - `import 'regenerator-runtime/runtime'`
  - 缺点: 污染全局作用域

- `@babel/runtime`

  - 需要在每个用到的地方单独引入 太麻烦

- `@babel/plugin-transform-runtime`
  - 按需引入
