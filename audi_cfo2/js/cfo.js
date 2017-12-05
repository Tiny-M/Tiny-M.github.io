// 滑动初始化

var href = location.href;
var img = new Image()
img.src = href.substr(0,href.lastIndexOf('/'))+'/img/bg.png';
img.onload = function(){
    $(".loading").hide();
        $(".loadingtext").html('- 开始 -').addClass('play');
        $(".p1").on('click',function(){
            if($(this).hasClass("start")){
                $(".p1").removeClass("start")
                $(".loadingtext").hide();
                $("#audio1")[0].play();
                $('#p1').find(".text").show();
                animate.run();    
            }
             
        })
}
    

 // a.src = href.substr(0,href.lastIndexOf('/'))+'/img/cfo2_mixdown.mp3';


var func = {
    swiper : function(){
        $(".down").show()
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'vertical',
            allowSwipeToPrev : false,
            onSlideChangeEnd: function(swiper){
                if (swiper.activeIndex == 0) {
                    this.allowSwipeToPrev = false
                 }else{
                    this.allowSwipeToPrev = true
                 }
                
                if (swiper.activeIndex == 1) {
                $('.bg1').addClass('s1')
                 }else{
                    $('.bg1').removeClass('s1')
                 }
                 if (swiper.activeIndex == 2) {
                $('.bg1').addClass('s2')
                 }else{
                    $('.bg1').removeClass('s2')
                 } 
                 if (swiper.activeIndex == 3) {
                $('.bg1').addClass('s3')
                 }else{
                    $('.bg1').removeClass('s3')
                 } 
                 if (swiper.activeIndex == 4) {
                $('.bg1').addClass('s4')
                 }else{
                    $('.bg1').removeClass('s4')
                 }
                 if (swiper.activeIndex == 6) {
                $('#p9').addClass('s1')
                $(".bg1").addClass("s5")
             }else{
                $('#p9').removeClass('s1')
                $(".bg1").removeClass("s5")
             } 
            }
          }) 
    },
}


var animate = {
    obj1:$('#p1'),
    run:function(){
       animate.obj1.find(".white1").addClass('s0')
       setTimeout(animate.p1,600)
    },
    p1:function(){
        animate.obj1.find(".text").addClass('s1').html("世界级")
        animate.obj1.find(".white1").addClass('s1')
        setTimeout(animate.p2,600)
    },
    p2:function(){
        animate.obj1.find(".text").addClass('s2').html("球员")
        animate.obj1.find(".white1").addClass('s2')
        setTimeout(animate.p3,600)
    },
    p3:function(){
        animate.obj1.find(".white1").addClass('s3')
        animate.obj1.find(".text").addClass('s3').html("谈笑风生")
        setTimeout(animate.p4,1000)
    },
    p4:function(){
        animate.obj1.addClass("s1")
        animate.obj1.find(".white1").addClass('s4')
        animate.obj1.find(".text").addClass('s4').html("请")
        setTimeout(animate.p5,600)
    },
    p5:function(){
        animate.obj1.removeClass("s1")
        animate.obj1.find(".white1").addClass('s5')
        animate.obj1.find(".text").addClass('s5').html("传奇")
        setTimeout(animate.p6,600)
    },
    p6:function(){
        animate.obj1.find(".white1").addClass('s6')
        animate.obj1.find(".text").html("球星")
        setTimeout(animate.p7,600)
    },
    p7:function(){
        animate.obj1.addClass("s1")
        animate.obj1.find(".white1").hide()
        animate.obj1.find(".text").addClass("s6").html("陪你")
        setTimeout(animate.p8,600)
    },
    p8:function(){
        animate.obj1.removeClass("s1").addClass("s2")
        animate.obj1.find(".white1").hide()
        animate.obj1.find(".text").addClass("s7").html("过周末")
        setTimeout(animate.p9,1000)
    },
    p9:function(){
        animate.obj1.removeClass("s2").addClass("s3")
        animate.obj1.find(".text").hide();
        setTimeout(animate.p10,600)
    },
    p10:function(){
        animate.obj1.removeClass("s3");
        animate.obj1.find(".text").show().addClass("s8").html("用心成就");
        animate.obj1.find(".white1").show().addClass("s7")
        setTimeout(animate.p11,600)
    },
    p11:function(){
        animate.obj1.addClass("s1");
        animate.obj1.find(".text").removeClass("s7 s8").html("你的")
        animate.obj1.find(".white1").hide()
        setTimeout(animate.p12,600)
    },
    p12:function(){
        animate.obj1.removeClass("s1").addClass("s2");
        animate.obj1.find(".text").removeClass("s6").html("梦想")
        animate.obj1.find(".white1").hide()
        
        func.swiper();
    }
} 
