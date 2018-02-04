module.exports = {
  plugins: [
    require('postcss-cssnext')(),
    require('postcss-import')(),
    require('postcss-cssnano')(),
    require('postcss-modules')({
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    })
  ]
}
