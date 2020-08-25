// JavaScript Document
$(function(){
	// 先取得 #cart 及其 top 值
	var $cart = $('#SlideContent'),
		_top = $cart.offset().top;
 
	// 當網頁捲軸捲動時
	var $win = $(window).scroll(function(){
		// 如果現在的 scrollTop 大於原本 #cart 的 top 時
		if($win.scrollTop() >= _top){
			// 如果 $cart 的座標系統不是 fixed 的話
			if($cart.css('position')!='fixed'){
				// 設定 #cart 的座標系統為 fixed
				$cart.css({
					position: 'fixed',
					top: 0
				});
			}
		}else{
			// 還原 #cart 的座標系統為 absolute
			$cart.css({
				position: 'absolute'
			});
		}
	});
});