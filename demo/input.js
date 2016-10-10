var elements = document.querySelectorAll('input');

setInterval(function(){
  Array.prototype.forEach.call(elements, function(el, i){
    var className = "has-focus";
    var fieldset = el.parentNode;

    el.addEventListener("focus", function(){
      if (fieldset.classList)
        fieldset.classList.add(className);
      else
        fieldset.className += ' ' + className;
    });

    el.addEventListener("blur", function(){
      var className = "has-focus";

      if (el.classList)
        fieldset.classList.remove(className);
      else
        fieldset.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    })
  });

  Array.prototype.forEach.call(elements, function(el, i){
    var className = "has-content";
    var fieldset = el.parentNode;

    if(el.value) {
      if (fieldset.classList)
        fieldset.classList.add(className);
      else
        fieldset.className += ' ' + className;
    } else {
      if (fieldset.classList)
        fieldset.classList.remove(className);
      else
        fieldset.className = fieldset.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  });
}, 100);
