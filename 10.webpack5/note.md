## 持久化缓存
  - webpack5 会缓存生成的 webpack 模块和 chunk 来改善构建速度
  - 默认开始 默认缓存在内存中 可以通过设置 cache 尽心修改
  - webpack5 追踪了每个模块的依赖 创建了文件快照系统 此快照与真实文件系统进行对照 当检测到差异时 将触发对应模块的重新构建
    ```javascript
      cache: {
        type: 'filesystem',  //'memory' | 'filesystem'
        cacheDirectory: path.resolve(__dirname, 'node_modules/.cache/webpack'),
      }
    ```

## 处理资源文件的变化

## moduleIds & chunkIds的优化
  - moduleId
    - 开发模式下: 相当于根目录的相对路径
    - optimization
      - natural: 按使用顺序的数字ID
      - named: 方便调试的高可读性id(如: src_two_js.js)
      - deterministic: 根据模块名称生成简短的hash值
      - size: 根据模块大小生成的数字id

## 移除Node.js的polyfill

