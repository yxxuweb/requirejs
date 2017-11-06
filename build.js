/**
 * Created by xuyixin on 2017/4/10.
 */
({
    appDir: './src',
    baseUrl:'./js',
    dir:'./build',
//  optimize: 'none',
    inlineText: false,
    mainConfigFile: './src/js/requireConfig.js',
    modules: [{
        name: 'main'
    }],
    fileExclusingRegExp: /^(r|build)\.js$|^(.git)|^(.vscode)$/
})