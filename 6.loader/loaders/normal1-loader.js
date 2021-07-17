
      function loader(inputSource) {
        console.log('normal1-loader')
        return inputSource
      }
      loader.pitch = function () {
        console.log('normal1-loader pitch')
        return '123456'
      }
      module.exports = loader
    