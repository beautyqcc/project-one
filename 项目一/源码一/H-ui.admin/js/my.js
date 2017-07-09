$(".xin a").click(function(){
    $("#content").show();
   $('#table1').show();
 });
//头像
$(".img").click(function(){
   $(".show-img").show();
   $(".big-img").attr("src","../images/1.jpg");
});
//紫砖余额
$(".zi a").click(function(){
    $("#content").show();
   $('#table2').show();
});
//账单详情
$(".zhang a").click(function(){
    $("#content").show();
   $('#table3').show();
});
//借款任务
$(".jie a").click(function(){
    $("#content").show();
   $('#table4').show();
});
//普通任务
$(".pu a").click(function(){
    $("#content").show();
   $('#table5').show();
});
//蒙版消失
$("#content").click(function(){
 $(".tab").hide();
 $(this).hide();
})
//头像消失
$(".show-img").click(function(){

$(this).hide();
});
// 操作
$(".btn").click(function(){
  alert("您将启用该用户");
  var html=$(this).html("启用");
  $(this).parent().parent().remove();
});