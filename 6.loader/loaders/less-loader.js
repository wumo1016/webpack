const less = require('less')

function loader(content) {
  // async方法 loder-runner提供 可以将loader的执行变成异步
  let cb = this.async()
  // 虽然是回调 但实际是同步
  less.render(
    content,
    {
      filename: this.resource,
    },
    (err, output) => {
      console.log(output);
      cb(null, output.css)
    }
  )
}

module.exports = loader
