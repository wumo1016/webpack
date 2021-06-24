## webpack

- output
  - path: 输出文件的目录 应该为绝对路径
  - filename: 每个输出文件的名称
    - 静态名称: `filename: 'bundle.js'`
    - 入口名称: `filename: '[name].js'`
    - 内部 chunk id: `filename: '[id].bundle.js'`
    - 模块 hash: `filename: '[hash].bundle.js'` (指定位数 [contenthash:8])
    - 模块内容 hash: `filename: '[contenthash].bundle.js'`
    - 函数:
      ```javascript
      filename: (pathData) => {
        return pathData.chunk.name === "main"
          ? "[name].js"
          : "[name]/[name].js";
      };
      ```
  - globalObject: 决定使用哪个全局变量来挂载library
  - library
    - name: 指定库的名称(例如: MyLibrary)
    - type (output.library.type == output.libraryTarget)
      - var: 模块入口文件的导出值将被赋值给一个变量 变量的名就是 library.name 变量使用var声明(var MyLibrary = returnValue)
      - assign: 同var 只不过它的变量不经声明直接赋值(有可能会覆盖现有的值)(MyLibrary = returnValue)
      - assign-properties: 比assign安全(如果已有的值是对象 导出的也只对象 导出对象的属性就会被合并到原对象上)(MyLibrary = returnValue)
      - this: 入口起点的导出值将会被赋值给this对象下的name (this.MyLibrary = returnValue)
