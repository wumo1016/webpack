let res = {
  assets: { "main.js": "chunk" },
  chunks: [
    {
      name: "main",
      entryModule: {
        id: "./src/index.js",
        dependencies: ["E:/wumo/other/webpack/5.flow/src/title.js"],
        name: "main",
        _source: 'const tltle = require("./src/title");\n\nconsole.log(title);',
      },
      modules: [
        {
          id: "./src/title.js",
          dependencies: [],
          name: "main",
          _source: "module.exports = 'title';",
        },
      ],
    },
  ],
  modules: [
    {
      id: "./src/title.js",
      dependencies: [],
      name: "main",
      _source: "module.exports = 'title';",
    },
  ],
  entrypoints: [
    {
      name: "main",
      entryModule: {
        id: "./src/index.js",
        dependencies: ["E:/wumo/other/webpack/5.flow/src/title.js"],
        name: "main",
        _source: 'const tltle = require("./src/title");\n\nconsole.log(title);',
      },
      modules: [
        {
          id: "./src/title.js",
          dependencies: [],
          name: "main",
          _source: "module.exports = 'title';",
        },
      ],
    },
  ],
};
