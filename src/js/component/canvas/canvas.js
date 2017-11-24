define(function(require) {
    function PieChart(selector, options) {
        var canvas =
            "string" === typeof selector
                ? document.querySelector(selector)
                : null;

        if (canvas === null) {
            return false;
        }

        var defaultOptions = {
            radius: 200, // 图的半径
            legendParms: {
                // 图例参数
                font: "24px Arial", // 图例字体属性
                x: 30, // 图例x轴坐标
                y: 30, // 图例y轴坐标
                margin: 50, // 图例间距
                width: 40, // 图例宽度
                height: 24 // 图例高度
            }
        };

        this.context = canvas.getContext("2d");
        this.width = canvas.getAttribute("width") || 300;
        this.height = canvas.getAttribute("height") || 300;
        this.options = Object.assign(defaultOptions, options);
    }

    PieChart.prototype.load = function(data) {
        data.forEach(
            item =>
                this.count
                    ? (this.count += item.value)
                    : (this.count = item.value)
        );

        this.data = data;
        return this;
    };

    PieChart.prototype.render = function() {
        var generateLegend = (item, index) => {
            this.context.fillRect(
                this.options.legendParms.x,
                this.options.legendParms.y +
                    index * this.options.legendParms.margin,
                this.options.legendParms.width,
                this.options.legendParms.height
            );

            this.context.font = this.options.legendParms.font;
            this.context.fillText(
                item.title,
                this.options.legendParms.y + this.options.legendParms.margin,
                (index + 1) * this.options.legendParms.margin
            );
        };
        var temparc = 0;
        this.data.forEach((item, index) => {
            item.color = `#${(
                "00000" + ((Math.random() * 0x1000000) << 0).toString(16)
            ).substr(-6)}`;
            this.context.beginPath();
            this.context.moveTo(this.width / 2, this.height / 2);

            var startarc = temparc,
                endarc = startarc + item.value / this.count * Math.PI * 2;
            console.log(startarc);
            console.log("endarc", endarc);
            this.context.arc(
                this.width / 2,
                this.height / 2,
                this.options.radius,
                startarc,
                endarc,
                false
            );
            this.context.closePath();
            this.context.fillStyle = item.color;
            this.context.fill();
            temparc = endarc;
            if (this.options.legend) {
                generateLegend(item, index);
            }
        });

        return this;
    };
    /**
     * canvas 用法
     */
    /*
        var data = [
            { title: "沪江网校", value: 1024 },
            { title: "沪江小D", value: 512 },
            { title: "沪江学习", value: 256 },
            { title: "开心辞典", value: 920 }
        ];
        var pieChart = new PieChart.PieChart(".pie-chart", { legend: true });
        pieChart.load(data).render();
    */
    return {
        PieChart: PieChart
    };
});
