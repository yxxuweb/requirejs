define(function () {
    /**
     * 调用方法： 
     */
    function throttle() {
        var timer = null;
        var startTime = new Date();
        return function(){
            var context = this;
            var endTime = new Date();
            var resTime = endTime - startTime;
            //判断大于等于我们给的时间采取执行函数;
            if(resTime >= time){
                method.call(context);
                //执行完函数之后重置初始时间，等于最后一次触发的时间
                startTime = endTime;
            }
        }
    }

    return {
        throttle: throttle
    }
})