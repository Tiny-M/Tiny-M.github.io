
var save_data = {
	data:{
		group : null,
		answer : [],
		result : [],
		c_sum : 0,
		area : "",
		isLoc : false,
	}
}	

var __init = {
	cHeight : window.innerHeight,
	cWidth : window.innerWidth,
	s_wrap : $(".slider_wrap"),

}	

var slider = new Swiper(".swiper-container",{
	direction : 'vertical',
	onlyExternal : true,
	effect : 'flip',
})

__init.s_wrap.on("click",".next",function(){
	slider.slideNext()
})

// 选择group
$(".group_ul").on("click","li",function(){
	var g = $(this).attr("data");
	save_data.data.group = g;
	save_data.data.area = csl_data["group"+g].area
	data = csl_data["group"+g].data
	$(".question").each(function(index,dom){
		if(data[index].image){
			var image = '<image src="'+data[index].image+'" height="180px"><br/>';
		}else{
			var image = "";
		}
		$(this).find(".ques").html(image+data[index].q)
		$(this).find(".a1").html("A.&nbsp;&nbsp;"+data[index].a1)
		$(this).find(".a2").html("B.&nbsp;&nbsp;"+data[index].a2)
		$(this).find(".a3").html("C.&nbsp;&nbsp;"+data[index].a3)
		$(this).find(".a4").html("D.&nbsp;&nbsp;"+data[index].a4)
		$(this).attr("answer",data[index].correct)
	})
})

// 记录答案
$(".question").each(function(index,dom){
	var i = index;
	$(dom).on("click",".answer",function(){
		if($(this).hasClass("color_t")||$(this).hasClass("color_f")||$(this).siblings().hasClass("color_t")||$(this).siblings().hasClass("color_f")){
			return;
		}
		var res = $(dom).attr("answer")
		var a = parseInt($(this).attr("data"));
		save_data.data.answer[i] = a;
		if(a==res){
			// 打对
			save_data.data.result[i]=1;
			save_data.data.c_sum += 1;
			$(this).addClass("color_t")
		}else{
			// 打错
			save_data.data.result[i]=0;
			$(this).addClass("color_f")
			// $(this).animate({"color":"#369"},300)
		}
		setTimeout(function(){
			slider.slideNext()
		},500)
	})
})

// 结果
$(".lastques").bind("click",function(){
	var percent = 50+5*save_data.data.c_sum-1;
	$(".percent").html(percent)
	$(".areaname").html(save_data.data.area)
})

// 本地球迷
$(".loc1").bind("click",function(){
	$(this).addClass("color_w");
	save_data.data.isLoc = true;
	setTimeout(function(){
			slider.slideNext()
		},500)
})
$(".loc2").bind("click",function(){
	$(this).addClass("color_w");
	save_data.data.isLoc = false;
	setTimeout(function(){
			slider.slideNext()
		},500)
})


// 重玩
$(".replay").bind("click",function(){
	location.reload();
	// save_data = {
	// 	data:{
	// 		group : null,
	// 		answer : [],
	// 		result : [],
	// 		c_sum : 0,
	// 		area : "",
	// 		isLoc : false,
	// 	}
	// }
	// $(".color_f").removeClass("color_f");
	// $(".color_t").removeClass("color_t");
	// $(".color_w").removeClass("color_w");
	// $(".share-alert").removeClass("on")
	// setTimeout(function(){
	// 	slider.slideTo(1)
	// },500)
	
})


// 分享
$(".tshare").bind("click",function(){
	$(".share-alert").addClass("on")
})

// 微信分享
// 微信分享
var wx_shareData = {
	title: 'hahahaha', // 分享标题
    desc: 'gungungun', // 分享描述
    link: location.href, // 分享链接
    imgUrl: '', // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
}
wx.onMenuShareTimeline(wx_shareData);
wx.onMenuShareAppMessage(wx_shareData);