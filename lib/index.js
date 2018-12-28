import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import reshape from 'reshape-express';
import standard from 'reshape-standard';
import webpack from 'webpack';

import webpackConfig from './webpack.config';
import query from './query'
import config from './app.config';

const port = process.env.PORT || 80
const compiler = webpack(webpackConfig);
const app = express();
const locals = {};

reshape(app, standard({ template: true }), 'html')

app.set('views', path.resolve(__dirname, '../views'))

app.set('view engine', 'html')
app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/cdn/:name', (req, res) => {
  res.sendFile(path.resolve(__dirname, `../cdn/${req.params.name}`))
})

app.get('/', (req, res) => {
  res.render('index.html', locals)
})

fetch('https://graphql.datocms.com/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${config.dato_token}`,
  },
  body: JSON.stringify(query),
}).then(res => res.json())
  .then((res) => {
    locals.dato = res.data;
    app.listen(3000);
    console.log(`Application listing on port ${port}`)
  })
  .catch((error) => {
    console.log(error);
});




// const  _ = require('underscore');
// const exphbs = require('express-handlebars');
// const express = require("express");
// const fetch = require('node-fetch');
// const path = require("path");
// const sass = require('node-sass')
// const webpack = require("webpack");
// const webpackConfig = require("./webpack.config");

// const config = require('./config');
// const compiler = webpack(webpackConfig);
// const app = express();
// const hbs = exphbs.create({
//   helpers: {
//     json: function (context) { return JSON.stringify(context); }
//   }
// });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
// app.use(require("webpack-hot-middleware")(compiler));
// app.use(express.static("public"));

// app.use(
//   require("webpack-dev-middleware")(compiler, {
//     noInfo: true,
//     publicPath: webpackConfig.output.publicPath
//   })
// );

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

// app.get('/main.css', (req, res) => {
//   var version = req.query.version || 'default'

//   sass.render({
//     file: path.resolve(__dirname, 'assets/css/main.scss')
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
//   }, function (err, result) {
//     if (err) {
//       throw err
//     }

//     res.setHeader('Content-Transfer-Encoding', 'binary');
//     res.setHeader('Content-Type', 'text/css');
//     res.send(result.css)
//   })
// })


// app.get('/', (req, res) => {
//   res.send(path.join(__dirname, 'public/index.html'), {});
// })

// app.listen(3000, () => console.log("App listening on port 3000!"));

