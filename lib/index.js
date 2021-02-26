const sass = require("sass");
const fs = require('fs');
let writeableStream = fs.createWriteStream("dist/thin.css");
var result = sass.renderSync({
  file: "src/default/index.scss",
  sourceMap: true,
  outFile: "dist/thin.css"
});

writeableStream.write(result.css);