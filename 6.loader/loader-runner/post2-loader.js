
      function loader(inputSource) {
        console.log('post2-loader')
        return inputSource
      }
      loader.pitch = function () {
        console.log('post2-loader pitch')
      }
      module.exports = loader
    