const Compiler = require('./compiler')

function webpack(config) {
  /* 1.初始化参数：从配置文件和Shell语句中读取并合并参数,得出最终的配置对象 例如: npm run test */
  let shellConfig = process.argv.slice(2).reduce((config, item) => {
    const [key, value] = item.split('=')
    config[key.slice(2)] = value
    return config
  }, {})
  let finalConfig = {
    ...config,
    ...shellConfig
  }
  /* 2.用上一步得到的参数初始化compilier对象 */
  const compiler = new Compiler(finalConfig)
  /* 3.加载所有配置的插件 */
  let { plugins } = finalConfig
  for (const plugin of plugins) {
    plugin.apply(compiler)
  }
  return compiler
}

module.exports = webpack