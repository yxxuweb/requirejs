define(function(require) {
    'use strict';
    function debounce(method,time){
        var timer = null ;
        return function(){
            var context = this;
            //在函数执行的时候先清除timer定时器;
            clearTimeout(timer);
            timer = setTimeout(function(){
                method.call(context);
            },time);
        }
    }
    
    return {
        debounce: debounce
    }
});