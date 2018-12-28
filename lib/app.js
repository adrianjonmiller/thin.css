import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import reshape from 'reshape-express';
import standard from 'reshape-standard';
import webpack from 'webpack';

import webpackConfig from './webpack.config';
import webpackProd from './webpack.prod';
import query from './query'
import config from './app.config';

// Consts
const port = process.env.PORT || 5000
const app = express();
const locals = {};
const env = process.env.NODE_ENV || 'development';

var compiler = null;

if (env === 'development') {
  compiler = webpack(webpackConfig);
} else {
  compiler = webpack(webpackProd);
}

// Webpack
app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
);


// Static
app.use(express.static(path.resolve(__dirname, '../public')));

// Reshape
reshape(app, standard({ template: true }), 'html')
app.set('view engine', 'html')
app.set('views', path.resolve(__dirname, '../views'))


// Routes
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
    app.listen(port, () => {
      console.log(`Application listing on port ${port}`)
    });
  })
  .catch((error) => {
    console.log(error);
  });