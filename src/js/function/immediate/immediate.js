define(function() {
  'use strict';

  function immediate(fn, delta, context) {
    var timeoutID = null;
    var safe = true;

    return function() {
      var args = arguments;

      if (safe) {
        fn.call(context, args);
        safe = false;
      }

      clearTimeout(timeoutID);
      timeoutID = setTimeout(function() {
        safe = true;
      }, delta);
    };
  }

  return {
    immediate: immediate
  }

});