import symbiote from './main.js';

symbiote.attach()

if (module.hot) {
  module.hot.accept("./main.js", function() {
    symbiote.attach()
  });
}