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

