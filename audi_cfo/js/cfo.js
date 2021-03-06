// 滑动初始化
var href = location.href;
var img = new Image()
img.src = href.substr(0,href.lastIndexOf('/'))+'/img/audi-p2.jpg?12';
img.onload = function(){
    $(".loading").hide();
    $(".down").show();
    $(".loadingtext").html('- 开始 -').addClass('play');
    $(".play").on('click',function(){
		$(".loadingtext").hide();
		$("#audio1")[0].play();
		var mySwiper = new Swiper ('.swiper-container', {
	        direction: 'vertical',
	        onSlideChangeEnd: function(swiper){
	            // console.log(swiper)
	         if (swiper.activeIndex == 7) {
	            $('#p8').addClass('s1')
	         }else{
	            $('#p8').removeClass('s1')
	         } 
             if (swiper.activeIndex == 8) {
                $('#p10').addClass('s1')
             }else{
                $('#p10').removeClass('s1')
             } 
             if (swiper.activeIndex == 9) {
                $('#p11').addClass('s1')
             }else{
                $('#p11').removeClass('s1')
             } 
             if (swiper.activeIndex == 11) {
                $('#p9').addClass('s1')
             }else{
                $('#p9').removeClass('s1')
             } 
	        }
	      }) 

	    animate1.run();     
	})
}


var animate1 = {
    obj1_1:$('.p1-1'),
    obj1_2:$('.p1-2'),
    obj1_3:$('.p1-3'),
    obj1_4:$('.p1-4'),
    obj1_5:$('.p1-5'),
    obj1_6:$('.p1-6'),
    obj1_7:$('.p1-7'),
    run:function(){
       setTimeout(animate1.p1,1000)
    },
    p1:function(){
        animate1.obj1_2.addClass('s1')
        setTimeout(animate1.p2,200)
    },
    p2:function(){
        animate1.obj1_1.addClass('s1')
        setTimeout(animate1.p3,300)
    },
    p3:function(){
        animate1.obj1_2.addClass('s2').html('欧洲那些')
        animate1.obj1_1.addClass('s2')
        setTimeout(animate1.p4,300)
    },
    p4:function(){
        animate1.obj1_2.addClass('s3')
        setTimeout(animate1.p5,500)
    },
    p5:function(){
        animate1.obj1_3.addClass('s1')
        animate1.obj1_1.addClass('s3')
        setTimeout(animate1.p6,800)
    },
    p6:function(){
        animate1.obj1_3.removeClass('s1')
        animate1.obj1_2.addClass('s4').html("现场\n观赛?")
        setTimeout(animate1.p7,1500)
    },
    p7:function(){
        animate1.obj1_1.addClass('s4')
        animate1.obj1_2.hide()
        setTimeout(animate1.p8,200)
    },
    p8:function(){
        animate1.obj1_2.show().addClass("s5").html("想")
        setTimeout(animate1.p9,700)
    },
    p9:function(){
        animate1.obj1_4.show()
        setTimeout(animate1.p10,700)
    },
    p10:function(){
        animate1.obj1_5.show()
        setTimeout(animate1.p11,800)
    },
    p11:function(){
        animate1.obj1_5.addClass("s1")
        setTimeout(animate1.p12,1200)
    },
    p12:function(){
        animate1.obj1_3.addClass("s2").html('<div class="text">想成为</div>')
        setTimeout(animate1.p13,800)
    },
    p13:function(){
        animate1.obj1_3.hide()
        animate1.obj1_6.show()
        setTimeout(animate1.p14,500)
    },
    p14:function(){
        animate1.obj1_6.find('.text').html('意见')
        setTimeout(animate1.p15,500)
    },
    p15:function(){
        animate1.obj1_6.addClass('s1').find('.text').html('领袖?')
        setTimeout(animate1.p16,1200)
    },
    p16:function(){
        animate1.obj1_6.addClass('s2')
        setTimeout(animate1.p17,700)
    },
    p17:function(){
        animate1.obj1_7.addClass('s1')
        setTimeout(animate1.p18,500)
    },
    p18:function(){
        animate1.obj1_7.addClass('s2').find(".text").html('带')
        setTimeout(animate1.p19,500)
    },
    p19:function(){
        animate1.obj1_7.addClass('s3').find(".text").html('你')
        setTimeout(animate1.p20,500)
    },
    p20:function(){
        animate1.obj1_7.addClass('s4').find(".text").html('去')
        setTimeout(animate1.p21,500)
    },
    p21:function(){
        animate1.obj1_7.addClass('s5').find(".text").html('!')
    }
}




