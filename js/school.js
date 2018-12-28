//二级菜单
$(".header-li").mouseenter(function() {
	$(".header-li ul").css("display", "none");
	$(this).children(".ul").slideDown();
})
$(".header-li").mouseleave(function() {
	$(".header-li ul").css("display", "none");
	$(this).children(".ul").css("display", "none");
})
//列表
$(".article-i").click(function() {
	$(this).next().next(".article-xiaul").css("display", "block");
	$(this).css("display", "none");
	$(this).next(".article-ii").css("display", "block");
})
$(".article-ii").click(function() {
	$(this).next(".article-xiaul").css("display", "none");
	$(this).css("display", "none");
	$(this).prev(".article-i").css("display", "block");
})
$(".article-xiaa").click(function() {
	$(this).css("color", "#4F608C");
	$(this).next().css("display", "none").next().css("display", "block").next(".article-xiaul").css("display", "block");
	$(this).parent("li").removeClass("article-show").addClass("article-showclick")
		.siblings().removeClass("article-showclick").addClass("article-show")
		.children(".article-xiaul").css("display", "none");
	$(this).parent().siblings().children(".article-i").css("display", "block");
	$(this).parent().siblings().children(".article-ii").css("display", "none");
	$(this).parent().siblings().children("a").css("color", "#22132d");
})
//轮播切换
var bannerlist = [{
		imgsrc: "images/intothu-2_03.jpg"
	},
	{
		imgsrc: "images/pic3.jpg"
	},
	{
		imgsrc: "images/pic4.jpg"
	}
]
var bigimg = document.getElementById('bigimg');
var imgList = document.getElementById('imglist');
var imgs = imgList.getElementsByTagName('li');
var index = 0;
var intervalId = setInterval(changeImg, 3000)

function changeImg() {
	index = index + 1;
	if(index == 3) {
		index = 0;
	}
	bigimg.src = bannerlist[index].imgsrc;

	for(var i = 0; i < imgs.length; i++) {
		if(i == index) {
			imgs[i].id = "article-current1";
		} else {
			imgs[i].id = "";
		}
	}
}
//鼠标点击li，显示当前li的图
for(var j = 0; j < imgs.length; j++) {
	imgs[j].onclick = function() {

		for(var m = 0; m < imgs.length; m++) {
			bigimg.style.display = "block";
			imgs[m].id = "";
			imgs[m].src = bannerlist[m].imgsrc;
		}
		this.id = "article-current1";

		bigimg.src = this.src;
	}
	imgs[j].onmouseout = function() {

		for(var m = 0; m < imgs.length; m++) {
			bigimg.style.display = "none";
			imgs[m].id = "";
			imgs[m].src = bannerlist[m].imgsrc;
		}
		this.id = "article-current1";

		bigimg.src = this.src;
	}
}