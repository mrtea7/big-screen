/**
 * Created by user on 2017/7/5.
 */
// 点击头部变亮
$(".chartBox-head").click(function () {
    $(".container-chartBox").removeClass("container-chartBox--light");
    $(this).parent().addClass("container-chartBox--light");
});
//基础设施，运输装备，运输服务切换
var basicBtn = $(".basic-btn");
var equipBtn = $(".equip-btn");
var transBtn = $(".trans-btn");

basicBtn.click(function () {
    basicBtn.attr("src", "./assets/img/basic-act.png");
    equipBtn.attr("src", "./assets/img/equip-nor.png");
    transBtn.attr("src", "./assets/img/trans-nor.png");
    // basic();
});
equipBtn.click(function () {
    equipBtn.attr("src", "./assets/img/equip-act.png");
    basicBtn.attr("src", "./assets/img/basic-nor.png");
    transBtn.attr("src", "./assets/img/trans-nor.png");
    // equip();
});
transBtn.click(function () {
    transBtn.attr("src", "./assets/img/trans-act.png");
    basicBtn.attr("src", "./assets/img/basic-nor.png");
    equipBtn.attr("src", "./assets/img/equip-nor.png");
    // trans();
});
//切换到规划图
var fu = $("#fu");
fu.click(function () {
    window.location.href = "../html/fu.html";
});

