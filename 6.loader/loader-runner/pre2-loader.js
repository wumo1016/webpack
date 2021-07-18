
      function loader(inputSource) {
        console.log('pre2-loader')
        return inputSource
      }
      loader.pitch = function () {
        console.log('pre2-loader pitch')
      }
      module.exports = loader
    