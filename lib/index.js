const sass = require("sass");
const path  = require('path');
const express = require('express')
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const app = express()
const liveReloadServer = livereload.createServer();
const port = 3000;
// const fs = require('fs');
// const writeableStream = fs.createWriteStream("dist/thin.css");
var result = sass.renderSync({
  file: "src/2.0/index.scss",
  sourceMap: true,
  outFile: "dist/thin.css"
});

liveReloadServer.watch(path.join(__dirname, 'public'));

app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})