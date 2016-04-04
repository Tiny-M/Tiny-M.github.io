/*! Video.js v4.5.1 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */ 
(function() {var b=void 0,f=!0,h=null,l=!1;function m(){return function(){}}function p(a){return function(){return this[a]}}function q(a){return function(){return a}}var t;document.createElement("video");document.createElement("audio");document.createElement("track");function u(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));if(u.va[a])return u.va[a];a=u.u(a)}if(!a||!a.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return a.player||new u.Player(a,c,d)}
var videojs=u;window.Wd=window.Xd=u;u.Rb="4.5";u.Fc="https:"==document.location.protocol?"https://":"http://";u.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},bigPlayButton:{},controlBar:{}},notSupportedMessage:'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'};
"GENERATED_CDN_VSN"!==u.Rb&&(videojs.options.flash.swf=u.Fc+"vjs.zencdn.net/"+u.Rb+"/video-js.swf");u.va={};"function"===typeof define&&define.amd?define([],function(){return videojs}):"object"===typeof exports&&"object"===typeof module&&(module.exports=videojs);u.ka=u.CoreObject=m();
u.ka.extend=function(a){var c,d;a=a||{};c=a.init||a.j||this.prototype.init||this.prototype.j||m();d=function(){c.apply(this,arguments)};d.prototype=u.l.create(this.prototype);d.prototype.constructor=d;d.extend=u.ka.extend;d.create=u.ka.create;for(var e in a)a.hasOwnProperty(e)&&(d.prototype[e]=a[e]);return d};u.ka.create=function(){var a=u.l.create(this.prototype);this.apply(a,arguments);return a};
u.d=function(a,c,d){var e=u.getData(a);e.z||(e.z={});e.z[c]||(e.z[c]=[]);d.s||(d.s=u.s++);e.z[c].push(d);e.V||(e.disabled=l,e.V=function(c){if(!e.disabled){c=u.ic(c);var d=e.z[c.type];if(d)for(var d=d.slice(0),k=0,r=d.length;k<r&&!c.pc();k++)d[k].call(a,c)}});1==e.z[c].length&&(document.addEventListener?a.addEventListener(c,e.V,l):document.attachEvent&&a.attachEvent("on"+c,e.V))};
u.o=function(a,c,d){if(u.mc(a)){var e=u.getData(a);if(e.z)if(c){var g=e.z[c];if(g){if(d){if(d.s)for(e=0;e<g.length;e++)g[e].s===d.s&&g.splice(e--,1)}else e.z[c]=[];u.ec(a,c)}}else for(g in e.z)c=g,e.z[c]=[],u.ec(a,c)}};u.ec=function(a,c){var d=u.getData(a);0===d.z[c].length&&(delete d.z[c],document.removeEventListener?a.removeEventListener(c,d.V,l):document.detachEvent&&a.detachEvent("on"+c,d.V));u.zb(d.z)&&(delete d.z,delete d.V,delete d.disabled);u.zb(d)&&u.uc(a)};
u.ic=function(a){function c(){return f}function d(){return l}if(!a||!a.Ab){var e=a||window.event;a={};for(var g in e)"layerX"!==g&&("layerY"!==g&&"keyboardEvent.keyLocation"!==g)&&("returnValue"==g&&e.preventDefault||(a[g]=e[g]));a.target||(a.target=a.srcElement||document);a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;a.preventDefault=function(){e.preventDefault&&e.preventDefault();a.returnValue=l;a.fd=c;a.defaultPrevented=f};a.fd=d;a.defaultPrevented=l;a.stopPropagation=function(){e.stopPropagation&&
e.stopPropagation();a.cancelBubble=f;a.Ab=c};a.Ab=d;a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&e.stopImmediatePropagation();a.pc=c;a.stopPropagation()};a.pc=d;if(a.clientX!=h){g=document.documentElement;var j=document.body;a.pageX=a.clientX+(g&&g.scrollLeft||j&&j.scrollLeft||0)-(g&&g.clientLeft||j&&j.clientLeft||0);a.pageY=a.clientY+(g&&g.scrollTop||j&&j.scrollTop||0)-(g&&g.clientTop||j&&j.clientTop||0)}a.which=a.charCode||a.keyCode;a.button!=h&&(a.button=a.button&1?0:a.button&
4?1:a.button&2?2:0)}return a};u.k=function(a,c){var d=u.mc(a)?u.getData(a):{},e=a.parentNode||a.ownerDocument;"string"===typeof c&&(c={type:c,target:a});c=u.ic(c);d.V&&d.V.call(a,c);if(e&&!c.Ab()&&c.bubbles!==l)u.k(e,c);else if(!e&&!c.defaultPrevented&&(d=u.getData(c.target),c.target[c.type])){d.disabled=f;if("function"===typeof c.target[c.type])c.target[c.type]();d.disabled=l}return!c.defaultPrevented};
u.U=function(a,c,d){function e(){u.o(a,c,e);d.apply(this,arguments)}e.s=d.s=d.s||u.s++;u.d(a,c,e)};var v=Object.prototype.hasOwnProperty;u.e=function(a,c){var d,e;d=document.createElement(a||"div");for(e in c)v.call(c,e)&&(-1!==e.indexOf("aria-")||"role"==e?d.setAttribute(e,c[e]):d[e]=c[e]);return d};u.Z=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};u.l={};u.l.create=Object.create||function(a){function c(){}c.prototype=a;return new c};
u.l.ra=function(a,c,d){for(var e in a)v.call(a,e)&&c.call(d||this,e,a[e])};u.l.B=function(a,c){if(!c)return a;for(var d in c)v.call(c,d)&&(a[d]=c[d]);return a};u.l.Wc=function(a,c){var d,e,g;a=u.l.copy(a);for(d in c)v.call(c,d)&&(e=a[d],g=c[d],a[d]=u.l.Na(e)&&u.l.Na(g)?u.l.Wc(e,g):c[d]);return a};u.l.copy=function(a){return u.l.B({},a)};u.l.Na=function(a){return!!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object};
u.bind=function(a,c,d){function e(){return c.apply(a,arguments)}c.s||(c.s=u.s++);e.s=d?d+"_"+c.s:c.s;return e};u.pa={};u.s=1;u.expando="vdata"+(new Date).getTime();u.getData=function(a){var c=a[u.expando];c||(c=a[u.expando]=u.s++,u.pa[c]={});return u.pa[c]};u.mc=function(a){a=a[u.expando];return!(!a||u.zb(u.pa[a]))};u.uc=function(a){var c=a[u.expando];if(c){delete u.pa[c];try{delete a[u.expando]}catch(d){a.removeAttribute?a.removeAttribute(u.expando):a[u.expando]=h}}};
u.zb=function(a){for(var c in a)if(a[c]!==h)return l;return f};u.n=function(a,c){-1==(" "+a.className+" ").indexOf(" "+c+" ")&&(a.className=""===a.className?c:a.className+" "+c)};u.t=function(a,c){var d,e;if(-1!=a.className.indexOf(c)){d=a.className.split(" ");for(e=d.length-1;0<=e;e--)d[e]===c&&d.splice(e,1);a.className=d.join(" ")}};u.F=u.e("video");u.J=navigator.userAgent;u.Kc=/iPhone/i.test(u.J);u.Jc=/iPad/i.test(u.J);u.Lc=/iPod/i.test(u.J);u.Ic=u.Kc||u.Jc||u.Lc;var aa=u,w;var x=u.J.match(/OS (\d+)_/i);
w=x&&x[1]?x[1]:b;aa.Kd=w;u.Hc=/Android/i.test(u.J);var ba=u,y;var z=u.J.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),A,B;z?(A=z[1]&&parseFloat(z[1]),B=z[2]&&parseFloat(z[2]),y=A&&B?parseFloat(z[1]+"."+z[2]):A?A:h):y=h;ba.Qb=y;u.Mc=u.Hc&&/webkit/i.test(u.J)&&2.3>u.Qb;u.Ub=/Firefox/i.test(u.J);u.Ld=/Chrome/i.test(u.J);u.$b=!!("ontouchstart"in window||window.Gc&&document instanceof window.Gc);
u.wb=function(a){var c,d,e,g;c={};if(a&&a.attributes&&0<a.attributes.length){d=a.attributes;for(var j=d.length-1;0<=j;j--){e=d[j].name;g=d[j].value;if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+","))g=g!==h?f:l;c[e]=g}}return c};
u.Pd=function(a,c){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");return d};u.yb=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)};u.Nb={};u.u=function(a){0===a.indexOf("#")&&(a=a.slice(1));return document.getElementById(a)};
u.ta=function(a,c){c=c||a;var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),j=Math.floor(c/60%60),k=Math.floor(c/3600);if(isNaN(a)||Infinity===a)g=e=d="-";g=0<g||0<k?g+":":"";return g+(((g||10<=j)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)};u.Sc=function(){document.body.focus();document.onselectstart=q(l)};u.Ed=function(){document.onselectstart=q(f)};u.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")};u.round=function(a,c){c||(c=0);return Math.round(a*Math.pow(10,c))/Math.pow(10,c)};
u.sb=function(a,c){return{length:1,start:function(){return a},end:function(){return c}}};
u.get=function(a,c,d){var e,g;"undefined"===typeof XMLHttpRequest&&(window.XMLHttpRequest=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");});g=new XMLHttpRequest;try{g.open("GET",a)}catch(j){d(j)}e=0===a.indexOf("file:")||0===window.location.href.indexOf("file:")&&-1===a.indexOf("http");
g.onreadystatechange=function(){4===g.readyState&&(200===g.status||e&&0===g.status?c(g.responseText):d&&d())};try{g.send()}catch(k){d&&d(k)}};u.wd=function(a){try{var c=window.localStorage||l;c&&(c.volume=a)}catch(d){22==d.code||1014==d.code?u.log("LocalStorage Full (VideoJS)",d):18==d.code?u.log("LocalStorage not allowed (VideoJS)",d):u.log("LocalStorage Error (VideoJS)",d)}};u.kc=function(a){a.match(/^https?:\/\//)||(a=u.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);return a};
u.log=function(){u.log.history=u.log.history||[];u.log.history.push(arguments);window.console&&window.console.log(Array.prototype.slice.call(arguments))};u.cd=function(a){var c,d;a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());if(!c)return{left:0,top:0};a=document.documentElement;d=document.body;return{left:u.round(c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0)),top:u.round(c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0))}};
u.ja={};u.ja.Eb=function(a,c){var d,e,g;a=u.l.copy(a);for(d in c)c.hasOwnProperty(d)&&(e=a[d],g=c[d],a[d]=u.l.Na(e)&&u.l.Na(g)?u.ja.Eb(e,g):c[d]);return a};
u.b=u.ka.extend({j:function(a,c,d){this.c=a;this.h=u.l.copy(this.h);c=this.options(c);this.R=c.id||(c.el&&c.el.id?c.el.id:a.id()+"_component_"+u.s++);this.ld=c.name||h;this.a=c.el||this.e();this.K=[];this.Ja={};this.Ka={};this.nc();this.I(d);if(c.vc!==l){var e,g;e=u.bind(this.C(),this.C().reportUserActivity);this.d("touchstart",function(){e();clearInterval(g);g=setInterval(e,250)});a=function(){e();clearInterval(g)};this.d("touchmove",e);this.d("touchend",a);this.d("touchcancel",a)}}});t=u.b.prototype;
t.dispose=function(){this.k({type:"dispose",bubbles:l});if(this.K)for(var a=this.K.length-1;0<=a;a--)this.K[a].dispose&&this.K[a].dispose();this.Ka=this.Ja=this.K=h;this.o();this.a.parentNode&&this.a.parentNode.removeChild(this.a);u.uc(this.a);this.a=h};t.c=f;t.C=p("c");t.options=function(a){return a===b?this.h:this.h=u.ja.Eb(this.h,a)};t.e=function(a,c){return u.e(a,c)};t.u=p("a");t.La=function(){return this.G||this.a};t.id=p("R");t.name=p("ld");t.children=p("K");t.ed=function(a){return this.Ja[a]};
t.fa=function(a){return this.Ka[a]};t.Y=function(a,c){var d,e;"string"===typeof a?(e=a,c=c||{},d=c.componentClass||u.Z(e),c.name=e,d=new window.videojs[d](this.c||this,c)):d=a;this.K.push(d);"function"===typeof d.id&&(this.Ja[d.id()]=d);(e=e||d.name&&d.name())&&(this.Ka[e]=d);"function"===typeof d.el&&d.el()&&this.La().appendChild(d.el());return d};
t.removeChild=function(a){"string"===typeof a&&(a=this.fa(a));if(a&&this.K){for(var c=l,d=this.K.length-1;0<=d;d--)if(this.K[d]===a){c=f;this.K.splice(d,1);break}c&&(this.Ja[a.id]=h,this.Ka[a.name]=h,(c=a.u())&&c.parentNode===this.La()&&this.La().removeChild(a.u()))}};t.nc=function(){var a=this.h;if(a&&a.children){var c=this;u.l.ra(a.children,function(a,e){e!==l&&!e.loadEvent&&(c[a]=c.Y(a,e))})}};t.Q=q("");t.d=function(a,c){u.d(this.a,a,u.bind(this,c));return this};
t.o=function(a,c){u.o(this.a,a,c);return this};t.U=function(a,c){u.U(this.a,a,u.bind(this,c));return this};t.k=function(a,c){u.k(this.a,a,c);return this};t.I=function(a){a&&(this.aa?a.call(this):(this.Ua===b&&(this.Ua=[]),this.Ua.push(a)));return this};t.za=function(){this.aa=f;var a=this.Ua;if(a&&0<a.length){for(var c=0,d=a.length;c<d;c++)a[c].call(this);this.Ua=[];this.k("ready")}};t.n=function(a){u.n(this.a,a);return this};t.t=function(a){u.t(this.a,a);return this};
t.show=function(){this.a.style.display="block";return this};t.D=function(){this.a.style.display="none";return this};function C(a){a.t("vjs-lock-showing")}t.disable=function(){this.D();this.show=m()};t.width=function(a,c){return E(this,"width",a,c)};t.height=function(a,c){return E(this,"height",a,c)};t.Yc=function(a,c){return this.width(a,f).height(c)};
function E(a,c,d,e){if(d!==b)return a.a.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px",e||a.k("resize"),a;if(!a.a)return 0;d=a.a.style[c];e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(a.a["offset"+u.Z(c)],10)}
u.q=u.b.extend({j:function(a,c){u.b.call(this,a,c);var d=l;this.d("touchstart",function(a){a.preventDefault();d=f});this.d("touchmove",function(){d=l});var e=this;this.d("touchend",function(a){d&&e.p(a);a.preventDefault()});this.d("click",this.p);this.d("focus",this.Qa);this.d("blur",this.Pa)}});t=u.q.prototype;
t.e=function(a,c){c=u.l.B({className:this.Q(),innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">'+(this.oa||"Need Text")+"</span></div>",role:"button","aria-live":"polite",tabIndex:0},c);return u.b.prototype.e.call(this,a,c)};t.Q=function(){return"vjs-control "+u.b.prototype.Q.call(this)};t.p=m();t.Qa=function(){u.d(document,"keyup",u.bind(this,this.ba))};t.ba=function(a){if(32==a.which||13==a.which)a.preventDefault(),this.p()};
t.Pa=function(){u.o(document,"keyup",u.bind(this,this.ba))};u.O=u.b.extend({j:function(a,c){u.b.call(this,a,c);this.Rc=this.fa(this.h.barName);this.handle=this.fa(this.h.handleName);a.d(this.sc,u.bind(this,this.update));this.d("mousedown",this.Ra);this.d("touchstart",this.Ra);this.d("focus",this.Qa);this.d("blur",this.Pa);this.d("click",this.p);this.c.d("controlsvisible",u.bind(this,this.update));a.I(u.bind(this,this.update));this.P={}}});t=u.O.prototype;
t.e=function(a,c){c=c||{};c.className+=" vjs-slider";c=u.l.B({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);return u.b.prototype.e.call(this,a,c)};t.Ra=function(a){a.preventDefault();u.Sc();this.P.move=u.bind(this,this.Gb);this.P.end=u.bind(this,this.Hb);u.d(document,"mousemove",this.P.move);u.d(document,"mouseup",this.P.end);u.d(document,"touchmove",this.P.move);u.d(document,"touchend",this.P.end);this.Gb(a)};
t.Hb=function(){u.Ed();u.o(document,"mousemove",this.P.move,l);u.o(document,"mouseup",this.P.end,l);u.o(document,"touchmove",this.P.move,l);u.o(document,"touchend",this.P.end,l);this.update()};t.update=function(){if(this.a){var a,c=this.xb(),d=this.handle,e=this.Rc;isNaN(c)&&(c=0);a=c;if(d){a=this.a.offsetWidth;var g=d.u().offsetWidth;a=g?g/a:0;c*=1-a;a=c+a/2;d.u().style.left=u.round(100*c,2)+"%"}e.u().style.width=u.round(100*a,2)+"%"}};
function F(a,c){var d,e,g,j;d=a.a;e=u.cd(d);j=g=d.offsetWidth;d=a.handle;if(a.h.Gd)return j=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.u().offsetHeight,j+=d/2,g-=d),Math.max(0,Math.min(1,(j-e+g)/g));g=e.left;e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;d&&(d=d.u().offsetWidth,g+=d/2,j-=d);return Math.max(0,Math.min(1,(e-g)/j))}t.Qa=function(){u.d(document,"keyup",u.bind(this,this.ba))};
t.ba=function(a){37==a.which?(a.preventDefault(),this.yc()):39==a.which&&(a.preventDefault(),this.zc())};t.Pa=function(){u.o(document,"keyup",u.bind(this,this.ba))};t.p=function(a){a.stopImmediatePropagation();a.preventDefault()};u.W=u.b.extend();u.W.prototype.defaultValue=0;u.W.prototype.e=function(a,c){c=c||{};c.className+=" vjs-slider-handle";c=u.l.B({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);return u.b.prototype.e.call(this,"div",c)};u.la=u.b.extend();
function ca(a,c){a.Y(c);c.d("click",u.bind(a,function(){C(this)}))}u.la.prototype.e=function(){var a=this.options().Uc||"ul";this.G=u.e(a,{className:"vjs-menu-content"});a=u.b.prototype.e.call(this,"div",{append:this.G,className:"vjs-menu"});a.appendChild(this.G);u.d(a,"click",function(a){a.preventDefault();a.stopImmediatePropagation()});return a};u.N=u.q.extend({j:function(a,c){u.q.call(this,a,c);this.selected(c.selected)}});
u.N.prototype.e=function(a,c){return u.q.prototype.e.call(this,"li",u.l.B({className:"vjs-menu-item",innerHTML:this.h.label},c))};u.N.prototype.p=function(){this.selected(f)};u.N.prototype.selected=function(a){a?(this.n("vjs-selected"),this.a.setAttribute("aria-selected",f)):(this.t("vjs-selected"),this.a.setAttribute("aria-selected",l))};
u.S=u.q.extend({j:function(a,c){u.q.call(this,a,c);this.ua=this.Ma();this.Y(this.ua);this.L&&0===this.L.length&&this.D();this.d("keyup",this.ba);this.a.setAttribute("aria-haspopup",f);this.a.setAttribute("role","button")}});t=u.S.prototype;t.na=l;t.Ma=function(){var a=new u.la(this.c);this.options().title&&a.u().appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.Z(this.A),Cd:-1}));if(this.L=this.createItems())for(var c=0;c<this.L.length;c++)ca(a,this.L[c]);return a};t.qa=m();
t.Q=function(){return this.className+" vjs-menu-button "+u.q.prototype.Q.call(this)};t.Qa=m();t.Pa=m();t.p=function(){this.U("mouseout",u.bind(this,function(){C(this.ua);this.a.blur()}));this.na?G(this):H(this)};t.ba=function(a){a.preventDefault();32==a.which||13==a.which?this.na?G(this):H(this):27==a.which&&this.na&&G(this)};function H(a){a.na=f;a.ua.n("vjs-lock-showing");a.a.setAttribute("aria-pressed",f);a.L&&0<a.L.length&&a.L[0].u().focus()}
function G(a){a.na=l;C(a.ua);a.a.setAttribute("aria-pressed",l)}
u.Player=u.b.extend({j:function(a,c,d){this.M=a;a.id=a.id||"vjs_video_"+u.s++;c=u.l.B(da(a),c);this.v={};this.tc=c.poster;this.rb=c.controls;a.controls=l;c.vc=l;u.b.call(this,this,c,d);this.controls()?this.n("vjs-controls-enabled"):this.n("vjs-controls-disabled");this.U("play",function(a){u.k(this.a,{type:"firstplay",target:this.a})||(a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation())});this.d("ended",this.md);this.d("play",this.Jb);this.d("firstplay",this.nd);this.d("pause",this.Ib);
this.d("progress",this.pd);this.d("durationchange",this.qc);this.d("error",this.Fb);this.d("fullscreenchange",this.od);u.va[this.R]=this;c.plugins&&u.l.ra(c.plugins,function(a,c){this[a](c)},this);var e,g,j,k;e=u.bind(this,this.reportUserActivity);this.d("mousedown",function(){e();clearInterval(g);g=setInterval(e,250)});this.d("mousemove",e);this.d("mouseup",function(){e();clearInterval(g)});this.d("keydown",e);this.d("keyup",e);j=setInterval(u.bind(this,function(){this.ia&&(this.ia=l,this.userActive(f),
clearTimeout(k),k=setTimeout(u.bind(this,function(){this.ia||this.userActive(l)}),2E3))}),250);this.d("dispose",function(){clearInterval(j);clearTimeout(k)})}});t=u.Player.prototype;t.h=u.options;t.dispose=function(){this.k("dispose");this.o("dispose");u.va[this.R]=h;this.M&&this.M.player&&(this.M.player=h);this.a&&this.a.player&&(this.a.player=h);clearInterval(this.Ta);this.wa();this.i&&this.i.dispose();u.b.prototype.dispose.call(this)};
function da(a){var c={sources:[],tracks:[]};u.l.B(c,u.wb(a));if(a.hasChildNodes()){var d,e,g,j;a=a.childNodes;g=0;for(j=a.length;g<j;g++)d=a[g],e=d.nodeName.toLowerCase(),"source"===e?c.sources.push(u.wb(d)):"track"===e&&c.tracks.push(u.wb(d))}return c}
t.e=function(){var a=this.a=u.b.prototype.e.call(this,"div"),c=this.M;c.removeAttribute("width");c.removeAttribute("height");if(c.hasChildNodes()){var d,e,g,j,k;d=c.childNodes;e=d.length;for(k=[];e--;)g=d[e],j=g.nodeName.toLowerCase(),"track"===j&&k.push(g);for(d=0;d<k.length;d++)c.removeChild(k[d])}a.id=c.id;a.className=c.className;c.id+="_html5_api";c.className="vjs-tech";c.player=a.player=this;this.n("vjs-paused");this.width(this.h.width,f);this.height(this.h.height,f);c.parentNode&&c.parentNode.insertBefore(a,
c);u.yb(c,a);return a};
function I(a,c,d){a.i&&(a.aa=l,a.i.dispose(),a.Cb&&(a.Cb=l,clearInterval(a.Ta)),a.Db&&J(a),a.i=l);"Html5"!==c&&a.M&&(u.g.gc(a.M),a.M=h);a.xa=c;a.aa=l;var e=u.l.B({source:d,parentEl:a.a},a.h[c.toLowerCase()]);d&&(d.src==a.v.src&&0<a.v.currentTime&&(e.startTime=a.v.currentTime),a.v.src=d.src);a.i=new window.videojs[c](a,e);a.i.I(function(){this.c.za();if(!this.m.progressEvents){var a=this.c;a.Cb=f;a.Ta=setInterval(u.bind(a,function(){this.v.mb<this.buffered().end(0)?this.k("progress"):1==this.bufferedPercent()&&
(clearInterval(this.Ta),this.k("progress"))}),500);a.i.U("progress",function(){this.m.progressEvents=f;var a=this.c;a.Cb=l;clearInterval(a.Ta)})}this.m.timeupdateEvents||(a=this.c,a.Db=f,a.d("play",a.Cc),a.d("pause",a.wa),a.i.U("timeupdate",function(){this.m.timeupdateEvents=f;J(this.c)}))})}function J(a){a.Db=l;a.wa();a.o("play",a.Cc);a.o("pause",a.wa)}t.Cc=function(){this.fc&&this.wa();this.fc=setInterval(u.bind(this,function(){this.k("timeupdate")}),250)};t.wa=function(){clearInterval(this.fc)};
t.Jb=function(){u.t(this.a,"vjs-paused");u.n(this.a,"vjs-playing")};t.nd=function(){this.h.starttime&&this.currentTime(this.h.starttime);this.n("vjs-has-started")};t.Ib=function(){u.t(this.a,"vjs-playing");u.n(this.a,"vjs-paused")};t.pd=function(){1==this.bufferedPercent()&&this.k("loadedalldata")};t.md=function(){this.h.loop&&(this.currentTime(0),this.play())};t.qc=function(){var a=K(this,"duration");a&&this.duration(a)};t.od=function(){this.isFullScreen()?this.n("vjs-fullscreen"):this.t("vjs-fullscreen")};
t.Fb=function(a){u.log("Video Error",a)};function L(a,c,d){if(a.i&&!a.i.aa)a.i.I(function(){this[c](d)});else try{a.i[c](d)}catch(e){throw u.log(e),e;}}function K(a,c){if(a.i&&a.i.aa)try{return a.i[c]()}catch(d){throw a.i[c]===b?u.log("Video.js: "+c+" method not defined for "+a.xa+" playback technology.",d):"TypeError"==d.name?(u.log("Video.js: "+c+" unavailable on "+a.xa+" playback technology element.",d),a.i.aa=l):u.log(d),d;}}t.play=function(){L(this,"play");return this};
t.pause=function(){L(this,"pause");return this};t.paused=function(){return K(this,"paused")===l?l:f};t.currentTime=function(a){return a!==b?(L(this,"setCurrentTime",a),this.Db&&this.k("timeupdate"),this):this.v.currentTime=K(this,"currentTime")||0};t.duration=function(a){if(a!==b)return this.v.duration=parseFloat(a),this;this.v.duration===b&&this.qc();return this.v.duration||0};
t.buffered=function(){var a=K(this,"buffered"),c=a.length-1,d=this.v.mb=this.v.mb||0;a&&(0<=c&&a.end(c)!==d)&&(d=a.end(c),this.v.mb=d);return u.sb(0,d)};t.bufferedPercent=function(){return this.duration()?this.buffered().end(0)/this.duration():0};t.volume=function(a){if(a!==b)return a=Math.max(0,Math.min(1,parseFloat(a))),this.v.volume=a,L(this,"setVolume",a),u.wd(a),this;a=parseFloat(K(this,"volume"));return isNaN(a)?1:a};
t.muted=function(a){return a!==b?(L(this,"setMuted",a),this):K(this,"muted")||l};t.Wa=function(){return K(this,"supportsFullScreen")||l};t.oc=l;t.isFullScreen=function(a){return a!==b?(this.oc=a,this):this.oc};
t.requestFullScreen=function(){var a=u.Nb.requestFullScreen;this.isFullScreen(f);a?(u.d(document,a.ub,u.bind(this,function(c){this.isFullScreen(document[a.isFullScreen]);this.isFullScreen()===l&&u.o(document,a.ub,arguments.callee);this.k("fullscreenchange")})),this.a[a.wc]()):this.i.Wa()?L(this,"enterFullScreen"):(this.gd=f,this.Zc=document.documentElement.style.overflow,u.d(document,"keydown",u.bind(this,this.jc)),document.documentElement.style.overflow="hidden",u.n(document.body,"vjs-full-window"),
this.k("enterFullWindow"),this.k("fullscreenchange"));return this};t.cancelFullScreen=function(){var a=u.Nb.requestFullScreen;this.isFullScreen(l);if(a)document[a.ob]();else this.i.Wa()?L(this,"exitFullScreen"):(M(this),this.k("fullscreenchange"));return this};t.jc=function(a){27===a.keyCode&&(this.isFullScreen()===f?this.cancelFullScreen():M(this))};
function M(a){a.gd=l;u.o(document,"keydown",a.jc);document.documentElement.style.overflow=a.Zc;u.t(document.body,"vjs-full-window");a.k("exitFullWindow")}
t.src=function(a){if(a===b)return K(this,"src");if(a instanceof Array){var c;a:{c=a;for(var d=0,e=this.h.techOrder;d<e.length;d++){var g=u.Z(e[d]),j=window.videojs[g];if(j.isSupported())for(var k=0,r=c;k<r.length;k++){var n=r[k];if(j.canPlaySource(n)){c={source:n,i:g};break a}}}c=l}c?(a=c.source,c=c.i,c==this.xa?this.src(a):I(this,c,a)):(this.a.appendChild(u.e("p",{innerHTML:this.options().notSupportedMessage})),this.za())}else a instanceof Object?window.videojs[this.xa].canPlaySource(a)?this.src(a.src):
this.src([a]):(this.v.src=a,this.aa?(L(this,"src",a),"auto"==this.h.preload&&this.load(),this.h.autoplay&&this.play()):this.I(function(){this.src(a)}));return this};t.load=function(){L(this,"load");return this};t.currentSrc=function(){return K(this,"currentSrc")||this.v.src||""};t.Sa=function(a){return a!==b?(L(this,"setPreload",a),this.h.preload=a,this):K(this,"preload")};t.autoplay=function(a){return a!==b?(L(this,"setAutoplay",a),this.h.autoplay=a,this):K(this,"autoplay")};
t.loop=function(a){return a!==b?(L(this,"setLoop",a),this.h.loop=a,this):K(this,"loop")};t.poster=function(a){if(a===b)return this.tc;this.tc=a;L(this,"setPoster",a);this.k("posterchange")};t.controls=function(a){return a!==b?(a=!!a,this.rb!==a&&((this.rb=a)?(this.t("vjs-controls-disabled"),this.n("vjs-controls-enabled"),this.k("controlsenabled")):(this.t("vjs-controls-enabled"),this.n("vjs-controls-disabled"),this.k("controlsdisabled"))),this):this.rb};u.Player.prototype.Pb;t=u.Player.prototype;
t.usingNativeControls=function(a){return a!==b?(a=!!a,this.Pb!==a&&((this.Pb=a)?(this.n("vjs-using-native-controls"),this.k("usingnativecontrols")):(this.t("vjs-using-native-controls"),this.k("usingcustomcontrols"))),this):this.Pb};t.error=function(){return K(this,"error")};t.ended=function(){return K(this,"ended")};t.seeking=function(){return K(this,"seeking")};t.ia=f;t.reportUserActivity=function(){this.ia=f};t.Ob=f;
t.userActive=function(a){return a!==b?(a=!!a,a!==this.Ob&&((this.Ob=a)?(this.ia=f,this.t("vjs-user-inactive"),this.n("vjs-user-active"),this.k("useractive")):(this.ia=l,this.i&&this.i.U("mousemove",function(a){a.stopPropagation();a.preventDefault()}),this.t("vjs-user-active"),this.n("vjs-user-inactive"),this.k("userinactive"))),this):this.Ob};var N,O,P;P=document.createElement("div");O={};
P.Md!==b?(O.wc="requestFullscreen",O.ob="exitFullscreen",O.ub="fullscreenchange",O.isFullScreen="fullScreen"):(document.mozCancelFullScreen?(N="moz",O.isFullScreen=N+"FullScreen"):(N="webkit",O.isFullScreen=N+"IsFullScreen"),P[N+"RequestFullScreen"]&&(O.wc=N+"RequestFullScreen",O.ob=N+"CancelFullScreen"),O.ub=N+"fullscreenchange");document[O.ob]&&(u.Nb.requestFullScreen=O);u.Da=u.b.extend();
u.Da.prototype.h={Rd:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{}}};u.Da.prototype.e=function(){return u.e("div",{className:"vjs-control-bar"})};u.Xb=u.q.extend({j:function(a,c){u.q.call(this,a,c);a.d("play",u.bind(this,this.Jb));a.d("pause",u.bind(this,this.Ib))}});t=u.Xb.prototype;t.oa="Play";t.Q=function(){return"vjs-play-control "+u.q.prototype.Q.call(this)};
t.p=function(){this.c.paused()?this.c.play():this.c.pause()};t.Jb=function(){u.t(this.a,"vjs-paused");u.n(this.a,"vjs-playing");this.a.children[0].children[0].innerHTML="Pause"};t.Ib=function(){u.t(this.a,"vjs-playing");u.n(this.a,"vjs-paused");this.a.children[0].children[0].innerHTML="Play"};u.$a=u.b.extend({j:function(a,c){u.b.call(this,a,c);a.d("timeupdate",u.bind(this,this.da))}});
u.$a.prototype.e=function(){var a=u.b.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.G=u.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});a.appendChild(this.G);return a};u.$a.prototype.da=function(){var a=this.c.Va?this.c.v.currentTime:this.c.currentTime();this.G.innerHTML='<span class="vjs-control-text">Current Time </span>'+u.ta(a,this.c.duration())};
u.ab=u.b.extend({j:function(a,c){u.b.call(this,a,c);a.d("timeupdate",u.bind(this,this.da))}});u.ab.prototype.e=function(){var a=u.b.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.G=u.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">Duration Time </span>0:00',"aria-live":"off"});a.appendChild(this.G);return a};
u.ab.prototype.da=function(){var a=this.c.duration();a&&(this.G.innerHTML='<span class="vjs-control-text">Duration Time </span>'+u.ta(a))};u.bc=u.b.extend({j:function(a,c){u.b.call(this,a,c)}});u.bc.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};u.gb=u.b.extend({j:function(a,c){u.b.call(this,a,c);a.d("timeupdate",u.bind(this,this.da))}});
u.gb.prototype.e=function(){var a=u.b.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.G=u.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">Remaining Time </span>-0:00',"aria-live":"off"});a.appendChild(this.G);return a};u.gb.prototype.da=function(){this.c.duration()&&(this.G.innerHTML='<span class="vjs-control-text">Remaining Time </span>-'+u.ta(this.c.duration()-this.c.currentTime()))};
u.Ea=u.q.extend({j:function(a,c){u.q.call(this,a,c)}});u.Ea.prototype.oa="Fullscreen";u.Ea.prototype.Q=function(){return"vjs-fullscreen-control "+u.q.prototype.Q.call(this)};u.Ea.prototype.p=function(){this.c.isFullScreen()?(this.c.cancelFullScreen(),this.a.children[0].children[0].innerHTML="Fullscreen"):(this.c.requestFullScreen(),this.a.children[0].children[0].innerHTML="Non-Fullscreen")};u.fb=u.b.extend({j:function(a,c){u.b.call(this,a,c)}});u.fb.prototype.h={children:{seekBar:{}}};
u.fb.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};u.Yb=u.O.extend({j:function(a,c){u.O.call(this,a,c);a.d("timeupdate",u.bind(this,this.Aa));a.I(u.bind(this,this.Aa))}});t=u.Yb.prototype;t.h={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};t.sc="timeupdate";t.e=function(){return u.O.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};
t.Aa=function(){var a=this.c.Va?this.c.v.currentTime:this.c.currentTime();this.a.setAttribute("aria-valuenow",u.round(100*this.xb(),2));this.a.setAttribute("aria-valuetext",u.ta(a,this.c.duration()))};t.xb=function(){return this.c.currentTime()/this.c.duration()};t.Ra=function(a){u.O.prototype.Ra.call(this,a);this.c.Va=f;this.Hd=!this.c.paused();this.c.pause()};t.Gb=function(a){a=F(this,a)*this.c.duration();a==this.c.duration()&&(a-=0.1);this.c.currentTime(a)};
t.Hb=function(a){u.O.prototype.Hb.call(this,a);this.c.Va=l;this.Hd&&this.c.play()};t.zc=function(){this.c.currentTime(this.c.currentTime()+5)};t.yc=function(){this.c.currentTime(this.c.currentTime()-5)};u.cb=u.b.extend({j:function(a,c){u.b.call(this,a,c);a.d("progress",u.bind(this,this.update))}});u.cb.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text">Loaded: 0%</span>'})};
u.cb.prototype.update=function(){this.a.style&&(this.a.style.width=u.round(100*this.c.bufferedPercent(),2)+"%")};u.Wb=u.b.extend({j:function(a,c){u.b.call(this,a,c)}});u.Wb.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text">Progress: 0%</span>'})};u.Ga=u.W.extend({j:function(a,c){u.W.call(this,a,c);a.d("timeupdate",u.bind(this,this.da))}});u.Ga.prototype.defaultValue="00:00";
u.Ga.prototype.e=function(){return u.W.prototype.e.call(this,"div",{className:"vjs-seek-handle","aria-live":"off"})};u.Ga.prototype.da=function(){var a=this.c.Va?this.c.v.currentTime:this.c.currentTime();this.a.innerHTML='<span class="vjs-control-text">'+u.ta(a,this.c.duration())+"</span>"};u.ib=u.b.extend({j:function(a,c){u.b.call(this,a,c);a.i&&(a.i.m&&a.i.m.volumeControl===l)&&this.n("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.i.m&&a.i.m.volumeControl===l?this.n("vjs-hidden"):this.t("vjs-hidden")}))}});
u.ib.prototype.h={children:{volumeBar:{}}};u.ib.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};u.hb=u.O.extend({j:function(a,c){u.O.call(this,a,c);a.d("volumechange",u.bind(this,this.Aa));a.I(u.bind(this,this.Aa));setTimeout(u.bind(this,this.update),0)}});t=u.hb.prototype;t.Aa=function(){this.a.setAttribute("aria-valuenow",u.round(100*this.c.volume(),2));this.a.setAttribute("aria-valuetext",u.round(100*this.c.volume(),2)+"%")};
t.h={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};t.sc="volumechange";t.e=function(){return u.O.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};t.Gb=function(a){this.c.muted()&&this.c.muted(l);this.c.volume(F(this,a))};t.xb=function(){return this.c.muted()?0:this.c.volume()};t.zc=function(){this.c.volume(this.c.volume()+0.1)};t.yc=function(){this.c.volume(this.c.volume()-0.1)};
u.cc=u.b.extend({j:function(a,c){u.b.call(this,a,c)}});u.cc.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};u.jb=u.W.extend();u.jb.prototype.defaultValue="00:00";u.jb.prototype.e=function(){return u.W.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};
u.ea=u.q.extend({j:function(a,c){u.q.call(this,a,c);a.d("volumechange",u.bind(this,this.update));a.i&&(a.i.m&&a.i.m.volumeControl===l)&&this.n("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.i.m&&a.i.m.volumeControl===l?this.n("vjs-hidden"):this.t("vjs-hidden")}))}});u.ea.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};
u.ea.prototype.p=function(){this.c.muted(this.c.muted()?l:f)};u.ea.prototype.update=function(){var a=this.c.volume(),c=3;0===a||this.c.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);this.c.muted()?"Unmute"!=this.a.children[0].children[0].innerHTML&&(this.a.children[0].children[0].innerHTML="Unmute"):"Mute"!=this.a.children[0].children[0].innerHTML&&(this.a.children[0].children[0].innerHTML="Mute");for(a=0;4>a;a++)u.t(this.a,"vjs-vol-"+a);u.n(this.a,"vjs-vol-"+c)};
u.ma=u.S.extend({j:function(a,c){u.S.call(this,a,c);a.d("volumechange",u.bind(this,this.update));a.i&&(a.i.m&&a.i.m.Dc===l)&&this.n("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.i.m&&a.i.m.Dc===l?this.n("vjs-hidden"):this.t("vjs-hidden")}));this.n("vjs-menu-button")}});u.ma.prototype.Ma=function(){var a=new u.la(this.c,{Uc:"div"}),c=new u.hb(this.c,u.l.B({Gd:f},this.h.Yd));a.Y(c);return a};u.ma.prototype.p=function(){u.ea.prototype.p.call(this);u.S.prototype.p.call(this)};
u.ma.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};u.ma.prototype.update=u.ea.prototype.update;u.Fa=u.q.extend({j:function(a,c){u.q.call(this,a,c);a.poster()&&this.src(a.poster());(!a.poster()||!a.controls())&&this.D();a.d("posterchange",u.bind(this,function(){this.src(a.poster())}));a.d("play",u.bind(this,this.D))}});var Q="backgroundSize"in u.F.style;
u.Fa.prototype.e=function(){var a=u.e("div",{className:"vjs-poster",tabIndex:-1});Q||a.appendChild(u.e("img"));return a};u.Fa.prototype.src=function(a){var c=this.u();a!==b&&(Q?c.style.backgroundImage='url("'+a+'")':c.firstChild.src=a)};u.Fa.prototype.p=function(){this.C().controls()&&this.c.play()};
u.Vb=u.b.extend({j:function(a,c){u.b.call(this,a,c);a.d("canplay",u.bind(this,this.D));a.d("canplaythrough",u.bind(this,this.D));a.d("playing",u.bind(this,this.D));a.d("seeking",u.bind(this,this.show));a.d("seeked",u.bind(this,this.D));a.d("error",u.bind(this,this.show));a.d("ended",u.bind(this,this.D));a.d("waiting",u.bind(this,this.show))}});u.Vb.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};u.Ya=u.q.extend();
u.Ya.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})};u.Ya.prototype.p=function(){this.c.play()};
u.r=u.b.extend({j:function(a,c,d){c=c||{};c.vc=l;u.b.call(this,a,c,d);var e,g;g=this;e=this.C();a=function(){if(e.controls()&&!e.usingNativeControls()){var a;g.d("mousedown",g.p);g.d("touchstart",function(c){c.preventDefault();a=this.c.userActive()});g.d("touchmove",function(){a&&this.C().reportUserActivity()});var c,d,n,s;c=0;g.d("touchstart",function(){c=(new Date).getTime();n=f});s=function(){n=l};g.d("touchmove",s);g.d("touchleave",s);g.d("touchcancel",s);g.d("touchend",function(){n===f&&(d=(new Date).getTime()-
c,250>d&&this.k("tap"))});g.d("tap",g.qd)}};c=u.bind(g,g.td);this.I(a);e.d("controlsenabled",a);e.d("controlsdisabled",c)}});t=u.r.prototype;t.td=function(){this.o("tap");this.o("touchstart");this.o("touchmove");this.o("touchleave");this.o("touchcancel");this.o("touchend");this.o("click");this.o("mousedown")};t.p=function(a){0===a.button&&this.C().controls()&&(this.C().paused()?this.C().play():this.C().pause())};t.qd=function(){this.C().userActive(!this.C().userActive())};t.Lb=m();
t.m={volumeControl:f,fullscreenResize:l,progressEvents:l,timeupdateEvents:l};u.media={};u.media.Xa="play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");
function ea(){var a=u.media.Xa[i];return function(){throw Error('The "'+a+"\" method is not available on the playback technology's API");}}for(var i=u.media.Xa.length-1;0<=i;i--)u.r.prototype[u.media.Xa[i]]=ea();
u.g=u.r.extend({j:function(a,c,d){this.m.volumeControl=u.g.Tc();this.m.movingMediaElementInDOM=!u.Ic;this.m.fullscreenResize=f;u.r.call(this,a,c,d);for(d=u.g.bb.length-1;0<=d;d--)u.d(this.a,u.g.bb[d],u.bind(this.c,this.ad));(c=c.source)&&this.a.currentSrc===c.src&&0<this.a.networkState?a.k("loadstart"):c&&(this.a.src=c.src);if(u.$b&&a.options().nativeControlsForTouch!==l){var e,g,j,k;e=this;g=this.C();c=g.controls();e.a.controls=!!c;j=function(){e.a.controls=f};k=function(){e.a.controls=l};g.d("controlsenabled",
j);g.d("controlsdisabled",k);c=function(){g.o("controlsenabled",j);g.o("controlsdisabled",k)};e.d("dispose",c);g.d("usingcustomcontrols",c);g.usingNativeControls(f)}a.I(function(){this.M&&(this.h.autoplay&&this.paused())&&(delete this.M.poster,this.play())});this.za()}});t=u.g.prototype;t.dispose=function(){u.r.prototype.dispose.call(this)};
t.e=function(){var a=this.c,c=a.M,d;if(!c||this.m.movingMediaElementInDOM===l)c?(d=c.cloneNode(l),u.g.gc(c),c=d,a.M=h):c=u.e("video",{id:a.id()+"_html5_api",className:"vjs-tech"}),c.player=a,u.yb(c,a.u());d=["autoplay","preload","loop","muted"];for(var e=d.length-1;0<=e;e--){var g=d[e];a.h[g]!==h&&(c[g]=a.h[g])}return c};t.ad=function(a){this.k(a);a.stopPropagation()};t.play=function(){this.a.play()};t.pause=function(){this.a.pause()};t.paused=function(){return this.a.paused};t.currentTime=function(){return this.a.currentTime};
t.vd=function(a){try{this.a.currentTime=a}catch(c){u.log(c,"Video is not ready. (Video.js)")}};t.duration=function(){return this.a.duration||0};t.buffered=function(){return this.a.buffered};t.volume=function(){return this.a.volume};t.Ad=function(a){this.a.volume=a};t.muted=function(){return this.a.muted};t.yd=function(a){this.a.muted=a};t.width=function(){return this.a.offsetWidth};t.height=function(){return this.a.offsetHeight};
t.Wa=function(){return"function"==typeof this.a.webkitEnterFullScreen&&(/Android/.test(u.J)||!/Chrome|Mac OS X 10.5/.test(u.J))?f:l};t.hc=function(){var a=this.a;a.paused&&a.networkState<=a.Jd?(this.a.play(),setTimeout(function(){a.pause();a.webkitEnterFullScreen()},0)):a.webkitEnterFullScreen()};t.bd=function(){this.a.webkitExitFullScreen()};t.src=function(a){this.a.src=a};t.load=function(){this.a.load()};t.currentSrc=function(){return this.a.currentSrc};t.poster=function(){return this.a.poster};
t.Lb=function(a){this.a.poster=a};t.Sa=function(){return this.a.Sa};t.zd=function(a){this.a.Sa=a};t.autoplay=function(){return this.a.autoplay};t.ud=function(a){this.a.autoplay=a};t.controls=function(){return this.a.controls};t.loop=function(){return this.a.loop};t.xd=function(a){this.a.loop=a};t.error=function(){return this.a.error};t.seeking=function(){return this.a.seeking};t.ended=function(){return this.a.ended};u.g.isSupported=function(){try{u.F.volume=0.5}catch(a){return l}return!!u.F.canPlayType};
u.g.nb=function(a){try{return!!u.F.canPlayType(a.type)}catch(c){return""}};u.g.Tc=function(){var a=u.F.volume;u.F.volume=a/2+0.1;return a!==u.F.volume};var R,fa=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,ga=/^video\/mp4/i;
u.g.rc=function(){4<=u.Qb&&(R||(R=u.F.constructor.prototype.canPlayType),u.F.constructor.prototype.canPlayType=function(a){return a&&fa.test(a)?"maybe":R.call(this,a)});u.Mc&&(R||(R=u.F.constructor.prototype.canPlayType),u.F.constructor.prototype.canPlayType=function(a){return a&&ga.test(a)?"maybe":R.call(this,a)})};u.g.Fd=function(){var a=u.F.constructor.prototype.canPlayType;u.F.constructor.prototype.canPlayType=R;R=h;return a};u.g.rc();u.g.bb="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
u.g.gc=function(a){if(a){a.player=h;for(a.parentNode&&a.parentNode.removeChild(a);a.hasChildNodes();)a.removeChild(a.firstChild);a.removeAttribute("src");if("function"===typeof a.load)try{a.load()}catch(c){}}};
u.f=u.r.extend({j:function(a,c,d){u.r.call(this,a,c,d);var e=c.source;d=c.parentEl;var g=this.a=u.e("div",{id:a.id()+"_temp_flash"}),j=a.id()+"_flash_api";a=a.h;var k=u.l.B({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:a.autoplay,preload:a.Sa,loop:a.loop,muted:a.muted},c.flashVars),r=u.l.B({wmode:"opaque",bgcolor:"#000000"},c.params),n=u.l.B({id:j,name:j,"class":"vjs-tech"},c.attributes),s;e&&(e.type&&u.f.jd(e.type)?
(a=u.f.Ac(e.src),k.rtmpConnection=encodeURIComponent(a.qb),k.rtmpStream=encodeURIComponent(a.Mb)):k.src=encodeURIComponent(u.kc(e.src)));this.setCurrentTime=function(a){s=a;this.a.vjs_setProperty("currentTime",a)};this.currentTime=function(){return this.seeking()?s:this.a.vjs_getProperty("currentTime")};u.yb(g,d);c.startTime&&this.I(function(){this.load();this.play();this.currentTime(c.startTime)});u.Ub&&this.I(function(){u.d(this.u(),"mousemove",u.bind(this,function(){this.C().k({type:"mousemove",
bubbles:l})}))});if(c.iFrameMode===f&&!u.Ub){var D=u.e("iframe",{id:j+"_iframe",name:j+"_iframe",className:"vjs-tech",scrolling:"no",marginWidth:0,marginHeight:0,frameBorder:0});k.readyFunction="ready";k.eventProxyFunction="events";k.errorEventProxyFunction="errors";u.d(D,"load",u.bind(this,function(){var a,d=D.contentWindow;a=D.contentDocument?D.contentDocument:D.contentWindow.document;a.write(u.f.lc(c.swf,k,r,n));d.player=this.c;d.ready=u.bind(this.c,function(c){var d=this.i;d.a=a.getElementById(c);
u.f.pb(d)});d.events=u.bind(this.c,function(a,c){this&&"flash"===this.xa&&this.k(c)});d.errors=u.bind(this.c,function(a,c){u.log("Flash Error",c)})}));g.parentNode.replaceChild(D,g)}else u.f.$c(c.swf,g,k,r,n)}});t=u.f.prototype;t.dispose=function(){u.r.prototype.dispose.call(this)};t.play=function(){this.a.vjs_play()};t.pause=function(){this.a.vjs_pause()};
t.src=function(a){if(a===b)return this.currentSrc();u.f.hd(a)?(a=u.f.Ac(a),this.Td(a.qb),this.Ud(a.Mb)):(a=u.kc(a),this.a.vjs_src(a));if(this.c.autoplay()){var c=this;setTimeout(function(){c.play()},0)}};t.currentSrc=function(){var a=this.a.vjs_getProperty("currentSrc");if(a==h){var c=this.rtmpConnection(),d=this.rtmpStream();c&&d&&(a=u.f.Bd(c,d))}return a};t.load=function(){this.a.vjs_load()};t.poster=function(){this.a.vjs_getProperty("poster")};t.Lb=m();t.buffered=function(){return u.sb(0,this.a.vjs_getProperty("buffered"))};
t.Wa=q(l);t.hc=q(l);var S=u.f.prototype,T="rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),U="error networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");function ha(){var a=T[V],c=a.charAt(0).toUpperCase()+a.slice(1);S["set"+c]=function(c){return this.a.vjs_setProperty(a,c)}}
function W(a){S[a]=function(){return this.a.vjs_getProperty(a)}}var V;for(V=0;V<T.length;V++)W(T[V]),ha();for(V=0;V<U.length;V++)W(U[V]);u.f.isSupported=function(){return 10<=u.f.version()[0]};u.f.nb=function(a){if(!a.type)return"";a=a.type.replace(/;.*/,"").toLowerCase();if(a in u.f.dd||a in u.f.Bc)return"maybe"};u.f.dd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};u.f.Bc={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};
u.f.onReady=function(a){a=u.u(a);var c=a.player||a.parentNode.player,d=c.i;a.player=c;d.a=a;u.f.pb(d)};u.f.pb=function(a){a.u().vjs_getProperty?a.za():setTimeout(function(){u.f.pb(a)},50)};u.f.onEvent=function(a,c){u.u(a).player.k(c)};u.f.onError=function(a,c){u.u(a).player.k("error");u.log("Flash Error",c,a)};
u.f.version=function(){var a="0,0,0";try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(d){}}return a.split(",")};
u.f.$c=function(a,c,d,e,g){a=u.f.lc(a,d,e,g);a=u.e("div",{innerHTML:a}).childNodes[0];d=c.parentNode;c.parentNode.replaceChild(a,c);var j=d.childNodes[0];setTimeout(function(){j.style.display="block"},1E3)};
u.f.lc=function(a,c,d,e){var g="",j="",k="";c&&u.l.ra(c,function(a,c){g+=a+"="+c+"&amp;"});d=u.l.B({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);u.l.ra(d,function(a,c){j+='<param name="'+a+'" value="'+c+'" />'});e=u.l.B({data:a,width:"100%",height:"100%"},e);u.l.ra(e,function(a,c){k+=a+'="'+c+'" '});return'<object type="application/x-shockwave-flash"'+k+">"+j+"</object>"};u.f.Bd=function(a,c){return a+"&"+c};
u.f.Ac=function(a){var c={qb:"",Mb:""};if(!a)return c;var d=a.indexOf("&"),e;-1!==d?e=d+1:(d=e=a.lastIndexOf("/")+1,0===d&&(d=e=a.length));c.qb=a.substring(0,d);c.Mb=a.substring(e,a.length);return c};u.f.jd=function(a){return a in u.f.Bc};u.f.Oc=/^rtmp[set]?:\/\//i;u.f.hd=function(a){return u.f.Oc.test(a)};
u.Nc=u.b.extend({j:function(a,c,d){u.b.call(this,a,c,d);if(!a.h.sources||0===a.h.sources.length){c=0;for(d=a.h.techOrder;c<d.length;c++){var e=u.Z(d[c]),g=window.videojs[e];if(g&&g.isSupported()){I(a,e);break}}}else a.src(a.h.sources)}});u.Player.prototype.textTracks=function(){return this.ya=this.ya||[]};function X(a,c,d){for(var e=a.ya,g=0,j=e.length,k,r;g<j;g++)k=e[g],k.id()===c?(k.show(),r=k):d&&(k.H()==d&&0<k.mode())&&k.disable();(c=r?r.H():d?d:l)&&a.k(c+"trackchange")}
u.w=u.b.extend({j:function(a,c){u.b.call(this,a,c);this.R=c.id||"vjs_"+c.kind+"_"+c.language+"_"+u.s++;this.xc=c.src;this.Xc=c["default"]||c.dflt;this.Dd=c.title;this.Qd=c.srclang;this.kd=c.label;this.$=[];this.kb=[];this.ga=this.ha=0;this.c.d("fullscreenchange",u.bind(this,this.Qc))}});t=u.w.prototype;t.H=p("A");t.src=p("xc");t.tb=p("Xc");t.title=p("Dd");t.label=p("kd");t.Vc=p("$");t.Pc=p("kb");t.readyState=p("ha");t.mode=p("ga");
t.Qc=function(){this.a.style.fontSize=this.c.isFullScreen()?140*(screen.width/this.c.width())+"%":""};t.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-"+this.A+" vjs-text-track"})};t.show=function(){Y(this);this.ga=2;u.b.prototype.show.call(this)};t.D=function(){Y(this);this.ga=1;u.b.prototype.D.call(this)};
t.disable=function(){2==this.ga&&this.D();this.c.o("timeupdate",u.bind(this,this.update,this.R));this.c.o("ended",u.bind(this,this.reset,this.R));this.reset();this.c.fa("textTrackDisplay").removeChild(this);this.ga=0};function Y(a){0===a.ha&&a.load();0===a.ga&&(a.c.d("timeupdate",u.bind(a,a.update,a.R)),a.c.d("ended",u.bind(a,a.reset,a.R)),("captions"===a.A||"subtitles"===a.A)&&a.c.fa("textTrackDisplay").Y(a))}
t.load=function(){0===this.ha&&(this.ha=1,u.get(this.xc,u.bind(this,this.rd),u.bind(this,this.Fb)))};t.Fb=function(a){this.error=a;this.ha=3;this.k("error")};t.rd=function(a){var c,d;a=a.split("\n");for(var e="",g=1,j=a.length;g<j;g++)if(e=u.trim(a[g])){-1==e.indexOf("--\x3e")?(c=e,e=u.trim(a[++g])):c=this.$.length;c={id:c,index:this.$.length};d=e.split(" --\x3e ");c.startTime=ia(d[0]);c.sa=ia(d[1]);for(d=[];a[++g]&&(e=u.trim(a[g]));)d.push(e);c.text=d.join("<br/>");this.$.push(c)}this.ha=2;this.k("loaded")};
function ia(a){var c=a.split(":");a=0;var d,e,g;3==c.length?(d=c[0],e=c[1],c=c[2]):(d=0,e=c[0],c=c[1]);c=c.split(/\s+/);c=c.splice(0,1)[0];c=c.split(/\.|,/);g=parseFloat(c[1]);c=c[0];a+=3600*parseFloat(d);a+=60*parseFloat(e);a+=parseFloat(c);g&&(a+=g/1E3);return a}
t.update=function(){if(0<this.$.length){var a=this.c.currentTime();if(this.Kb===b||a<this.Kb||this.Oa<=a){var c=this.$,d=this.c.duration(),e=0,g=l,j=[],k,r,n,s;a>=this.Oa||this.Oa===b?s=this.vb!==b?this.vb:0:(g=f,s=this.Bb!==b?this.Bb:c.length-1);for(;;){n=c[s];if(n.sa<=a)e=Math.max(e,n.sa),n.Ia&&(n.Ia=l);else if(a<n.startTime){if(d=Math.min(d,n.startTime),n.Ia&&(n.Ia=l),!g)break}else g?(j.splice(0,0,n),r===b&&(r=s),k=s):(j.push(n),k===b&&(k=s),r=s),d=Math.min(d,n.sa),e=Math.max(e,n.startTime),n.Ia=
f;if(g)if(0===s)break;else s--;else if(s===c.length-1)break;else s++}this.kb=j;this.Oa=d;this.Kb=e;this.vb=k;this.Bb=r;a=this.kb;c="";d=0;for(e=a.length;d<e;d++)c+='<span class="vjs-tt-cue">'+a[d].text+"</span>";this.a.innerHTML=c;this.k("cuechange")}}};t.reset=function(){this.Oa=0;this.Kb=this.c.duration();this.Bb=this.vb=0};u.Sb=u.w.extend();u.Sb.prototype.A="captions";u.Zb=u.w.extend();u.Zb.prototype.A="subtitles";u.Tb=u.w.extend();u.Tb.prototype.A="chapters";
u.ac=u.b.extend({j:function(a,c,d){u.b.call(this,a,c,d);if(a.h.tracks&&0<a.h.tracks.length){c=this.c;a=a.h.tracks;var e;for(d=0;d<a.length;d++){e=a[d];var g=c,j=e.kind,k=e.label,r=e.language,n=e;e=g.ya=g.ya||[];n=n||{};n.kind=j;n.label=k;n.language=r;j=u.Z(j||"subtitles");g=new window.videojs[j+"Track"](g,n);e.push(g)}}}});u.ac.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};
u.X=u.N.extend({j:function(a,c){var d=this.ca=c.track;c.label=d.label();c.selected=d.tb();u.N.call(this,a,c);this.c.d(d.H()+"trackchange",u.bind(this,this.update))}});u.X.prototype.p=function(){u.N.prototype.p.call(this);X(this.c,this.ca.R,this.ca.H())};u.X.prototype.update=function(){this.selected(2==this.ca.mode())};u.eb=u.X.extend({j:function(a,c){c.track={H:function(){return c.kind},C:a,label:function(){return c.kind+" off"},tb:q(l),mode:q(l)};u.X.call(this,a,c);this.selected(f)}});
u.eb.prototype.p=function(){u.X.prototype.p.call(this);X(this.c,this.ca.R,this.ca.H())};u.eb.prototype.update=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g=f;c<d;c++)e=a[c],e.H()==this.ca.H()&&2==e.mode()&&(g=l);this.selected(g)};u.T=u.S.extend({j:function(a,c){u.S.call(this,a,c);1>=this.L.length&&this.D()}});
u.T.prototype.qa=function(){var a=[],c;a.push(new u.eb(this.c,{kind:this.A}));for(var d=0;d<this.c.textTracks().length;d++)c=this.c.textTracks()[d],c.H()===this.A&&a.push(new u.X(this.c,{track:c}));return a};u.Ba=u.T.extend({j:function(a,c,d){u.T.call(this,a,c,d);this.a.setAttribute("aria-label","Captions Menu")}});u.Ba.prototype.A="captions";u.Ba.prototype.oa="Captions";u.Ba.prototype.className="vjs-captions-button";
u.Ha=u.T.extend({j:function(a,c,d){u.T.call(this,a,c,d);this.a.setAttribute("aria-label","Subtitles Menu")}});u.Ha.prototype.A="subtitles";u.Ha.prototype.oa="Subtitles";u.Ha.prototype.className="vjs-subtitles-button";u.Ca=u.T.extend({j:function(a,c,d){u.T.call(this,a,c,d);this.a.setAttribute("aria-label","Chapters Menu")}});t=u.Ca.prototype;t.A="chapters";t.oa="Chapters";t.className="vjs-chapters-button";
t.qa=function(){for(var a=[],c,d=0;d<this.c.textTracks().length;d++)c=this.c.textTracks()[d],c.H()===this.A&&a.push(new u.X(this.c,{track:c}));return a};
t.Ma=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g,j=this.L=[];c<d;c++)if(e=a[c],e.H()==this.A&&e.tb()){if(2>e.readyState()){this.Nd=e;e.d("loaded",u.bind(this,this.Ma));return}g=e;break}a=this.ua=new u.la(this.c);a.a.appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.Z(this.A),Cd:-1}));if(g){e=g.$;for(var k,c=0,d=e.length;c<d;c++)k=e[c],k=new u.Za(this.c,{track:g,cue:k}),j.push(k),a.Y(k)}0<this.L.length&&this.show();return a};
u.Za=u.N.extend({j:function(a,c){var d=this.ca=c.track,e=this.cue=c.cue,g=a.currentTime();c.label=e.text;c.selected=e.startTime<=g&&g<e.sa;u.N.call(this,a,c);d.d("cuechange",u.bind(this,this.update))}});u.Za.prototype.p=function(){u.N.prototype.p.call(this);this.c.currentTime(this.cue.startTime);this.update(this.cue.startTime)};u.Za.prototype.update=function(){var a=this.cue,c=this.c.currentTime();this.selected(a.startTime<=c&&c<a.sa)};
u.l.B(u.Da.prototype.h.children,{subtitlesButton:{},captionsButton:{},chaptersButton:{}});
if("undefined"!==typeof window.JSON&&"function"===window.JSON.parse)u.JSON=window.JSON;else{u.JSON={};var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;u.JSON.parse=function(a,c){function d(a,e){var k,r,n=a[e];if(n&&"object"===typeof n)for(k in n)Object.prototype.hasOwnProperty.call(n,k)&&(r=d(n,k),r!==b?n[k]=r:delete n[k]);return c.call(a,e,n)}var e;a=String(a);Z.lastIndex=0;Z.test(a)&&(a=a.replace(Z,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));
if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");}}
u.dc=function(){var a,c,d=document.getElementsByTagName("video");if(d&&0<d.length)for(var e=0,g=d.length;e<g;e++)if((c=d[e])&&c.getAttribute)c.player===b&&(a=c.getAttribute("data-setup"),a!==h&&(a=u.JSON.parse(a||"{}"),videojs(c,a)));else{u.lb();break}else u.Ec||u.lb()};u.lb=function(){setTimeout(u.dc,1)};"complete"===document.readyState?u.Ec=f:u.U(window,"load",function(){u.Ec=f});u.lb();u.sd=function(a,c){u.Player.prototype[a]=c};var ja=this;ja.Id=f;function $(a,c){var d=a.split("."),e=ja;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}};$("videojs",u);$("_V_",u);$("videojs.options",u.options);$("videojs.players",u.va);$("videojs.TOUCH_ENABLED",u.$b);$("videojs.cache",u.pa);$("videojs.Component",u.b);u.b.prototype.player=u.b.prototype.C;u.b.prototype.options=u.b.prototype.options;u.b.prototype.init=u.b.prototype.j;u.b.prototype.dispose=u.b.prototype.dispose;u.b.prototype.createEl=u.b.prototype.e;u.b.prototype.contentEl=u.b.prototype.La;u.b.prototype.el=u.b.prototype.u;u.b.prototype.addChild=u.b.prototype.Y;
u.b.prototype.getChild=u.b.prototype.fa;u.b.prototype.getChildById=u.b.prototype.ed;u.b.prototype.children=u.b.prototype.children;u.b.prototype.initChildren=u.b.prototype.nc;u.b.prototype.removeChild=u.b.prototype.removeChild;u.b.prototype.on=u.b.prototype.d;u.b.prototype.off=u.b.prototype.o;u.b.prototype.one=u.b.prototype.U;u.b.prototype.trigger=u.b.prototype.k;u.b.prototype.triggerReady=u.b.prototype.za;u.b.prototype.show=u.b.prototype.show;u.b.prototype.hide=u.b.prototype.D;
u.b.prototype.width=u.b.prototype.width;u.b.prototype.height=u.b.prototype.height;u.b.prototype.dimensions=u.b.prototype.Yc;u.b.prototype.ready=u.b.prototype.I;u.b.prototype.addClass=u.b.prototype.n;u.b.prototype.removeClass=u.b.prototype.t;u.b.prototype.buildCSSClass=u.b.prototype.Q;u.Player.prototype.ended=u.Player.prototype.ended;$("videojs.MediaLoader",u.Nc);$("videojs.TextTrackDisplay",u.ac);$("videojs.ControlBar",u.Da);$("videojs.Button",u.q);$("videojs.PlayToggle",u.Xb);
$("videojs.FullscreenToggle",u.Ea);$("videojs.BigPlayButton",u.Ya);$("videojs.LoadingSpinner",u.Vb);$("videojs.CurrentTimeDisplay",u.$a);$("videojs.DurationDisplay",u.ab);$("videojs.TimeDivider",u.bc);$("videojs.RemainingTimeDisplay",u.gb);$("videojs.Slider",u.O);$("videojs.ProgressControl",u.fb);$("videojs.SeekBar",u.Yb);$("videojs.LoadProgressBar",u.cb);$("videojs.PlayProgressBar",u.Wb);$("videojs.SeekHandle",u.Ga);$("videojs.VolumeControl",u.ib);$("videojs.VolumeBar",u.hb);
$("videojs.VolumeLevel",u.cc);$("videojs.VolumeMenuButton",u.ma);$("videojs.VolumeHandle",u.jb);$("videojs.MuteToggle",u.ea);$("videojs.PosterImage",u.Fa);$("videojs.Menu",u.la);$("videojs.MenuItem",u.N);$("videojs.MenuButton",u.S);u.S.prototype.createItems=u.S.prototype.qa;u.T.prototype.createItems=u.T.prototype.qa;u.Ca.prototype.createItems=u.Ca.prototype.qa;$("videojs.SubtitlesButton",u.Ha);$("videojs.CaptionsButton",u.Ba);$("videojs.ChaptersButton",u.Ca);$("videojs.MediaTechController",u.r);
u.r.prototype.features=u.r.prototype.m;u.r.prototype.m.volumeControl=u.r.prototype.m.Dc;u.r.prototype.m.fullscreenResize=u.r.prototype.m.Od;u.r.prototype.m.progressEvents=u.r.prototype.m.Sd;u.r.prototype.m.timeupdateEvents=u.r.prototype.m.Vd;u.r.prototype.setPoster=u.r.prototype.Lb;$("videojs.Html5",u.g);u.g.Events=u.g.bb;u.g.isSupported=u.g.isSupported;u.g.canPlaySource=u.g.nb;u.g.patchCanPlayType=u.g.rc;u.g.unpatchCanPlayType=u.g.Fd;u.g.prototype.setCurrentTime=u.g.prototype.vd;
u.g.prototype.setVolume=u.g.prototype.Ad;u.g.prototype.setMuted=u.g.prototype.yd;u.g.prototype.setPreload=u.g.prototype.zd;u.g.prototype.setAutoplay=u.g.prototype.ud;u.g.prototype.setLoop=u.g.prototype.xd;u.g.prototype.enterFullScreen=u.g.prototype.hc;u.g.prototype.exitFullScreen=u.g.prototype.bd;$("videojs.Flash",u.f);u.f.isSupported=u.f.isSupported;u.f.canPlaySource=u.f.nb;u.f.onReady=u.f.onReady;$("videojs.TextTrack",u.w);u.w.prototype.label=u.w.prototype.label;u.w.prototype.kind=u.w.prototype.H;
u.w.prototype.mode=u.w.prototype.mode;u.w.prototype.cues=u.w.prototype.Vc;u.w.prototype.activeCues=u.w.prototype.Pc;$("videojs.CaptionsTrack",u.Sb);$("videojs.SubtitlesTrack",u.Zb);$("videojs.ChaptersTrack",u.Tb);$("videojs.autoSetup",u.dc);$("videojs.plugin",u.sd);$("videojs.createTimeRange",u.sb);$("videojs.util",u.ja);u.ja.mergeOptions=u.ja.Eb;})();
console.log("onload:video.js");


