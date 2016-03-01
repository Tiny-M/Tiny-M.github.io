
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
	save_data = {
		data:{
			group : null,
			answer : [],
			result : [],
			c_sum : 0,
			area : "",
			isLoc : false,
		}
	}
	$(".color_f").removeClass("color_f");
	$(".color_t").removeClass("color_t");
	$(".color_w").removeClass("color_w");
	$(".share-alert").removeClass("on")
	setTimeout(function(){
		slider.slideTo(1)
	},500)
	
})


// 分享
$(".tshare").bind("click",function(){
	$(".share-alert").addClass("on")
})
// 微信分享
;(function(){
	var url=location.href,/*分享的地址*/
		image="",
		desc="我打败了宋鑫",//分享描述
		title="我真棒系列";
	
	if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
		init();
	} else {
		if (document.addEventListener) {
			document.addEventListener("WeixinJSBridgeReady", init, false);
		} else if (document.attachEvent) {
			document.attachEvent("WeixinJSBridgeReady", init);
			document.attachEvent("onWeixinJSBridgeReady", init);
		}
	}
	function init(){
		WeixinJSBridge.on("menu:share:appmessage", shareToFriend);// 监听事件 - 发给朋友
		WeixinJSBridge.on("menu:share:timeline", shareToFriends);// 监听事件 - 朋友圈
	}
	function shareToFriend(){
		WeixinJSBridge.invoke("sendAppMessage", {// 发消息给朋友，当然，也可以通过其它方式主动触发
			appid: "wx06e3073fd4d17e3b",
			img_url:image,
			img_width: "80",
			img_height: "80",
			link: url,
			desc: desc,
			title: title
		}, function (res) {
			//alert(res.err_msg);
		});
	}
	function shareToFriends(){
		WeixinJSBridge.invoke("shareTimeline", {
			img_url:image,
			img_width: "80",
			img_height: "80",
			link: url,
			desc: desc, //不显示，但是还是要传
			title: desc
		}, function (res) {
			//alert(res.err_msg);
		});
	}
}());
