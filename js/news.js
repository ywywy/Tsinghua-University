$(".newsBox").mouseover(function(){
		$(".bd").css(
			{"z-index":"1"}
		);
		$(".colum2").css("border","1px solid #685479");
	})
	$(".newsBox").mouseout(function(){
		$(".bd").css("height","570px");
		$(".colum2").css("border","none");
	})
	$(".mtqh").mouseover(function(){
		$("#newsmtqh").css("display","block").prev("ul").css("display","none");
	})
	$(".zhxw").mouseover(function(){
		$("#newsmtqh").css("display","none").prev("ul").css("display","block");
	})