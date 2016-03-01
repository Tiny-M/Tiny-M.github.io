
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
	function isWX(){
		return navigator.userAgent.match(/MicroMessenger/);
	}
	function isSC(){
		return navigator.userAgent.match(/ScoreSport/);
	}

	window.ENV = {
		isPC: isPC,
		isIOS: isIOS,
		isAndroid: isAndroid
	};

	/*
	* 如果移动设备是高分屏及以下的设备，则进行相应的缩放 
	*/

	if(parseFloat(window.devicePixelRatio) < 3 && !ENV.isPC()){
	/*if(window.innerWidth < 640){
			var viewport = document.getElementById('viewport');
			viewport.content = "width=" + window.innerWidth;
			document.documentElement.style.zoom = window.innerWidth/640;
	}*/
	if(window.innerWidth < 750){
		var viewport = document.getElementById('viewport');
		viewport.content = "width=" + window.innerWidth+"target-densitydpi=device-dpi,user-scalable=no";
		zoom = window.innerWidth/750;
		document.documentElement.style.zoom = zoom;
		
		
		window.AdaptFunc&&window.AdaptFunc(zoom)
	}
	// if(window.innerWidth < 750){
	// 	// if(window.devicePixelRatio == 1.5){
	// 	// 	document.documentElement.style.zoom = 0.75;
	// 	// }else if(window.devicePixelRatio == 1){
	// 	// 	document.documentElement.style.zoom = 0.5;
	// 	// }else{
	// 		alert(screen.width+" "+document.body.clientWidth+""+window.devicePixelRatio)
	// 		document.documentElement.style.zoom = window.innerWidth/750;
	// 		// document.documentElement.style.zoom = 1;
	// 	// }
	// }
	}

	/*
	* click、touchstart 事件判断
	*/
	function event_ct(){
		if(!isPC()){
			return "touchstart";
		}else{
			return "click";
		}
	}
