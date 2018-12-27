import Symbiotic from 'symbiotic'
import path from 'path'
import feather from 'feather-icons';
import '../css/main.css'

export default new Symbiotic({
  methods: {
    'body': function () {
      feather.replace();

    },
    '.js-link': function () {
      var isActive = () => {
        if (this.dataId === document.location.hash) {
          this.style = {
            borderBottom: 'solid thin gray'
          }
        } else {
          this.style = {
            borderBottom: 'solid thin transparent'
          }
        }
      }

      isActive();

      window.addEventListener('hashchange', (e) => {
        isActive();
      })
    }
  }
})