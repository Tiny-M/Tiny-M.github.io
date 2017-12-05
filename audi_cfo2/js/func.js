window.isPC = function(){
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPad", "iPod"
	];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}
window.isIOS = function(){
	return navigator.userAgent.match(/iPhone/);
}
window.isAndroid = function(){
	return navigator.userAgent.match(/Android/);
}
window.isWX = function(){
	return navigator.userAgent.match(/MicroMessenger/);
}
window.isQQ = function(){
	return navigator.userAgent.match(/QQ\//);
}
window.isQQBrowser = function(){
	return !isQQ() && navigator.userAgent.match(/QQBrowser/);
}
window.isSC = function(){
	return navigator.userAgent.match(/ScoreSport/);
}
window.isWeibo = function(){
	return navigator.userAgent.match(/Weibo/);
}
window.isUA = function(ua){
	return navigator.userAgent.match(ua);
}

var func = {
	Adapt : function(type){
		if(typeof arguments[arguments.length-1] == "function"){
			var CB_func = arguments[arguments.length-1]
		}
		if(type == "rem"){
			var remAdapt = {
				cW : 750,
				dp : 1,
				percent : 100,
				fs : 100,
				maxW : 750,
				dEl : document.documentElement,

				adapt : function(){
					this.cW = document.documentElement.clientWidth;
					this.dp = window.devicePixelRatio;
					this.percent = this.cW/this.maxW*100;
					this.fs = 100*this.percent/100;
					// SCORE.log(this)
					this.dEl.style.fontSize = this.fs+"px";
					this.dEl.dataset.percent = this.percent;
					this.dEl.dataset.width = this.cW;
					this.dEl.dataset.dpr = this.dp;
				},
				run : function(maxW){
					if(!isPC()){
						var t = this;
						if(maxW){
							t.maxW = maxW;
						}
						t.adapt();
						window.addEventListener("resize",function(){
							t.adapt();
						})
					}else{
						this.dEl.style.fontSize = 100+"px";
					}
					CB_func&&CB_func({cW:this.cW,dp:this.dp,perc:this.percent,fs:this.fs});
					_INIT_.adaptData = {cW:this.cW,dp:this.dp,perc:this.percent,fs:this.fs};
				}
			}
			remAdapt.run();

		}else if(type == "zoom"){
			if(parseFloat(window.devicePixelRatio) < 3 && !isPC()){
				if(isAndroid()&&isSC()){
					setTimeout(function(){
						setPredeal();
					},300)
				}else{
					setPredeal();
				}
				function setPredeal(){
					if(window.innerWidth < 750){
						var viewport = document.getElementById('viewport');
						viewport.content = "width=" + window.innerWidth+"target-densitydpi=device-dpi,user-scalable=no";
						zoom = window.innerWidth/750;
						document.documentElement.style.zoom = zoom;
						
						window.AdaptFunc&&window.AdaptFunc(zoom);
					}
					
				}
			}
		}
	}
}