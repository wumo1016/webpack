const postcssEnv = require('postcss-preset-env')
module.exports = {
  plugins: [
    postcssEnv({
      browsers: 'last 10 version'
    })
  ]
}