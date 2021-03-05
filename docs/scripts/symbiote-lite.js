module.exports = class {
  constructor (methods) {
    this.methods = methods;

    this._methods = () => ({})

    return {
      ...this._methods(this),
      ...{
        attach: (...args) => this.attach(args)
      }
    }
  }

  attach (el) {
    if (el instanceof HTMLElement) {
      this.$el = el;
      return this._methods(this)
    }

    if (el instanceof String || typeof el === 'string') {
      this.$el = document.querySelector(el);
      return this._methods(this)
    }

    ;((start) => {
      if (document.readyState !== 'loading') {
        start()
      } else {
        document.addEventListener('DOMContentLoaded', () => start());
    }
    })(() => {
      let t0 = performance.now();

      let t1 = performance.now();
      console.log('Symbiote attached in ' + (t1 - t0) + ' milliseconds.');
      return
    });
  }

  loop (el, methods) {
    let keys = Object.keys(methods);
  }
}