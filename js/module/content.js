/**
 * Created by Administrator on 2017/4/10.
 */
define(function(require){
    'use strict';
    var temp = require('template'),
        keyWord = require('text!../../html/content.html'),
        button = require('text!../../html/buttom.html');
    console.log(keyWord);

    function getContent(div) {
        this._init(div);
        this._bindEvent();
        this.sayHello = function () {
            alert('hello');
        }
    }

    getContent.prototype._init = function (div) {
        var data = {first:'xu',
                    second: 'yi',
                    btnTxt:template(
                                button,
                                {btnTempTxt: '嵌套的按钮'}
                            )
                };
        var content = temp.render(keyWord, data);
        div.html(content);
    };

    getContent.prototype._bindEvent = function () {
        $( "#btn_temp" ).on('click', function () {
            $(this).css('color','red');
        });
    };

    function template(temp_c,content) {
        var con = temp.compile(temp_c);
        return  con(content);
    }

    return getContent;

});