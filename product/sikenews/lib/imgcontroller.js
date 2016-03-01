// css动态加载
var head = document.getElementsByTagName('head')[0];
var css = document.createElement("style")
css.innerHTML = '.sc-imgctl{display: inline-block;}.gif-wrap{position: relative;}.gif-wrap:after{position: absolute;top: 0px;right: 0px;content: "GIF";display: block;width: 50px;height: 30px;line-height: 30px;font-size: 24px;color: #fff;text-align: center;background: #000;opacity: 0.5;}.gif-wrap.on:after{display: none;}#body.iswifi .gif-wrap:after{display: none;}'
head.appendChild(css);
// 图片懒加载
var SC_Imgcontroller = {
    wrap : null,
    imgClass : "sc-imgctl",

    loadall : function(wrap){
        var imglist = wrap.querySelectorAll("."+this.imgClass)
        console.log(imglist)
        for(var i=0;i<imglist.length;i++){
            var el = imglist[i].childNodes[0];
            el.src=el.getAttribute("data-src");
            imglist[i].classList.add("on");
        }
    },

    run : function(wrap){
        var t = this;
        t.wrap = wrap;
        t.wrap.addEventListener("click",function(e){
            // 获取点击元素
            if(e.target && e.target.parentNode.classList.contains(t.imgClass)){
                e.target.src=e.target.getAttribute("data-src");
                e.target.parentNode.classList.add("on")
            }
        })
    }   
}