const express = require('express')
const sass = require('node-sass')
const path = require('path')

const port = 3000
const app = express()

app.use(express.static('public'))

app.get('/debug/thin.css', (req, res) => {
  var version = req.query.version || 'default'

  sass.render({
    file: path.resolve(__dirname, 'src/' + version + '/debug.scss')
  }, function (err, result) {
    if (err) {
      throw err
    }

    res.setHeader('Content-Transfer-Encoding', 'binary');
    res.setHeader('Content-Type', 'text/css');
    res.send(result.css)
  })
})

app.get('/main.css', (req, res) => {
  var version = req.query.version || 'default'

  sass.render({
    file: path.resolve(__dirname, 'public/styles/main.scss')
  }, function (err, result) {
    if (err) {
      throw err
    }

    res.setHeader('Content-Transfer-Encoding', 'binary');
    res.setHeader('Content-Type', 'text/css');
    res.send(result.css)
  })
})

app.get('/cdn/thin.css', (req, res) => {
  var version = req.query.version || 'default'

  sass.render({
    file: path.resolve(__dirname, 'src/' + version + '/index.scss')
  }, function(err, result) {
    if (err) {
      throw err 
    }

    res.setHeader('Content-Transfer-Encoding', 'binary');
    res.setHeader('Content-Type', 'text/css');
    res.send(result.css)
  })
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'public/index.html'));
})

app.listen(port, () => console.log('App listening on port ' + port + '!'))
