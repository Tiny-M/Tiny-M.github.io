;(function(){
	if(!window.SCORE){
		window.SCORE = {};
	}
	if(!window.SCORE.JSB){
		window.SCORE.JSB = {};
	}
/*
* 全局参数
*/
SCORE.__DEFULT = {
	DOWNLOADLINK : {
		QQAPPSTORE : "http://a.app.qq.com/o/simple.jsp?pkgname=cool.score.android",
		ANDROIDLINK : "http://server.qiuduoduo.cn/downloadAndroid",
		IOSLINK : "https://itunes.apple.com/cn/app/si-ke-zu-qiu-zi-xun-sai-shi/id1080080612",
		ALERTDOM :'点击"<img src="http://7xpd1v.com2.z0.glb.qiniucdn.com/13_1457351447_1457351504368.png">"在浏览器中打开'
	},
	WXSDK_AJAX:"http://123.56.179.35:9080/wx/jssdkConfig"
}


/*
* 全局方法
*/

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
	window.isSC = function(){
		return navigator.userAgent.match(/ScoreSport/);
	}
	window.isWeibo = function(){
		return navigator.userAgent.match(/Weibo/);
	}



/*
* SCORE方法
*/

	/*
	* 适配
	*/
	function Adapt(type){

		if(type == "rem"){
			var remAdapt = {
				cW : 0,
				dp : 0,
				percent : 100,
				fs : 100,
				maxW : 750,
				dEl : document.documentElement,

				adapt : function(){
					this.cW = document.documentElement.clientWidth;
					this.dp = window.devicePixelRatio;
					this.percent = this.cW/this.maxW*100;
					this.fs = 100*this.percent/100;
					// console.log(this)
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

	/*
	* 工具类
	*/

	function tool_getUrlData(){
		var a = location.search;
		console.log(a)
	}

	/*
	* H5页下载链接
	*/
	function downloadBtn(id){
		if(id){
			var dl_btn = document.getElementById(id);
		}else{
			var dl_btn = document.getElementById("downloadBtn");
		}
		
		var dl_alert = document.createElement("DIV");
		dl_alert.className = "share-alert";
		dl_alert.innerHTML = SCORE.__DEFULT.DOWNLOADLINK.ALERTDOM;
		document.body.appendChild(dl_alert)
		dl_btn.addEventListener("click",function(){
			if(isWeibo()){
				share_op.classList.add("on")
    		}else if(isWX()){
    			location.href = SCORE.__DEFULT.DOWNLOADLINK.QQAPPSTORE;
    		}else if(isAndroid()){
    			location.href = SCORE.__DEFULT.DOWNLOADLINK.ANDROIDLINK;
    		}else if(isIOS()){
    			location.href = SCORE.__DEFULT.DOWNLOADLINK.IOSLINK;
    		}
		})
	}
	
	/*
	* 微信分享
	*/
	function WXshare(data){
		if(!data){
			var data = {
				title: "肆客足球", // 分享标题
			    desc: "球迷至上", // 分享描述
			    link: location.href, // 分享链接
			    imgUrl: ""
			}
		}
		var wx_config = {
		    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		    appId: '', // 必填，公众号的唯一标识
		    timestamp: 0, // 必填，生成签名的时间戳
		    nonceStr: '', // 必填，生成签名的随机串
		    signature: '',// 必填，签名，见附录1
		    jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		}

		$.ajax({
			url: SCORE.__DEFULT.WXSDK_AJAX,
		    type: 'get',
		    dataType: 'jsonp',
		    data:{
		    	url:encodeURI(location.href) 
		    },
		    success: function(rs){
		    	wx_config.appId = rs.appId;
		    	wx_config.timestamp = rs.timestamp;
		    	wx_config.nonceStr = rs.nonceStr;
		    	wx_config.signature = rs.signature;
		    	wx_share(wx_config);
		    }
		})


		function wx_share(config){
			wx.config(config)
			wx.error(function(res){
				console.log(res)
			});
			wx.ready(function(){
				wx.onMenuShareTimeline(data);
		    	wx.onMenuShareAppMessage(data);
		   	});
		}
	}

	

	// SCORE对象
	SCORE.Adapt = Adapt;
	SCORE.downloadBtn = downloadBtn;
	SCORE.WXshare = WXshare;


/*
* SCORE JSbridge
*/
	function showImage(data){
		/*
		data = {
			index:0,   //点击图片的索引
			imgList : []    //包含所有图片的数组
		}
		*/
		data = JSON.stringify(data)
		if(isSC()){
			if(isIOS()){
				window.webkit.messageHandlers.showImage.postMessage(data)
			}else{
				window.score.showImage(data)
			}
		}else{
			console.log(data)
		}
	}

	SCORE.JSB.showImage = showImage;


})()