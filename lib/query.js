export default {
  query: `{
    allAbsolutes() {
      className
      description
      thumbnail {
        url
      }
    },
    allFills() {
      className
      description
      thumbnail {
        url
      }
    },
    allFloats() {
      className
      description
      thumbnail {
        url
      }
    },
    allFlexes() {
      className
      description
      thumbnail {
        url
      }
    },
    allFixeds() {
      className
      description
      thumbnail {
        url
      }
    },
    allGutters() {
      className
      description
      thumbnail {
        url
      }
    },
    allTypographies() {
      className
      description
      sampleText
      thumbnail {
        url
      }
    }
    allNavs() {
      name
      description
      sectionId
    }
  }`
};