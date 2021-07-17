let res = {
  assets: {
    'index1.js':
      "\n  (() => {\n    var modules = ({\n      \n        './src/title1.js': (module, exports, require) => {\n          module.exports = 'title1';\n        }\n      \n    });\n    var cache = {};\n    function require(moduleId) {\n      var cachedModule = cache[moduleId];\n      if (cachedModule !== undefined) {\n        return cachedModule.exports;\n      }\n      var module = cache[moduleId] = {\n        exports: {}\n      };\n      modules[moduleId](module, module.exports, require);\n      return module.exports;\n    }\n    var exports = {};\n    (() => {\n      const title = require(\"./src/title1.js\");\n\nconsole.log(title);\n    })();\n  })()\n  ",
    'index2.js':
      "\n  (() => {\n    var modules = ({\n      \n        './src/title2.js': (module, exports, require) => {\n          module.exports = 'title2';\n        }\n      \n    });\n    var cache = {};\n    function require(moduleId) {\n      var cachedModule = cache[moduleId];\n      if (cachedModule !== undefined) {\n        return cachedModule.exports;\n      }\n      var module = cache[moduleId] = {\n        exports: {}\n      };\n      modules[moduleId](module, module.exports, require);\n      return module.exports;\n    }\n    var exports = {};\n    (() => {\n      const title = require(\"./src/title2.js\");\n\nconsole.log(title);\n    })();\n  })()\n  ",
    'note.md': 'index1.js\nindex2.js',
  },
  chunks: [
    {
      name: 'index1',
      entryModule: {
        id: './src/index1.js',
        dependencies: [
          {
            depMduleId: './src/title1.js',
            depModulePath: 'E:/wumo/other/webpack/5.flow/src/title1.js',
          },
        ],
        name: {},
        _source:
          'const title = require("./src/title1.js");\n\nconsole.log(title);',
      },
      modules: [
        {
          id: './src/title1.js',
          dependencies: [],
          name: {},
          _source: "module.exports = 'title1';",
        },
      ],
    },
    {
      name: 'index2',
      entryModule: {
        id: './src/index2.js',
        dependencies: [
          {
            depMduleId: './src/title2.js',
            depModulePath: 'E:/wumo/other/webpack/5.flow/src/title2.js',
          },
        ],
        name: {},
        _source:
          'const title = require("./src/title2.js");\n\nconsole.log(title);',
      },
      modules: [
        {
          id: './src/title2.js',
          dependencies: [],
          name: {},
          _source: "module.exports = 'title2';",
        },
      ],
    },
  ],
  modules: [
    {
      id: './src/title1.js',
      dependencies: [],
      name: {},
      _source: "module.exports = 'title1';",
    },
    {
      id: './src/title2.js',
      dependencies: [],
      name: {},
      _source: "module.exports = 'title2';",
    },
  ],
  entrypoints: [
    {
      name: 'index1',
      entryModule: {
        id: './src/index1.js',
        dependencies: [
          {
            depMduleId: './src/title1.js',
            depModulePath: 'E:/wumo/other/webpack/5.flow/src/title1.js',
          },
        ],
        name: {},
        _source:
          'const title = require("./src/title1.js");\n\nconsole.log(title);',
      },
      modules: [
        {
          id: './src/title1.js',
          dependencies: [],
          name: {},
          _source: "module.exports = 'title1';",
        },
      ],
    },
    {
      name: 'index2',
      entryModule: {
        id: './src/index2.js',
        dependencies: [
          {
            depMduleId: './src/title2.js',
            depModulePath: 'E:/wumo/other/webpack/5.flow/src/title2.js',
          },
        ],
        name: {},
        _source:
          'const title = require("./src/title2.js");\n\nconsole.log(title);',
      },
      modules: [
        {
          id: './src/title2.js',
          dependencies: [],
          name: {},
          _source: "module.exports = 'title2';",
        },
      ],
    },
  ],
}
