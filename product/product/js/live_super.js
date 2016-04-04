;(function(){
	SCORE.WXshare(SHARE_DATA);
	showDLBar();
	openWs();
	showImage();
})()


// 查看大图

function showImage(){
	window.imgPointer = {
		index:0,  
		imgList : []
	}

	$(".lc-img").each(function(){
		var imgUrl = this.src;
		imgPointer.imgList.push(imgUrl)
	})
	$(".live-list").on("click",".lc-img",function(){
		var i = $(this).index(".lc-img");
		imgPointer.index = i;

		SCORE.JSB.showImage(imgPointer)
	})
}

// 显示下载按钮
function showDLBar(){
	document.addEventListener('DOMContentLoaded',function(){
			if(!isSC()&&!isPC()){
				var top = 0;
				$("#dl-bar").show();
				$("#dl-bar .dl-btn").bind("click",function(){
					location.href = SCORE.__DEFULT.DOWNLOADLINK.QQAPPSTORE;
				})
			}
		},false);
}

// websocket
function openWs(){
	// var search = location.search.split("&")
	var chat_id = INIT_DATA.chat_id;

	console.log(chat_id)
	var ws = new WebSocket(INIT_DATA.webSocket_sever);
	ws.onmessage = function (mes) {     
   		console.log("webSocket:"+mes.data)
   		doWsData(mes.data)
	};
	ws.onopen = function () {
		console.log("已建立链接")
   		ws.send("chat_join,chat"+chat_id+",,")
	};
	ws.onclose = function() {    
	   console.log("WebSocket服务器关闭")
	};    
	ws.onerror = function(err) {    
	   console.log("Error: " + err);    
	}

	// 数据处理
	function doWsData(res){
		var type = res.replace(data,"").split(",")[0]

		if(type == "chat_recvlive"){
			var data = res.match(/{.+}/);
			eval("data = "+data)
			var arg = res.replace(data,"").split(",")
			var type = arg[0];
			var sub = arg[1];
			var time = arg[2];
			data["time"]=formatDate(time);
			if(data.images[0] != ""){
				imgPointer.imgList.push(data.images[0])
				// var img = "";
				// for(var i = 0;i<data.images.length;i++){
				// 	img += '<img class="lc-img" src="'+data.images[i]+'">'
			
				// }
				// data.images = img
			}else{
				data.images = null;
			}
			newContent(data)
		}
		
	}

	function formatDate(d){
		var date = new Date(parseInt(d));
		var time =  addZero(date.getHours())+":"+addZero(date.getMinutes())
		function addZero(n){
			if(n<10){
				return "0"+n;
			}else{
				return n;
	 		}
		}
		return time;
	}
	
	var mess_box = {
		hasMess : 0,
		message : ""
	}

	function newContent(data){

		var content = template('temp-comment', data);

		if(window.scrollY>100){
			mess_box.hasMess = 1;
			mess_box.message += content;
			$(".new_alert").addClass("on")
		}else{
			$("#live-start").after(content);
			$(content).addClass("on")
		}
		
	}

	window.addEventListener("scroll",function showMess(){

		if(window.scrollY <100&&mess_box.hasMess == 1){
			$("#live-start").after(mess_box.message);
			mess_box.hasMess = 0;
			mess_box.message = "";
			$(".new_alert").removeClass("on")
		}

	})

	$(".new_alert").bind("click",function(){
		$("html,body").animate({scrollTop:0},300)
	})

	function wsClose(){
		ws.close();
	}

}


