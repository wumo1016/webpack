const path = require('path')
const fs = require('fs')
const { runLoaders } = require('loader-runner')
// 入口文件
const entry = path.resolve(__dirname, './src/index.js')

let request = `inline1-loader!inline2-loader!${entry}`

let rules = [
  {
    test: /\.js$/,
    use: ['normal1-loader', 'normal2-loader'],
  },
  {
    enforce: 'pre',
    test: /\.js$/,
    use: ['pre1-loader', 'pre2-loader'],
  },
  {
    enforce: 'post',
    test: /\.js$/,
    use: ['post1-loader', 'post2-loader'],
  },
]

const paths = request.split('!') // ['inline1-loader', 'inline2-loader', 'entry']
const entryPath = paths.pop()

// 行内 loader
const inlineLoaders = paths
// 正常loader 前置 loader 后置 loader
const normalLoaders = [],
  preLoaders = [],
  postLoaders = []

rules.map((rule) => {
  if (rule.test.test(entryPath)) {
    if (rule.enforce === 'pre') {
      preLoaders.push(...rule.use)
    } else if (rule.enforce === 'post') {
      postLoaders.push(...rule.use)
    } else {
      normalLoaders.push(...rule.use)
    }
  }
})

// 合并loader 顺序固定 后联正前
const loaders = [
  ...postLoaders,
  ...inlineLoaders,
  ...normalLoaders,
  ...preLoaders,
].map(resoleLoader)

createLoaderFiles(loaders)

runLoaders(
  {
    resource: entryPath, // 需要转换的模块路径
    loaders, // 使用哪些loader进行转换
    context: {}, // loader函数内部的this指针
    readResource: fs.readFile.bind(fs), // 自定义读取文件的方法
  },
  (err, res) => {
    console.log(err)
    console.log(res.resourceBuffer.toString('utf8'))
  }
)

// 将自定义loader的名称转换成绝对路径
function resoleLoader(loader) {
  return path.resolve(__dirname, 'loaders', loader).replace(/\\/g, '/') + '.js'
}
// 自动创建loader文件
function createLoaderFiles(loaders) {
  loaders.map((path) => {
    const name = path.match(/.+\/(.+)\.js$/)[1]
    fs.writeFileSync(
      path,
      `
      function loader(inputSource) {
        console.log('${name}')
        return inputSource
      }
      loader.pitch = function () {
        console.log('${name} pitch')
      }
      module.exports = loader
    `
    )
  })
}
