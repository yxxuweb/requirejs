define(['jquery'], function () {
   
    function PreLoad(imgs, options) {
        this.imgs = typeof imgs === 'string' ? [imgs] : imgs;
        this.opts = $.extend({}, PreLoad.defaults, options);

        if (this.opts.order === 'ordered') {
            this._ordered();
        } else {
            this._unordered();
        }

    }
    
    PreLoad.defaults = {
        order: 'unordered',     // 无序预加载
        each: null,     // 每一张图片加载完毕后执行
        all: null       // 所有图片加载完毕后执行
    };

    PreLoad.prototype._ordered = function () {
        var opts = this.opts,
            imgs = this.imgs,
            len = imgs.length,
            count = 0;

        function load() {
            var imgObj = new Image();

            $(imgObj).on('load error', function () {
                opts.each && opts.each(count);

                if (count >= len) {
                    opts.all && opts.all();
                } else {
                    load();
                }

                count++;
            });

            imgObj.src = imgs[count];
        }
    };

    PreLoad.prototype._unordered = function () {

        var imgs = this.imgs,
            opts = this.opts,
            count = 0,
            len = imgs.length;

        $.each(imgs, function (i, src) {

            if (typeof src !== 'string') return;

            var imgObj = new Image();

            $(imgObj).on('load error', function () {

                opts.each && opts.each(count);

                if (count >= len - 1) {
                    opts.all && opts.all()
                }

                count++;
            });

            imgObj.src = src;
        });
    };

    return {
        PreLoad: PreLoad
    };
    
});