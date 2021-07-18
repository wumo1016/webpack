
      function loader(inputSource) {
        console.log('post1-loader')
        return inputSource
      }
      loader.pitch = function () {
        console.log('post1-loader pitch')
      }
      module.exports = loader
    