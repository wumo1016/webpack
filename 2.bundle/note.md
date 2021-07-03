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
      title: "wyb",
      age: 18,
    };
    // index.js
    const res = require("./title");
    console.log(res);
    // 输出结果
    {title: "wyb", age: 18}
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

  - esmodule => esmodule: 在处理导入上一致 只不过如果以es方式导入的话 如果的导入是默认值 会直接返回export.default
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
