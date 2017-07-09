/**
 * Created by user on 2017/7/6.
 */



var chartSetting = (function () {
    var scWidth = window.screen.width;
    var baseSize;
    if (1280 <= scWidth && scWidth < 1364) {
        baseSize = 10;
    }
    else if (1364 <= scWidth && scWidth < 1440) {
        baseSize = 10.63;
    }
    else if (1440 <= scWidth && scWidth < 1600) {
        baseSize = 11.5;
    }
    else if (1600 <= scWidth && scWidth < 1920) {
        baseSize = 12.5;
    } else if (1920 <= scWidth && scWidth < 2736) {
        baseSize = 15;
    } else if (2736 <= scWidth) {
        baseSize = 21.375;
    }
    var path = "../../../../..";
    var color = ["#00FF7E", "#02C7D3", "#007CE6", "#304ACD", "#3920A8", "#2013C4"]
    var barWidth = baseSize * 4;
    var textStyle = {color: '#fff', fontSize: baseSize * 1.8};
    var tooltipTextStyle = {color: '#fff', fontSize: baseSize * 2.2};
    var selectedMode = false;
    var axisTick = {show: false};
    var splitLine = {show: false};
    var splitNumber = 2;
    var nameTextStyle = {fontSize: baseSize * 1.6};
    var axisLine = {lineStyle: {color: '#01CCDE'}};
    var axisLabel = {textStyle: {color: '#01CCDE', fontSize: baseSize * 1.6}};
    var label = {normal: {show: true, position: 'top', textStyle: {color: '#fff', fontSize: baseSize * 1.5}}};
    this.beauty = function (option) {
        console.log("<option>",option);
        option.tooltip = {};
        option.color = color;
        option.tooltip.textStyle = tooltipTextStyle;
        option.tooltip.confine = true;
        option.series[0].barWidth = barWidth;
        option.legend.textStyle = textStyle;
        option.xAxis[0].axisLabel = axisLabel;
        option.xAxis[0].axisTick = axisTick;
        option.xAxis[0].axisLine = axisLine;
        option.xAxis[0].splitLine = splitLine;
        option.yAxis[0].nameTextStyle = nameTextStyle;
        option.yAxis[0].axisLabel = axisLabel;
        option.yAxis[0].axisTick = axisTick;
        option.yAxis[0].axisLine = axisLine;
        option.yAxis[0].splitLine = splitLine;

        option.legend.itemGap = baseSize * 0.3;
        option.legend.itemWidth = baseSize * 2.324;
        option.legend.itemHeight = baseSize * 1.302;

        return option;
    }
    return{
        beauty:this.beauty
    }
})();
