define(function() {
    /**
     * 调用方法：
     */
    function throttle(method) {
        var timer = null;
        var startTime = new Date();
        return function() {
            var context = this;
            var endTime = new Date();
            var resTime = endTime - startTime;
            //判断大于等于我们给的时间采取执行函数;
            if (resTime >= time) {
                method.call(context);
                //执行完函数之后重置初始时间，等于最后一次触发的时间
                startTime = endTime;
            }
        }
    }

    function throttle(fn, delta, context) {
        var safe = true;

        return function() {
            var args = arguments;

            if (safe) {
                fn.call(context, args);

                safe = false;
                setTimeout(function() {
                    safe = true;
                }, delta);
            }
        };
    }


    function throttle(fn, delta, context) {
        var timeout;

        return function() {
            var args = arguments;

            if (!safe) {
                timeout = setTimeout(function() {
                    safe = null;
                    fn.apply(context, args);
                }, delta);
            }
        };
    }

    // 第四版
    /*
        leading：false 表示禁用第一次执行
        trailing: false 表示禁用停止触发的回调
        leading：false 和 trailing: false 不能同时设置。
    */
    function throttle(func, wait, options) {
        var timeout, context, args, result;
        var previous = 0;
        if (!options) options = {};

        var later = function() {
            previous = options.leading === false ? 0 : new Date().getTime();
            timeout = null;
            func.apply(context, args);
            if (!timeout) context = args = null;
        };

        var throttled = function() {
            var now = new Date().getTime();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
        };

        throttled.cancel = function() {
            clearTimeout(timeout);
            previous = 0;
            timeout = null;
        };

        return throttled;
    }

    return {
        throttle: throttle
    }
})