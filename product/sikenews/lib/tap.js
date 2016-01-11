/**
 * tap 事件
 */
(function(){
	var tapStart = '',
		tapEnd = '';
	if('ontouchstart' in window){
		tapStart = 'touchstart',
		tapEnd = 'touchend';
	}else {
		tapStart = 'mousedown',
		tapEnd = 'mouseup';
	}
	
	var LIMIT_VALUE = 10; //点击区域有效阈值
	/**
	 * 
	 */
	function _isInBound(x1, x2){
		if(Math.abs(x1 - x2) <= LIMIT_VALUE){
			return true;
		}else{
			return false;
		}
	}
	
	function addTapEventListener(dom, cb, f){
		var style = dom.style;
		/*if(!f){
			style.transition = 'opacity 100ms linear';
		}*/
		style.webkitUserSelect = 'none',
		style.userSelect = 'none';
		var startPageX = 0,
			startPageY = 0,
			endPageX = 0,
			endPageY = 0;
		var isRightMouse = false; //识别右键标示
		dom.addEventListener(tapStart, function(e){
//			e.stopPropagation();
//			e.preventDefault();
			this.style.opacity = '.5';
			if(e.touches){
				startPageX = e.touches[0].pageX,
				startPageY = e.touches[0].pageY;
			}else{
				startPageX = e.pageX,
				startPageY = e.pageY;
				if(e.button == 2){
					isRightMouse = true;
				}else{
					isRightMouse = false;
				}
			}
		});
		dom.addEventListener(tapEnd, function(e){
//			e.stopPropagation();
			e.preventDefault(); //移动端阻止触发click事件
			if(e.changedTouches){
				endPageX = e.changedTouches[0].pageX,
				endPageY = e.changedTouches[0].pageY;
			}else{
				endPageX = e.pageX,
				endPageY = e.pageY;
			}
//			console.log('start:' + startPageX + ',' + startPageY + '\n end:' + endPageX + ',' + endPageY);
			if(_isInBound(startPageX, endPageX) && _isInBound(startPageY, endPageY) && !isRightMouse){
				cb.call(this, e);
			}
			this.style.opacity = '';
		});
		dom.addEventListener('touchcancel', function(e){
			this.style.opacity = '';
		});
	}
	var EventUtil = {
		addTapEventListener: addTapEventListener
	};
	window.EventUtil = EventUtil;
})();


$.extend($.fn, {
	/**
	 * f: 是否不用渐变效果（默认是用的）
	 * 由于使用transition控制opacity的渐变效果，会出现触摸滑动过快时元素隐藏的情况,所有暂时不使用该效果
	 */
	'tap': function(cb, f){
		$.each(this, function(i, dom) {    
			 EventUtil.addTapEventListener(dom, cb, f);                                                         
		});
		return this;
	}
});
