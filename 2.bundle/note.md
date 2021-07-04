## toStringTag

- 作用：修改默认的 toString 的行为
- 示例
  ```javascript
  let obj1 = {};
  let obj2 = {};
  console.log(Object.prototype.toString.call(obj1)); // [object Object]
  console.log(Object.prototype.toString.call(obj2)); // [object Object]
  Object.defineProperty(obj1, Symbol.toStringTag, { value: "obj1" });
  Object.defineProperty(obj2, Symbol.toStringTag, { value: "obj2" });
  console.log(Object.prototype.toString.call(obj1)); // [object obj1]
  console.log(Object.prototype.toString.call(obj2)); // [object obj2]
  ```

## 模块间的转化

- 定义一个 require 函数定义一个 `module ={ exports: {} }` 执行 require 函数 传入(module,exports,require) 返回 module.exports

  - commonjs => commonjs: 直接 module.exports 等于导入的值

    ```javascript
    // title.js
    module.exports = {
      name: "wyb",
      age: 18,
    };
    // index.js
    const res = require("./title");
    console.log(res);
    // 输出结果
    {name: "wyb", age: 18}
    ```

  - esmodule => commonjs: es 的默认导出定义在 exports.default 属性上 其他的导出对应的定义在 exports 对象上 并且设置 `exports.__esModule=true`

    ```javascript
      // title.js
      export default {
        name: 'wyb'
      }
      export const age = 18
      // index.js
      const res = require("./title");
      console.log(res);
      // 输出结果
      {
        age: 18,
        default: {
          name: "wyb"
        },
        Symbol(Symbol.toStringTag): "Module",
        __esModule: true
      }
    ```

  - esmodule => esmodule: 在处理导入上一致 只不过如果以 es 方式导入的话 如果的导入是默认值 会直接返回 export.default

    ```javascript
    // title.js
    export default {
      name: "wyb",
    };
    export const age = 18;
    // index.js
    import res, { age } from "./title";
    console.log(res, age);
    // 输出结果
    {
      name: "wyb";
    }
    18;
    ```

  - commonjs => esmodule: 默认导入的就是 exports 的值
    ```javascript
    // title.js
    module.exports = {
      name: "wyb",
      age: 18,
    };
    export const age = 18;
    // index.js
    import res, { age } from "./title";
    console.log(res, age);
    // 输出结果
    {name: "wyb", age: 18} 18
    ```

## 懒加载

```javascript
require
  .e("title")
  .then(require.t.bind(require, "./src/title.js", 23))
  .then((res) => {
    console.log(res);
  });
// 第一步: 通过jsonp加载代码块title title就是定义的webpackChunkName 取回来之后将模块定义合并到module对象上
require.e("title");
// 第二步: 通过require去加载title的模块定义 加载完后就传递值
require.t.bind(require, "./src/title.js", 23)
```
  - 1.通过jsonp加载文件 返回一个promise 然后放进promises 然后返回一个Promise.all(promises)
  - 2.执行被加载的文件的代码的时候 会执行一个回调 回调中会通过moduleId找到对应的promise 并将文件中的到处值合并到modules上 然后执行resolve
  - 3.执行require函数 处理返回值