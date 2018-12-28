import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import reshape from 'reshape-express';
import standard from 'reshape-standard';

import query from './query'
import config from './app.config';

const port = process.env.PORT || 5000
const app = express();
const locals = {};

reshape(app, standard({ template: true }), 'html')

app.set('views', path.resolve(__dirname, '../views'))


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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))