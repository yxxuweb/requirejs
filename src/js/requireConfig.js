/**
 * Created by Administrator on 2017/4/10.
 */
require.config({
    baseUrl: 'js/',
    paths: {
        'jquery': 'lib/jquery/jquery',
        'text': 'lib/require/text',
        'css': 'lib/require/css',
        'template': 'lib/text/template',
        'bootstrap': 'lib/bootstrap/bootstrap.min',
        'underscore': 'lib/underscore/underscore-min',
        'backbone': 'lib/backbone/backbone-min',
        'menu': 'component/menu/menu'
    },
    shim: {
        bootstrap: {
            deps: ['jquery', 'css!lib/bootstrap/bootstrap.css']
        },
        backbone: {
            deps: ['underscore']
        },
        menu: {
        	deps: ['css!./../css/menu/menu.css']
        }
    },
    config: {
        text: {
            ohXhr: function (xhr, url) {
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRquest');
            }
        }
    },
    map: {
        '*': {
            'css': './lib/require/css'
        }
    }
});