// hls
/*! Video.js v4.12.12 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */
(function() {
    var b = void 0,
        f = !0,
        j = null,
        l = !1;
    function m() {
        return function() {}
    }
    function n(a) {
        return function() {
            return this[a]
        }
    }
    function p(a) {
        return function() {
            return a
        }
    }
    var s;
    document.createElement("video");
    document.createElement("audio");
    document.createElement("track");
    function t(a, c, d) {
        if ("string" === typeof a) {
            0 === a.indexOf("#") && (a = a.slice(1));
            if (t.Ca[a]) return c && t.log.warn('Player "' + a + '" is already initialised. Options will not be applied.'),
            d && t.Ca[a].I(d),
                t.Ca[a];
            a = t.m(a)
        }
        if (!a || !a.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        return a.player || new t.Player(a, c, d)
    }
    var videojs = window.videojs = t;
    t.fc = "4.12";
    t.sd = "https:" == document.location.protocol ? "https://": "http://";
    t.VERSION = "4.12.12";
    t.options = {
        techOrder: ["html5", "flash"],
        html5: {},
        flash: {},
        width: 300,
        height: 150,
        defaultVolume: 0,
        playbackRates: [],
        inactivityTimeout: 2E3,
        children: {
            mediaLoader: {},
            posterImage: {},
            loadingSpinner: {},
            textTrackDisplay: {},
            bigPlayButton: {},
            controlBar: {},
            errorDisplay: {},
            textTrackSettings: {}
        },
        language: document.getElementsByTagName("html")[0].getAttribute("lang") || navigator.languages && navigator.languages[0] || navigator.Ff || navigator.language || "en",
        languages: {},
        notSupportedMessage: "No compatible source was found for this video."
    };
    "GENERATED_CDN_VSN" !== t.fc && (videojs.options.flash.swf = t.sd + "vjs.zencdn.net/" + t.fc + "/video-js.swf");
    t.Gd = function(a, c) {
        t.options.languages[a] = t.options.languages[a] !== b ? t.Z.Aa(t.options.languages[a], c) : c;
        return t.options.languages
    };
    t.Ca = {};
    "function" === typeof define && define.amd ? define("videojs", [],
        function() {
            return videojs
        }) : "object" === typeof exports && "object" === typeof module && (module.exports = videojs);
    t.Ga = t.CoreObject = m();
    t.Ga.extend = function(a) {
        var c, d;
        a = a || {};
        c = a.init || a.l || this.prototype.init || this.prototype.l || m();
        d = function() {
            c.apply(this, arguments)
        };
        d.prototype = t.i.create(this.prototype);
        d.prototype.constructor = d;
        d.extend = t.Ga.extend;
        d.create = t.Ga.create;
        for (var e in a) a.hasOwnProperty(e) && (d.prototype[e] = a[e]);
        return d
    };
    t.Ga.create = function() {
        var a = t.i.create(this.prototype);
        this.apply(a, arguments);
        return a
    };
    t.b = function(a, c, d) {
        if (t.i.isArray(c)) return v(t.b, a, c, d);
        var e = t.getData(a);
        e.G || (e.G = {});
        e.G[c] || (e.G[c] = []);
        d.s || (d.s = t.s++);
        e.G[c].push(d);
        e.ba || (e.disabled = l, e.ba = function(c) {
            if (!e.disabled) {
                c = t.Nb(c);
                var d = e.G[c.type];
                if (d) for (var d = d.slice(0), k = 0, q = d.length; k < q && !c.Nc(); k++) d[k].call(a, c)
            }
        });
        1 == e.G[c].length && (a.addEventListener ? a.addEventListener(c, e.ba, l) : a.attachEvent && a.attachEvent("on" + c, e.ba))
    };
    t.n = function(a, c, d) {
        if (t.Ic(a)) {
            var e = t.getData(a);
            if (e.G) {
                if (t.i.isArray(c)) return v(t.n, a, c, d);
                if (c) {
                    var g = e.G[c];
                    if (g) {
                        if (d) {
                            if (d.s) for (e = 0; e < g.length; e++) g[e].s === d.s && g.splice(e--, 1)
                        } else e.G[c] = [];
                        t.xc(a, c)
                    }
                } else for (g in e.G) c = g,
                    e.G[c] = [],
                    t.xc(a, c)
            }
        }
    };
    t.xc = function(a, c) {
        var d = t.getData(a);
        0 === d.G[c].length && (delete d.G[c], a.removeEventListener ? a.removeEventListener(c, d.ba, l) : a.detachEvent && a.detachEvent("on" + c, d.ba));
        t.hb(d.G) && (delete d.G, delete d.ba, delete d.disabled);
        t.hb(d) && t.Zc(a)
    };
    t.Nb = function(a) {
        function c() {
            return f
        }
        function d() {
            return l
        }
        if (!a || !a.Sb) {
            var e = a || window.event;
            a = {};
            for (var g in e)"layerX" !== g && ("layerY" !== g && "keyLocation" !== g) && ("returnValue" == g && e.preventDefault || (a[g] = e[g]));
            a.target || (a.target = a.srcElement || document);
            a.relatedTarget = a.fromElement === a.target ? a.toElement: a.fromElement;
            a.preventDefault = function() {
                e.preventDefault && e.preventDefault();
                a.returnValue = l;
                a.fe = c;
                a.defaultPrevented = f
            };
            a.fe = d;
            a.defaultPrevented = l;
            a.stopPropagation = function() {
                e.stopPropagation && e.stopPropagation();
                a.cancelBubble = f;
                a.Sb = c
            };
            a.Sb = d;
            a.stopImmediatePropagation = function() {
                e.stopImmediatePropagation && e.stopImmediatePropagation();
                a.Nc = c;
                a.stopPropagation()
            };
            a.Nc = d;
            if (a.clientX != j) {
                g = document.documentElement;
                var h = document.body;
                a.pageX = a.clientX + (g && g.scrollLeft || h && h.scrollLeft || 0) - (g && g.clientLeft || h && h.clientLeft || 0);
                a.pageY = a.clientY + (g && g.scrollTop || h && h.scrollTop || 0) - (g && g.clientTop || h && h.clientTop || 0)
            }
            a.which = a.charCode || a.keyCode;
            a.button != j && (a.button = a.button & 1 ? 0 : a.button & 4 ? 1 : a.button & 2 ? 2 : 0)
        }
        return a
    };
    t.o = function(a, c) {
        var d = t.Ic(a) ? t.getData(a) : {},
            e = a.parentNode || a.ownerDocument;
        "string" === typeof c && (c = {
            type: c,
            target: a
        });
        c = t.Nb(c);
        d.ba && d.ba.call(a, c);
        if (e && !c.Sb() && c.bubbles !== l) t.o(e, c);
        else if (!e && !c.defaultPrevented && (d = t.getData(c.target), c.target[c.type])) {
            d.disabled = f;
            if ("function" === typeof c.target[c.type]) c.target[c.type]();
            d.disabled = l
        }
        return ! c.defaultPrevented
    };
    t.N = function(a, c, d) {
        function e() {
            t.n(a, c, e);
            d.apply(this, arguments)
        }
        if (t.i.isArray(c)) return v(t.N, a, c, d);
        e.s = d.s = d.s || t.s++;
        t.b(a, c, e)
    };
    function v(a, c, d, e) {
        t.tc.forEach(d,
            function(d) {
                a(c, d, e)
            })
    }
    var w = Object.prototype.hasOwnProperty;
    t.e = function(a, c) {
        var d;
        c = c || {};
        d = document.createElement(a || "div");
        t.i.ca(c,
            function(a, c) { - 1 !== a.indexOf("aria-") || "role" == a ? d.setAttribute(a, c) : d[a] = c
            });
        return d
    };
    t.va = function(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    };
    t.i = {};
    t.i.create = Object.create ||
        function(a) {
            function c() {}
            c.prototype = a;
            return new c
        };
    t.i.ca = function(a, c, d) {
        for (var e in a) w.call(a, e) && c.call(d || this, e, a[e])
    };
    t.i.D = function(a, c) {
        if (!c) return a;
        for (var d in c) w.call(c, d) && (a[d] = c[d]);
        return a
    };
    t.i.Od = function(a, c) {
        var d, e, g;
        a = t.i.copy(a);
        for (d in c) w.call(c, d) && (e = a[d], g = c[d], a[d] = t.i.ib(e) && t.i.ib(g) ? t.i.Od(e, g) : c[d]);
        return a
    };
    t.i.copy = function(a) {
        return t.i.D({},
            a)
    };
    t.i.ib = function(a) {
        return !! a && "object" === typeof a && "[object Object]" === a.toString() && a.constructor === Object
    };
    t.i.isArray = Array.isArray ||
        function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        };
    t.he = function(a) {
        return a !== a
    };
    t.bind = function(a, c, d) {
        function e() {
            return c.apply(a, arguments)
        }
        c.s || (c.s = t.s++);
        e.s = d ? d + "_" + c.s: c.s;
        return e
    };
    t.ua = {};
    t.s = 1;
    t.expando = "vdata" + (new Date).getTime();
    t.getData = function(a) {
        var c = a[t.expando];
        c || (c = a[t.expando] = t.s++);
        t.ua[c] || (t.ua[c] = {});
        return t.ua[c]
    };
    t.Ic = function(a) {
        a = a[t.expando];
        return ! (!a || t.hb(t.ua[a]))
    };
    t.Zc = function(a) {
        var c = a[t.expando];
        if (c) {
            delete t.ua[c];
            try {
                delete a[t.expando]
            } catch(d) {
                a.removeAttribute ? a.removeAttribute(t.expando) : a[t.expando] = j
            }
        }
    };
    t.hb = function(a) {
        for (var c in a) if (a[c] !== j) return l;
        return f
    };
    t.Pa = function(a, c) {
        return - 1 !== (" " + a.className + " ").indexOf(" " + c + " ")
    };
    t.p = function(a, c) {
        t.Pa(a, c) || (a.className = "" === a.className ? c: a.className + " " + c)
    };
    t.r = function(a, c) {
        var d, e;
        if (t.Pa(a, c)) {
            d = a.className.split(" ");
            for (e = d.length - 1; 0 <= e; e--) d[e] === c && d.splice(e, 1);
            a.className = d.join(" ")
        }
    };
    t.A = t.e("video");
    var x = document.createElement("track");
    x.Tb = "captions";
    x.ed = "en";
    x.label = "English";
    t.A.appendChild(x);
    t.P = navigator.userAgent;
    t.zd = /iPhone/i.test(t.P);
    t.yd = /iPad/i.test(t.P);
    t.Ad = /iPod/i.test(t.P);
    t.xd = t.zd || t.yd || t.Ad;
    var aa = t,
        y;
    var z = t.P.match(/OS (\d+)_/i);
    y = z && z[1] ? z[1] : b;
    aa.gf = y;
    t.wd = /Android/i.test(t.P);
    var ba = t,
        B;
    var C = t.P.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
        D,
        E;
    C ? (D = C[1] && parseFloat(C[1]), E = C[2] && parseFloat(C[2]), B = D && E ? parseFloat(C[1] + "." + C[2]) : D ? D: j) : B = j;
    ba.ec = B;
    t.Bd = t.wd && /webkit/i.test(t.P) && 2.3 > t.ec;
    t.gc = /Firefox/i.test(t.P);
    t.hf = /Chrome/i.test(t.P);
    t.pa = /MSIE\s8\.0/.test(t.P);
    t.Db = !!("ontouchstart" in window || window.ud && document instanceof window.ud);
    t.td = "backgroundSize" in t.A.style;
    t.ad = function(a, c) {
        t.i.ca(c,
            function(c, e) {
                e === j || "undefined" === typeof e || e === l ? a.removeAttribute(c) : a.setAttribute(c, e === f ? "": e)
            })
    };
    t.Oa = function(a) {
        var c, d, e, g;
        c = {};
        if (a && a.attributes && 0 < a.attributes.length) {
            d = a.attributes;
            for (var h = d.length - 1; 0 <= h; h--) {
                e = d[h].name;
                g = d[h].value;
                if ("boolean" === typeof a[e] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + e + ",")) g = g !== j ? f: l;
                c[e] = g
            }
        }
        return c
    };
    t.sf = function(a, c) {
        var d = "";
        document.defaultView && document.defaultView.getComputedStyle ? d = document.defaultView.getComputedStyle(a, "").getPropertyValue(c) : a.currentStyle && (d = a["client" + c.substr(0, 1).toUpperCase() + c.substr(1)] + "px");
        return d
    };
    t.Rb = function(a, c) {
        c.firstChild ? c.insertBefore(a, c.firstChild) : c.appendChild(a)
    };
    t.bb = {};
    t.m = function(a) {
        0 === a.indexOf("#") && (a = a.slice(1));
        return document.getElementById(a)
    };
    t.Na = function(a, c) {
        c = c || a;
        var d = Math.floor(a % 60),
            e = Math.floor(a / 60 % 60),
            g = Math.floor(a / 3600),
            h = Math.floor(c / 60 % 60),
            k = Math.floor(c / 3600);
        if (isNaN(a) || Infinity === a) g = e = d = "-";
        g = 0 < g || 0 < k ? g + ":": "";
        return g + (((g || 10 <= h) && 10 > e ? "0" + e: e) + ":") + (10 > d ? "0" + d: d)
    };
    t.Id = function() {
        document.body.focus();
        document.onselectstart = p(l)
    };
    t.Ye = function() {
        document.onselectstart = p(f)
    };
    t.trim = function(a) {
        return (a + "").replace(/^\s+|\s+$/g, "")
    };
    t.round = function(a, c) {
        c || (c = 0);
        return Math.round(a * Math.pow(10, c)) / Math.pow(10, c)
    };
    t.xa = function(a, c) {
        return a === b && c === b ? {
            length: 0,
            start: function() {
                throw Error("This TimeRanges object is empty");
            },
            end: function() {
                throw Error("This TimeRanges object is empty");
            }
        }: {
            length: 1,
            start: function() {
                return a
            },
            end: function() {
                return c
            }
        }
    };
    t.Je = function(a) {
        try {
            var c = window.localStorage || l;
            c && (c.volume = a)
        } catch(d) {
            22 == d.code || 1014 == d.code ? t.log("LocalStorage Full (VideoJS)", d) : 18 == d.code ? t.log("LocalStorage not allowed (VideoJS)", d) : t.log("LocalStorage Error (VideoJS)", d)
        }
    };
    t.Xd = function(a) {
        a.match(/^https?:\/\//) || (a = t.e("div", {
            innerHTML: '<a href="' + a + '">x</a>'
        }).firstChild.href);
        return a
    };
    t.Be = function(a) {
        var c, d, e, g;
        g = "protocol hostname port pathname search hash host".split(" ");
        d = t.e("a", {
            href: a
        });
        if (e = "" === d.host && "file:" !== d.protocol) c = t.e("div"),
            c.innerHTML = '<a href="' + a + '"></a>',
            d = c.firstChild,
            c.setAttribute("style", "display:none; position:absolute;"),
            document.body.appendChild(c);
        a = {};
        for (var h = 0; h < g.length; h++) a[g[h]] = d[g[h]];
        "http:" === a.protocol && (a.host = a.host.replace(/:80$/, ""));
        "https:" === a.protocol && (a.host = a.host.replace(/:443$/, ""));
        e && document.body.removeChild(c);
        return a
    };
    function F(a, c) {
        var d, e;
        d = Array.prototype.slice.call(c);
        e = m();
        e = window.console || {
                log: e,
                warn: e,
                error: e
            };
        a ? d.unshift(a.toUpperCase() + ":") : a = "log";
        t.log.history.push(d);
        d.unshift("VIDEOJS:");
        if (e[a].apply) e[a].apply(e, d);
        else e[a](d.join(" "))
    }
    t.log = function() {
        F(j, arguments)
    };
    t.log.history = [];
    t.log.error = function() {
        F("error", arguments)
    };
    t.log.warn = function() {
        F("warn", arguments)
    };
    t.Vd = function(a) {
        var c, d;
        a.getBoundingClientRect && a.parentNode && (c = a.getBoundingClientRect());
        if (!c) return {
            left: 0,
            top: 0
        };
        a = document.documentElement;
        d = document.body;
        return {
            left: t.round(c.left + (window.pageXOffset || d.scrollLeft) - (a.clientLeft || d.clientLeft || 0)),
            top: t.round(c.top + (window.pageYOffset || d.scrollTop) - (a.clientTop || d.clientTop || 0))
        }
    };
    t.tc = {};
    t.tc.forEach = function(a, c, d) {
        if (t.i.isArray(a) && c instanceof Function) for (var e = 0,
                                                              g = a.length; e < g; ++e) c.call(d || t, a[e], e, a);
        return a
    };
    t.cf = function(a, c) {
        var d, e, g, h, k, q, r;
        "string" === typeof a && (a = {
            uri: a
        });
        videojs.Z.Aa({
                method: "GET",
                timeout: 45E3
            },
            a);
        c = c || m();
        q = function() {
            window.clearTimeout(k);
            c(j, e, e.response || e.responseText)
        };
        r = function(a) {
            window.clearTimeout(k);
            if (!a || "string" === typeof a) a = Error(a);
            c(a, e)
        };
        d = window.XMLHttpRequest;
        "undefined" === typeof d && (d = function() {
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch(a) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch(c) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP")
            } catch(d) {}
            throw Error("This browser does not support XMLHttpRequest.");
        });
        e = new d;
        e.uri = a.uri;
        d = t.Be(a.uri);
        g = window.location;
        d.protocol + d.host !== g.protocol + g.host && window.XDomainRequest && !("withCredentials" in e) ? (e = new window.XDomainRequest, e.onload = q, e.onerror = r, e.onprogress = m(), e.ontimeout = m()) : (h = "file:" == d.protocol || "file:" == g.protocol, e.onreadystatechange = function() {
            if (4 === e.readyState) {
                if (e.Ve) return r("timeout");
                200 === e.status || h && 0 === e.status ? q() : r()
            }
        },
        a.timeout && (k = window.setTimeout(function() {
                4 !== e.readyState && (e.Ve = f, e.abort())
            },
            a.timeout)));
        try {
            e.open(a.method || "GET", a.uri, f)
        } catch(u) {
            r(u);
            return
        }
        a.withCredentials && (e.withCredentials = f);
        a.responseType && (e.responseType = a.responseType);
        try {
            e.send()
        } catch(A) {
            r(A)
        }
    };
    t.Z = {};
    t.Z.Aa = function(a, c) {
        var d, e, g;
        a = t.i.copy(a);
        for (d in c) c.hasOwnProperty(d) && (e = a[d], g = c[d], a[d] = t.i.ib(e) && t.i.ib(g) ? t.Z.Aa(e, g) : c[d]);
        return a
    };
    t.z = m();
    s = t.z.prototype;
    s.ab = {};
    s.b = function(a, c) {
        var d = this.addEventListener;
        this.addEventListener = Function.prototype;
        t.b(this, a, c);
        this.addEventListener = d
    };
    s.addEventListener = t.z.prototype.b;
    s.n = function(a, c) {
        t.n(this, a, c)
    };
    s.removeEventListener = t.z.prototype.n;
    s.N = function(a, c) {
        t.N(this, a, c)
    };
    s.o = function(a) {
        var c = a.type || a;
        "string" === typeof a && (a = {
            type: c
        });
        a = t.Nb(a);
        if (this.ab[c] && this["on" + c]) this["on" + c](a);
        t.o(this, a)
    };
    s.dispatchEvent = t.z.prototype.o;
    t.a = t.Ga.extend({
        l: function(a, c, d) {
            this.d = a;
            this.q = t.i.copy(this.q);
            c = this.options(c);
            this.Qa = c.id || c.el && c.el.id;
            this.Qa || (this.Qa = (a.id && a.id() || "no_player") + "_component_" + t.s++);
            this.qe = c.name || j;
            this.c = c.el || this.e();
            this.R = [];
            this.cb = {};
            this.eb = {};
            this.Kc();
            this.I(d);
            if (c.$c !== l) {
                var e, g;
                this.k().reportUserActivity && (e = t.bind(this.k(), this.k().reportUserActivity), this.b("touchstart",
                    function() {
                        e();
                        this.clearInterval(g);
                        g = this.setInterval(e, 250)
                    }), a = function() {
                    e();
                    this.clearInterval(g)
                },
                    this.b("touchmove", e), this.b("touchend", a), this.b("touchcancel", a))
            }
        }
    });
    s = t.a.prototype;
    s.dispose = function() {
        this.o({
            type: "dispose",
            bubbles: l
        });
        if (this.R) for (var a = this.R.length - 1; 0 <= a; a--) this.R[a].dispose && this.R[a].dispose();
        this.eb = this.cb = this.R = j;
        this.n();
        this.c.parentNode && this.c.parentNode.removeChild(this.c);
        t.Zc(this.c);
        this.c = j
    };
    s.d = f;
    s.k = n("d");
    s.options = function(a) {
        return a === b ? this.q: this.q = t.Z.Aa(this.q, a)
    };
    s.e = function(a, c) {
        return t.e(a, c)
    };
    s.v = function(a) {
        var c = this.d.language(),
            d = this.d.languages();
        return d && d[c] && d[c][a] ? d[c][a] : a
    };
    s.m = n("c");
    s.wa = function() {
        return this.B || this.c
    };
    s.id = n("Qa");
    s.name = n("qe");
    s.children = n("R");
    s.Yd = function(a) {
        return this.cb[a]
    };
    s.da = function(a) {
        return this.eb[a]
    };
    s.aa = function(a, c) {
        var d, e;
        "string" === typeof a ? (e = a, c = c || {},
            d = c.componentClass || t.va(e), c.name = e, d = new window.videojs[d](this.d || this, c)) : d = a;
        this.R.push(d);
        "function" === typeof d.id && (this.cb[d.id()] = d); (e = e || d.name && d.name()) && (this.eb[e] = d);
        "function" === typeof d.el && d.el() && this.wa().appendChild(d.el());
        return d
    };
    s.removeChild = function(a) {
        "string" === typeof a && (a = this.da(a));
        if (a && this.R) {
            for (var c = l,
                     d = this.R.length - 1; 0 <= d; d--) if (this.R[d] === a) {
                c = f;
                this.R.splice(d, 1);
                break
            }
            c && (this.cb[a.id()] = j, this.eb[a.name()] = j, (c = a.m()) && c.parentNode === this.wa() && this.wa().removeChild(a.m()))
        }
    };
    s.Kc = function() {
        var a, c, d, e, g, h;
        a = this;
        c = a.options();
        if (d = c.children) if (h = function(d, e) {
                c[d] !== b && (e = c[d]);
                e !== l && (a[d] = a.aa(d, e))
            },
                t.i.isArray(d)) for (var k = 0; k < d.length; k++) e = d[k],
            "string" == typeof e ? (g = e, e = {}) : g = e.name,
            h(g, e);
        else t.i.ca(d, h)
    };
    s.U = p("");
    s.b = function(a, c, d) {
        var e, g, h;
        "string" === typeof a || t.i.isArray(a) ? t.b(this.c, a, t.bind(this, c)) : (e = t.bind(this, d), h = this, g = function() {
            h.n(a, c, e)
        },
            g.s = e.s, this.b("dispose", g), d = function() {
            h.n("dispose", g)
        },
            d.s = e.s, a.nodeName ? (t.b(a, c, e), t.b(a, "dispose", d)) : "function" === typeof a.b && (a.b(c, e), a.b("dispose", d)));
        return this
    };
    s.n = function(a, c, d) { ! a || "string" === typeof a || t.i.isArray(a) ? t.n(this.c, a, c) : (d = t.bind(this, d), this.n("dispose", d), a.nodeName ? (t.n(a, c, d), t.n(a, "dispose", d)) : (a.n(c, d), a.n("dispose", d)));
        return this
    };
    s.N = function(a, c, d) {
        var e, g, h;
        "string" === typeof a || t.i.isArray(a) ? t.N(this.c, a, t.bind(this, c)) : (e = t.bind(this, d), g = this, h = function() {
            g.n(a, c, h);
            e.apply(this, arguments)
        },
            h.s = e.s, this.b(a, c, h));
        return this
    };
    s.o = function(a) {
        t.o(this.c, a);
        return this
    };
    s.I = function(a) {
        a && (this.ya ? a.call(this) : (this.mb === b && (this.mb = []), this.mb.push(a)));
        return this
    };
    s.Va = function() {
        this.ya = f;
        var a = this.mb;
        this.mb = [];
        if (a && 0 < a.length) {
            for (var c = 0,
                     d = a.length; c < d; c++) a[c].call(this);
            this.o("ready")
        }
    };
    s.Pa = function(a) {
        return t.Pa(this.c, a)
    };
    s.p = function(a) {
        t.p(this.c, a);
        return this
    };
    s.r = function(a) {
        t.r(this.c, a);
        return this
    };
    s.show = function() {
        this.r("vjs-hidden");
        return this
    };
    s.X = function() {
        this.p("vjs-hidden");
        return this
    };
    function G(a) {
        a.r("vjs-lock-showing")
    }
    s.width = function(a, c) {
        return ca(this, "width", a, c)
    };
    s.height = function(a, c) {
        return ca(this, "height", a, c)
    };
    s.Qd = function(a, c) {
        return this.width(a, f).height(c)
    };
    function ca(a, c, d, e) {
        if (d !== b) {
            if (d === j || t.he(d)) d = 0;
            a.c.style[c] = -1 !== ("" + d).indexOf("%") || -1 !== ("" + d).indexOf("px") ? d: "auto" === d ? "": d + "px";
            e || a.o("resize");
            return a
        }
        if (!a.c) return 0;
        d = a.c.style[c];
        e = d.indexOf("px");
        return - 1 !== e ? parseInt(d.slice(0, e), 10) : parseInt(a.c["offset" + t.va(c)], 10)
    }
    function da(a) {
        var c, d, e, g, h, k, q, r;
        c = 0;
        d = j;
        a.b("touchstart",
            function(a) {
                1 === a.touches.length && (d = t.i.copy(a.touches[0]), c = (new Date).getTime(), g = f)
            });
        a.b("touchmove",
            function(a) {
                1 < a.touches.length ? g = l: d && (k = a.touches[0].pageX - d.pageX, q = a.touches[0].pageY - d.pageY, r = Math.sqrt(k * k + q * q), 10 < r && (g = l))
            });
        h = function() {
            g = l
        };
        a.b("touchleave", h);
        a.b("touchcancel", h);
        a.b("touchend",
            function(a) {
                d = j;
                g === f && (e = (new Date).getTime() - c, 200 > e && (a.preventDefault(), this.o("tap")))
            })
    }
    s.setTimeout = function(a, c) {
        function d() {
            this.clearTimeout(e)
        }
        a = t.bind(this, a);
        var e = setTimeout(a, c);
        d.s = "vjs-timeout-" + e;
        this.b("dispose", d);
        return e
    };
    s.clearTimeout = function(a) {
        function c() {}
        clearTimeout(a);
        c.s = "vjs-timeout-" + a;
        this.n("dispose", c);
        return a
    };
    s.setInterval = function(a, c) {
        function d() {
            this.clearInterval(e)
        }
        a = t.bind(this, a);
        var e = setInterval(a, c);
        d.s = "vjs-interval-" + e;
        this.b("dispose", d);
        return e
    };
    s.clearInterval = function(a) {
        function c() {}
        clearInterval(a);
        c.s = "vjs-interval-" + a;
        this.n("dispose", c);
        return a
    };
    t.w = t.a.extend({
        l: function(a, c) {
            t.a.call(this, a, c);
            da(this);
            this.b("tap", this.u);
            this.b("click", this.u);
            this.b("focus", this.kb);
            this.b("blur", this.jb)
        }
    });
    s = t.w.prototype;
    s.e = function(a, c) {
        var d;
        c = t.i.D({
                className: this.U(),
                role: "button",
                "aria-live": "polite",
                tabIndex: 0
            },
            c);
        d = t.a.prototype.e.call(this, a, c);
        c.innerHTML || (this.B = t.e("div", {
            className: "vjs-control-content"
        }), this.Ib = t.e("span", {
            className: "vjs-control-text",
            innerHTML: this.v(this.ta) || "Need Text"
        }), this.B.appendChild(this.Ib), d.appendChild(this.B));
        return d
    };
    s.U = function() {
        return "vjs-control " + t.a.prototype.U.call(this)
    };
    s.u = m();
    s.kb = function() {
        t.b(document, "keydown", t.bind(this, this.ka))
    };
    s.ka = function(a) {
        if (32 == a.which || 13 == a.which) a.preventDefault(),
            this.u()
    };
    s.jb = function() {
        t.n(document, "keydown", t.bind(this, this.ka))
    };
    t.T = t.a.extend({
        l: function(a, c) {
            t.a.call(this, a, c);
            this.Hd = this.da(this.q.barName);
            this.handle = this.da(this.q.handleName);
            this.b("mousedown", this.lb);
            this.b("touchstart", this.lb);
            this.b("focus", this.kb);
            this.b("blur", this.jb);
            this.b("click", this.u);
            this.b(a, "controlsvisible", this.update);
            this.b(a, this.Uc, this.update)
        }
    });
    s = t.T.prototype;
    s.e = function(a, c) {
        c = c || {};
        c.className += " vjs-slider";
        c = t.i.D({
                role: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                tabIndex: 0
            },
            c);
        return t.a.prototype.e.call(this, a, c)
    };
    s.lb = function(a) {
        a.preventDefault();
        t.Id();
        this.p("vjs-sliding");
        this.b(document, "mousemove", this.la);
        this.b(document, "mouseup", this.Ba);
        this.b(document, "touchmove", this.la);
        this.b(document, "touchend", this.Ba);
        this.la(a)
    };
    s.la = m();
    s.Ba = function() {
        t.Ye();
        this.r("vjs-sliding");
        this.n(document, "mousemove", this.la);
        this.n(document, "mouseup", this.Ba);
        this.n(document, "touchmove", this.la);
        this.n(document, "touchend", this.Ba);
        this.update()
    };
    s.update = function() {
        if (this.c) {
            var a, c = this.Qb(),
                d = this.handle,
                e = this.Hd;
            if ("number" !== typeof c || c !== c || 0 > c || Infinity === c) c = 0;
            a = c;
            if (d) {
                a = this.c.offsetWidth;
                var g = d.m().offsetWidth;
                a = g ? g / a: 0;
                c *= 1 - a;
                a = c + a / 2;
                d.m().style.left = t.round(100 * c, 2) + "%"
            }
            e && (e.m().style.width = t.round(100 * a, 2) + "%")
        }
    };
    function ea(a, c) {
        var d, e, g, h;
        d = a.c;
        e = t.Vd(d);
        h = g = d.offsetWidth;
        d = a.handle;
        if (a.options().vertical) return h = e.top,
            e = c.changedTouches ? c.changedTouches[0].pageY: c.pageY,
        d && (d = d.m().offsetHeight, h += d / 2, g -= d),
            Math.max(0, Math.min(1, (h - e + g) / g));
        g = e.left;
        e = c.changedTouches ? c.changedTouches[0].pageX: c.pageX;
        d && (d = d.m().offsetWidth, g += d / 2, h -= d);
        return Math.max(0, Math.min(1, (e - g) / h))
    }
    s.kb = function() {
        this.b(document, "keydown", this.ka)
    };
    s.ka = function(a) {
        if (37 == a.which || 40 == a.which) a.preventDefault(),
            this.fd();
        else if (38 == a.which || 39 == a.which) a.preventDefault(),
            this.gd()
    };
    s.jb = function() {
        this.n(document, "keydown", this.ka)
    };
    s.u = function(a) {
        a.stopImmediatePropagation();
        a.preventDefault()
    };
    t.ga = t.a.extend();
    t.ga.prototype.defaultValue = 0;
    t.ga.prototype.e = function(a, c) {
        c = c || {};
        c.className += " vjs-slider-handle";
        c = t.i.D({
                innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
            },
            c);
        return t.a.prototype.e.call(this, "div", c)
    };
    t.qa = t.a.extend();
    function fa(a, c) {
        a.aa(c);
        c.b("click", t.bind(a,
            function() {
                G(this)
            }))
    }
    t.qa.prototype.e = function() {
        var a = this.options().zc || "ul";
        this.B = t.e(a, {
            className: "vjs-menu-content"
        });
        a = t.a.prototype.e.call(this, "div", {
            append: this.B,
            className: "vjs-menu"
        });
        a.appendChild(this.B);
        t.b(a, "click",
            function(a) {
                a.preventDefault();
                a.stopImmediatePropagation()
            });
        return a
    };
    t.M = t.w.extend({
        l: function(a, c) {
            t.w.call(this, a, c);
            this.selected(c.selected)
        }
    });
    t.M.prototype.e = function(a, c) {
        return t.w.prototype.e.call(this, "li", t.i.D({
                className: "vjs-menu-item",
                innerHTML: this.v(this.q.label)
            },
            c))
    };
    t.M.prototype.u = function() {
        this.selected(f)
    };
    t.M.prototype.selected = function(a) {
        a ? (this.p("vjs-selected"), this.c.setAttribute("aria-selected", f)) : (this.r("vjs-selected"), this.c.setAttribute("aria-selected", l))
    };
    t.O = t.w.extend({
        l: function(a, c) {
            t.w.call(this, a, c);
            this.update();
            this.b("keydown", this.ka);
            this.c.setAttribute("aria-haspopup", f);
            this.c.setAttribute("role", "button")
        }
    });
    s = t.O.prototype;
    s.update = function() {
        var a = this.La();
        this.za && this.removeChild(this.za);
        this.za = a;
        this.aa(a);
        this.H && 0 === this.H.length ? this.X() : this.H && 1 < this.H.length && this.show()
    };
    s.Ja = l;
    s.La = function() {
        var a = new t.qa(this.d);
        this.options().title && a.wa().appendChild(t.e("li", {
            className: "vjs-menu-title",
            innerHTML: t.va(this.options().title),
            Te: -1
        }));
        if (this.H = this.createItems()) for (var c = 0; c < this.H.length; c++) fa(a, this.H[c]);
        return a
    };
    s.Ka = m();
    s.U = function() {
        return this.className + " vjs-menu-button " + t.w.prototype.U.call(this)
    };
    s.kb = m();
    s.jb = m();
    s.u = function() {
        this.N("mouseout", t.bind(this,
            function() {
                G(this.za);
                this.c.blur()
            }));
        this.Ja ? H(this) : ga(this)
    };
    s.ka = function(a) {
        32 == a.which || 13 == a.which ? (this.Ja ? H(this) : ga(this), a.preventDefault()) : 27 == a.which && (this.Ja && H(this), a.preventDefault())
    };
    function ga(a) {
        a.Ja = f;
        a.za.p("vjs-lock-showing");
        a.c.setAttribute("aria-pressed", f);
        a.H && 0 < a.H.length && a.H[0].m().focus()
    }
    function H(a) {
        a.Ja = l;
        G(a.za);
        a.c.setAttribute("aria-pressed", l)
    }
    t.J = function(a) {
        "number" === typeof a ? this.code = a: "string" === typeof a ? this.message = a: "object" === typeof a && t.i.D(this, a);
        this.message || (this.message = t.J.Pd[this.code] || "")
    };
    t.J.prototype.code = 0;
    t.J.prototype.message = "";
    t.J.prototype.status = j;
    t.J.gb = "MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" ");
    t.J.Pd = {
        1 : "You aborted the video playback",
        2 : "A network error caused the video download to fail part-way.",
        3 : "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
        4 : "The video could not be loaded, either because the server or network failed or because the format is not supported.",
        5 : "The video is encrypted and we do not have the keys to decrypt it."
    };
    for (var I = 0; I < t.J.gb.length; I++) t.J[t.J.gb[I]] = I,
        t.J.prototype[t.J.gb[I]] = I;
    var J, ha, K, L;
    J = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")];
    ha = J[0];
    for (L = 0; L < J.length; L++) if (J[L][1] in document) {
        K = J[L];
        break
    }
    if (K) {
        t.bb.Pb = {};
        for (L = 0; L < K.length; L++) t.bb.Pb[ha[L]] = K[L]
    }
    t.Player = t.a.extend({
        l: function(a, c, d) {
            this.L = a;
            a.id = a.id || "vjs_video_" + t.s++;
            this.Ue = a && t.Oa(a);
            c = t.i.D(ia(a), c);
            this.Pc = c.language || t.options.language;
            this.ke = c.languages || t.options.languages;
            this.K = {};
            this.Vc = c.poster || "";
            this.Jb = !!c.controls;
            a.controls = l;
            c.$c = l;
            ja(this, "audio" === this.L.nodeName.toLowerCase());
            t.a.call(this, this, c, d);
            this.controls() ? this.p("vjs-controls-enabled") : this.p("vjs-controls-disabled");
            ja(this) && this.p("vjs-audio");
            t.Ca[this.Qa] = this;
            c.plugins && t.i.ca(c.plugins,
                function(a, c) {
                    this[a](c)
                },
                this);
            var e, g, h, k, q;
            e = t.bind(this, this.reportUserActivity);
            this.b("mousedown",
                function() {
                    e();
                    this.clearInterval(g);
                    g = this.setInterval(e, 250)
                });
            this.b("mousemove",
                function(a) {
                    if (a.screenX != k || a.screenY != q) k = a.screenX,
                        q = a.screenY,
                        e()
                });
            this.b("mouseup",
                function() {
                    e();
                    this.clearInterval(g)
                });
            this.b("keydown", e);
            this.b("keyup", e);
            this.setInterval(function() {
                    if (this.Fa) {
                        this.Fa = l;
                        this.userActive(f);
                        this.clearTimeout(h);
                        var a = this.options().inactivityTimeout;
                        0 < a && (h = this.setTimeout(function() {
                                this.Fa || this.userActive(l)
                            },
                            a))
                    }
                },
                250)
        }
    });
    s = t.Player.prototype;
    s.language = function(a) {
        if (a === b) return this.Pc;
        this.Pc = a;
        return this
    };
    s.languages = n("ke");
    s.q = t.options;
    s.dispose = function() {
        this.o("dispose");
        this.n("dispose");
        t.Ca[this.Qa] = j;
        this.L && this.L.player && (this.L.player = j);
        this.c && this.c.player && (this.c.player = j);
        this.h && this.h.dispose();
        t.a.prototype.dispose.call(this)
    };
    function ia(a) {
        var c, d, e = {
            sources: [],
            tracks: []
        };
        c = t.Oa(a);
        d = c["data-setup"];
        d !== j && t.i.D(c, t.JSON.parse(d || "{}"));
        t.i.D(e, c);
        if (a.hasChildNodes()) {
            var g, h;
            a = a.childNodes;
            g = 0;
            for (h = a.length; g < h; g++) c = a[g],
                d = c.nodeName.toLowerCase(),
                "source" === d ? e.sources.push(t.Oa(c)) : "track" === d && e.tracks.push(t.Oa(c))
        }
        return e
    }
    s.e = function() {
        var a = this.c = t.a.prototype.e.call(this, "div"),
            c = this.L,
            d;
        c.removeAttribute("width");
        c.removeAttribute("height");
        d = t.Oa(c);
        t.i.ca(d,
            function(c) {
                "class" == c ? a.className = d[c] : a.setAttribute(c, d[c])
            });
        c.id += "_html5_api";
        c.className = "vjs-tech";
        c.player = a.player = this;
        this.p("vjs-paused");
        this.width(this.q.width, f);
        this.height(this.q.height, f);
        c.de = c.networkState;
        c.parentNode && c.parentNode.insertBefore(a, c);
        t.Rb(c, a);
        this.c = a;
        this.b("loadstart", this.ue);
        this.b("waiting", this.Ae);
        this.b(["canplay", "canplaythrough", "playing", "ended"], this.ze);
        this.b("seeking", this.xe);
        this.b("seeked", this.we);
        this.b("ended", this.re);
        this.b("play", this.Xb);
        this.b("firstplay", this.se);
        this.b("pause", this.Wb);
        this.b("progress", this.ve);
        this.b("durationchange", this.Sc);
        this.b("fullscreenchange", this.te);
        return a
    };
    function ka(a, c, d) {
        a.h && (a.ya = l, a.h.dispose(), a.h = l);
        "Html5" !== c && a.L && (t.f.Kb(a.L), a.L = j);
        a.Ta = c;
        a.ya = l;
        var e = t.i.D({
                source: d,
                parentEl: a.c
            },
            a.q[c.toLowerCase()]);
        d && (a.Cc = d.type, d.src == a.K.src && 0 < a.K.currentTime && (e.startTime = a.K.currentTime), a.K.src = d.src);
        a.h = new window.videojs[c](a, e);
        a.h.I(function() {
            this.d.Va()
        })
    }
    s.ue = function() {
        this.r("vjs-ended");
        this.error(j);
        this.paused() ? la(this, l) : this.o("firstplay")
    };
    s.Jc = l;
    function la(a, c) {
        c !== b && a.Jc !== c && ((a.Jc = c) ? (a.p("vjs-has-started"), a.o("firstplay")) : a.r("vjs-has-started"))
    }
    s.Xb = function() {
        this.r("vjs-ended");
        this.r("vjs-paused");
        this.p("vjs-playing");
        la(this, f)
    };
    s.Ae = function() {
        this.p("vjs-waiting")
    };
    s.ze = function() {
        this.r("vjs-waiting")
    };
    s.xe = function() {
        this.p("vjs-seeking")
    };
    s.we = function() {
        this.r("vjs-seeking")
    };
    s.se = function() {
        this.q.starttime && this.currentTime(this.q.starttime);
        this.p("vjs-has-started")
    };
    s.Wb = function() {
        this.r("vjs-playing");
        this.p("vjs-paused")
    };
    s.ve = function() {
        1 == this.bufferedPercent() && this.o("loadedalldata")
    };
    s.re = function() {
        this.p("vjs-ended");
        this.q.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause()
    };
    s.Sc = function() {
        var a = M(this, "duration");
        a && (0 > a && (a = Infinity), this.duration(a), Infinity === a ? this.p("vjs-live") : this.r("vjs-live"))
    };
    s.te = function() {
        this.isFullscreen() ? this.p("vjs-fullscreen") : this.r("vjs-fullscreen")
    };
    function N(a, c, d) {
        if (a.h && !a.h.ya) a.h.I(function() {
            this[c](d)
        });
        else try {
            a.h[c](d)
        } catch(e) {
            throw t.log(e),
                e;
        }
    }
    function M(a, c) {
        if (a.h && a.h.ya) try {
            return a.h[c]()
        } catch(d) {
            throw a.h[c] === b ? t.log("Video.js: " + c + " method not defined for " + a.Ta + " playback technology.", d) : "TypeError" == d.name ? (t.log("Video.js: " + c + " unavailable on " + a.Ta + " playback technology element.", d), a.h.ya = l) : t.log(d),
                d;
        }
    }
    s.play = function() {
        N(this, "play");
        return this
    };
    s.pause = function() {
        N(this, "pause");
        return this
    };
    s.paused = function() {
        return M(this, "paused") === l ? l: f
    };
    s.currentTime = function(a) {
        return a !== b ? (N(this, "setCurrentTime", a), this) : this.K.currentTime = M(this, "currentTime") || 0
    };
    s.duration = function(a) {
        if (a !== b) return this.K.duration = parseFloat(a),
            this;
        this.K.duration === b && this.Sc();
        return this.K.duration || 0
    };
    s.remainingTime = function() {
        return this.duration() - this.currentTime()
    };
    s.buffered = function() {
        var a = M(this, "buffered");
        if (!a || !a.length) a = t.xa(0, 0);
        return a
    };
    s.bufferedPercent = function() {
        var a = this.duration(),
            c = this.buffered(),
            d = 0,
            e,
            g;
        if (!a) return 0;
        for (var h = 0; h < c.length; h++) e = c.start(h),
            g = c.end(h),
        g > a && (g = a),
            d += g - e;
        return d / a
    };
    s.volume = function(a) {
        if (a !== b) return a = Math.max(0, Math.min(1, parseFloat(a))),
            this.K.volume = a,
            N(this, "setVolume", a),
            t.Je(a),
            this;
        a = parseFloat(M(this, "volume"));
        return isNaN(a) ? 1 : a
    };
    s.muted = function(a) {
        return a !== b ? (N(this, "setMuted", a), this) : M(this, "muted") || l
    };
    s.Sa = function() {
        return M(this, "supportsFullScreen") || l
    };
    s.Mc = l;
    s.isFullscreen = function(a) {
        return a !== b ? (this.Mc = !!a, this) : this.Mc
    };
    s.isFullScreen = function(a) {
        t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")');
        return this.isFullscreen(a)
    };
    s.requestFullscreen = function() {
        var a = t.bb.Pb;
        this.isFullscreen(f);
        a ? (t.b(document, a.fullscreenchange, t.bind(this,
            function(c) {
                this.isFullscreen(document[a.fullscreenElement]);
                this.isFullscreen() === l && t.n(document, a.fullscreenchange, arguments.callee);
                this.o("fullscreenchange")
            })), this.c[a.requestFullscreen]()) : this.h.Sa() ? N(this, "enterFullScreen") : (this.Fc(), this.o("fullscreenchange"));
        return this
    };
    s.requestFullScreen = function() {
        t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")');
        return this.requestFullscreen()
    };
    s.exitFullscreen = function() {
        var a = t.bb.Pb;
        this.isFullscreen(l);
        if (a) document[a.exitFullscreen]();
        else this.h.Sa() ? N(this, "exitFullScreen") : (this.Lb(), this.o("fullscreenchange"));
        return this
    };
    s.cancelFullScreen = function() {
        t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()");
        return this.exitFullscreen()
    };
    s.Fc = function() {
        this.ge = f;
        this.Rd = document.documentElement.style.overflow;
        t.b(document, "keydown", t.bind(this, this.Gc));
        document.documentElement.style.overflow = "hidden";
        t.p(document.body, "vjs-full-window");
        this.o("enterFullWindow")
    };
    s.Gc = function(a) {
        27 === a.keyCode && (this.isFullscreen() === f ? this.exitFullscreen() : this.Lb())
    };
    s.Lb = function() {
        this.ge = l;
        t.n(document, "keydown", this.Gc);
        document.documentElement.style.overflow = this.Rd;
        t.r(document.body, "vjs-full-window");
        this.o("exitFullWindow")
    };
    s.selectSource = function(a) {
        for (var c = 0,
                 d = this.q.techOrder; c < d.length; c++) {
            var e = t.va(d[c]),
                g = window.videojs[e];
            if (g) {
                if (g.isSupported()) for (var h = 0,
                                              k = a; h < k.length; h++) {
                    var q = k[h];
                    if (g.canPlaySource(q)) return {
                        source: q,
                        h: e
                    }
                }
            } else t.log.error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.')
        }
        return l
    };
    s.src = function(a) {
        if (a === b) return M(this, "src");
        t.i.isArray(a) ? ma(this, a) : "string" === typeof a ? this.src({
            src: a
        }) : a instanceof Object && (a.type && !window.videojs[this.Ta].canPlaySource(a) ? ma(this, [a]) : (this.K.src = a.src, this.Cc = a.type || "", this.I(function() {
            window.videojs[this.Ta].prototype.hasOwnProperty("setSource") ? N(this, "setSource", a) : N(this, "src", a.src);
            "auto" == this.q.preload && this.load();
            this.q.autoplay && this.play()
        })));
        return this
    };
    function ma(a, c) {
        var d = a.selectSource(c);
        d ? d.h === a.Ta ? a.src(d.source) : ka(a, d.h, d.source) : (a.setTimeout(function() {
                this.error({
                    code: 4,
                    message: this.v(this.options().notSupportedMessage)
                })
            },
            0), a.Va())
    }
    s.load = function() {
        N(this, "load");
        return this
    };
    s.currentSrc = function() {
        return M(this, "currentSrc") || this.K.src || ""
    };
    s.Nd = function() {
        return this.Cc || ""
    };
    s.Ra = function(a) {
        return a !== b ? (N(this, "setPreload", a), this.q.preload = a, this) : M(this, "preload")
    };
    s.autoplay = function(a) {
        return a !== b ? (N(this, "setAutoplay", a), this.q.autoplay = a, this) : M(this, "autoplay")
    };
    s.loop = function(a) {
        return a !== b ? (N(this, "setLoop", a), this.q.loop = a, this) : M(this, "loop")
    };
    s.poster = function(a) {
        if (a === b) return this.Vc;
        a || (a = "");
        this.Vc = a;
        N(this, "setPoster", a);
        this.o("posterchange");
        return this
    };
    s.controls = function(a) {
        return a !== b ? (a = !!a, this.Jb !== a && ((this.Jb = a) ? (this.r("vjs-controls-disabled"), this.p("vjs-controls-enabled"), this.o("controlsenabled")) : (this.r("vjs-controls-enabled"), this.p("vjs-controls-disabled"), this.o("controlsdisabled"))), this) : this.Jb
    };
    t.Player.prototype.bc;
    s = t.Player.prototype;
    s.usingNativeControls = function(a) {
        return a !== b ? (a = !!a, this.bc !== a && ((this.bc = a) ? (this.p("vjs-using-native-controls"), this.o("usingnativecontrols")) : (this.r("vjs-using-native-controls"), this.o("usingcustomcontrols"))), this) : this.bc
    };
    s.ja = j;
    s.error = function(a) {
        if (a === b) return this.ja;
        if (a === j) return this.ja = a,
            this.r("vjs-error"),
            this;
        this.ja = a instanceof t.J ? a: new t.J(a);
        this.o("error");
        this.p("vjs-error");
        t.log.error("(CODE:" + this.ja.code + " " + t.J.gb[this.ja.code] + ")", this.ja.message, this.ja);
        return this
    };
    s.ended = function() {
        return M(this, "ended")
    };
    s.seeking = function() {
        return M(this, "seeking")
    };
    s.seekable = function() {
        return M(this, "seekable")
    };
    s.Fa = f;
    s.reportUserActivity = function() {
        this.Fa = f
    };
    s.ac = f;
    s.userActive = function(a) {
        return a !== b ? (a = !!a, a !== this.ac && ((this.ac = a) ? (this.Fa = f, this.r("vjs-user-inactive"), this.p("vjs-user-active"), this.o("useractive")) : (this.Fa = l, this.h && this.h.N("mousemove",
            function(a) {
                a.stopPropagation();
                a.preventDefault()
            }), this.r("vjs-user-active"), this.p("vjs-user-inactive"), this.o("userinactive"))), this) : this.ac
    };
    s.playbackRate = function(a) {
        return a !== b ? (N(this, "setPlaybackRate", a), this) : this.h && this.h.featuresPlaybackRate ? M(this, "playbackRate") : 1
    };
    s.Lc = l;
    function ja(a, c) {
        return c !== b ? (a.Lc = !!c, a) : a.Lc
    }
    s.networkState = function() {
        return M(this, "networkState")
    };
    s.readyState = function() {
        return M(this, "readyState")
    };
    s.textTracks = function() {
        return this.h && this.h.textTracks()
    };
    s.Y = function() {
        return this.h && this.h.remoteTextTracks()
    };
    s.addTextTrack = function(a, c, d) {
        return this.h && this.h.addTextTrack(a, c, d)
    };
    s.ha = function(a) {
        return this.h && this.h.addRemoteTextTrack(a)
    };
    s.Da = function(a) {
        this.h && this.h.removeRemoteTextTrack(a)
    };
    t.tb = t.a.extend();
    t.tb.prototype.q = {
        tf: "play",
        children: {
            playToggle: {},
            currentTimeDisplay: {},
            timeDivider: {},
            durationDisplay: {},
            remainingTimeDisplay: {},
            liveDisplay: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeControl: {},
            muteToggle: {},
            playbackRateMenuButton: {},
            subtitlesButton: {},
            captionsButton: {},
            chaptersButton: {}
        }
    };
    t.tb.prototype.e = function() {
        return t.e("div", {
            className: "vjs-control-bar"
        })
    };
    t.hc = t.a.extend({
        l: function(a, c) {
            t.a.call(this, a, c)
        }
    });
    t.hc.prototype.e = function() {
        var a = t.a.prototype.e.call(this, "div", {
            className: "vjs-live-controls vjs-control"
        });
        this.B = t.e("div", {
            className: "vjs-live-display",
            innerHTML: '<span class="vjs-control-text">' + this.v("Stream Type") + "</span>" + this.v("LIVE"),
            "aria-live": "off"
        });
        a.appendChild(this.B);
        return a
    };
    t.kc = t.w.extend({
        l: function(a, c) {
            t.w.call(this, a, c);
            this.b(a, "play", this.Xb);
            this.b(a, "pause", this.Wb)
        }
    });
    s = t.kc.prototype;
    s.ta = "Play";
    s.U = function() {
        return "vjs-play-control " + t.w.prototype.U.call(this)
    };
    s.u = function() {
        this.d.paused() ? this.d.play() : this.d.pause()
    };
    s.Xb = function() {
        this.r("vjs-paused");
        this.p("vjs-playing");
        this.c.children[0].children[0].innerHTML = this.v("Pause")
    };
    s.Wb = function() {
        this.r("vjs-playing");
        this.p("vjs-paused");
        this.c.children[0].children[0].innerHTML = this.v("Play")
    };
    t.ub = t.a.extend({
        l: function(a, c) {
            t.a.call(this, a, c);
            this.b(a, "timeupdate", this.fa)
        }
    });
    t.ub.prototype.e = function() {
        var a = t.a.prototype.e.call(this, "div", {
            className: "vjs-current-time vjs-time-controls vjs-control"
        });
        this.B = t.e("div", {
            className: "vjs-current-time-display",
            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
            "aria-live": "off"
        });
        a.appendChild(this.B);
        return a
    };
    t.ub.prototype.fa = function() {
        var a = this.d.nb ? this.d.K.currentTime: this.d.currentTime();
        this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Current Time") + "</span> " + t.Na(a, this.d.duration())
    };
    t.vb = t.a.extend({
        l: function(a, c) {
            t.a.call(this, a, c);
            this.b(a, "timeupdate", this.fa);
            this.b(a, "loadedmetadata", this.fa)
        }
    });
    t.vb.prototype.e = function() {
        var a = t.a.prototype.e.call(this, "div", {
            className: "vjs-duration vjs-time-controls vjs-control"
        });
        this.B = t.e("div", {
            className: "vjs-duration-display",
            innerHTML: '<span class="vjs-control-text">' + this.v("Duration Time") + "</span> 0:00",
            "aria-live": "off"
        });
        a.appendChild(this.B);
        return a
    };
    t.vb.prototype.fa = function() {
        var a = this.d.duration();
        a && (this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Duration Time") + "</span> " + t.Na(a))
    };
    t.qc = t.a.extend({
        l: function(a, c) {
            t.a.call(this, a, c)
        }
    });
    t.qc.prototype.e = function() {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-time-divider",
            innerHTML: "<div><span>/</span></div>"
        })
    };
    t.Cb = t.a.extend({
        l: function(a, c) {
            t.a.call(this, a, c);
            this.b(a, "timeupdate", this.fa)
        }
    });
    t.Cb.prototype.e = function() {
        var a = t.a.prototype.e.call(this, "div", {
            className: "vjs-remaining-time vjs-time-controls vjs-control"
        });
        this.B = t.e("div", {
            className: "vjs-remaining-time-display",
            innerHTML: '<span class="vjs-control-text">' + this.v("Remaining Time") + "</span> -0:00",
            "aria-live": "off"
        });
        a.appendChild(this.B);
        return a
    };
    t.Cb.prototype.fa = function() {
        this.d.duration() && (this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Remaining Time") + "</span> -" + t.Na(this.d.remainingTime()))
    };
    t.Ya = t.w.extend({
        l: function(a, c) {
            t.w.call(this, a, c)
        }
    });
    t.Ya.prototype.ta = "Fullscreen";
    t.Ya.prototype.U = function() {
        return "vjs-fullscreen-control " + t.w.prototype.U.call(this)
    };
    t.Ya.prototype.u = function() {
        this.d.isFullscreen() ? (this.d.exitFullscreen(), this.Ib.innerHTML = this.v("Fullscreen")) : (this.d.requestFullscreen(), this.Ib.innerHTML = this.v("Non-Fullscreen"))
    };
    t.Bb = t.a.extend({
        l: function(a, c) {
            t.a.call(this, a, c)
        }
    });
    t.Bb.prototype.q = {
        children: {
            seekBar: {}
        }
    };
    t.Bb.prototype.e = function() {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-progress-control vjs-control"
        })
    };
    t.nc = t.T.extend({
        l: function(a, c) {
            t.T.call(this, a, c);
            this.b(a, "timeupdate", this.Ea);
            a.I(t.bind(this, this.Ea))
        }
    });
    s = t.nc.prototype;
    s.q = {
        children: {
            loadProgressBar: {},
            playProgressBar: {},
            seekHandle: {}
        },
        barName: "playProgressBar",
        handleName: "seekHandle"
    };
    s.Uc = "timeupdate";
    s.e = function() {
        return t.T.prototype.e.call(this, "div", {
            className: "vjs-progress-holder",
            "aria-label": "video progress bar"
        })
    };
    s.Ea = function() {
        var a = this.d.nb ? this.d.K.currentTime: this.d.currentTime();
        this.c.setAttribute("aria-valuenow", t.round(100 * this.Qb(), 2));
        this.c.setAttribute("aria-valuetext", t.Na(a, this.d.duration()))
    };
    s.Qb = function() {
        return this.d.currentTime() / this.d.duration()
    };
    s.lb = function(a) {
        t.T.prototype.lb.call(this, a);
        this.d.nb = f;
        this.d.p("vjs-scrubbing");
        this.af = !this.d.paused();
        this.d.pause()
    };
    s.la = function(a) {
        a = ea(this, a) * this.d.duration();
        a == this.d.duration() && (a -= 0.1);
        this.d.currentTime(a)
    };
    s.Ba = function(a) {
        t.T.prototype.Ba.call(this, a);
        this.d.nb = l;
        this.d.r("vjs-scrubbing");
        this.af && this.d.play()
    };
    s.gd = function() {
        this.d.currentTime(this.d.currentTime() + 5)
    };
    s.fd = function() {
        this.d.currentTime(this.d.currentTime() - 5)
    };
    t.yb = t.a.extend({
        l: function(a, c) {
            t.a.call(this, a, c);
            this.b(a, "progress", this.update)
        }
    });
    t.yb.prototype.e = function() {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-load-progress",
            innerHTML: '<span class="vjs-control-text"><span>' + this.v("Loaded") + "</span>: 0%</span>"
        })
    };
    t.yb.prototype.update = function() {
        var a, c, d, e, g = this.d.buffered();
        a = this.d.duration();
        var h, k = this.d;
        h = k.buffered();
        k = k.duration();
        h = h.end(h.length - 1);
        h > k && (h = k);
        k = this.c.children;
        this.c.style.width = 100 * (h / a || 0) + "%";
        for (a = 0; a < g.length; a++) c = g.start(a),
            d = g.end(a),
        (e = k[a]) || (e = this.c.appendChild(t.e())),
            e.style.left = 100 * (c / h || 0) + "%",
            e.style.width = 100 * ((d - c) / h || 0) + "%";
        for (a = k.length; a > g.length; a--) this.c.removeChild(k[a - 1])
    };
    t.jc = t.a.extend({
        l: function(a, c) {
            t.a.call(this, a, c)
        }
    });
    t.jc.prototype.e = function() {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-play-progress",
            innerHTML: '<span class="vjs-control-text"><span>' + this.v("Progress") + "</span>: 0%</span>"
        })
    };
    t.Za = t.ga.extend({
        l: function(a, c) {
            t.ga.call(this, a, c);
            this.b(a, "timeupdate", this.fa)
        }
    });
    t.Za.prototype.defaultValue = "00:00";
    t.Za.prototype.e = function() {
        return t.ga.prototype.e.call(this, "div", {
            className: "vjs-seek-handle",
            "aria-live": "off"
        })
    };
    t.Za.prototype.fa = function() {
        var a = this.d.nb ? this.d.K.currentTime: this.d.currentTime();
        this.c.innerHTML = '<span class="vjs-control-text">' + t.Na(a, this.d.duration()) + "</span>"
    };
    t.Fb = t.a.extend({
        l: function(a, c) {
            t.a.call(this, a, c);
            a.h && a.h.featuresVolumeControl === l && this.p("vjs-hidden");
            this.b(a, "loadstart",
                function() {
                    a.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
                })
        }
    });
    t.Fb.prototype.q = {
        children: {
            volumeBar: {}
        }
    };
    t.Fb.prototype.e = function() {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-volume-control vjs-control"
        })
    };
    t.Eb = t.T.extend({
        l: function(a, c) {
            t.T.call(this, a, c);
            this.b(a, "volumechange", this.Ea);
            a.I(t.bind(this, this.Ea))
        }
    });
    s = t.Eb.prototype;
    s.Ea = function() {
        this.c.setAttribute("aria-valuenow", t.round(100 * this.d.volume(), 2));
        this.c.setAttribute("aria-valuetext", t.round(100 * this.d.volume(), 2) + "%")
    };
    s.q = {
        children: {
            volumeLevel: {},
            volumeHandle: {}
        },
        barName: "volumeLevel",
        handleName: "volumeHandle"
    };
    s.Uc = "volumechange";
    s.e = function() {
        return t.T.prototype.e.call(this, "div", {
            className: "vjs-volume-bar",
            "aria-label": "volume level"
        })
    };
    s.la = function(a) {
        this.d.muted() && this.d.muted(l);
        this.d.volume(ea(this, a))
    };
    s.Qb = function() {
        return this.d.muted() ? 0 : this.d.volume()
    };
    s.gd = function() {
        this.d.volume(this.d.volume() + 0.1)
    };
    s.fd = function() {
        this.d.volume(this.d.volume() - 0.1)
    };
    t.rc = t.a.extend({
        l: function(a, c) {
            t.a.call(this, a, c)
        }
    });
    t.rc.prototype.e = function() {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-volume-level",
            innerHTML: '<span class="vjs-control-text"></span>'
        })
    };
    t.Gb = t.ga.extend();
    t.Gb.prototype.defaultValue = "00:00";
    t.Gb.prototype.e = function() {
        return t.ga.prototype.e.call(this, "div", {
            className: "vjs-volume-handle"
        })
    };
    t.ra = t.w.extend({
        l: function(a, c) {
            t.w.call(this, a, c);
            this.b(a, "volumechange", this.update);
            a.h && a.h.featuresVolumeControl === l && this.p("vjs-hidden");
            this.b(a, "loadstart",
                function() {
                    a.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
                })
        }
    });
    t.ra.prototype.e = function() {
        return t.w.prototype.e.call(this, "div", {
            className: "vjs-mute-control vjs-control",
            innerHTML: '<div><span class="vjs-control-text">' + this.v("Mute") + "</span></div>"
        })
    };
    t.ra.prototype.u = function() {
        this.d.muted(this.d.muted() ? l: f)
    };
    t.ra.prototype.update = function() {
        var a = this.d.volume(),
            c = 3;
        0 === a || this.d.muted() ? c = 0 : 0.33 > a ? c = 1 : 0.67 > a && (c = 2);
        this.d.muted() ? this.c.children[0].children[0].innerHTML != this.v("Unmute") && (this.c.children[0].children[0].innerHTML = this.v("Unmute")) : this.c.children[0].children[0].innerHTML != this.v("Mute") && (this.c.children[0].children[0].innerHTML = this.v("Mute"));
        for (a = 0; 4 > a; a++) t.r(this.c, "vjs-vol-" + a);
        t.p(this.c, "vjs-vol-" + c)
    };
    t.Ha = t.O.extend({
        l: function(a, c) {
            t.O.call(this, a, c);
            this.b(a, "volumechange", this.bf);
            a.h && a.h.featuresVolumeControl === l && this.p("vjs-hidden");
            this.b(a, "loadstart",
                function() {
                    a.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
                });
            this.p("vjs-menu-button")
        }
    });
    t.Ha.prototype.La = function() {
        var a = new t.qa(this.d, {
                zc: "div"
            }),
            c = new t.Eb(this.d, this.q.volumeBar);
        c.b("focus",
            function() {
                a.p("vjs-lock-showing")
            });
        c.b("blur",
            function() {
                G(a)
            });
        a.aa(c);
        return a
    };
    t.Ha.prototype.u = function() {
        t.ra.prototype.u.call(this);
        t.O.prototype.u.call(this)
    };
    t.Ha.prototype.e = function() {
        return t.w.prototype.e.call(this, "div", {
            className: "vjs-volume-menu-button vjs-menu-button vjs-control",
            innerHTML: '<div><span class="vjs-control-text">' + this.v("Mute") + "</span></div>"
        })
    };
    t.Ha.prototype.bf = t.ra.prototype.update;
    t.lc = t.O.extend({
        l: function(a, c) {
            t.O.call(this, a, c);
            this.pd();
            this.od();
            this.b(a, "loadstart", this.pd);
            this.b(a, "ratechange", this.od)
        }
    });
    s = t.lc.prototype;
    s.ta = "Playback Rate";
    s.className = "vjs-playback-rate";
    s.e = function() {
        var a = t.O.prototype.e.call(this);
        this.Oc = t.e("div", {
            className: "vjs-playback-rate-value",
            innerHTML: 1
        });
        a.appendChild(this.Oc);
        return a
    };
    s.La = function() {
        var a = new t.qa(this.k()),
            c = this.k().options().playbackRates;
        if (c) for (var d = c.length - 1; 0 <= d; d--) a.aa(new t.Ab(this.k(), {
            rate: c[d] + "x"
        }));
        return a
    };
    s.Ea = function() {
        this.m().setAttribute("aria-valuenow", this.k().playbackRate())
    };
    s.u = function() {
        for (var a = this.k().playbackRate(), c = this.k().options().playbackRates, d = c[0], e = 0; e < c.length; e++) if (c[e] > a) {
            d = c[e];
            break
        }
        this.k().playbackRate(d)
    };
    function na(a) {
        return a.k().h && a.k().h.featuresPlaybackRate && a.k().options().playbackRates && 0 < a.k().options().playbackRates.length
    }
    s.pd = function() {
        na(this) ? this.r("vjs-hidden") : this.p("vjs-hidden")
    };
    s.od = function() {
        na(this) && (this.Oc.innerHTML = this.k().playbackRate() + "x")
    };
    t.Ab = t.M.extend({
        zc: "button",
        l: function(a, c) {
            var d = this.label = c.rate,
                e = this.Wc = parseFloat(d, 10);
            c.label = d;
            c.selected = 1 === e;
            t.M.call(this, a, c);
            this.b(a, "ratechange", this.update)
        }
    });
    t.Ab.prototype.u = function() {
        t.M.prototype.u.call(this);
        this.k().playbackRate(this.Wc)
    };
    t.Ab.prototype.update = function() {
        this.selected(this.k().playbackRate() == this.Wc)
    };
    t.mc = t.w.extend({
        l: function(a, c) {
            t.w.call(this, a, c);
            this.update();
            a.b("posterchange", t.bind(this, this.update))
        }
    });
    s = t.mc.prototype;
    s.dispose = function() {
        this.k().n("posterchange", this.update);
        t.w.prototype.dispose.call(this)
    };
    s.e = function() {
        var a = t.e("div", {
            className: "vjs-poster",
            tabIndex: -1
        });
        t.td || (this.Mb = t.e("img"), a.appendChild(this.Mb));
        return a
    };
    s.update = function() {
        var a = this.k().poster();
        this.na(a);
        a ? this.show() : this.X()
    };
    s.na = function(a) {
        var c;
        this.Mb ? this.Mb.src = a: (c = "", a && (c = 'url("' + a + '")'), this.c.style.backgroundImage = c)
    };
    s.u = function() {
        this.d.play()
    };
    t.ic = t.a.extend({
        l: function(a, c) {
            t.a.call(this, a, c)
        }
    });
    t.ic.prototype.e = function() {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-loading-spinner"
        })
    };
    t.rb = t.w.extend();
    t.rb.prototype.e = function() {
        return t.w.prototype.e.call(this, "div", {
            className: "vjs-big-play-button",
            innerHTML: '<span aria-hidden="true"></span>',
            "aria-label": "play video"
        })
    };
    t.rb.prototype.u = function() {
        this.d.play()
    };
    t.wb = t.a.extend({
        l: function(a, c) {
            t.a.call(this, a, c);
            this.update();
            this.b(a, "error", this.update)
        }
    });
    t.wb.prototype.e = function() {
        var a = t.a.prototype.e.call(this, "div", {
            className: "vjs-error-display"
        });
        this.B = t.e("div");
        a.appendChild(this.B);
        return a
    };
    t.wb.prototype.update = function() {
        this.k().error() && (this.B.innerHTML = this.v(this.k().error().message))
    };
    var O;
    t.j = t.a.extend({
        l: function(a, c, d) {
            c = c || {};
            c.$c = l;
            t.a.call(this, a, c, d);
            this.featuresProgressEvents || this.oe();
            this.featuresTimeupdateEvents || this.pe();
            this.ce();
            this.featuresNativeTextTracks || this.Sd();
            this.ee()
        }
    });
    s = t.j.prototype;
    s.ce = function() {
        var a, c;
        a = this.k();
        c = function() {
            a.controls() && !a.usingNativeControls() && this.Fd()
        };
        this.I(c);
        this.b(a, "controlsenabled", c);
        this.b(a, "controlsdisabled", this.Ee);
        this.I(function() {
            this.networkState && 0 < this.networkState() && this.k().o("loadstart")
        })
    };
    s.Fd = function() {
        var a;
        this.b("mousedown", this.u);
        this.b("touchstart",
            function() {
                a = this.d.userActive()
            });
        this.b("touchmove",
            function() {
                a && this.k().reportUserActivity()
            });
        this.b("touchend",
            function(a) {
                a.preventDefault()
            });
        da(this);
        this.b("tap", this.ye)
    };
    s.Ee = function() {
        this.n("tap");
        this.n("touchstart");
        this.n("touchmove");
        this.n("touchleave");
        this.n("touchcancel");
        this.n("touchend");
        this.n("click");
        this.n("mousedown")
    };
    s.u = function(a) {
        0 === a.button && this.k().controls() && (this.k().paused() ? this.k().play() : this.k().pause())
    };
    s.ye = function() {
        this.k().userActive(!this.k().userActive())
    };
    s.oe = function() {
        this.Qc = f;
        this.Xe()
    };
    s.ne = function() {
        this.Qc = l;
        this.hd()
    };
    s.Xe = function() {
        this.De = this.setInterval(function() {
                var a = this.k().bufferedPercent();
                this.Jd != a && this.k().o("progress");
                this.Jd = a;
                1 === a && this.hd()
            },
            500)
    };
    s.hd = function() {
        this.clearInterval(this.De)
    };
    s.pe = function() {
        var a = this.d;
        this.Vb = f;
        this.b(a, "play", this.md);
        this.b(a, "pause", this.qb);
        this.N("timeupdate",
            function() {
                this.featuresTimeupdateEvents = f;
                this.Rc()
            })
    };
    s.Rc = function() {
        var a = this.d;
        this.Vb = l;
        this.qb();
        this.n(a, "play", this.md);
        this.n(a, "pause", this.qb)
    };
    s.md = function() {
        this.Bc && this.qb();
        this.Bc = this.setInterval(function() {
                this.k().o("timeupdate")
            },
            250)
    };
    s.qb = function() {
        this.clearInterval(this.Bc);
        this.k().o("timeupdate")
    };
    s.dispose = function() {
        this.Qc && this.ne();
        this.Vb && this.Rc();
        t.a.prototype.dispose.call(this)
    };
    s.Zb = function() {
        this.Vb && this.k().o("timeupdate")
    };
    s.ee = function() {
        function a() {
            var a = c.da("textTrackDisplay");
            a && a.C()
        }
        var c = this.d,
            d;
        if (d = this.textTracks()) d.addEventListener("removetrack", a),
            d.addEventListener("addtrack", a),
            this.b("dispose", t.bind(this,
                function() {
                    d.removeEventListener("removetrack", a);
                    d.removeEventListener("addtrack", a)
                }))
    };
    s.Sd = function() {
        var a = this.d,
            c, d, e;
        window.WebVTT || (e = document.createElement("script"), e.src = a.options()["vtt.js"] || "../node_modules/vtt.js/dist/vtt.js", a.m().appendChild(e), window.WebVTT = f);
        if (d = this.textTracks()) c = function() {
            var c, d, e;
            e = a.da("textTrackDisplay");
            e.C();
            for (c = 0; c < this.length; c++) d = this[c],
                d.removeEventListener("cuechange", t.bind(e, e.C)),
            "showing" === d.mode && d.addEventListener("cuechange", t.bind(e, e.C))
        },
            d.addEventListener("change", c),
            this.b("dispose", t.bind(this,
                function() {
                    d.removeEventListener("change", c)
                }))
    };
    s.textTracks = function() {
        this.d.ld = this.d.ld || new t.F;
        return this.d.ld
    };
    s.Y = function() {
        this.d.Xc = this.d.Xc || new t.F;
        return this.d.Xc
    };
    O = function(a, c, d, e, g) {
        var h = a.textTracks();
        g = g || {};
        g.kind = c;
        d && (g.label = d);
        e && (g.language = e);
        g.player = a.d;
        a = new t.t(g);
        P(h, a);
        return a
    };
    t.j.prototype.addTextTrack = function(a, c, d) {
        if (!a) throw Error("TextTrack kind is required but was not provided");
        return O(this, a, c, d)
    };
    t.j.prototype.ha = function(a) {
        a = O(this, a.kind, a.label, a.language, a);
        P(this.Y(), a);
        return {
            S: a
        }
    };
    t.j.prototype.Da = function(a) {
        Q(this.textTracks(), a);
        Q(this.Y(), a)
    };
    t.j.prototype.bd = m();
    t.j.prototype.featuresVolumeControl = f;
    t.j.prototype.featuresFullscreenResize = l;
    t.j.prototype.featuresPlaybackRate = l;
    t.j.prototype.featuresProgressEvents = l;
    t.j.prototype.featuresTimeupdateEvents = l;
    t.j.prototype.featuresNativeTextTracks = l;
    t.j.dc = function(a) {
        a.registerSourceHandler = function(c, d) {
            var e = a.cd;
            e || (e = a.cd = []);
            d === b && (d = e.length);
            e.splice(d, 0, c)
        };
        a.ob = function(c) {
            for (var d = a.cd || [], e, g = 0; g < d.length; g++) if (e = d[g].canHandleSource(c)) return d[g];
            return j
        };
        a.wc = function(c) {
            var d = a.ob(c);
            return d ? d.canHandleSource(c) : ""
        };
        a.prototype.ma = function(c) {
            var d = a.ob(c);
            d || (a.nativeSourceHandler ? d = a.nativeSourceHandler: t.log.error("No source hander found for the current source."));
            this.ia();
            this.n("dispose", this.ia);
            this.fb = c;
            this.$b = d.handleSource(c, this);
            this.b("dispose", this.ia);
            return this
        };
        a.prototype.ia = function() {
            this.$b && this.$b.dispose && this.$b.dispose()
        }
    };
    t.media = {};
    t.f = t.j.extend({
        l: function(a, c, d) {
            var e, g, h;
            if (c.nativeCaptions === l || c.nativeTextTracks === l) this.featuresNativeTextTracks = l;
            t.j.call(this, a, c, d);
            for (d = t.f.xb.length - 1; 0 <= d; d--) this.b(t.f.xb[d], this.Td); (c = c.source) && (this.c.currentSrc !== c.src || a.L && 3 === a.L.de) && this.ma(c);
            if (this.c.hasChildNodes()) {
                d = this.c.childNodes;
                e = d.length;
                for (c = []; e--;) g = d[e],
                    h = g.nodeName.toLowerCase(),
                "track" === h && (this.featuresNativeTextTracks ? P(this.Y(), g.track) : c.push(g));
                for (d = 0; d < c.length; d++) this.c.removeChild(c[d])
            }
            this.featuresNativeTextTracks && this.b("loadstart", t.bind(this, this.be));
            if (t.Db && a.options().nativeControlsForTouch === f) {
                var k, q, r, u;
                k = this;
                q = this.k();
                c = q.controls();
                k.c.controls = !!c;
                r = function() {
                    k.c.controls = f
                };
                u = function() {
                    k.c.controls = l
                };
                q.b("controlsenabled", r);
                q.b("controlsdisabled", u);
                c = function() {
                    q.n("controlsenabled", r);
                    q.n("controlsdisabled", u)
                };
                k.b("dispose", c);
                q.b("usingcustomcontrols", c);
                q.usingNativeControls(f)
            }
            a.I(function() {
                this.src() && (this.L && this.q.autoplay && this.paused()) && (delete this.L.poster, this.play())
            });
            this.Va()
        }
    });
    s = t.f.prototype;
    s.dispose = function() {
        t.f.Kb(this.c);
        t.j.prototype.dispose.call(this)
    };
    s.e = function() {
        var a = this.d,
            c, d, e, g = a.L;
        if (!g || this.movingMediaElementInDOM === l) {
            g ? (e = g.cloneNode(l), t.f.Kb(g), g = e, a.L = j) : (g = t.e("video"), e = videojs.Z.Aa({},
                a.Ue), (!t.Db || a.options().nativeControlsForTouch !== f) && delete e.controls, t.ad(g, t.i.D(e, {
                id: a.id() + "_html5_api",
                "class": "vjs-tech"
            })));
            g.player = a;
            if (a.q.nd) for (e = 0; e < a.q.nd.length; e++) c = a.q.nd[e],
                d = document.createElement("track"),
                d.Tb = c.Tb,
                d.label = c.label,
                d.ed = c.ed,
                d.src = c.src,
            "default" in c && d.setAttribute("default", "default"),
                g.appendChild(d);
            t.Rb(g, a.m())
        }
        c = ["autoplay", "preload", "loop", "muted"];
        for (e = c.length - 1; 0 <= e; e--) {
            d = c[e];
            var h = {};
            "undefined" !== typeof a.q[d] && (h[d] = a.q[d]);
            t.ad(g, h)
        }
        return g
    };
    s.be = function() {
        for (var a = this.c.querySelectorAll("track"), c, d = a.length, e = {
            captions: 1,
            subtitles: 1
        }; d--;) if ((c = a[d].S) && c.kind in e && !a[d]["default"]) c.mode = "disabled"
    };
    s.Td = function(a) {
        "error" == a.type && this.error() ? this.k().error(this.error().code) : (a.bubbles = l, this.k().o(a))
    };
    s.play = function() {
        this.c.play()
    };
    s.pause = function() {
        this.c.pause()
    };
    s.paused = function() {
        return this.c.paused
    };
    s.currentTime = function() {
        return this.c.currentTime
    };
    s.Zb = function(a) {
        try {
            this.c.currentTime = a
        } catch(c) {
            t.log(c, "Video is not ready. (Video.js)")
        }
    };
    s.duration = function() {
        return this.c.duration || 0
    };
    s.buffered = function() {
        return this.c.buffered
    };
    s.volume = function() {
        return this.c.volume
    };
    s.Pe = function(a) {
        this.c.volume = a
    };
    s.muted = function() {
        return this.c.muted
    };
    s.Le = function(a) {
        this.c.muted = a
    };
    s.width = function() {
        return this.c.offsetWidth
    };
    s.height = function() {
        return this.c.offsetHeight
    };
    s.Sa = function() {
        return "function" == typeof this.c.webkitEnterFullScreen && (/Android/.test(t.P) || !/Chrome|Mac OS X 10.5/.test(t.P)) ? f: l
    };
    s.Ec = function() {
        var a = this.c;
        "webkitDisplayingFullscreen" in a && this.N("webkitbeginfullscreen",
            function() {
                this.d.isFullscreen(f);
                this.N("webkitendfullscreen",
                    function() {
                        this.d.isFullscreen(l);
                        this.d.o("fullscreenchange")
                    });
                this.d.o("fullscreenchange")
            });
        a.paused && a.networkState <= a.ff ? (this.c.play(), this.setTimeout(function() {
                a.pause();
                a.webkitEnterFullScreen()
            },
            0)) : a.webkitEnterFullScreen()
    };
    s.Ud = function() {
        this.c.webkitExitFullScreen()
    };
    function oa(a, c) {
        var d = /^blob\:/i;
        return c && a && d.test(a) ? c: a
    }
    s.src = function(a) {
        var c = this.c.src;
        if (a === b) return oa(c, this.dd);
        this.na(a)
    };
    s.na = function(a) {
        this.c.src = a
    };
    s.load = function() {
        this.c.load()
    };
    s.currentSrc = function() {
        var a = this.c.currentSrc;
        return ! this.fb ? a: oa(a, this.fb.src)
    };
    s.poster = function() {
        return this.c.poster
    };
    s.bd = function(a) {
        this.c.poster = a
    };
    s.Ra = function() {
        return this.c.Ra
    };
    s.Ne = function(a) {
        this.c.Ra = a
    };
    s.autoplay = function() {
        return this.c.autoplay
    };
    s.Ie = function(a) {
        this.c.autoplay = a
    };
    s.controls = function() {
        return this.c.controls
    };
    s.loop = function() {
        return this.c.loop
    };
    s.Ke = function(a) {
        this.c.loop = a
    };
    s.error = function() {
        return this.c.error
    };
    s.seeking = function() {
        return this.c.seeking
    };
    s.seekable = function() {
        return this.c.seekable
    };
    s.ended = function() {
        return this.c.ended
    };
    s.playbackRate = function() {
        return this.c.playbackRate
    };
    s.Me = function(a) {
        this.c.playbackRate = a
    };
    s.networkState = function() {
        return this.c.networkState
    };
    s.readyState = function() {
        return this.c.readyState
    };
    s.textTracks = function() {
        return ! this.featuresNativeTextTracks ? t.j.prototype.textTracks.call(this) : this.c.textTracks
    };
    s.addTextTrack = function(a, c, d) {
        return ! this.featuresNativeTextTracks ? t.j.prototype.addTextTrack.call(this, a, c, d) : this.c.addTextTrack(a, c, d)
    };
    s.ha = function(a) {
        if (!this.featuresNativeTextTracks) return t.j.prototype.ha.call(this, a);
        var c = document.createElement("track");
        a = a || {};
        a.kind && (c.kind = a.kind);
        a.label && (c.label = a.label);
        if (a.language || a.srclang) c.srclang = a.language || a.srclang;
        a["default"] && (c["default"] = a["default"]);
        a.id && (c.id = a.id);
        a.src && (c.src = a.src);
        this.m().appendChild(c);
        c.track.mode = "metadata" === c.S.kind ? "hidden": "disabled";
        c.onload = function() {
            var a = c.track;
            2 <= c.readyState && ("metadata" === a.kind && "hidden" !== a.mode ? a.mode = "hidden": "metadata" !== a.kind && "disabled" !== a.mode && (a.mode = "disabled"), c.onload = j)
        };
        P(this.Y(), c.S);
        return c
    };
    s.Da = function(a) {
        if (!this.featuresNativeTextTracks) return t.j.prototype.Da.call(this, a);
        var c, d;
        Q(this.Y(), a);
        c = this.m().querySelectorAll("track");
        for (d = 0; d < c.length; d++) if (c[d] === a || c[d].track === a) {
            c[d].parentNode.removeChild(c[d]);
            break
        }
    };
    t.f.isSupported = function() {
        try {
            t.A.volume = 0.5
        } catch(a) {
            return l
        }
        return !! t.A.canPlayType
    };
    t.j.dc(t.f);
    var pa = t.f.prototype.ma,
        qa = t.f.prototype.ia;
    t.f.prototype.ma = function(a) {
        var c = pa.call(this, a);
        this.dd = a.src;
        return c
    };
    t.f.prototype.ia = function() {
        this.dd = b;
        return qa.call(this)
    };
    t.f.nativeSourceHandler = {};
    t.f.nativeSourceHandler.canHandleSource = function(a) {
        function c(a) {
            try {
                return t.A.canPlayType(a)
            } catch(c) {
                return ""
            }
        }
        return a.type ? c(a.type) : a.src ? (a = (a = a.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i)) && a[1], c("video/" + a)) : ""
    };
    t.f.nativeSourceHandler.handleSource = function(a, c) {
        c.na(a.src)
    };
    t.f.nativeSourceHandler.dispose = m();
    t.f.registerSourceHandler(t.f.nativeSourceHandler);
    t.f.Ld = function() {
        var a = t.A.volume;
        t.A.volume = a / 2 + 0.1;
        return a !== t.A.volume
    };
    t.f.Kd = function() {
        var a = t.A.playbackRate;
        t.A.playbackRate = a / 2 + 0.1;
        return a !== t.A.playbackRate
    };
    t.f.Se = function() {
        var a; (a = !!t.A.textTracks) && 0 < t.A.textTracks.length && (a = "number" !== typeof t.A.textTracks[0].mode);
        a && t.gc && (a = l);
        return a
    };
    t.f.prototype.featuresVolumeControl = t.f.Ld();
    t.f.prototype.featuresPlaybackRate = t.f.Kd();
    t.f.prototype.movingMediaElementInDOM = !t.xd;
    t.f.prototype.featuresFullscreenResize = f;
    t.f.prototype.featuresProgressEvents = f;
    t.f.prototype.featuresNativeTextTracks = t.f.Se();
    var S, ra = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
        sa = /^video\/mp4/i;
    t.f.Tc = function() {
        4 <= t.ec && (S || (S = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function(a) {
            return a && ra.test(a) ? "maybe": S.call(this, a)
        });
        t.Bd && (S || (S = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function(a) {
            return a && sa.test(a) ? "maybe": S.call(this, a)
        })
    };
    t.f.Ze = function() {
        var a = t.A.constructor.prototype.canPlayType;
        t.A.constructor.prototype.canPlayType = S;
        S = j;
        return a
    };
    t.f.Tc();
    t.f.xb = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
    t.f.Kb = function(a) {
        if (a) {
            a.player = j;
            for (a.parentNode && a.parentNode.removeChild(a); a.hasChildNodes();) a.removeChild(a.firstChild);
            a.removeAttribute("src");
            if ("function" === typeof a.load) try {
                a.load()
            } catch(c) {}
        }
    };
    t.g = t.j.extend({
        l: function(a, c, d) {
            t.j.call(this, a, c, d);
            var e = c.source;
            d = a.id() + "_flash_api";
            var g = a.q,
                g = t.i.D({
                        readyFunction: "videojs.Flash.onReady",
                        eventProxyFunction: "videojs.Flash.onEvent",
                        errorEventProxyFunction: "videojs.Flash.onError",
                        autoplay: g.autoplay,
                        preload: g.Ra,
                        loop: g.loop,
                        muted: g.muted
                    },
                    c.flashVars),
                h = t.i.D({
                        wmode: "opaque",
                        bgcolor: "#000000"
                    },
                    c.params);
            d = t.i.D({
                    id: d,
                    name: d,
                    "class": "vjs-tech"
                },
                c.attributes);
            e && this.I(function() {
                this.ma(e)
            });
            t.Rb(this.c, c.parentEl);
            c.startTime && this.I(function() {
                this.load();
                this.play();
                this.currentTime(c.startTime)
            });
            t.gc && this.I(function() {
                this.b("mousemove",
                    function() {
                        this.k().o({
                            type: "mousemove",
                            bubbles: l
                        })
                    })
            });
            a.b("stageclick", a.reportUserActivity);
            this.c = t.g.Dc(c.swf, this.c, g, h, d)
        }
    });
    s = t.g.prototype;
    s.dispose = function() {
        t.j.prototype.dispose.call(this)
    };
    s.play = function() {
        this.c.vjs_play()
    };
    s.pause = function() {
        this.c.vjs_pause()
    };
    s.src = function(a) {
        return a === b ? this.currentSrc() : this.na(a)
    };
    s.na = function(a) {
        a = t.Xd(a);
        this.c.vjs_src(a);
        if (this.d.autoplay()) {
            var c = this;
            this.setTimeout(function() {
                    c.play()
                },
                0)
        }
    };
    t.g.prototype.setCurrentTime = function(a) {
        this.le = a;
        this.c.vjs_setProperty("currentTime", a);
        t.j.prototype.Zb.call(this)
    };
    t.g.prototype.currentTime = function() {
        return this.seeking() ? this.le || 0 : this.c.vjs_getProperty("currentTime")
    };
    t.g.prototype.currentSrc = function() {
        return this.fb ? this.fb.src: this.c.vjs_getProperty("currentSrc")
    };
    t.g.prototype.load = function() {
        this.c.vjs_load()
    };
    t.g.prototype.poster = function() {
        this.c.vjs_getProperty("poster")
    };
    t.g.prototype.setPoster = m();
    s = t.g.prototype;
    s.seekable = function() {
        return 0 === this.duration() ? t.xa() : t.xa(0, this.duration())
    };
    s.buffered = function() {
        return ! this.c.vjs_getProperty ? t.xa() : t.xa(0, this.c.vjs_getProperty("buffered"))
    };
    s.duration = function() {
        return ! this.c.vjs_getProperty ? 0 : this.c.vjs_getProperty("duration")
    };
    s.Sa = p(l);
    s.Ec = p(l);
    function ta() {
        var a = T[U],
            c = a.charAt(0).toUpperCase() + a.slice(1);
        ua["set" + c] = function(c) {
            return this.c.vjs_setProperty(a, c)
        }
    }
    function va(a) {
        ua[a] = function() {
            return this.c.vjs_getProperty(a)
        }
    }
    var ua = t.g.prototype,
        T = "rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
        wa = "error networkState readyState seeking initialTime startOffsetTime paused played ended videoTracks audioTracks videoWidth videoHeight".split(" "),
        U;
    for (U = 0; U < T.length; U++) va(T[U]),
        ta();
    for (U = 0; U < wa.length; U++) va(wa[U]);
    t.g.isSupported = function() {
        return 10 <= t.g.version()[0]
    };
    t.j.dc(t.g);
    t.g.nativeSourceHandler = {};
    t.g.nativeSourceHandler.canHandleSource = function(a) {
        return ! a.type ? "": a.type.replace(/;.*/, "").toLowerCase() in t.g.Wd ? "maybe": ""
    };
    t.g.nativeSourceHandler.handleSource = function(a, c) {
        c.na(a.src)
    };
    t.g.nativeSourceHandler.dispose = m();
    t.g.registerSourceHandler(t.g.nativeSourceHandler);
    t.g.Wd = {
        "video/flv": "FLV",
        "video/x-flv": "FLV",
        "video/mp4": "MP4",
        "video/m4v": "MP4"
    };
    t.g.onReady = function(a) {
        var c;
        if (c = (a = t.m(a)) && a.parentNode && a.parentNode.player) a.player = c,
            t.g.checkReady(c.h)
    };
    t.g.checkReady = function(a) {
        a.m() && (a.m().vjs_getProperty ? a.Va() : this.setTimeout(function() {
                t.g.checkReady(a)
            },
            50))
    };
    t.g.onEvent = function(a, c) {
        t.m(a).player.o(c)
    };
    t.g.onError = function(a, c) {
        var d = t.m(a).player,
            e = "FLASH: " + c;
        "srcnotfound" == c ? d.error({
            code: 4,
            message: e
        }) : d.error(e)
    };
    t.g.version = function() {
        var a = "0,0,0";
        try {
            a = (new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch(c) {
            try {
                navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (a = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
            } catch(d) {}
        }
        return a.split(",")
    };
    t.g.Dc = function(a, c, d, e, g) {
        a = t.g.$d(a, d, e, g);
        a = t.e("div", {
            innerHTML: a
        }).childNodes[0];
        d = c.parentNode;
        c.parentNode.replaceChild(a, c);
        a[t.expando] = c[t.expando];
        var h = d.childNodes[0];
        setTimeout(function() {
                h.style.display = "block"
            },
            1E3);
        return a
    };
    t.g.$d = function(a, c, d, e) {
        var g = "",
            h = "",
            k = "";
        c && t.i.ca(c,
            function(a, c) {
                g += a + "=" + c + "&amp;"
            });
        d = t.i.D({
                movie: a,
                flashvars: g,
                allowScriptAccess: "always",
                allowNetworking: "all"
            },
            d);
        t.i.ca(d,
            function(a, c) {
                h += '<param name="' + a + '" value="' + c + '" />'
            });
        e = t.i.D({
                data: a,
                width: "100%",
                height: "100%"
            },
            e);
        t.i.ca(e,
            function(a, c) {
                k += a + '="' + c + '" '
            });
        return '<object type="application/x-shockwave-flash" ' + k + ">" + h + "</object>"
    };
    t.g.Re = {
        "rtmp/mp4": "MP4",
        "rtmp/flv": "FLV"
    };
    t.g.Ef = function(a, c) {
        return a + "&" + c
    };
    t.g.Qe = function(a) {
        var c = {
            yc: "",
            jd: ""
        };
        if (!a) return c;
        var d = a.indexOf("&"),
            e; - 1 !== d ? e = d + 1 : (d = e = a.lastIndexOf("/") + 1, 0 === d && (d = e = a.length));
        c.yc = a.substring(0, d);
        c.jd = a.substring(e, a.length);
        return c
    };
    t.g.je = function(a) {
        return a in t.g.Re
    };
    t.g.Dd = /^rtmp[set]?:\/\//i;
    t.g.ie = function(a) {
        return t.g.Dd.test(a)
    };
    t.g.Yb = {};
    t.g.Yb.canHandleSource = function(a) {
        return t.g.je(a.type) || t.g.ie(a.src) ? "maybe": ""
    };
    t.g.Yb.handleSource = function(a, c) {
        var d = t.g.Qe(a.src);
        c.setRtmpConnection(d.yc);
        c.setRtmpStream(d.jd)
    };
    t.g.registerSourceHandler(t.g.Yb);
    t.Cd = t.a.extend({
        l: function(a, c, d) {
            t.a.call(this, a, c, d);
            if (!a.q.sources || 0 === a.q.sources.length) {
                c = 0;
                for (d = a.q.techOrder; c < d.length; c++) {
                    var e = t.va(d[c]),
                        g = window.videojs[e];
                    if (g && g.isSupported()) {
                        ka(a, e);
                        break
                    }
                }
            } else a.src(a.q.sources)
        }
    });
    t.oc = {
        disabled: "disabled",
        hidden: "hidden",
        showing: "showing"
    };
    t.Ed = {
        subtitles: "subtitles",
        captions: "captions",
        descriptions: "descriptions",
        chapters: "chapters",
        metadata: "metadata"
    };
    t.t = function(a) {
        var c, d, e, g, h, k, q, r, u, A, R;
        a = a || {};
        if (!a.player) throw Error("A player was not provided.");
        c = this;
        if (t.pa) for (R in c = document.createElement("custom"), t.t.prototype) c[R] = t.t.prototype[R];
        c.d = a.player;
        e = t.oc[a.mode] || "disabled";
        g = t.Ed[a.kind] || "subtitles";
        h = a.label || "";
        k = a.language || a.srclang || "";
        d = a.id || "vjs_text_track_" + t.s++;
        if ("metadata" === g || "chapters" === g) e = "hidden";
        c.W = [];
        c.Ia = [];
        q = new t.V(c.W);
        r = new t.V(c.Ia);
        A = l;
        u = t.bind(c,
            function() {
                this.activeCues;
                A && (this.trigger("cuechange"), A = l)
            });
        "disabled" !== e && c.d.b("timeupdate", u);
        Object.defineProperty(c, "kind", {
            get: function() {
                return g
            },
            set: Function.prototype
        });
        Object.defineProperty(c, "label", {
            get: function() {
                return h
            },
            set: Function.prototype
        });
        Object.defineProperty(c, "language", {
            get: function() {
                return k
            },
            set: Function.prototype
        });
        Object.defineProperty(c, "id", {
            get: function() {
                return d
            },
            set: Function.prototype
        });
        Object.defineProperty(c, "mode", {
            get: function() {
                return e
            },
            set: function(a) {
                t.oc[a] && (e = a, "showing" === e && this.d.b("timeupdate", u), this.o("modechange"))
            }
        });
        Object.defineProperty(c, "cues", {
            get: function() {
                return ! this.Ub ? j: q
            },
            set: Function.prototype
        });
        Object.defineProperty(c, "activeCues", {
            get: function() {
                var a, c, d, e, g;
                if (!this.Ub) return j;
                if (0 === this.cues.length) return r;
                e = this.d.currentTime();
                a = 0;
                c = this.cues.length;
                for (d = []; a < c; a++) g = this.cues[a],
                    g.startTime <= e && g.endTime >= e ? d.push(g) : g.startTime === g.endTime && (g.startTime <= e && g.startTime + 0.5 >= e) && d.push(g);
                A = l;
                if (d.length !== this.Ia.length) A = f;
                else for (a = 0; a < d.length; a++) - 1 === xa.call(this.Ia, d[a]) && (A = f);
                this.Ia = d;
                r.pb(this.Ia);
                return r
            },
            set: Function.prototype
        });
        a.src ? ya(a.src, c) : c.Ub = f;
        if (t.pa) return c
    };
    t.t.prototype = t.i.create(t.z.prototype);
    t.t.prototype.constructor = t.t;
    t.t.prototype.ab = {
        cuechange: "cuechange"
    };
    t.t.prototype.sc = function(a) {
        var c = this.d.textTracks(),
            d = 0;
        if (c) for (; d < c.length; d++) c[d] !== this && c[d].Yc(a);
        this.W.push(a);
        this.cues.pb(this.W)
    };
    t.t.prototype.Yc = function(a) {
        for (var c = 0,
                 d = this.W.length,
                 e, g = l; c < d; c++) e = this.W[c],
        e === a && (this.W.splice(c, 1), g = f);
        g && this.Ac.pb(this.W)
    };
    var ya, V, xa;
    ya = function(a, c) {
        t.cf(a, t.bind(this,
            function(a, e, g) {
                if (a) return t.log.error(a);
                c.Ub = f;
                V(g, c)
            }))
    };
    V = function(a, c) {
        if ("function" !== typeof window.WebVTT) window.setTimeout(function() {
                V(a, c)
            },
            25);
        else {
            var d = new window.WebVTT.Parser(window, window.vttjs, window.WebVTT.StringDecoder());
            d.oncue = function(a) {
                c.sc(a)
            };
            d.onparsingerror = function(a) {
                t.log.error(a)
            };
            d.parse(a);
            d.flush()
        }
    };
    xa = function(a, c) {
        var d;
        if (this == j) throw new TypeError('"this" is null or not defined');
        var e = Object(this),
            g = e.length >>> 0;
        if (0 === g) return - 1;
        d = +c || 0;
        Infinity === Math.abs(d) && (d = 0);
        if (d >= g) return - 1;
        for (d = Math.max(0 <= d ? d: g - Math.abs(d), 0); d < g;) {
            if (d in e && e[d] === a) return d;
            d++
        }
        return - 1
    };
    t.F = function(a) {
        var c = this,
            d, e = 0;
        if (t.pa) for (d in c = document.createElement("custom"), t.F.prototype) c[d] = t.F.prototype[d];
        a = a || [];
        c.Ua = [];
        for (Object.defineProperty(c, "length", {
            get: function() {
                return this.Ua.length
            }
        }); e < a.length; e++) P(c, a[e]);
        if (t.pa) return c
    };
    t.F.prototype = t.i.create(t.z.prototype);
    t.F.prototype.constructor = t.F;
    t.F.prototype.ab = {
        change: "change",
        addtrack: "addtrack",
        removetrack: "removetrack"
    };
    for (var za in t.F.prototype.ab) t.F.prototype["on" + za] = j;
    function P(a, c) {
        var d = a.Ua.length;
        "" + d in a || Object.defineProperty(a, d, {
            get: function() {
                return this.Ua[d]
            }
        });
        c.addEventListener("modechange", t.bind(a,
            function() {
                this.o("change")
            }));
        a.Ua.push(c);
        a.o({
            type: "addtrack",
            S: c
        })
    }
    function Q(a, c) {
        for (var d = 0,
                 e = a.length,
                 g; d < e; d++) if (g = a[d], g === c) {
            a.Ua.splice(d, 1);
            break
        }
        a.o({
            type: "removetrack",
            S: c
        })
    }
    t.F.prototype.ae = function(a) {
        for (var c = 0,
                 d = this.length,
                 e = j,
                 g; c < d; c++) if (g = this[c], g.id === a) {
            e = g;
            break
        }
        return e
    };
    t.V = function(a) {
        var c = this,
            d;
        if (t.pa) for (d in c = document.createElement("custom"), t.V.prototype) c[d] = t.V.prototype[d];
        t.V.prototype.pb.call(c, a);
        Object.defineProperty(c, "length", {
            get: n("me")
        });
        if (t.pa) return c
    };
    t.V.prototype.pb = function(a) {
        var c = this.length || 0,
            d = 0,
            e = a.length;
        this.W = a;
        this.me = a.length;
        a = function(a) {
            "" + a in this || Object.defineProperty(this, "" + a, {
                get: function() {
                    return this.W[a]
                }
            })
        };
        if (c < e) for (d = c; d < e; d++) a.call(this, d)
    };
    t.V.prototype.Zd = function(a) {
        for (var c = 0,
                 d = this.length,
                 e = j,
                 g; c < d; c++) if (g = this[c], g.id === a) {
            e = g;
            break
        }
        return e
    };
    t.sa = t.a.extend({
        l: function(a, c, d) {
            t.a.call(this, a, c, d);
            a.b("loadstart", t.bind(this, this.We));
            a.I(t.bind(this,
                function() {
                    if (a.h && a.h.featuresNativeTextTracks) this.X();
                    else {
                        var c, d, h;
                        a.b("fullscreenchange", t.bind(this, this.C));
                        d = a.q.tracks || [];
                        for (c = 0; c < d.length; c++) h = d[c],
                            this.d.ha(h)
                    }
                }))
        }
    });
    t.sa.prototype.We = function() {
        this.d.h && this.d.h.featuresNativeTextTracks ? this.X() : this.show()
    };
    t.sa.prototype.e = function() {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-text-track-display"
        })
    };
    t.sa.prototype.Md = function() {
        "function" === typeof window.WebVTT && window.WebVTT.processCues(window, [], this.c)
    };
    function W(a, c) {
        return "rgba(" + parseInt(a[1] + a[1], 16) + "," + parseInt(a[2] + a[2], 16) + "," + parseInt(a[3] + a[3], 16) + "," + c + ")"
    }
    var Aa = {
        uf: "monospace",
        Af: "sans-serif",
        Cf: "serif",
        vf: '"Andale Mono", "Lucida Console", monospace',
        wf: '"Courier New", monospace',
        yf: "sans-serif",
        zf: "serif",
        lf: '"Comic Sans MS", Impact, fantasy',
        Bf: '"Monotype Corsiva", cursive',
        Df: '"Andale Mono", "Lucida Console", monospace, sans-serif'
    };
    t.sa.prototype.C = function() {
        var a = this.d.textTracks(),
            c = 0,
            d;
        this.Md();
        if (a) for (; c < a.length; c++) d = a[c],
        "showing" === d.mode && this.$e(d)
    };
    t.sa.prototype.$e = function(a) {
        if ("function" === typeof window.WebVTT && a.activeCues) {
            for (var c = 0,
                     d = this.d.textTrackSettings.Hc(), e, g = []; c < a.activeCues.length; c++) g.push(a.activeCues[c]);
            window.WebVTT.processCues(window, a.activeCues, this.c);
            for (c = g.length; c--;) {
                a = g[c].mf;
                d.color && (a.firstChild.style.color = d.color);
                if (d.kd) try {
                    a.firstChild.style.color = W(d.color || "#fff", d.kd)
                } catch(h) {}
                d.backgroundColor && (a.firstChild.style.backgroundColor = d.backgroundColor);
                if (d.vc) try {
                    a.firstChild.style.backgroundColor = W(d.backgroundColor || "#000", d.vc)
                } catch(k) {}
                if (d.cc) if (d.rd) try {
                    a.style.backgroundColor = W(d.cc, d.rd)
                } catch(q) {} else a.style.backgroundColor = d.cc;
                d.Ma && ("dropshadow" === d.Ma ? a.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222": "raised" === d.Ma ? a.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222": "depressed" === d.Ma ? a.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222": "uniform" === d.Ma && (a.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222"));
                d.Ob && 1 !== d.Ob && (e = window.xf(a.style.fontSize), a.style.fontSize = e * d.Ob + "px", a.style.height = "auto", a.style.top = "auto", a.style.bottom = "2px");
                d.fontFamily && "default" !== d.fontFamily && ("small-caps" === d.fontFamily ? a.firstChild.style.fontVariant = "small-caps": a.firstChild.style.fontFamily = Aa[d.fontFamily])
            }
        }
    };
    t.$ = t.M.extend({
        l: function(a, c) {
            var d = this.S = c.track,
                e = a.textTracks(),
                g,
                h;
            e && (g = t.bind(this,
                function() {
                    var a = "showing" === this.S.mode,
                        c, d, g;
                    if (this instanceof t.zb) {
                        a = f;
                        d = 0;
                        for (g = e.length; d < g; d++) if (c = e[d], c.kind === this.S.kind && "showing" === c.mode) {
                            a = l;
                            break
                        }
                    }
                    this.selected(a)
                }), e.addEventListener("change", g), a.b("dispose",
                function() {
                    e.removeEventListener("change", g)
                }));
            c.label = d.label || d.language || "Unknown";
            c.selected = d["default"] || "showing" === d.mode;
            t.M.call(this, a, c);
            e && e.onchange === b && this.b(["tap", "click"],
                function() {
                    if ("object" !== typeof window.vd) try {
                        h = new window.vd("change")
                    } catch(a) {}
                    h || (h = document.createEvent("Event"), h.initEvent("change", f, f));
                    e.dispatchEvent(h)
                })
        }
    });
    t.$.prototype.u = function() {
        var a = this.S.kind,
            c = this.d.textTracks(),
            d,
            e = 0;
        t.M.prototype.u.call(this);
        if (c) for (; e < c.length; e++) d = c[e],
        d.kind === a && (d.mode = d === this.S ? "showing": "disabled")
    };
    t.zb = t.$.extend({
        l: function(a, c) {
            c.track = {
                kind: c.kind,
                player: a,
                label: c.kind + " off",
                "default": l,
                mode: "disabled"
            };
            t.$.call(this, a, c);
            this.selected(f)
        }
    });
    t.sb = t.$.extend({
        l: function(a, c) {
            c.track = {
                kind: c.kind,
                player: a,
                label: c.kind + " settings",
                "default": l,
                mode: "disabled"
            };
            t.$.call(this, a, c);
            this.p("vjs-texttrack-settings")
        }
    });
    t.sb.prototype.u = function() {
        this.k().da("textTrackSettings").show()
    };
    t.Q = t.O.extend({
        l: function(a, c) {
            var d, e;
            t.O.call(this, a, c);
            d = this.d.textTracks();
            1 >= this.H.length && this.X();
            d && (e = t.bind(this, this.update), d.addEventListener("removetrack", e), d.addEventListener("addtrack", e), this.d.b("dispose",
                function() {
                    d.removeEventListener("removetrack", e);
                    d.removeEventListener("addtrack", e)
                }))
        }
    });
    t.Q.prototype.Ka = function() {
        var a = [],
            c,
            d;
        this instanceof t.oa && (!this.k().h || !this.k().h.featuresNativeTextTracks) && a.push(new t.sb(this.d, {
            kind: this.ea
        }));
        a.push(new t.zb(this.d, {
            kind: this.ea
        }));
        d = this.d.textTracks();
        if (!d) return a;
        for (var e = 0; e < d.length; e++) c = d[e],
        c.kind === this.ea && a.push(new t.$(this.d, {
            track: c
        }));
        return a
    };
    t.oa = t.Q.extend({
        l: function(a, c, d) {
            t.Q.call(this, a, c, d);
            this.c.setAttribute("aria-label", "Captions Menu")
        }
    });
    t.oa.prototype.ea = "captions";
    t.oa.prototype.ta = "Captions";
    t.oa.prototype.className = "vjs-captions-button";
    t.oa.prototype.update = function() {
        var a = 2;
        t.Q.prototype.update.call(this);
        this.k().h && this.k().h.featuresNativeTextTracks && (a = 1);
        this.H && this.H.length > a ? this.show() : this.X()
    };
    t.$a = t.Q.extend({
        l: function(a, c, d) {
            t.Q.call(this, a, c, d);
            this.c.setAttribute("aria-label", "Subtitles Menu")
        }
    });
    t.$a.prototype.ea = "subtitles";
    t.$a.prototype.ta = "Subtitles";
    t.$a.prototype.className = "vjs-subtitles-button";
    t.Wa = t.Q.extend({
        l: function(a, c, d) {
            t.Q.call(this, a, c, d);
            this.c.setAttribute("aria-label", "Chapters Menu")
        }
    });
    s = t.Wa.prototype;
    s.ea = "chapters";
    s.ta = "Chapters";
    s.className = "vjs-chapters-button";
    s.Ka = function() {
        var a = [],
            c,
            d;
        d = this.d.textTracks();
        if (!d) return a;
        for (var e = 0; e < d.length; e++) c = d[e],
        c.kind === this.ea && a.push(new t.$(this.d, {
            track: c
        }));
        return a
    };
    s.La = function() {
        for (var a = this.d.textTracks() || [], c = 0, d = a.length, e, g, h = this.H = []; c < d; c++) if (e = a[c], e.kind == this.ea) if (e.Ac) {
            g = e;
            break
        } else e.mode = "hidden",
            window.setTimeout(t.bind(this,
                function() {
                    this.La()
                }), 100);
        a = this.za;
        a === b && (a = new t.qa(this.d), a.wa().appendChild(t.e("li", {
            className: "vjs-menu-title",
            innerHTML: t.va(this.ea),
            Te: -1
        })));
        if (g) {
            e = g.cues;
            for (var k, c = 0,
                     d = e.length; c < d; c++) k = e[c],
                k = new t.Xa(this.d, {
                    track: g,
                    cue: k
                }),
                h.push(k),
                a.aa(k);
            this.aa(a)
        }
        0 < this.H.length && this.show();
        return a
    };
    t.Xa = t.M.extend({
        l: function(a, c) {
            var d = this.S = c.track,
                e = this.cue = c.cue,
                g = a.currentTime();
            c.label = e.text;
            c.selected = e.startTime <= g && g < e.endTime;
            t.M.call(this, a, c);
            d.addEventListener("cuechange", t.bind(this, this.update))
        }
    });
    t.Xa.prototype.u = function() {
        t.M.prototype.u.call(this);
        this.d.currentTime(this.cue.startTime);
        this.update(this.cue.startTime)
    };
    t.Xa.prototype.update = function() {
        var a = this.cue,
            c = this.d.currentTime();
        this.selected(a.startTime <= c && c < a.endTime)
    };
    function X(a) {
        var c;
        a.He ? c = a.He[0] : a.options && (c = a.options[a.options.selectedIndex]);
        return c.value
    }
    function Y(a, c) {
        var d, e;
        if (c) {
            for (d = 0; d < a.options.length && !(e = a.options[d], e.value === c); d++);
            a.selectedIndex = d
        }
    }
    t.pc = t.a.extend({
        l: function(a, c) {
            t.a.call(this, a, c);
            this.X();
            t.b(this.m().querySelector(".vjs-done-button"), "click", t.bind(this,
                function() {
                    this.Ge();
                    this.X()
                }));
            t.b(this.m().querySelector(".vjs-default-button"), "click", t.bind(this,
                function() {
                    this.m().querySelector(".vjs-fg-color > select").selectedIndex = 0;
                    this.m().querySelector(".vjs-bg-color > select").selectedIndex = 0;
                    this.m().querySelector(".window-color > select").selectedIndex = 0;
                    this.m().querySelector(".vjs-text-opacity > select").selectedIndex = 0;
                    this.m().querySelector(".vjs-bg-opacity > select").selectedIndex = 0;
                    this.m().querySelector(".vjs-window-opacity > select").selectedIndex = 0;
                    this.m().querySelector(".vjs-edge-style select").selectedIndex = 0;
                    this.m().querySelector(".vjs-font-family select").selectedIndex = 0;
                    this.m().querySelector(".vjs-font-percent select").selectedIndex = 2;
                    this.C()
                }));
            t.b(this.m().querySelector(".vjs-fg-color > select"), "change", t.bind(this, this.C));
            t.b(this.m().querySelector(".vjs-bg-color > select"), "change", t.bind(this, this.C));
            t.b(this.m().querySelector(".window-color > select"), "change", t.bind(this, this.C));
            t.b(this.m().querySelector(".vjs-text-opacity > select"), "change", t.bind(this, this.C));
            t.b(this.m().querySelector(".vjs-bg-opacity > select"), "change", t.bind(this, this.C));
            t.b(this.m().querySelector(".vjs-window-opacity > select"), "change", t.bind(this, this.C));
            t.b(this.m().querySelector(".vjs-font-percent select"), "change", t.bind(this, this.C));
            t.b(this.m().querySelector(".vjs-edge-style select"), "change", t.bind(this, this.C));
            t.b(this.m().querySelector(".vjs-font-family select"), "change", t.bind(this, this.C));
            a.options().persistTextTrackSettings && this.Fe()
        }
    });
    s = t.pc.prototype;
    s.e = function() {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-caption-settings vjs-modal-overlay",
            innerHTML: '<div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><div class="vjs-fg-color vjs-tracksetting"><label class="vjs-label">Foreground</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Opaque</option></select></span></div><div class="vjs-bg-color vjs-tracksetting"><label class="vjs-label">Background</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div><div class="window-color vjs-tracksetting"><label class="vjs-label">Window</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label">Font Size</label><select><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00" selected>100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label">Text Edge Style</label><select><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label">Font Family</label><select><option value="">Default</option><option value="monospaceSerif">Monospace Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div>'
        })
    };
    s.Hc = function() {
        var a, c, d, e, g, h, k, q, r, u;
        a = this.m();
        g = X(a.querySelector(".vjs-edge-style select"));
        h = X(a.querySelector(".vjs-font-family select"));
        k = X(a.querySelector(".vjs-fg-color > select"));
        d = X(a.querySelector(".vjs-text-opacity > select"));
        q = X(a.querySelector(".vjs-bg-color > select"));
        c = X(a.querySelector(".vjs-bg-opacity > select"));
        r = X(a.querySelector(".window-color > select"));
        e = X(a.querySelector(".vjs-window-opacity > select"));
        a = window.parseFloat(X(a.querySelector(".vjs-font-percent > select")));
        c = {
            backgroundOpacity: c,
            textOpacity: d,
            windowOpacity: e,
            edgeStyle: g,
            fontFamily: h,
            color: k,
            backgroundColor: q,
            windowColor: r,
            fontPercent: a
        };
        for (u in c)("" === c[u] || "none" === c[u] || "fontPercent" === u && 1 === c[u]) && delete c[u];
        return c
    };
    s.Oe = function(a) {
        var c = this.m();
        Y(c.querySelector(".vjs-edge-style select"), a.Ma);
        Y(c.querySelector(".vjs-font-family select"), a.fontFamily);
        Y(c.querySelector(".vjs-fg-color > select"), a.color);
        Y(c.querySelector(".vjs-text-opacity > select"), a.kd);
        Y(c.querySelector(".vjs-bg-color > select"), a.backgroundColor);
        Y(c.querySelector(".vjs-bg-opacity > select"), a.vc);
        Y(c.querySelector(".window-color > select"), a.cc);
        Y(c.querySelector(".vjs-window-opacity > select"), a.rd); (a = a.Ob) && (a = a.toFixed(2));
        Y(c.querySelector(".vjs-font-percent > select"), a)
    };
    s.Fe = function() {
        var a;
        try {
            a = JSON.parse(window.localStorage.getItem("vjs-text-track-settings"))
        } catch(c) {}
        a && this.Oe(a)
    };
    s.Ge = function() {
        var a;
        if (this.d.options().persistTextTrackSettings) {
            a = this.Hc();
            try {
                t.hb(a) ? window.localStorage.removeItem("vjs-text-track-settings") : window.localStorage.setItem("vjs-text-track-settings", JSON.stringify(a))
            } catch(c) {}
        }
    };
    s.C = function() {
        var a = this.d.da("textTrackDisplay");
        a && a.C()
    };
    if ("undefined" !== typeof window.JSON && "function" === typeof window.JSON.parse) t.JSON = window.JSON;
    else {
        t.JSON = {};
        var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        t.JSON.parse = function(a, c) {
            function d(a, e) {
                var k, q, r = a[e];
                if (r && "object" === typeof r) for (k in r) Object.prototype.hasOwnProperty.call(r, k) && (q = d(r, k), q !== b ? r[k] = q: delete r[k]);
                return c.call(a, e, r)
            }
            var e;
            a = String(a);
            Z.lastIndex = 0;
            Z.test(a) && (a = a.replace(Z,
                function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
                }));
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"),
                "function" === typeof c ? d({
                        "": e
                    },
                    "") : e;
            throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");
        }
    }
    t.uc = function() {
        var a, c, d, e;
        a = document.getElementsByTagName("video");
        c = document.getElementsByTagName("audio");
        var g = [];
        if (a && 0 < a.length) {
            d = 0;
            for (e = a.length; d < e; d++) g.push(a[d])
        }
        if (c && 0 < c.length) {
            d = 0;
            for (e = c.length; d < e; d++) g.push(c[d])
        }
        if (g && 0 < g.length) {
            d = 0;
            for (e = g.length; d < e; d++) if ((c = g[d]) && c.getAttribute) c.player === b && (a = c.getAttribute("data-setup"), a !== j && videojs(c));
            else {
                t.Hb();
                break
            }
        } else t.qd || t.Hb()
    };
    t.Hb = function() {
        setTimeout(t.uc, 1)
    };
    "complete" === document.readyState ? t.qd = f: t.N(window, "load",
        function() {
            t.qd = f
        });
    t.Hb();
    t.Ce = function(a, c) {
        t.Player.prototype[a] = c
    };
    var Ba = this;
    function $(a, c) {
        var d = a.split("."),
            e = Ba; ! (d[0] in e) && e.execScript && e.execScript("var " + d[0]);
        for (var g; d.length && (g = d.shift());) ! d.length && c !== b ? e[g] = c: e = e[g] ? e[g] : e[g] = {}
    };
    $("videojs", t);
    $("_V_", t);
    $("videojs.options", t.options);
    $("videojs.players", t.Ca);
    $("videojs.TOUCH_ENABLED", t.Db);
    $("videojs.cache", t.ua);
    $("videojs.Component", t.a);
    t.a.prototype.player = t.a.prototype.k;
    t.a.prototype.options = t.a.prototype.options;
    t.a.prototype.init = t.a.prototype.l;
    t.a.prototype.dispose = t.a.prototype.dispose;
    t.a.prototype.createEl = t.a.prototype.e;
    t.a.prototype.contentEl = t.a.prototype.wa;
    t.a.prototype.el = t.a.prototype.m;
    t.a.prototype.addChild = t.a.prototype.aa;
    t.a.prototype.getChild = t.a.prototype.da;
    t.a.prototype.getChildById = t.a.prototype.Yd;
    t.a.prototype.children = t.a.prototype.children;
    t.a.prototype.initChildren = t.a.prototype.Kc;
    t.a.prototype.removeChild = t.a.prototype.removeChild;
    t.a.prototype.on = t.a.prototype.b;
    t.a.prototype.off = t.a.prototype.n;
    t.a.prototype.one = t.a.prototype.N;
    t.a.prototype.trigger = t.a.prototype.o;
    t.a.prototype.triggerReady = t.a.prototype.Va;
    t.a.prototype.show = t.a.prototype.show;
    t.a.prototype.hide = t.a.prototype.X;
    t.a.prototype.width = t.a.prototype.width;
    t.a.prototype.height = t.a.prototype.height;
    t.a.prototype.dimensions = t.a.prototype.Qd;
    t.a.prototype.ready = t.a.prototype.I;
    t.a.prototype.addClass = t.a.prototype.p;
    t.a.prototype.removeClass = t.a.prototype.r;
    t.a.prototype.hasClass = t.a.prototype.Pa;
    t.a.prototype.buildCSSClass = t.a.prototype.U;
    t.a.prototype.localize = t.a.prototype.v;
    t.a.prototype.setInterval = t.a.prototype.setInterval;
    t.a.prototype.setTimeout = t.a.prototype.setTimeout;
    $("videojs.EventEmitter", t.z);
    t.z.prototype.on = t.z.prototype.b;
    t.z.prototype.addEventListener = t.z.prototype.addEventListener;
    t.z.prototype.off = t.z.prototype.n;
    t.z.prototype.removeEventListener = t.z.prototype.removeEventListener;
    t.z.prototype.one = t.z.prototype.N;
    t.z.prototype.trigger = t.z.prototype.o;
    t.z.prototype.dispatchEvent = t.z.prototype.dispatchEvent;
    t.Player.prototype.ended = t.Player.prototype.ended;
    t.Player.prototype.enterFullWindow = t.Player.prototype.Fc;
    t.Player.prototype.exitFullWindow = t.Player.prototype.Lb;
    t.Player.prototype.preload = t.Player.prototype.Ra;
    t.Player.prototype.remainingTime = t.Player.prototype.remainingTime;
    t.Player.prototype.supportsFullScreen = t.Player.prototype.Sa;
    t.Player.prototype.currentType = t.Player.prototype.Nd;
    t.Player.prototype.requestFullScreen = t.Player.prototype.requestFullScreen;
    t.Player.prototype.requestFullscreen = t.Player.prototype.requestFullscreen;
    t.Player.prototype.cancelFullScreen = t.Player.prototype.cancelFullScreen;
    t.Player.prototype.exitFullscreen = t.Player.prototype.exitFullscreen;
    t.Player.prototype.isFullScreen = t.Player.prototype.isFullScreen;
    t.Player.prototype.isFullscreen = t.Player.prototype.isFullscreen;
    t.Player.prototype.textTracks = t.Player.prototype.textTracks;
    t.Player.prototype.remoteTextTracks = t.Player.prototype.Y;
    t.Player.prototype.addTextTrack = t.Player.prototype.addTextTrack;
    t.Player.prototype.addRemoteTextTrack = t.Player.prototype.ha;
    t.Player.prototype.removeRemoteTextTrack = t.Player.prototype.Da;
    t.Player.prototype.seekable = t.Player.prototype.seekable;
    $("videojs.MediaLoader", t.Cd);
    $("videojs.TextTrackDisplay", t.sa);
    $("videojs.ControlBar", t.tb);
    $("videojs.Button", t.w);
    $("videojs.PlayToggle", t.kc);
    $("videojs.FullscreenToggle", t.Ya);
    $("videojs.BigPlayButton", t.rb);
    $("videojs.LoadingSpinner", t.ic);
    $("videojs.CurrentTimeDisplay", t.ub);
    $("videojs.DurationDisplay", t.vb);
    $("videojs.TimeDivider", t.qc);
    $("videojs.RemainingTimeDisplay", t.Cb);
    $("videojs.LiveDisplay", t.hc);
    $("videojs.ErrorDisplay", t.wb);
    $("videojs.Slider", t.T);
    $("videojs.ProgressControl", t.Bb);
    $("videojs.SeekBar", t.nc);
    $("videojs.LoadProgressBar", t.yb);
    $("videojs.PlayProgressBar", t.jc);
    $("videojs.SeekHandle", t.Za);
    $("videojs.VolumeControl", t.Fb);
    $("videojs.VolumeBar", t.Eb);
    $("videojs.VolumeLevel", t.rc);
    $("videojs.VolumeMenuButton", t.Ha);
    $("videojs.VolumeHandle", t.Gb);
    $("videojs.MuteToggle", t.ra);
    $("videojs.PosterImage", t.mc);
    $("videojs.Menu", t.qa);
    $("videojs.MenuItem", t.M);
    $("videojs.MenuButton", t.O);
    $("videojs.PlaybackRateMenuButton", t.lc);
    $("videojs.ChaptersTrackMenuItem", t.Xa);
    $("videojs.TextTrackButton", t.Q);
    $("videojs.TextTrackMenuItem", t.$);
    $("videojs.OffTextTrackMenuItem", t.zb);
    $("videojs.CaptionSettingsMenuItem", t.sb);
    t.O.prototype.createItems = t.O.prototype.Ka;
    t.Q.prototype.createItems = t.Q.prototype.Ka;
    t.Wa.prototype.createItems = t.Wa.prototype.Ka;
    $("videojs.SubtitlesButton", t.$a);
    $("videojs.CaptionsButton", t.oa);
    $("videojs.ChaptersButton", t.Wa);
    $("videojs.MediaTechController", t.j);
    t.j.withSourceHandlers = t.j.dc;
    t.j.prototype.featuresVolumeControl = t.j.prototype.rf;
    t.j.prototype.featuresFullscreenResize = t.j.prototype.nf;
    t.j.prototype.featuresPlaybackRate = t.j.prototype.of;
    t.j.prototype.featuresProgressEvents = t.j.prototype.pf;
    t.j.prototype.featuresTimeupdateEvents = t.j.prototype.qf;
    t.j.prototype.setPoster = t.j.prototype.bd;
    t.j.prototype.textTracks = t.j.prototype.textTracks;
    t.j.prototype.remoteTextTracks = t.j.prototype.Y;
    t.j.prototype.addTextTrack = t.j.prototype.addTextTrack;
    t.j.prototype.addRemoteTextTrack = t.j.prototype.ha;
    t.j.prototype.removeRemoteTextTrack = t.j.prototype.Da;
    $("videojs.Html5", t.f);
    t.f.Events = t.f.xb;
    t.f.isSupported = t.f.isSupported;
    t.f.canPlaySource = t.f.wc;
    t.f.patchCanPlayType = t.f.Tc;
    t.f.unpatchCanPlayType = t.f.Ze;
    t.f.prototype.setCurrentTime = t.f.prototype.Zb;
    t.f.prototype.setVolume = t.f.prototype.Pe;
    t.f.prototype.setMuted = t.f.prototype.Le;
    t.f.prototype.setPreload = t.f.prototype.Ne;
    t.f.prototype.setAutoplay = t.f.prototype.Ie;
    t.f.prototype.setLoop = t.f.prototype.Ke;
    t.f.prototype.enterFullScreen = t.f.prototype.Ec;
    t.f.prototype.exitFullScreen = t.f.prototype.Ud;
    t.f.prototype.playbackRate = t.f.prototype.playbackRate;
    t.f.prototype.setPlaybackRate = t.f.prototype.Me;
    t.f.selectSourceHandler = t.f.ob;
    t.f.prototype.setSource = t.f.prototype.ma;
    t.f.prototype.disposeSourceHandler = t.f.prototype.ia;
    t.f.prototype.textTracks = t.f.prototype.textTracks;
    t.f.prototype.remoteTextTracks = t.f.prototype.Y;
    t.f.prototype.addTextTrack = t.f.prototype.addTextTrack;
    t.f.prototype.addRemoteTextTrack = t.f.prototype.ha;
    t.f.prototype.removeRemoteTextTrack = t.f.prototype.Da;
    $("videojs.Flash", t.g);
    t.g.isSupported = t.g.isSupported;
    t.g.canPlaySource = t.g.wc;
    t.g.onReady = t.g.onReady;
    t.g.embed = t.g.Dc;
    t.g.version = t.g.version;
    t.g.prototype.setSource = t.g.prototype.ma;
    t.g.selectSourceHandler = t.g.ob;
    t.g.prototype.setSource = t.g.prototype.ma;
    t.g.prototype.disposeSourceHandler = t.g.prototype.ia;
    $("videojs.TextTrack", t.t);
    $("videojs.TextTrackList", t.F);
    $("videojs.TextTrackCueList", t.V);
    $("videojs.TextTrackSettings", t.pc);
    t.t.prototype.id = t.t.prototype.id;
    t.t.prototype.label = t.t.prototype.label;
    t.t.prototype.kind = t.t.prototype.Tb;
    t.t.prototype.mode = t.t.prototype.mode;
    t.t.prototype.cues = t.t.prototype.Ac;
    t.t.prototype.activeCues = t.t.prototype.kf;
    t.t.prototype.addCue = t.t.prototype.sc;
    t.t.prototype.removeCue = t.t.prototype.Yc;
    t.F.prototype.getTrackById = t.F.prototype.ae;
    t.V.prototype.getCueById = t.F.prototype.Zd;
    $("videojs.CaptionsTrack", t.df);
    $("videojs.SubtitlesTrack", t.jf);
    $("videojs.ChaptersTrack", t.ef);
    $("videojs.autoSetup", t.uc);
    $("videojs.plugin", t.Ce);
    $("videojs.createTimeRange", t.xa);
    $("videojs.util", t.Z);
    t.Z.mergeOptions = t.Z.Aa;
    t.addLanguage = t.Gd;
})();

