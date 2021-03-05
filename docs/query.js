module.exports = `query ClassSets {
  allClassSets {
    description
    examples {
      code(markdown: false)
    }
    name
    classes {
      example(markdown: true)
      id
      name
      description
      image {
        url
      }
    }
    slug
  }
}
`
