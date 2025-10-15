import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import { createSymbiote } from 'symbiotic';

hljs.registerLanguage('html', xml);

const symbiote = createSymbiote({
  'js--highlight-html': (element) => {
    const html = element.textContent;
    const highlighted = hljs.highlight(html, { language: 'html' }).value;
    element.innerHTML = highlighted;
  }
});

symbiote.attach();