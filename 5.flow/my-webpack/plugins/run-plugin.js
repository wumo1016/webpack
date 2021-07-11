class RunPlugin {
  apply(compiler) {
    compiler.hooks.run.tap('RunPlugin', () => {
      // console.log('RunPlugin');
    })
  }
}

module.exports = RunPlugin