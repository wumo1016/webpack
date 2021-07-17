const path = require('path')
const fs = require('fs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const types = require('babel-types')

const slash = (str) => str.replace(/\\/g, '/')
const baseDir = slash(process.cwd())

class Complication {
  constructor(options) {
    this.options = options
    this.entrypoints = [] // 所有入口
    this.assets = {} // 所有产出的资源
    this.chunks = [] // 存放所有的代码块
    this.modules = [] // 存放所有的模块
  }

  make(cb) {
    /* 5.根据配置文件中的entry找到入口文件 */
    let sourceEntry = this.options.entry
    let entry = {}
    if (typeof sourceEntry === 'string') {
      entry.main = sourceEntry
    } else if (typeof sourceEntry === 'undefined') {
      entry.main = './src/index.js'
    } else {
      entry = sourceEntry
    }
    for (const key in entry) {
      // 获取entry的绝对路径
      const entryFilePath = slash(
        path.join(this.options.context || process.cwd(), entry[key])
      )
      /* 6.从入口文件触发 调用所有的配置的loader对模块进行编译 */
      const entryModule = this.buildModule(key, entryFilePath)
      // this.modules.push(entryModule)
      // 8.根据入口和模块之间的依赖关系 组装成一个个包含多个模块的 Chunk
      let chunk = {
        name: key,
        entryModule,
        modules: this.modules.filter((v) => v.name.has(key)),
      }
      this.entrypoints.push(chunk)
      this.chunks.push(chunk)
    }
    // 9.再把每个Chunk转换成一个单独的文件加入到输出列表
    this.chunks.forEach((chunk) => {
      let filename = this.options.output.filename.replace('[name]', chunk.name)
      this.assets[filename] = getSource(chunk)
    })

    cb(null, {
      assets: this.assets,
      chunks: this.chunks,
      modules: this.modules,
      entrypoints: this.entrypoints,
    })
  }

  buildModule(key, modulePath) {
    // 读取文件内容
    let sourceCode = fs.readFileSync(modulePath, 'utf8')
    // 找到配置文件中匹配的loader
    const rules = this.options.module.rules || []
    let loaders = [] // 寻找匹配的loader
    for (let i = 0; i < rules.length; i++) {
      if (rules[i].test.test(modulePath)) {
        loaders = [...loaders, ...rules[i].use]
      }
    }
    sourceCode = loaders.reduceRight(
      (sourceCode, loader) => require(loader)(sourceCode),
      sourceCode
    )
    /* 7.再找出该模块所依赖的模块 给i贵本步骤 直到所有入口的依赖都经过本步骤的处理 */
    // 获取当前模块id
    const moduleId = './' + path.posix.relative(baseDir, modulePath)
    let module = { id: moduleId, dependencies: [], name: new Set([key]) }

    // ast语法解析 https://astexplorer.net/
    const ast = parser.parse(sourceCode, { sourceType: 'module' })
    traverse(ast, {
      CallExpression: ({ node }) => {
        // 对应require表达式
        if (node.callee.name === 'require') {
          let moduleName = node.arguments[0].value // require中的值
          // 获取当前模块的所属目录 path.posix将所有的\都转换为/
          const moduleDir = path.posix.dirname(modulePath)
          let depModulePath = path.posix.join(moduleDir, moduleName)
          let extensions = this.options.resolve.extensions || []
          depModulePath = tryExtensions(depModulePath, extensions)
          // 得到模块id
          const depMduleId = './' + path.posix.relative(baseDir, depModulePath)
          node.arguments = [types.stringLiteral(depMduleId)]
          module.dependencies.push({ depMduleId, depModulePath })
        }
      },
    })
    // 生成转换后的代码
    const { code } = generate(ast)
    module._source = code
    // 递归处理
    module.dependencies.forEach(({ depMduleId, depModulePath }) => {
      let depModule = this.modules.find((v) => v.id === depMduleId)
      if (depModule) {
        depModule.name.add(key)
      } else {
        depModule = this.buildModule(key, depModulePath)
        this.modules.push(depModule)
      }
    })
    return module
  }
}

function getSource(chunk) {
  return `
  (() => {
    var modules = ({
      ${chunk.modules
        .map(
          (module) => `
        '${module.id}': (module, exports, require) => {
          ${module._source}
        }
      `
        )
        .join(',')}
    });
    var cache = {};
    function require(moduleId) {
      var cachedModule = cache[moduleId];
      if (cachedModule !== undefined) {
        return cachedModule.exports;
      }
      var module = cache[moduleId] = {
        exports: {}
      };
      modules[moduleId](module, module.exports, require);
      return module.exports;
    }
    var exports = {};
    (() => {
      ${chunk.entryModule._source}
    })();
  })()
  `
}

function tryExtensions(modulePath, extensions) {
  extensions.unshift('')
  for (let i = 0; i < extensions.length; i++) {
    let filePath = modulePath + extensions[i] // ./title.js
    if (fs.existsSync(filePath)) {
      return filePath
    }
  }
  throw new Error(`Module not found`)
}

module.exports = Complication
