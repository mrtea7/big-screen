/**
 * Created by user on 2017/7/5.
 */
var CONSTANT = (function () {
    //接口前缀
    // this.ajaxPath = "../../../../..";
    this.ajaxPath = ".";
    //行政区划
    this.region = [
        {name: '吴兴区', value: 'wx'},
        {name: '南浔区', value: 'nx'},
        {name: '德清县', value: 'dq'},
        {name: '长兴县', value: 'cx'},
        {name: '安吉县', value: 'aj'}
    ];
    //公路
    this.road = [
        {name: '按行政等级', value: 'region'},
        {name: '按技术等级', value: 'level'},
        {name: '按路面类型', value: 'type'}
        ];
    //客货运枢纽
    this.piovt = [
        {name: '客运', value: 'pass'},
        {name: '货运', value: 'freight'}
    ];
    return {
        REGION: region,
        ROAD:road,
        PIOVT:piovt,
        AJAXPATH:ajaxPath
    }
})();



