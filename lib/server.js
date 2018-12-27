// const express = require('express')
// const sass = require('node-sass')
// const path = require('path')
// const SiteClient = require('datocms-client').SiteClient
// const exphbs  = require('express-handlebars');
// const client = new SiteClient('30d8c651eebea64a994dcba84ddd9d')
// const babel = require("@babel/core");
// const fs = require('fs')

// const port = process.env.PORT || 80
// const app = express()


// var hbs = exphbs.create({
//   helpers: {
//     json: function (context) { return JSON.stringify(context); }
//   }
// });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.static('public'))

// app.get('/debug/thin.css', (req, res) => {
//   var version = req.query.version || 'default'

//   sass.render({
//     file: path.resolve(__dirname, 'src/' + version + '/debug.scss')
//   }, function (err, result) {
//     if (err) {
//       throw err
//     }

//     res.setHeader('Content-Transfer-Encoding', 'binary');
//     res.setHeader('Content-Type', 'text/css');
//     res.send(result.css)
//   })
// })

// app.get('/main.js', (req, res) => {

//   babel.transformFileSync('./public/js/main.js', {
//     presets: ["@babel/preset-es2015"]
//   }).code;


//   res.setHeader('Content-Transfer-Encoding', 'binary');
//   res.setHeader('Content-Type', 'text/javascript');
//   res.send(result.code)
// })

// app.get('/main.css', (req, res) => {
//   var version = req.query.version || 'default'

//   sass.render({
//     file: path.resolve(__dirname, 'public/styles/main.scss')
//   }, function (err, result) {
//     if (err) {
//       throw err
//     }

//     res.setHeader('Content-Transfer-Encoding', 'binary');
//     res.setHeader('Content-Type', 'text/css');
//     res.send(result.css)
//   })
// })

// app.get('/cdn/thin.css', (req, res) => {
//   var version = req.query.version || 'default'

//   sass.render({
//     file: path.resolve(__dirname, 'src/' + version + '/index.scss')
//   }, function(err, result) {
//     if (err) {
//       throw err 
//     }

//     res.setHeader('Content-Transfer-Encoding', 'binary');
//     res.setHeader('Content-Type', 'text/css');
//     res.send(result.css)
//   })
// })




// client.items.all()
//   .then(function(data) {
//     console.log(data);

//     app.get('/', (req, res) => {
//       res.render(path.join(__dirname,'/public/index.handlebars'), {dato: data});
//     })

//     app.listen(port, function () {
//       console.log('App listening on port ' + port + '!')
//     });
//   });