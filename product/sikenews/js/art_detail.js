;(function($){


// 加载评论-------------------

	scroll_load();

	var loadflag = {
		btime : getBtime(),
		loading : false,
		loadend : false
	}

	// 滚动事件
	function scroll_load(){
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
		if(loadflag.loading){
			$("#c_load").show()
		}else if(!loadflag.loading&&!loadflag.loadend){
			$("#c_load").hide()
		}if(loadflag.loadend){
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

            url: INIT_DATA.comment_api+"?153",
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
            	loadflag.btime = c[s-1].time;

            	// 拼数据
            	if(s!=0){
            		for(var i=0;i<c.length;i++){
            			//console.log(c[i])
            			var s_content = c[i].content.length>80?c[i].content.substr(0,72)+"...":c[i].content
            			var l_content = c[i].content.length>80?c[i].content:null;
	            		var comment_data = {
							nickname: c[i].user.nickname,
							avatar: c[i].user.avatar,
							s_content: s_content,
							l_content: l_content,
							time: formatDate(c[i].time),
							like: c[i].like,
						    r_nickname: typeof c[i].replyTo.user=="undefined"?null:c[i].replyTo.user.nickname,
							r_content: typeof c[i].replyTo.content=="undefined"?null:c[i].replyTo.content.substr(0,14)+"..."
						}
						comment_datas.data.push(comment_data);
	            	}

	                //刷模板
	                var comment = template('temp-comment', comment_datas);
					$("#comment-end").before(comment);
            	}
            	
				// 更新flag
				loadflag.loading = false;
				loadingUI();
				if(s<INIT_DATA.comment_size){
            		loadflag.loadend = true;
            	}
            }
      	});
		
	}

	// 传入时间戳转格式 
	function formatDate(d){
		var date = new Date(parseInt(d));
		var time =  addZero(date.getMonth()+1)+"-"+addZero(date.getDay())+" "+addZero(date.getHours())+":"+addZero(date.getMinutes())
		return time;
	}
	function addZero(n){
		if(n<10){
			return "0"+n;
		}else{
			return n;
 		}
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
		var comment_data = {
			data:[
				{
					nickname: data.user.nickname,
					avatar: data.user.avatar,
					content: data.content,
					time: data.time,
					like: data.like,
				    r_nickname: typeof data.replyTo.user=="undefined"?null:data.replyTo.user.nickname,
					r_content: typeof data.replyTo.content=="undefined"?null:data.replyTo.content
				}
			]
		}
		
		//console.log(comment_data)
		var comment = template('temp-comment', comment_data);
		$("#comment-start").after(comment);
	}

// 显示更多-------------------
	$(".art-comment").on("click",".readmore",function(e){
		t = $(e.target);
		if(t.attr("data-all")){
			t.parent().find(".c-content").html(t.attr("data-all"))
		}
		t.hide()
	})

// 点赞-------------------
	$(".art-comment").on("click",".dolike",function(e){
		var t = $(e.target),
			n = parseInt(t.html()),
			cid = parseInt(t.parent().parent().attr("data-comid"));

		if(!t.hasClass("on")){
			$.ajax({
				url: INIT_DATA.like_api,
	            type: 'get',
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
	})

// 分享-------------------
	$(".art-share").on("click",".share-i",function(e){
		var t = $(e.target);
		var share_data = {
			type : t.attr("data-type"),
			title : SHARE_DATA.title==""?$("#art-title").html():SHARE_DATA.title,
			url : location.href,
			image : SHARE_DATA.share_image
		}
		//console.log(share_data)
		if(window.score){
			window.score.share(share_data)
		}else{
			console.log(share_data)
		}
	})


})(Zepto)

