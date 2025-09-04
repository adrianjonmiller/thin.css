module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        normalizeWhitespace: true,
        colormin: true,
        minifyFontValues: true,
        minifyGradients: true,
        minifyParams: true,
        minifySelectors: true,
        mergeLonghand: true,
        mergeRules: true,
        reduceInitial: true,
        reduceTransforms: true,
        uniqueSelectors: true,
        zindex: false
      }]
    })
  ]
};