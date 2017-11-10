require(['jquery', './component/preload/preload'], function($, preload) {



    var imgs = [
        'images/138012-20161016201700186-1351787273.png',
        'images/138012-20161016201700186-1351787273.png'
    ];
    console.log(preload);
    var loading =  new preload.PreLoad(imgs,{
        each: function (count) {
            console.log(count);
        },
        all: function () {
            $('img').hide();
        }
    });

    $.ajax({
        url:'http://127.0.0.1:8080/requirejs/src/js/data/data.json'
    }).done(function (response) {
        console.info(response);
    }).fail(function (res) {
        console.log(res);
    })


});
