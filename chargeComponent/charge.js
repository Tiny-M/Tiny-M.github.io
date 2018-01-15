(function(env){
	/*
		wrap:".swiper-container",  //作用对象的选择器
		type:"cpm-swiper",   //付费种类：cpm：展现；cpa：点击；cpm-swiper 滑动展现
		request:function(data){
			//触发付费函数，可用来添加http请求代码
		},
		swiper:{container:".swiper-container",slider:".swiper-slide",option:{}}   //同swiper组件的使用 container为作用对象选择器，option为swiper的创建属性
	*/

	// 构造函数
	function charge(option){
		this.wrap = option.wrap;
		this.type = option.type;
		this.request = option.request;
		this.date = new Date(new Date().setHours(0, 0, 0, 0)) / 1000;
		this.swiper = option.swiper;

		if(this.type == "cpa"){
			this.cpa();
		}
		if(this.type == "cpm"){
			this.cpm();
		}
		if(this.type == "cpm-swiper"){
			this.cpmSwiper();
		}
	}

	// charge原型
	charge.prototype = {
		modulus:{
			cpaClassName : "charge-cpa",
			showRatio : 0.3
		},
		// 点击付费
		cpa : function(){
			var t = this
			var el_parent = document.querySelector(this.wrap)
			el_parent.addEventListener("click",function(event){
				var tar = event.target;
				var data = {};

				while(tar.tagName != "BODY" && tar.className.indexOf("charge-cpa-item") < 0){
					tar = tar.parentNode;
				}

				if(tar.className.indexOf("charge-cpa-item") >= 0){
					data.type = t.type
					data.id = tar.getAttribute("charge-item")

					t.request(data)
				}

			},true)
		},
		// 展现付费
		cpm : function(){
			var t = this
			var el_parent = document.querySelector(this.wrap)
			t.onShow(el_parent)
			window.addEventListener("scroll",function(){
				t.onShow(el_parent)
			})
		},
		// 滑动付费
		cpmSwiper:function(){
			var t = this;
			var el_parent = document.querySelector(this.wrap)
			var el_slide = el_parent.querySelectorAll(t.swiper.slider)
			var data = {}

			//第一屏展现 
			t.onShow(el_parent,"swiper")
			window.addEventListener("scroll",function(){
				t.onShow(el_parent,"swiper")
			})

			// 为滑动结束添加方法
			t.swiper.option.onSlideChangeEnd = function(swiper){
				if(el_slide[swiper.activeIndex].className.indexOf("charge-cpm-item")>0){
					if(t.isShow(el_slide[swiper.activeIndex])){
						data.type = t.type
						data.id = el_slide[swiper.activeIndex].getAttribute("charge-item")

						if(!t.ls_read(t.date,data.id)){
							t.request(data)
							t.ls_write(t.date,data.id)
						}
					}
					
				}else{
					items = el_slide[swiper.activeIndex].querySelectorAll(".charge-cpm-item");
					for(var i = 0;i < items.length ; i++){
						if(t.isShow(items[i])){
							data.type = t.type
							data.id = items[i].getAttribute("charge-item")

							if(!t.ls_read(t.date,data.id)){
								t.request(data)
								t.ls_write(t.date,data.id)
							}
						}
					}
				}
				
			}
			// 创建swiper对象
			if(Swiper){
				new Swiper(t.swiper.container,t.swiper.option)
			}			
		},
		// 计算展现付费的方法
		onShow:function(el,param){
			var t = this,
				els,
				contHeight = window.innerHeight,
				contWidth = window.innerWidth,
				contTop = window.scrollY,
				contLeft = window.scrollX;

			if(param == "swiper"){
				els = el.querySelectorAll(".charge-cpm-item.swiper-slide-active")
			}else{
				els = el.querySelectorAll(".charge-cpm-item")
			}

			var data = {};

			for(var i = 0;i < els.length ; i++){
				if((contTop > this.offsetTop(els[i]) - contHeight + (els[i].offsetHeight*t.modulus.showRatio))&&
				(contTop < this.offsetTop(els[i]) + (els[i].offsetHeight*(1-t.modulus.showRatio)))
				){

					data.type = t.type
					data.id = els[i].getAttribute("charge-item")

					if(!this.ls_read(this.date,data.id)){
						t.request(data)
						this.ls_write(this.date,data.id)
					}
				}
			}
		},
		isShow:function(el){
			var t = this,
				contHeight = window.innerHeight,
				contWidth = window.innerWidth,
				contTop = window.scrollY,
				contLeft = window.scrollX;

			if((contTop > this.offsetTop(el) - contHeight + (el.offsetHeight*t.modulus.showRatio))&&
			(contTop < this.offsetTop(el) + (el.offsetHeight*(1-t.modulus.showRatio)))
			){
				return true;
			}else{
				return false;
			}
		},
		// 将展现时间和id写入本地存储
		ls_write:function(date,id){
			var datastr = date+"@"+id+";";

			// 若本地存储中没有chargeLS对象或时间超时，写入新的数据
			if(!localStorage.chargeLS||localStorage.chargeLS.indexOf(date)<0){
				localStorage.setItem("chargeLS",datastr)
			}else{
				// 将新的展现记录添加至chargeLS对象
				localStorage.chargeLS += datastr;  
			}
		},
		// 读本地存储，判断是否今日已展示过
		ls_read:function(date,id){
			var datastr = date+"@"+id+";";
			if(!localStorage.chargeLS||localStorage.chargeLS.indexOf(datastr)<0){
				return false;
			}else{
				return true;
			}
		},
		offsetTop:function(el){
			var top = el.offsetTop;

			while(el.parentNode.tagName != "BODY" && (getComputedStyle(el).position == "absolote" || getComputedStyle(el).position == "relative")){
				el = el.parentNode
				top = top + el.offsetTop
			}
			return top
		},
		offsetLeft:function(el){
			var left = el.offsetLeft;
			while(el.parentNode.tagName != "BODY" && (getComputedStyle(el).position == "absolote" || getComputedStyle(el).position == "relative")){
				el = el.parentNode
				left = left + el.offsetLeft
			}
			return left
		}
	}

	// 构造函数放置window下
	env.charge = charge;
})(window)