/* vtt.js - v0.12.1 (https://github.com/mozilla/vtt.js) built on 08-07-2015 */
!
    function(a) {
        var b = a.vttjs = {},
            c = b.VTTCue,
            d = b.VTTRegion,
            e = a.VTTCue,
            f = a.VTTRegion;
        b.shim = function() {
            b.VTTCue = c,
                b.VTTRegion = d
        },
            b.restore = function() {
                b.VTTCue = e,
                    b.VTTRegion = f
            }
    } (this),
    function(a, b) {
        function c(a) {
            if ("string" != typeof a) return ! 1;
            var b = h[a.toLowerCase()];
            return b ? a.toLowerCase() : !1
        }
        function d(a) {
            if ("string" != typeof a) return ! 1;
            var b = i[a.toLowerCase()];
            return b ? a.toLowerCase() : !1
        }
        function e(a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = arguments[b];
                for (var d in c) a[d] = c[d]
            }
            return a
        }
        function f(a, b, f) {
            var h = this,
                i = /MSIE\s8\.0/.test(navigator.userAgent),
                j = {};
            i ? h = document.createElement("custom") : j.enumerable = !0,
                h.hasBeenReset = !1;
            var k = "",
                l = !1,
                m = a,
                n = b,
                o = f,
                p = null,
                q = "",
                r = !0,
                s = "auto",
                t = "start",
                u = 50,
                v = "middle",
                w = 50,
                x = "middle";
            return Object.defineProperty(h, "id", e({},
                j, {
                    get: function() {
                        return k
                    },
                    set: function(a) {
                        k = "" + a
                    }
                })),
                Object.defineProperty(h, "pauseOnExit", e({},
                    j, {
                        get: function() {
                            return l
                        },
                        set: function(a) {
                            l = !!a
                        }
                    })),
                Object.defineProperty(h, "startTime", e({},
                    j, {
                        get: function() {
                            return m
                        },
                        set: function(a) {
                            if ("number" != typeof a) throw new TypeError("Start time must be set to a number.");
                            m = a,
                                this.hasBeenReset = !0
                        }
                    })),
                Object.defineProperty(h, "endTime", e({},
                    j, {
                        get: function() {
                            return n
                        },
                        set: function(a) {
                            if ("number" != typeof a) throw new TypeError("End time must be set to a number.");
                            n = a,
                                this.hasBeenReset = !0
                        }
                    })),
                Object.defineProperty(h, "text", e({},
                    j, {
                        get: function() {
                            return o
                        },
                        set: function(a) {
                            o = "" + a,
                                this.hasBeenReset = !0
                        }
                    })),
                Object.defineProperty(h, "region", e({},
                    j, {
                        get: function() {
                            return p
                        },
                        set: function(a) {
                            p = a,
                                this.hasBeenReset = !0
                        }
                    })),
                Object.defineProperty(h, "vertical", e({},
                    j, {
                        get: function() {
                            return q
                        },
                        set: function(a) {
                            var b = c(a);
                            if (b === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                            q = b,
                                this.hasBeenReset = !0
                        }
                    })),
                Object.defineProperty(h, "snapToLines", e({},
                    j, {
                        get: function() {
                            return r
                        },
                        set: function(a) {
                            r = !!a,
                                this.hasBeenReset = !0
                        }
                    })),
                Object.defineProperty(h, "line", e({},
                    j, {
                        get: function() {
                            return s
                        },
                        set: function(a) {
                            if ("number" != typeof a && a !== g) throw new SyntaxError("An invalid number or illegal string was specified.");
                            s = a,
                                this.hasBeenReset = !0
                        }
                    })),
                Object.defineProperty(h, "lineAlign", e({},
                    j, {
                        get: function() {
                            return t
                        },
                        set: function(a) {
                            var b = d(a);
                            if (!b) throw new SyntaxError("An invalid or illegal string was specified.");
                            t = b,
                                this.hasBeenReset = !0
                        }
                    })),
                Object.defineProperty(h, "position", e({},
                    j, {
                        get: function() {
                            return u
                        },
                        set: function(a) {
                            if (0 > a || a > 100) throw new Error("Position must be between 0 and 100.");
                            u = a,
                                this.hasBeenReset = !0
                        }
                    })),
                Object.defineProperty(h, "positionAlign", e({},
                    j, {
                        get: function() {
                            return v
                        },
                        set: function(a) {
                            var b = d(a);
                            if (!b) throw new SyntaxError("An invalid or illegal string was specified.");
                            v = b,
                                this.hasBeenReset = !0
                        }
                    })),
                Object.defineProperty(h, "size", e({},
                    j, {
                        get: function() {
                            return w
                        },
                        set: function(a) {
                            if (0 > a || a > 100) throw new Error("Size must be between 0 and 100.");
                            w = a,
                                this.hasBeenReset = !0
                        }
                    })),
                Object.defineProperty(h, "align", e({},
                    j, {
                        get: function() {
                            return x
                        },
                        set: function(a) {
                            var b = d(a);
                            if (!b) throw new SyntaxError("An invalid or illegal string was specified.");
                            x = b,
                                this.hasBeenReset = !0
                        }
                    })),
                h.displayState = void 0,
                i ? h: void 0
        }
        var g = "auto",
            h = {
                "": !0,
                lr: !0,
                rl: !0
            },
            i = {
                start: !0,
                middle: !0,
                end: !0,
                left: !0,
                right: !0
            };
        f.prototype.getCueAsHTML = function() {
            return WebVTT.convertCueToDOMTree(window, this.text)
        },
            a.VTTCue = a.VTTCue || f,
            b.VTTCue = f
    } (this, this.vttjs || {}),
    function(a, b) {
        function c(a) {
            if ("string" != typeof a) return ! 1;
            var b = f[a.toLowerCase()];
            return b ? a.toLowerCase() : !1
        }
        function d(a) {
            return "number" == typeof a && a >= 0 && 100 >= a
        }
        function e() {
            var a = 100,
                b = 3,
                e = 0,
                f = 100,
                g = 0,
                h = 100,
                i = "";
            Object.defineProperties(this, {
                width: {
                    enumerable: !0,
                    get: function() {
                        return a
                    },
                    set: function(b) {
                        if (!d(b)) throw new Error("Width must be between 0 and 100.");
                        a = b
                    }
                },
                lines: {
                    enumerable: !0,
                    get: function() {
                        return b
                    },
                    set: function(a) {
                        if ("number" != typeof a) throw new TypeError("Lines must be set to a number.");
                        b = a
                    }
                },
                regionAnchorY: {
                    enumerable: !0,
                    get: function() {
                        return f
                    },
                    set: function(a) {
                        if (!d(a)) throw new Error("RegionAnchorX must be between 0 and 100.");
                        f = a
                    }
                },
                regionAnchorX: {
                    enumerable: !0,
                    get: function() {
                        return e
                    },
                    set: function(a) {
                        if (!d(a)) throw new Error("RegionAnchorY must be between 0 and 100.");
                        e = a
                    }
                },
                viewportAnchorY: {
                    enumerable: !0,
                    get: function() {
                        return h
                    },
                    set: function(a) {
                        if (!d(a)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                        h = a
                    }
                },
                viewportAnchorX: {
                    enumerable: !0,
                    get: function() {
                        return g
                    },
                    set: function(a) {
                        if (!d(a)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                        g = a
                    }
                },
                scroll: {
                    enumerable: !0,
                    get: function() {
                        return i
                    },
                    set: function(a) {
                        var b = c(a);
                        if (b === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                        i = b
                    }
                }
            })
        }
        var f = {
            "": !0,
            up: !0
        };
        a.VTTRegion = a.VTTRegion || e,
            b.VTTRegion = e
    } (this, this.vttjs || {}),
    function(a) {
        function b(a, b) {
            this.name = "ParsingError",
                this.code = a.code,
                this.message = b || a.message
        }
        function c(a) {
            function b(a, b, c, d) {
                return 3600 * (0 | a) + 60 * (0 | b) + (0 | c) + (0 | d) / 1e3
            }
            var c = a.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
            return c ? c[3] ? b(c[1], c[2], c[3].replace(":", ""), c[4]) : c[1] > 59 ? b(c[1], c[2], 0, c[4]) : b(0, c[1], c[2], c[4]) : null
        }
        function d() {
            this.values = o(null)
        }
        function e(a, b, c, d) {
            var e = d ? a.split(d) : [a];
            for (var f in e) if ("string" == typeof e[f]) {
                var g = e[f].split(c);
                if (2 === g.length) {
                    var h = g[0],
                        i = g[1];
                    b(h, i)
                }
            }
        }
        function f(a, f, g) {
            function h() {
                var d = c(a);
                if (null === d) throw new b(b.Errors.BadTimeStamp, "Malformed timestamp: " + k);
                return a = a.replace(/^[^\sa-zA-Z-]+/, ""),
                    d
            }
            function i(a, b) {
                var c = new d;
                e(a,
                    function(a, b) {
                        switch (a) {
                            case "region":
                                for (var d = g.length - 1; d >= 0; d--) if (g[d].id === b) {
                                    c.set(a, g[d].region);
                                    break
                                }
                                break;
                            case "vertical":
                                c.alt(a, b, ["rl", "lr"]);
                                break;
                            case "line":
                                var e = b.split(","),
                                    f = e[0];
                                c.integer(a, f),
                                    c.percent(a, f) ? c.set("snapToLines", !1) : null,
                                    c.alt(a, f, ["auto"]),
                                2 === e.length && c.alt("lineAlign", e[1], ["start", "middle", "end"]);
                                break;
                            case "position":
                                e = b.split(","),
                                    c.percent(a, e[0]),
                                2 === e.length && c.alt("positionAlign", e[1], ["start", "middle", "end"]);
                                break;
                            case "size":
                                c.percent(a, b);
                                break;
                            case "align":
                                c.alt(a, b, ["start", "middle", "end", "left", "right"])
                        }
                    },
                    /:/, /\s/),
                    b.region = c.get("region", null),
                    b.vertical = c.get("vertical", ""),
                    b.line = c.get("line", "auto"),
                    b.lineAlign = c.get("lineAlign", "start"),
                    b.snapToLines = c.get("snapToLines", !0),
                    b.size = c.get("size", 100),
                    b.align = c.get("align", "middle"),
                    b.position = c.get("position", {
                            start: 0,
                            left: 0,
                            middle: 50,
                            end: 100,
                            right: 100
                        },
                        b.align),
                    b.positionAlign = c.get("positionAlign", {
                            start: "start",
                            left: "start",
                            middle: "middle",
                            end: "end",
                            right: "end"
                        },
                        b.align)
            }
            function j() {
                a = a.replace(/^\s+/, "")
            }
            var k = a;
            if (j(), f.startTime = h(), j(), "-->" !== a.substr(0, 3)) throw new b(b.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + k);
            a = a.substr(3),
                j(),
                f.endTime = h(),
                j(),
                i(a, f)
        }
        function g(a, b) {
            function d() {
                function a(a) {
                    return b = b.substr(a.length),
                        a
                }
                if (!b) return null;
                var c = b.match(/^([^<]*)(<[^>]+>?)?/);
                return a(c[1] ? c[1] : c[2])
            }
            function e(a) {
                return p[a]
            }
            function f(a) {
                for (; o = a.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) a = a.replace(o[0], e);
                return a
            }
            function g(a, b) {
                return ! s[b.localName] || s[b.localName] === a.localName
            }
            function h(b, c) {
                var d = q[b];
                if (!d) return null;
                var e = a.document.createElement(d);
                e.localName = d;
                var f = r[b];
                return f && c && (e[f] = c.trim()),
                    e
            }
            for (var i, j = a.document.createElement("div"), k = j, l = []; null !== (i = d());) if ("<" !== i[0]) k.appendChild(a.document.createTextNode(f(i)));
            else {
                if ("/" === i[1]) {
                    l.length && l[l.length - 1] === i.substr(2).replace(">", "") && (l.pop(), k = k.parentNode);
                    continue
                }
                var m, n = c(i.substr(1, i.length - 2));
                if (n) {
                    m = a.document.createProcessingInstruction("timestamp", n),
                        k.appendChild(m);
                    continue
                }
                var o = i.match(/^<([^.\s/0 - 9 > ] + )(\. [ ^ \s\\ > ] + ) ? ([ ^ >\\] + ) ? (\\ ? ) > ?$ / );
                if (!o) continue;
                if (m = h(o[1], o[3]), !m) continue;
                if (!g(k, m)) continue;
                o[2] && (m.className = o[2].substr(1).replace(".", " ")),
                    l.push(o[1]),
                    k.appendChild(m),
                    k = m
            }
            return j
        }
        function h(a) {
            function b(a, b) {
                for (var c = b.childNodes.length - 1; c >= 0; c--) a.push(b.childNodes[c])
            }
            function c(a) {
                if (!a || !a.length) return null;
                var d = a.pop(),
                    e = d.textContent || d.innerText;
                if (e) {
                    var f = e.match(/^.*(\n|\r)/);
                    return f ? (a.length = 0, f[0]) : e
                }
                return "ruby" === d.tagName ? c(a) : d.childNodes ? (b(a, d), c(a)) : void 0
            }
            var d, e = [],
                f = "";
            if (!a || !a.childNodes) return "ltr";
            for (b(e, a); f = c(e);) for (var g = 0; g < f.length; g++) {
                d = f.charCodeAt(g);
                for (var h = 0; h < t.length; h++) if (t[h] === d) return "rtl"
            }
            return "ltr"
        }
        function i(a) {
            if ("number" == typeof a.line && (a.snapToLines || a.line >= 0 && a.line <= 100)) return a.line;
            if (!a.track || !a.track.textTrackList || !a.track.textTrackList.mediaElement) return - 1;
            for (var b = a.track,
                     c = b.textTrackList,
                     d = 0,
                     e = 0; e < c.length && c[e] !== b; e++)"showing" === c[e].mode && d++;
            return - 1 * ++d
        }
        function j() {}
        function k(a, b, c) {
            var d = /MSIE\s8\.0/.test(navigator.userAgent),
                e = "rgba(255, 255, 255, 1)",
                f = "rgba(0, 0, 0, 0.8)";
            d && (e = "rgb(255, 255, 255)", f = "rgb(0, 0, 0)"),
                j.call(this),
                this.cue = b,
                this.cueDiv = g(a, b.text);
            var i = {
                color: e,
                backgroundColor: f,
                position: "relative",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "inline"
            };
            d || (i.writingMode = "" === b.vertical ? "horizontal-tb": "lr" === b.vertical ? "vertical-lr": "vertical-rl", i.unicodeBidi = "plaintext"),
                this.applyStyles(i, this.cueDiv),
                this.div = a.document.createElement("div"),
                i = {
                    textAlign: "middle" === b.align ? "center": b.align,
                    font: c.font,
                    whiteSpace: "pre-line",
                    position: "absolute"
                },
            d || (i.direction = h(this.cueDiv), i.writingMode = "" === b.vertical ? "horizontal-tb": "lr" === b.vertical ? "vertical-lr": "vertical-rl".stylesunicodeBidi = "plaintext"),
                this.applyStyles(i),
                this.div.appendChild(this.cueDiv);
            var k = 0;
            switch (b.positionAlign) {
                case "start":
                    k = b.position;
                    break;
                case "middle":
                    k = b.position - b.size / 2;
                    break;
                case "end":
                    k = b.position - b.size
            }
            this.applyStyles("" === b.vertical ? {
                left: this.formatStyle(k, "%"),
                width: this.formatStyle(b.size, "%")
            }: {
                top: this.formatStyle(k, "%"),
                height: this.formatStyle(b.size, "%")
            }),
                this.move = function(a) {
                    this.applyStyles({
                        top: this.formatStyle(a.top, "px"),
                        bottom: this.formatStyle(a.bottom, "px"),
                        left: this.formatStyle(a.left, "px"),
                        right: this.formatStyle(a.right, "px"),
                        height: this.formatStyle(a.height, "px"),
                        width: this.formatStyle(a.width, "px")
                    })
                }
        }
        function l(a) {
            var b, c, d, e, f = /MSIE\s8\.0/.test(navigator.userAgent);
            if (a.div) {
                c = a.div.offsetHeight,
                    d = a.div.offsetWidth,
                    e = a.div.offsetTop;
                var g = (g = a.div.childNodes) && (g = g[0]) && g.getClientRects && g.getClientRects();
                a = a.div.getBoundingClientRect(),
                    b = g ? Math.max(g[0] && g[0].height || 0, a.height / g.length) : 0
            }
            this.left = a.left,
                this.right = a.right,
                this.top = a.top || e,
                this.height = a.height || c,
                this.bottom = a.bottom || e + (a.height || c),
                this.width = a.width || d,
                this.lineHeight = void 0 !== b ? b: a.lineHeight,
            f && !this.lineHeight && (this.lineHeight = 13)
        }
        function m(a, b, c, d) {
            function e(a, b) {
                for (var e, f = new l(a), g = 1, h = 0; h < b.length; h++) {
                    for (; a.overlapsOppositeAxis(c, b[h]) || a.within(c) && a.overlapsAny(d);) a.move(b[h]);
                    if (a.within(c)) return a;
                    var i = a.intersectPercentage(c);
                    g > i && (e = new l(a), g = i),
                        a = new l(f)
                }
                return e || f
            }
            var f = new l(b),
                g = b.cue,
                h = i(g),
                j = [];
            if (g.snapToLines) {
                var k;
                switch (g.vertical) {
                    case "":
                        j = ["+y", "-y"],
                            k = "height";
                        break;
                    case "rl":
                        j = ["+x", "-x"],
                            k = "width";
                        break;
                    case "lr":
                        j = ["-x", "+x"],
                            k = "width"
                }
                var m = f.lineHeight,
                    n = m * Math.round(h),
                    o = c[k] + m,
                    p = j[0];
                Math.abs(n) > o && (n = 0 > n ? -1 : 1, n *= Math.ceil(o / m) * m),
                0 > h && (n += "" === g.vertical ? c.height: c.width, j = j.reverse()),
                    f.move(p, n)
            } else {
                var q = f.lineHeight / c.height * 100;
                switch (g.lineAlign) {
                    case "middle":
                        h -= q / 2;
                        break;
                    case "end":
                        h -= q
                }
                switch (g.vertical) {
                    case "":
                        b.applyStyles({
                            top:
                                b.formatStyle(h, "%")
                        });
                        break;
                    case "rl":
                        b.applyStyles({
                            left:
                                b.formatStyle(h, "%")
                        });
                        break;
                    case "lr":
                        b.applyStyles({
                            right:
                                b.formatStyle(h, "%")
                        })
                }
                j = ["+y", "-x", "+x", "-y"],
                    f = new l(b)
            }
            var r = e(f, j);
            b.move(r.toCSSCompatValues(c))
        }
        function n() {}
        var o = Object.create ||
            function() {
                function a() {}
                return function(b) {
                    if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
                    return a.prototype = b,
                        new a
                }
            } ();
        b.prototype = o(Error.prototype),
            b.prototype.constructor = b,
            b.Errors = {
                BadSignature: {
                    code: 0,
                    message: "Malformed WebVTT signature."
                },
                BadTimeStamp: {
                    code: 1,
                    message: "Malformed time stamp."
                }
            },
            d.prototype = {
                set: function(a, b) {
                    this.get(a) || "" === b || (this.values[a] = b)
                },
                get: function(a, b, c) {
                    return c ? this.has(a) ? this.values[a] : b[c] : this.has(a) ? this.values[a] : b
                },
                has: function(a) {
                    return a in this.values
                },
                alt: function(a, b, c) {
                    for (var d = 0; d < c.length; ++d) if (b === c[d]) {
                        this.set(a, b);
                        break
                    }
                },
                integer: function(a, b) { / ^-?\d + $ / .test(b) && this.set(a, parseInt(b, 10))
                },
                percent: function(a, b) {
                    var c;
                    return (c = b.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (b = parseFloat(b), b >= 0 && 100 >= b) ? (this.set(a, b), !0) : !1
                }
            };
        var p = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&lrm;": "鈥�",
                "&rlm;": "鈥�",
                "&nbsp;": "聽"
            },
            q = {
                c: "span",
                i: "i",
                b: "b",
                u: "u",
                ruby: "ruby",
                rt: "rt",
                v: "span",
                lang: "span"
            },
            r = {
                v: "title",
                lang: "lang"
            },
            s = {
                rt: "ruby"
            },
            t = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
        j.prototype.applyStyles = function(a, b) {
            b = b || this.div;
            for (var c in a) a.hasOwnProperty(c) && (b.style[c] = a[c])
        },
            j.prototype.formatStyle = function(a, b) {
                return 0 === a ? 0 : a + b
            },
            k.prototype = o(j.prototype),
            k.prototype.constructor = k,
            l.prototype.move = function(a, b) {
                switch (b = void 0 !== b ? b: this.lineHeight, a) {
                    case "+x":
                        this.left += b,
                            this.right += b;
                        break;
                    case "-x":
                        this.left -= b,
                            this.right -= b;
                        break;
                    case "+y":
                        this.top += b,
                            this.bottom += b;
                        break;
                    case "-y":
                        this.top -= b,
                            this.bottom -= b
                }
            },
            l.prototype.overlaps = function(a) {
                return this.left < a.right && this.right > a.left && this.top < a.bottom && this.bottom > a.top
            },
            l.prototype.overlapsAny = function(a) {
                for (var b = 0; b < a.length; b++) if (this.overlaps(a[b])) return ! 0;
                return ! 1
            },
            l.prototype.within = function(a) {
                return this.top >= a.top && this.bottom <= a.bottom && this.left >= a.left && this.right <= a.right
            },
            l.prototype.overlapsOppositeAxis = function(a, b) {
                switch (b) {
                    case "+x":
                        return this.left < a.left;
                    case "-x":
                        return this.right > a.right;
                    case "+y":
                        return this.top < a.top;
                    case "-y":
                        return this.bottom > a.bottom
                }
            },
            l.prototype.intersectPercentage = function(a) {
                var b = Math.max(0, Math.min(this.right, a.right) - Math.max(this.left, a.left)),
                    c = Math.max(0, Math.min(this.bottom, a.bottom) - Math.max(this.top, a.top)),
                    d = b * c;
                return d / (this.height * this.width)
            },
            l.prototype.toCSSCompatValues = function(a) {
                return {
                    top: this.top - a.top,
                    bottom: a.bottom - this.bottom,
                    left: this.left - a.left,
                    right: a.right - this.right,
                    height: this.height,
                    width: this.width
                }
            },
            l.getSimpleBoxPosition = function(a) {
                var b = a.div ? a.div.offsetHeight: a.tagName ? a.offsetHeight: 0,
                    c = a.div ? a.div.offsetWidth: a.tagName ? a.offsetWidth: 0,
                    d = a.div ? a.div.offsetTop: a.tagName ? a.offsetTop: 0;
                a = a.div ? a.div.getBoundingClientRect() : a.tagName ? a.getBoundingClientRect() : a;
                var e = {
                    left: a.left,
                    right: a.right,
                    top: a.top || d,
                    height: a.height || b,
                    bottom: a.bottom || d + (a.height || b),
                    width: a.width || c
                };
                return e
            },
            n.StringDecoder = function() {
                return {
                    decode: function(a) {
                        if (!a) return "";
                        if ("string" != typeof a) throw new Error("Error - expected string data.");
                        return decodeURIComponent(encodeURIComponent(a))
                    }
                }
            },
            n.convertCueToDOMTree = function(a, b) {
                return a && b ? g(a, b) : null
            };
        var u = .05,
            v = "sans-serif",
            w = "1.5%";
        n.processCues = function(a, b, c) {
            function d(a) {
                for (var b = 0; b < a.length; b++) if (a[b].hasBeenReset || !a[b].displayState) return ! 0;
                return ! 1
            }
            if (!a || !b || !c) return null;
            for (; c.firstChild;) c.removeChild(c.firstChild);
            var e = a.document.createElement("div");
            if (e.style.position = "absolute", e.style.left = "0", e.style.right = "0", e.style.top = "0", e.style.bottom = "0", e.style.margin = w, c.appendChild(e), d(b)) {
                var f = [],
                    g = l.getSimpleBoxPosition(e),
                    h = Math.round(g.height * u * 100) / 100,
                    i = {
                        font: h + "px " + v
                    }; !
                    function() {
                        for (var c, d, h = 0; h < b.length; h++) d = b[h],
                            c = new k(a, d, i),
                            e.appendChild(c.div),
                            m(a, c, g, f),
                            d.displayState = c.div,
                            f.push(l.getSimpleBoxPosition(c))
                    } ()
            } else for (var j = 0; j < b.length; j++) e.appendChild(b[j].displayState)
        },
            n.Parser = function(a, b, c) {
                c || (c = b, b = {}),
                b || (b = {}),
                    this.window = a,
                    this.vttjs = b,
                    this.state = "INITIAL",
                    this.buffer = "",
                    this.decoder = c || new TextDecoder("utf8"),
                    this.regionList = []
            },
            n.Parser.prototype = {
                reportOrThrowError: function(a) {
                    if (! (a instanceof b)) throw a;
                    this.onparsingerror && this.onparsingerror(a)
                },
                parse: function(a) {
                    function c() {
                        for (var a = i.buffer,
                                 b = 0; b < a.length && "\r" !== a[b] && "\n" !== a[b];)++b;
                        var c = a.substr(0, b);
                        return "\r" === a[b] && ++b,
                        "\n" === a[b] && ++b,
                            i.buffer = a.substr(b),
                            c
                    }
                    function g(a) {
                        var b = new d;
                        if (e(a,
                                function(a, c) {
                                    switch (a) {
                                        case "id":
                                            b.set(a, c);
                                            break;
                                        case "width":
                                            b.percent(a, c);
                                            break;
                                        case "lines":
                                            b.integer(a, c);
                                            break;
                                        case "regionanchor":
                                        case "viewportanchor":
                                            var e = c.split(",");
                                            if (2 !== e.length) break;
                                            var f = new d;
                                            if (f.percent("x", e[0]), f.percent("y", e[1]), !f.has("x") || !f.has("y")) break;
                                            b.set(a + "X", f.get("x")),
                                                b.set(a + "Y", f.get("y"));
                                            break;
                                        case "scroll":
                                            b.alt(a, c, ["up"])
                                    }
                                },
                                /=/, /\s/), b.has("id")) {
                            var c = new(i.vttjs.VTTRegion || i.window.VTTRegion);
                            c.width = b.get("width", 100),
                                c.lines = b.get("lines", 3),
                                c.regionAnchorX = b.get("regionanchorX", 0),
                                c.regionAnchorY = b.get("regionanchorY", 100),
                                c.viewportAnchorX = b.get("viewportanchorX", 0),
                                c.viewportAnchorY = b.get("viewportanchorY", 100),
                                c.scroll = b.get("scroll", ""),
                            i.onregion && i.onregion(c),
                                i.regionList.push({
                                    id: b.get("id"),
                                    region: c
                                })
                        }
                    }
                    function h(a) {
                        e(a,
                            function(a, b) {
                                switch (a) {
                                    case "Region":
                                        g(b)
                                }
                            },
                            /:/)
                    }
                    var i = this;
                    a && (i.buffer += i.decoder.decode(a, {
                        stream: !0
                    }));
                    try {
                        var j;
                        if ("INITIAL" === i.state) {
                            if (!/\r\n|\n/.test(i.buffer)) return this;
                            j = c();
                            var k = j.match(/^WEBVTT([ \t].*)?$/);
                            if (!k || !k[0]) throw new b(b.Errors.BadSignature);
                            i.state = "HEADER"
                        }
                        for (var l = !1; i.buffer;) {
                            if (!/\r\n|\n/.test(i.buffer)) return this;
                            switch (l ? l = !1 : j = c(), i.state) {
                                case "HEADER":
                                    /:/.test(j) ? h(j) : j || (i.state = "ID");
                                    continue;
                                case "NOTE":
                                    j || (i.state = "ID");
                                    continue;
                                case "ID":
                                    if (/^NOTE($|[ \t])/.test(j)) {
                                        i.state = "NOTE";
                                        break
                                    }
                                    if (!j) continue;
                                    if (i.cue = new(i.vttjs.VTTCue || i.window.VTTCue)(0, 0, ""), i.state = "CUE", -1 === j.indexOf("-->")) {
                                        i.cue.id = j;
                                        continue
                                    }
                                case "CUE":
                                    try {
                                        f(j, i.cue, i.regionList)
                                    } catch(m) {
                                        i.reportOrThrowError(m),
                                            i.cue = null,
                                            i.state = "BADCUE";
                                        continue
                                    }
                                    i.state = "CUETEXT";
                                    continue;
                                case "CUETEXT":
                                    var n = -1 !== j.indexOf("-->");
                                    if (!j || n && (l = !0)) {
                                        i.oncue && i.oncue(i.cue),
                                            i.cue = null,
                                            i.state = "ID";
                                        continue
                                    }
                                    i.cue.text && (i.cue.text += "\n"),
                                        i.cue.text += j;
                                    continue;
                                case "BADCUE":
                                    j || (i.state = "ID");
                                    continue
                            }
                        }
                    } catch(m) {
                        i.reportOrThrowError(m),
                        "CUETEXT" === i.state && i.cue && i.oncue && i.oncue(i.cue),
                            i.cue = null,
                            i.state = "INITIAL" === i.state ? "BADWEBVTT": "BADCUE"
                    }
                    return this
                },
                flush: function() {
                    var a = this;
                    try {
                        if (a.buffer += a.decoder.decode(), (a.cue || "HEADER" === a.state) && (a.buffer += "\n\n", a.parse()), "INITIAL" === a.state) throw new b(b.Errors.BadSignature)
                    } catch(c) {
                        a.reportOrThrowError(c)
                    }
                    return a.onflush && a.onflush(),
                        this
                }
            },
            a.WebVTT = n
    } (this, this.vttjs || {});

    console.log("onload: hls.min.js")