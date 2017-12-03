define(function(require) {
  'use strict';

  function debounce(fn, delta, context) {
    var timeoutID = null;

    return function() {
      clearTimeout(timeoutID);

      var args = arguments;
      timeoutID = setTimeout(function() {
        fn.apply(context, args);
      }, delta);
    };
  }

  function Foo(data) {
    this.data = data;
  }
  Foo.prototype.alert = function() {
    alert(this.data);
  }

  var foo = new Foo('hello world');
  var debouncedAlert = debounce(foo.alert, 1000, foo);

  window.onmousemove = debouncedAlert;
  return {
    debounce: debounce
  }
});