//二级菜单
$(".header-li").mouseenter(function(){
	$(".header-li ul").css("display", "none");
	$(this).children(".ul").slideDown();
})
$(".header-li").mouseleave(function(){
	$(".header-li ul").css("display", "none");
	$(this).children(".ul").css("display", "none");
})
//列表
$(".article-i").click(function(){
	$(this).next().next(".article-xiaul").css("display", "block");
	$(this).css("display", "none");
	$(this).next(".article-ii").css("display", "block");
})
$(".article-ii").click(function(){
	$(this).next(".article-xiaul").css("display", "none");
	$(this).css("display", "none");
	$(this).prev(".article-i").css("display", "block");
})
$(".article-xiaa").click(function(){
	$(this).css("color","#4F608C");
	$(this).next().css("display", "none").next().css("display", "block").next(".article-xiaul").css("display", "block");
	$(this).parent("li").removeClass("article-show").addClass("article-showclick")
	.siblings().removeClass("article-showclick").addClass("article-show")
	.children(".article-xiaul").css("display", "none");
	$(this).parent().siblings().children(".article-i").css("display", "block");
	$(this).parent().siblings().children(".article-ii").css("display", "none");
	$(this).parent().siblings().children("a").css("color","#22132d");
})
//轮播切换


























