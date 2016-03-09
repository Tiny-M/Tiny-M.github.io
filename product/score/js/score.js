var wH = window.innerHeight/2
var s_2 = $(".s2")
window.onscroll = function(){
	if (scrollY>900-wH){
		s_2.css("background-attachment","fixed")
	}else{
		s_2.css("background-attachment","scroll")
	}
}