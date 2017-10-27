/**
 * Created by Administrator on 2017/4/10.
 */
var requireConfig = {
    baseUrl: 'js',
    paths: {
        text: 'thirdLib/requirejs/text',
        template: 'thirdLib/template',
        jquery: 'thirdLib/jqueryjs/jquery-2.1.4.min',
        bootstrap: 'thirdLib/jqueryjs/bootstrap.min',
        backbone: 'thirdLib/backbone/backbone',
        underscore: 'thirdLib/backbone/underscore'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        backbone: {
            deps: ['underscore','jquery'],
            exports: 'Backbone'
        }
    }
};

require.config(requireConfig);

define(function (require) {
    'use strict';
    var getContent = require('module/content');

    require(['bootstrap'],function (){
        try{
            console.log('OK');
            console.log($);
            var div = $("#context");
            var frame = new getContent(div);

            frame.sayHello();

        } catch(e) {
            console.error(e);
        }
    })
});