## 转换ast
  - 首先安装包 `cnpm i esprima estraverse escodegen -D`
    - esprima: 将源代码转化ast语法树
    - estraverse: 遍历ast语法树
    - escodegen: 将转化后的语法树 再生成源码

## 转换箭头函数
  - 首先安装包 `cnpm i @babel/core babel-plugin-transform-es2015-arrow-functions babel-types @babel/preset-env -D`
    - @babel/core: bebel核心包 (但它并不知道如何转换代码)
      - 将源代码转化成语法树
      - 遍历语法树
      - 再根据转换后的语法树生成新的语法树
    - babel-plugin-transform-es2015-arrow-functions: babel转换箭头函数的插件
      - 在遍历语法树的过程中 会捕获特定类型的节点进行转换
    - babel-types: babel的工具包 判断某个 节点是不是某个类型 动态创建某个类型的节点
    - @babel/preset-env: 因为不能每一种插件都单独写一个插件 所以可以直接装一个插件预设包