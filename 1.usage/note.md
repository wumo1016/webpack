## webpack

- output

  - path: 输出文件的目录 应该为绝对路径
  - filename: 每个输出文件的名称
    - 字符串
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
      - 'var': 模块入口文件的导出值将被赋值给一个变量 变量的名就是 library.name 变量使用 var 声明(var MyLibrary = returnValue)
      - 'assign': 同上 只不过它的变量不经声明直接赋值(有可能会覆盖现有的值)(MyLibrary = returnValue)
      - 'assign-properties': 比 assign 安全(如果已有的值是对象 导出的也只对象 导出对象的属性就会被合并到原对象上)(MyLibrary = returnValue)
      - 'this': 同上 (this.MyLibrary = returnValue)
      - 'window': 同上(window.MyLibrary = returnValue)
      - 'global': 同上 global 的值取决于 globalObject 的值 假如 globalObject = this 即(this.MyLibrary = returnValue)
      - 'commonjs': 导出值将赋值给 exports 对象(exports.MyLibrary = returnValue)
      - 'module': 输出 ES 模块 需要设置 experiments 而且不能设置 `library.name`
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
      - 'commonjs2': 同上 导出值将赋值给 module.exports 对象(module.exports.MyLibrary = returnValue)
      - 'amd': 输出一个 amd 模块 但是必须引入相关的库才能使用 例如: RequireJS
      - 'amd-require': 使用一个立即执行的 amd 模块输出 不能定义 `library.name`
      - 'umd': 通用模块定义(amd&commonjs&commonjs2)

- devServer

  - port: 设置启动端口 number
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

- module

  - rules: 能够对模块应用 loader
    - 条件(有两种值)
      - resource(资源文件的绝对路径)
        - test: 引入所有通过断言测试的模块 提供了这个就不能再提供 resource 选项
        - include: 引入符合以下所有条件的模块 提供了这个就不能再提供 resource 选项
        - exclude: 排除所有符合条件的模块 提供了这个就不能再提供 resource 选项
        - resource:
      - issure(请求者的文件绝对路径)
        - issure: 用来与被发出的 request 对应的模块项匹配
      - 所有可用值
        - 字符串: 匹配输入必须以提供的字符串开始 目录绝对路径或文件绝对路径
        - 正则表达式: test 输入值
        - 函数: 调用输入的函数 必须返回一个真值以匹配
        - 条件数组: 至少匹配一个条件
        - 对象: 匹配所有属性 每个属性都有一个定义行为
          - { and: [condition] } 必须匹配数组中的所有条件
          - { or: [condition] } 必须匹配数组中的任何一个条件
          - { not: [condition] } 必须排除条件
    - 结果(只在规则匹配时使用 有两种值)
      - 应用的 loader(应用在 resource 上的 loader 数组)
        - loader: 是 `use: [{ loader }]` 的简写
        - options: 是 `use: [{ options }]` 的简写
        - use: 使用模块的数组 或者 函数
          - 可以直接写 loader 字符串 可以写成对象格式
        - enforce: 指定 loader 的种类 没有则表示普通 loader
          - 可能的值
            - 'pre': 前置 loader
            - 'post': 后置 loader
          - 还有一种叫行内 loader loader 备被应用在 import/require 语句内
          - 所有进入的 loader 都有两个阶段
            - pitching 阶段 loader 上的 patch 方法 按照 post(后置) => inline(行内) => normal(普通) => pre(前置) 顺序调用
            - normal 阶段 loader 上的常规方法 pre => normal => inline => post 顺序调用
          - loader 可以通过在请求中加符号来进行忽略(覆盖)
            ```javascript
            // 禁用普通 loaders
            import { a } from "!./file1.js";
            // 禁用前置和普通 loaders
            import { b } from "-!./file2.js";
            // 禁用所有的 laoders
            import { c } from "!!./file3.js";
            ```
      - parse 选项(用于为模块创建解析器的选项对象)
        - parser:
    - 嵌套规则(kjhk)
      - oneOf: 数组 当规则匹配时 只使用第一个匹配规则
        ```javascript
        {
          test: /\\.css$/,
          oneOf: [
            {
              resourceQuery: /inline/, // foo.css?inline
              use: "url-loader",
            },
            {
              resourceQuery: /external/, // foo.css?external
              use: "file-loader",
            },
          ];
        }
        ```
    - 其他值
      - type: 设置类型用于模块匹配
        - 可选值: `https://webpack.docschina.org/configuration/module/#ruletype`
        - 它用于默认规则和默认行为发生 比如想通过自定义 loader 加载一个 json 文件 就需要将 type 设置为`javascript/auto`以绕过 webpack 内置的导入
      - resolve: 会与顶级的 resolve 进行合并 并覆盖

- devtool

  - 可选值 `[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map`

- resolve
  - alias: 创建 import 或 require 的别名
  ```javascript
    alias: {
      '@': resolve('./src')
    }
  ```
