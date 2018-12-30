//二级菜单
$(".header-li").mouseenter(function() {
	$(".header-li ul").css("display", "none");
	$(this).children(".ul").slideDown();
})
$(".header-li").mouseleave(function() {
	$(".header-li ul").css("display", "none");
	$(this).children(".ul").css("display", "none");
})
//轮播切换
var next = document.getElementById("next");
var last = document.getElementById("last");
var i = 0;
next.onclick = function() {
	if(i == 2) {
		i = -1;
	} else {
		i++;
		var imgs = document.getElementById("nimg");
		imgs.src = "images/" + i + ".jpg";
	}
}

last.onclick = function() {
	if(i == 0) {
		i = 3;
	} else {
		i--;
		var imgs = document.getElementById("nimg");
		imgs.src = "images/" + i + ".jpg";
	}
}