
      function loader(inputSource) {
        console.log('inline2-loader')
        return inputSource
      }
      loader.pitch = function () {
        console.log('inline2-loader pitch')
      }
      module.exports = loader
    