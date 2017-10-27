/**
 * Created by xuyixin on 2017/4/10.
 */
({
    appDir: './',
    baseUrl:'js',
    dir:'./build',
    paths: {
        text: 'thirdLib/requirejs/text',
        template: 'thirdLib/template',
        jquery: 'thirdLib/jqueryjs/jquery-2.1.4',
        bootstrap: 'thirdLid/jqueryjs/bootstrap.min'
    },
    shim: {
        bootstrap: {
            dep: ['jquery']
        }
    },
    modules: [{
        name: 'module/content'
    }],
    fileExclusingRegExp: /^(r|build)\.js$|^(.git)|^(.vscode)$/
})