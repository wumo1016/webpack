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
      output: {
        filename: (pathData) => {
          return pathData.chunk.name === "main"
            ? "[name].js"
            : "[name]/[name].js";
        };
      }
      ```
  - globalObject: 决定使用哪个全局变量来挂载 library
  - library
    - name: 指定库的名称(例如: MyLibrary)
    - type (output.library.type == output.libraryTarget)
      - var: 模块入口文件的导出值将被赋值给一个变量 变量的名就是 library.name 变量使用 var 声明(var MyLibrary = returnValue)
      - assign: 同上 只不过它的变量不经声明直接赋值(有可能会覆盖现有的值)(MyLibrary = returnValue)
      - assign-properties: 比 assign 安全(如果已有的值是对象 导出的也只对象 导出对象的属性就会被合并到原对象上)(MyLibrary = returnValue)
      - this: 同上 (this.MyLibrary = returnValue)
      - window: 同上(window.MyLibrary = returnValue)
      - global: 同上 global 的值取决于 globalObject 的值 假如 globalObject = this 即(this.MyLibrary = returnValue)
      - commonjs: 导出值将赋值给 exports 对象(exports.MyLibrary = returnValue)
      - module: 输出 ES 模块 需要设置 experiments 而且不能设置 `library.name`
        ```javascript
        module.exports = {
          experiments: {
            outputModule: true,
          },
          output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].js",
            library: {
              type: "module",
            },
          },
        };
        ```
      - commonjs2: 同上 导出值将赋值给 module.exports 对象(module.exports.MyLibrary = returnValue)
      - amd: 输出一个 amd 模块 但是必须引入相关的库才能使用 例如: RequireJS
      - amd-require: 使用一个立即执行的 amd 模块输出 不能定义 `library.name`
      - umd: 通用模块定义(amd&commonjs&commonjs2)

- devServer
  - port: 设置启动端口
  - before: 一个 devServer 所有中间之前执行之前的自定义函数
    ```javascript
    {
      before: (app, server, compiler) => {
        app.get("/before", function (req, res) {
          res.json({ data: "请求成功" });
        });
      };
    }
    ```
  - after: 一个 devServer 所有中间之前执行之后的自定义函数
    ```javascript
    {
      after: (app, server, compiler) => {
        app.get("/after", function (req, res) {
          res.json({ data: "请求/after成功" });
        });
      };
    }
    ```
  - contentBase: 静态文件的来源目录
    - 字符串格式: `contentBase: path.resolve(__dirname, 'public')`
    - 数组格式:
      ```javascript
      {
        contentBase: [
          path.resolve(__dirname, "public"),
          path.resolve(__dirname, "assets"),
        ];
      }
      ```
  - open: 是否打开浏览器
  - proxy：代理
  ```javascript
   {
    devServer: {
    proxy: {
      '/api': {
        target: 'https://example.com',
      },
    },
    },
  };
  ```

- plugins
  - html-wabpack-plugin: 