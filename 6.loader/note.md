## loader

- 介绍
  - 其实就是一个函数
  - 它接收上一个 loader 产生的结果或资源文件作为参数
  - compiler 需要得到最后一个 loader 产生的结果 这个结果应该是一个 string 或 buffer
  - loader1 pitch => loader2 pitch => loader1 pitch => file
    loader3 => loader2 => loader1
- 四种 loader
  - 执行顺序: pre => normal => inline => post
  - 内联 loader
    ```javascript
    const entry = path.resolve(__dirname, './src/index.js')
    require(`inline-loader!${entry}`)
    ```
  - 普通 loader
    ```javascript
    rules: [
      {
        test: /\.js$/,
        use: ['normal1-loader', 'normal2-loader'],
      },
    ]
    ```
  - 前置 loader
    ```javascript
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: ['pre1-loader', 'pre2-loader'],
      },
    ]
    ```
  - 后置 loader
    ```javascript
    rules: [
      {
        enforce: 'post',
        test: /\.js$/,
        use: ['post1-loader', 'post2-loader'],
      },
    ]
    ```
