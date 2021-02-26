const nunjucks = require('nunjucks');
const fetch = require('node-fetch');
const path = require('path');
const stringToReadableURL = require("string-to-readable-url");
const markdownFilter = require('nunjucks-markdown-filter');
const token = '30d8c651eebea64a994dcba84ddd9d';
const query = require('./query')

let env = nunjucks.configure('./views', {
  watch: process.env.NODE_ENV === 'dev'
});

env.addFilter('md', markdownFilter)

const getDatoData = () => new Promise((result, reject) => {
  fetch(
    'https://graphql.datocms.com/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({query}),
    }
  )
  .then(res => res.json())
  .then(res => {
    result({data: res.data})
  })
  .catch((error) => {
    reject(error)
  })
})


module.exports = {
  data: () => getDatoData(),
  models: {},
  compiler: (template, data) => {
    return  nunjucks.renderString(template, data)
  }
}