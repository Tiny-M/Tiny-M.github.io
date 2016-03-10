var wH = window.innerHeight/2
var s_2 = $(".s2")
var s_6 = $(".s6")
window.onscroll = function(){
	if (scrollY>900-wH){
		s_2.css("background-attachment","fixed")
	}else{
		s_2.css("background-attachment","scroll")
	}

	if(scrollY>3300-wH){
		s_6.css("background-attachment","scroll")
	}else{
		s_6.css("background-attachment","fixed")
	}
}
$(".dl_btn").bind("click",function(){
	$(".qr_link").addClass("on")
})