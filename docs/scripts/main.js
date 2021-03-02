const Symbiotic = require("./symbiote-lite");

new Symbiotic({
  ".js-body": function() {
    console.log("jest");
  }
}).attach();
