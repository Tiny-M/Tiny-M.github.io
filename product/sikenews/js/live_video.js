$(function(){
	openWs();
	islive();
	showDLBtn();
	SCORE.downloadBtn("downloadBtn")
	SCORE.WXshare(SHARE_DATA)
	
});

function islive(){
	if(INIT_DATA.islive == 0){
		$(".offline").show();
	}
}

function showDLBtn(){
	if(isPC()){
		$(".download-btn").hide()
	}
}


function openWs(){
	var chat_id = INIT_DATA.chat_id;

	console.log(chat_id)
	var ws = new WebSocket(INIT_DATA.webSocket_sever);
	ws.onmessage = function (mes) {     
   		console.log("webSocket:"+mes.data)
   		doWsData(mes.data)
	};
	ws.onopen = function () {
		console.log("已建立链接")
   		// ws.send("chat_join,chat"+chat_id+",,")
	};
	ws.onclose = function() {    
	   console.log("WebSocket服务器关闭")
	};    
	ws.onerror = function(err) {    
	   console.log("Error: " + err);    
	};

	// 数据处理
	function doWsData(res){
		var type = res.replace(data,"").split(",")[0]

		if(type == "show_sendmsg"){
			var data = res.match(/{.+}/);
			eval("data = "+data)
			var arg = res.replace(data,"").split(",")
			var type = arg[0];
			var chat = arg[1];
			var userId = arg[2];

			console.log(data);
			newContent(data);
		}else if(type == "show_sendmsg"){
			var data = res.match(/{.+}/);
			eval("data = "+data)
			var arg = res.replace(data,"").split(",")
			var type = arg[0];
			var chat = arg[1];

			console.log(data);
			$("#watching").html(data.watchingCount);
		}
	}

	var chat_flag = {
		domSum:8,
		chatSum : 0,
		drift : 0,
		nextTar : 1,
	}

	var chat_box = $("#chat-wrap");
	function newContent(data){
		var tar;
		console.log(chat_flag.nextTar)
		console.log(chat_flag.nextTar)
		if(chat_flag.chatSum<chat_flag.domSum){

			var chat_i = "";
			chat_i +=   '<li class="chat-i clearfix show" data-index="'+(++chat_flag.chatSum)+'" data-drift="0">' 
			chat_i +=		'<div class="avatar_box"><img class="us-avator" src="'+data.avatar+'"></div>'
			chat_i +=		'<div class="content"><span class="us-name">'+data.nickname+'</span><span class="us-content">'+data.message+'</span></div>'
			chat_i +=	'</li>'
			var chat_i = $(chat_i)
			chat_box.append(chat_i)

			// 获得下一个偏移量
			var domH = parseFloat(window.getComputedStyle(chat_i[0])["height"]);
			var domM = parseFloat(window.getComputedStyle(chat_i[0])["margin-top"])*2;
			chat_flag.drift = domH + domM;

			slide(chat_flag.chatSum)
			if(chat_flag.chatSum==chat_flag.domSum){
				tar = $(".chat-i[data-index='"+(chat_flag.nextTar)+"']");
				tar.removeClass("show").addClass("hide")
					tar.attr("style",tsfComputer(0)).attr("data-drift",0)
			}
		}else{
			
			tar = $(".chat-i[data-index='"+(chat_flag.nextTar)+"']");
			tar.find(".us-avator").attr("src",data.avatar);
			tar.find(".us-name").html(data.nickname);
			tar.find(".us-content").html(data.message);
			domH = parseFloat(window.getComputedStyle(tar[0])["height"]);
			domM = parseFloat(window.getComputedStyle(tar[0])["margin-top"])*2;
			chat_flag.drift = domH + domM;
			tar.removeClass("hide").addClass("show");
			slide(chat_flag.nextTar)
			chat_flag.nextTar = nextTar(chat_flag.nextTar);
			tar = $(".chat-i[data-index='"+(chat_flag.nextTar)+"']");
			tar.removeClass("show").addClass("hide");
			tar.attr("style",tsfComputer(0)).attr("data-drift",0);

		}

		function slide(t){
			$(".chat-i").not("[data-index='"+t+"']").each(function(){
				var nowDrift = $(this).attr("data-drift");
				var d = nowDrift-chat_flag.drift;

				$(this).attr("style",tsfComputer(d));
				$(this).attr("data-drift",d);
			})
		}

		function tsfComputer(d){
			var tsf = "";
			tsf += "-webkit-transform: translateY("+d+"px);-moz-transform: translateY("+d+"px);-ms-transform: translateY("+d+"px);-o-transform: translateY("+d+"px);transform: translateY("+d+"px);"
			return tsf;
		}

		function nextTar(t){
			if(t==chat_flag.domSum){
				return 1;
			}else{
				return ++t;
			}
		}


	}
}





