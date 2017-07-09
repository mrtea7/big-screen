/**
 * Created by user on 2017/7/6.
 */
//客货运枢纽
var pivotChart = (function () {
    var ajaxData;
    $.ajax({
        type: "POST",
        url: CONSTANT.AJAXPATH + '/analysis/stat/piovt.do',
        success: function (res) {
            res = JSON.parse(res);
            if (res.code == 0) {
                ajaxData = res.data;
            }
        }
    });
    var $title = $("#chartBox3 .chartBox-head-title");
    var $subtitle = $("#chartBox3 .chartBox-head-subtitle");
    var $bread = $("#chartBox3 .chartBox-content-bread");
    var titleHtml = "<span>公路</span>";
    var subtitleHtml = "<span>全市合计：码头长度<span>45087</span>公里 <span>45087</span>泊位数</span>";
    var breadHtml = '<div class="btn-group">' +
        '<button type="button" class="region btn btn-bread active" data-id="' + CONSTANT.PIOVT[0].value + '">' + CONSTANT.PIOVT[0].name + '</button>' +
        '<button type="button" class="level btn btn-bread" data-id="' + CONSTANT.PIOVT[1].value + '">' + CONSTANT.PIOVT[1].name + '</button>' +
        '</div>';

    $title.append(titleHtml);
    $subtitle.append(subtitleHtml);
    $bread.append(breadHtml);

    var $btnBread = $("#chartBox3 .chartBox-content-bread .btn-bread");
    $btnBread.click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        var type = $(this).attr("data-id");
        _renderRoad(type);
    });
    function _renderRoad(type) {
        console.log("<type>", type);
        this.option = ajaxData[type].echarts;
        chartSetting.beauty(this.option);
        this.$chartContent = $("#chartBox3 .chart-content");
        this.chartContent = this.$chartContent.get(0);
        this.chart = echarts.init(this.chartContent);
        this.chart.setOption(this.option);

    }
})();
