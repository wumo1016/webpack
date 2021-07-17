
      function loader(inputSource) {
        console.log('pre1-loader')
        return inputSource
      }
      loader.pitch = function () {
        console.log('pre1-loader pitch')
      }
      module.exports = loader
    