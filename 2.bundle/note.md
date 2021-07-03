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

- 定义一个require函数(定义一个module ={ exports: {} }) 执行require函数 传入(module,exports,require) 返回module.exports

  - commonjs => commonjs: 直接 module.exports 等于导入的值

    ```javascript
    // title.js
    module.exports = {
      title: "wyb",
      age: "18",
    };
    // index.js
    const res = require("./title");
    console.log(res);
    // 输出结果
    {title: "wyb", age: "18"}
    ```

  - esmodule => commonjs: es 的默认导出定义在 module.exports.default 上 其他属性对应的定义在 module.exports 对象上 并且设置 exports.\_esModule=true exports.toString=Module
