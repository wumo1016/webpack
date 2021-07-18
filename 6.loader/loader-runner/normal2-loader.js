
      function loader(inputSource) {
        console.log('normal2-loader')
        return inputSource
      }
      loader.pitch = function () {
        console.log('normal2-loader pitch')
      }
      module.exports = loader
    