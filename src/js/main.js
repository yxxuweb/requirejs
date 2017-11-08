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
    
});
