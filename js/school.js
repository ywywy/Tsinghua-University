$(".header-li").mouseenter(function(){
	$(".header-li ul").css("display", "none");
	$(this).children(".ul").slideDown();
})
$(".header-li").mouseleave(function(){
	$(".header-li ul").css("display", "none");
	$(this).children(".ul").css("display", "none");
})































