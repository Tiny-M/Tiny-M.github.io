(function(){

	/*
	* 客户端验证
	*/
	function isPC() {
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
	function isIOS(){
		return navigator.userAgent.match(/iPhone/);
	}
	function isAndroid(){
		return navigator.userAgent.match(/Android/);
	}	
	
	window.ENV = {
		isPC: isPC,
		isIOS: isIOS,
		isAndroid: isAndroid
	};

	/*
	* 如果移动设备是高分屏及以下的设备，则进行相应的缩放 
	*/
	
	if(parseFloat(window.devicePixelRatio) < 2.0 && !ENV.isPC()){
		// console.log(devicePixelRatio + ':' + window.innerWidth);
		/*if(window.innerWidth < 640){
				var viewport = document.getElementById('viewport');
				viewport.content = "width=" + window.innerWidth;
				document.documentElement.style.zoom = window.innerWidth/640;
		}*/
		if(window.innerWidth < 750){
			if(window.devicePixelRatio == 1.5){
				document.documentElement.style.zoom = 0.75;
			}else if(window.devicePixelRatio == 1){
				document.documentElement.style.zoom = 0.5;
			}else if(window.devicePixelRatio == 0.75){
				document.documentElement.style.zoom = 0.25;
			}else{
				document.documentElement.style.zoom = window.innerWidth/750;
			}
		}
	}

	

})();