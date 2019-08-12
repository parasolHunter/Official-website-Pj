$(window).resize(function(){
	if($(window).width() <= 991){
	  resizeBaseContent('sm');//手机平板
	}else{
	  resizeBaseContent();//PC
	}
});
$(document).ready(function(){
	$("body").css({"opacity":1});

	if($(window).width() <= 991){
		resizeBaseContent('sm');//手机平板
	}else{
		resizeBaseContent();//PC
	}
});
function resizeBaseContent(isDevice){
	var ratio = 100 * $(window).width() / 750;
	var header = 0;
	var footer = 0;
	if(isDevice == 'sm'){
		// header = 0.88 * ratio;
		// footer = 0.98 * ratio;
	}else{
		header = 100;
		// footer = 257;
	}
	//通用
	$("#baseContent").height($(window).height()-header-footer);		
}