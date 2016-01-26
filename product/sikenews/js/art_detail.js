;(function($){


// 加载评论-------------------

	var loadflag = {
		btime : getBtime(),
		loading : false,
		loadend : false,
		noComment : false
	}

	scroll_load();
	
	// 滚动事件
	function scroll_load(){
		var comment = $("#new-comment .comment-i")
		if(comment.length == 0){
			loadflag.loadend = true;
			loadflag.noComment = true;
			loadingUI();
		}else if(comment.length<INIT_DATA.comment_size){
			loadflag.loadend = true;loadingUI();
		}
		$(window).bind("scroll",function(){
			var screenH = $(window).height();
			var pageH = $(document).height();
			//console.log(loadflag)
			// 判断是否到底部和没有正在加载
			if(scrollY>=pageH-screenH-50&&!loadflag.loading){
				// 是否数据已加载完
				if(!loadflag.loadend){
					more_comment();
				}else{
					loadingUI();
				}
			}
		})
	}


	// 控制加载UI的变化
	function loadingUI(){
		if(loadflag.noComment){
			$("#c_load").show().addClass("end").removeClass("ing").html("暂无评论");
		}else if(loadflag.loading){
			$("#c_load").show()
		}else if(!loadflag.loading&&!loadflag.loadend){
			$("#c_load").show()
		}else if(loadflag.loadend){
			$("#c_load").show().addClass("end").removeClass("ing").html("没有更多了");
		}
	}

	// 加载更多评论
	function more_comment(){
		loadflag.loading = true;
		loadingUI();

		comment_datas = {
			data:[]
		};

		// if(loadflag.loading&&loadflag.loadend){return;}
		$.ajax({ 

            url: INIT_DATA.comment_api+"?11",
            type: 'get',
            dataType: 'json',
            data:{p:INIT_DATA.post_id,b:loadflag.btime},
            success: function(rs){
            	if(rs.ret!=0){
            		console(rs.ret);
            		return;
            	}
            	// rs数据数组
            	var c = rs.data.comments;
            	// 数据条数
            	var s = parseInt(c.length);
            	// before time
            	
            	// 拼数据
            	if(s!=0){
            		loadflag.btime = c[s-1].time;
            		for(var i=0;i<c.length;i++){
            			//console.log(c[i])
            			var s_content = c[i].content.length>80?c[i].content.substr(0,72)+"...":c[i].content
            			var l_content = c[i].content.length>80?c[i].content:null;
	            		var comment_data = {
	            			id:c[i].id,
							nickname: c[i].user.nickname,
							avatar: c[i].user.avatar==""?INIT_DATA.init_avatar:c[i].user.avatar,
							s_content: s_content,
							l_content: l_content,
							time: formatDate(c[i].time),
							like: c[i].likeCount,
						    r_nickname: c[i].replyTo==null?null:c[i].replyTo.user.nickname,
							r_content: c[i].replyTo==null?null:c[i].replyTo.content.substr(0,14)+"..."
						}
						comment_datas.data.push(comment_data);
	            	}

	                //刷模板
	                var comment = template('temp-comment', comment_datas);
					$("#comment-end").before(comment);
            	}
            	
				// 更新flag
				loadflag.loading = false;
				
				if(s<INIT_DATA.comment_size){
            		loadflag.loadend = true;
            	}
            	loadingUI();
            }
      	});
		
	}

	// 传入时间戳转格式 
	function formatDate(d){
		var date = new Date(parseInt(d));
		var time =  addZero(date.getMonth()+1)+"-"+addZero(date.getDate())+" "+addZero(date.getHours())+":"+addZero(date.getMinutes())
		function addZero(n){
			if(n<10){
				return "0"+n;
			}else{
				return n;
	 		}
		}
		return time;
	}
	
	// 获取btime
	function getBtime(){
		var n_comment = $("#new-comment time");
		var num = n_comment.length-1;
		//console.log($(n_comment[num]).attr("data-time"))
		return $(n_comment[num]).attr("data-time")
	}





	// 新评论-------------------
	function newComment(data){
		eval('data ='+data);
		var s_content = data.content.length>80?data.content.substr(0,72)+"...":data.content
        var l_content = data.content.length>80?data.content:null;
		var comment_data = {
			data:[
				{
					id:data.id,
					nickname: data.user.nickname,
					avatar: data.user.avatar,
					s_content: s_content,
					l_content: l_content,
					time: formatDate(data.time),
					like: data.likeCount,
				    r_nickname: data.replyTo==null?null:data.replyTo.user.nickname,
					r_content: data.replyTo==null?null:data.replyTo.content.substr(0,14)+"..."
				}
			]
		}
		
		//console.log(comment_data)
		var comment = template('temp-comment', comment_data);
		$("#comment-start").after(comment);
		loadflag.noComment = false;
		loadingUI();

	}
	window.newComment = newComment;


// 显示更多-------------------
	$(".art-comment").on("click",".readmore",function(e){
		t = $(e.target);
		if(t.attr("data-all")){
			t.parent().find(".c-content").html(t.attr("data-all"))
		}
		t.hide()
	})

	// 出墙
	$(".art-more").bind("click",function(){
		if($(this).hasClass("on")){
			$(".art-moretext").hide()
			$(this).removeClass("on")
		}else{
			$(".art-moretext").show()
			$(this).addClass("on")
		}
		
	})
	
// 评论点赞-------------------
	$(".art-comment").on("click",".dolike",function(e){
		

		var t = $(e.target),
			n = parseInt(t.html()),
			cid = parseInt(t.parent().parent().attr("data-comid"));

		if(!t.hasClass("on")&&cid == "0"){
			t.html(n+1);
	       	t.addClass("on");
	       	
	       	return;
		}

		if(!t.hasClass("on")){
			$.ajax({
				url: INIT_DATA.like_api,
	            type: 'post',
	            dataType: 'json',
	            data:{c:cid},
	            success: function(rs){
	            	if(rs.ret==0){
	            		t.html(n+1)
	            		t.addClass("on")
	            	}
	            }
			})
		}
		e.stopPropagation();
	})



//评论交互 --回复、举报
	var p_event = {
		startY : 0,
		startX : 0,
		endY : 0,
		endX : 0
	}

	if(isPC()){
		$(".art-comment").on("mousedown",".comment-i",function(e){
			
			p_event.startX = e.pageX;
			p_event.startY = e.pageY;


			$t = $(e.target);
			if($t.hasClass("readmore")||$t.hasClass("dolike")){
				return
			}
			$(this).addClass("on")
			
	 	}).on("mouseup",".comment-i",function(e){
	 		p_event.endX = e.pageX;
			p_event.endY = e.pageY;

	 		$t = $(e.target);
			if($t.hasClass("readmore")||$t.hasClass("dolike")){
				return
			}
			$(this).removeClass("on")

			if(Math.abs(p_event.endY-p_event.startY)<3){
				var cdata = '{"cid": "'+$(this).attr("data-comid")+'","nickname" : "'+$(this).find(".user-name").html()+'","content" : "'+$(this).find(".c-content").html().substr(0,14)+"..."+'"}'
				comment_interface(cdata);
			}
			
	 	})
	}else{
		$(".art-comment").on("touchstart",".comment-i",function(e){
			e = e.originalEvent.changedTouches[0];
			p_event.startX = e.pageX;
			p_event.startY = e.pageY;
			$t = $(e.target);
			if($t.hasClass("readmore")||$t.hasClass("dolike")){
				return
			}
			$(this).addClass("on")
	 	}).on("touchmove",".comment-i",function(e){
			$(this).removeClass("on")
	 	}).on("touchend",".comment-i",function(e){
	 		e = e.originalEvent.changedTouches[0];
	 		p_event.endX = e.pageX;
			p_event.endY = e.pageY;

	 		$t = $(e.target);
			if($t.hasClass("readmore")||$t.hasClass("dolike")){
				return
			}
			$(this).removeClass("on")

			if(Math.abs(p_event.endY-p_event.startY)<10){
				var cdata = '{"cid": "'+$(this).attr("data-comid")+'","nickname" : "'+$(this).find(".user-name").html()+'","content" : "'+$(this).find(".c-content").html().substr(0,14)+"..."+'"}'
				comment_interface(cdata);

			}
			
	 	})
	}



// 文章点赞
	$(".bar-like").bind("click",function(){
		var t = $(this),
			n = parseInt($(this).html()),
			pid = $(this).attr("data-pageid");

		if(!t.hasClass("on")){
			$.ajax({
				url: INIT_DATA.pagelike_api,
	            type: 'post',
	            dataType: 'json',
	            data:{p:pid},
	            success: function(rs){
	            	if(rs.ret==0){
	            		t.html(n+1)
	            		t.addClass("on")
	            	}
	            }
			})
		}
	})

// 手机浏览器打开 提示下载APP

	document.addEventListener('DOMContentLoaded',function(){
		if(!isSC()&&!isPC()){
			var top = 0;
			$("#dl-bar").show();
			$(".wap-hide").hide()

			if(isWX()){
				$("#dl-bar .dl-btn").bind("click",function(){
					top = document.body.scrollTop;
					$(".dl-prompt").show();
					$("#page_wrap").css({"position":"fixed","top":-top})
				})
				$(".dl-prompt").bind("click",function(){
					$(this).hide()
					$("#page_wrap").css({"position":"static"})
					document.body.scrollTop = top;
				})

				if(isIOS()){

				}else if(isAndroid()){
					$(".client-b").html("在浏览器中打开")
				}

			}else if(isIOS()){
				$("#dl-bar .dl-btn").bind("click",function(){
					location.href = DOWNLOAD_DATA.ios_link;
				})
			}else if(isAndroid()){
				$("#dl-bar .dl-btn").bind("click",function(){
					
					location.href = DOWNLOAD_DATA.android_link;
				})
			}
		}

	},false);
	
	



// JS bridge ↓↓↓

// 分享-------------------


	
	// 文章初始化数据
	function share_data(type){
		var s_title = SHARE_DATA.title==""?$("#art-title").html():SHARE_DATA.title;
		var share_data = '{"type" : "'+type+'","title" : "'+s_title+'","url" : "'+location.href+'","image" : "'+SHARE_DATA.share_image+'","desc":"'+getDesc()+'","likeCount":"'+INIT_DATA.post_like+'","commentCount":"'+INIT_DATA.post_comment+'"}'
		//console.log(share_data)
		function getDesc(){
			var text = SHARE_DATA.desc==""?$("#art-text").html():SHARE_DATA.desc;
			return text.replace(/(<[^>]+>)/g,"").replace(/(^\s+)|(\s+$)/g,"").substr(0,30);
		}
		return share_data;
	}
	// 分享初始化接口
	function shareInit_interface(){
		alert("进入shareInit_interface()")
		if(isSC()){
			alert("进入isSC()")
			if(isIOS()){
				alert("进入isIOS()")
				window.webkit.messageHandlers.onArticleInit.postMessage(share_data("all"))
				alert(share_data("all"))
			}else{
				window.score.onArticleInit(share_data("all"))
			}
			
		}else{
			console.log(share_data("all"))
		}
	}
	// 初始化文章
	shareInit_interface();
	


	// 分享交互
	function share_interface(type){
		if(isSC()){
			window.score.share(share_data(type))
		}else{
			console.log(share_data(type))
		}
	}
	// 确定type的分享
	$(".art-share").on("click",".share-i",function(e){
		var t = $(e.target);
		var type = t.attr("data-type");
		share_interface(type);
	})
	$(".bar-share").on("click",function(e){
		share_interface("all")
	})



	// 评论交互
	function comment_interface(cdata){
		if(isSC()){
			window.score.comment(cdata)
		}else{
			console.log(cdata)
		}
	}

	// 专栏跳转
	function openSpecial(sdata){
		if(isSC()){
			window.score.openSpecial(sdata)
		}else{
			console.log(sdata)
		}
	}
	$(".writer-info").bind("click",function(){
		var sdata = $(this).attr("data-special");
		openSpecial(sdata)
	})

	// 滚动到评论锚点
	function toComment(){
		var top = $("#anchor-comment")[0].offsetTop;
		var stop = document.body.scrollTop;
		$("html,body").animate({scrollTop:top},300)
	}
	window.toComment = toComment;




})(jQuery)

