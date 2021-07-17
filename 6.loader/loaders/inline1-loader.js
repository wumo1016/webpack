
      function loader(inputSource) {
        console.log('inline1-loader')
        return inputSource
      }
      loader.pitch = function () {
        console.log('inline1-loader pitch')
      }
      module.exports = loader
    