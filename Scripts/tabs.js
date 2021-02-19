// JavaScript Document

function PopLocate(name){
	//瀏覽器內容寬度
	var intBrowserW = 0;
	//瀏覽器內容高度
	var intBrowserH = 0;
	//取得瀏覽器內容寬度/高度
	if (document.documentElement) {
	    intBrowserW = document.documentElement.clientWidth;
	    intBrowserH = document.documentElement.clientHeight;
	} else {
	    intBrowserW = document.body.clientWidth;
	    intBrowserH = document.body.clientHeight;
	}

	//最大高度設定(for小螢幕)
	var NoticeHeight = intBrowserH*0.7
	$(name).css("max-height",NoticeHeight);

	//給套件的內容高度設定(for小螢幕)
	$(name).children().eq(1).css("max-height",NoticeHeight-80);

	//scrollbar套件設定
	$(name).children().eq(1).mCustomScrollbar({
    	theme:"minimal-dark"
	});

	//20161223 Roger 修改js 讓寬度小於1280的載具顯示正常
	if (intBrowserW > 1280){
		var NoticeWidth = $(name).width();
		var NoticeHeight = $(name).height();
		var NoticePositionX = (intBrowserW - NoticeWidth)/2;
		var NoticePositionY = (intBrowserH - NoticeHeight)/2;
		$(name).css({
			"top":NoticePositionY,
			"left":NoticePositionX
		});
	} else {
		var NoticeWidth = $(name).width();
		var NoticeHeight = $(name).height();
		var NoticePositionX = (1280 - NoticeWidth)/2;
		var NoticePositionY = (intBrowserH - NoticeHeight)/2;
		$(name).css({
			"top":NoticePositionY,
			"left":NoticePositionX
		});
	}
	//20161223 Roger 修改js 讓寬度小於1280的載具顯示正常 end

}	


function Pops(name){
	$(name).show();
	PopLocate(name);
}
function Wops(name){
		document.getElementById(name).style.display="none";
	}





// #ECouponBTN   >>  使用e-Coupon按鈕
// #BonusBTN   >>  使用紅利按鈕
// #notice6  >>  e-Coupo視窗
// #notice7  >>  紅利折點視窗
// #notice10  >>  會員登入視窗

$(document).ready(function(){

	$("#img2").click(function(){
		Pops("#notice2");
	});

	// e-Coupo彈出視窗
	$("#ECouponBTN").click(function(){
		Pops("#notice6");
	});

	// 紅利折點彈出視窗
	$("#BonusBTN").click(function(){
		Pops("#notice10");
		$("#Login_Submit").click(function(){
			$("#notice10").hide();
			$("#notice7").show();
		});
	});


});



$(function(){
			
		
		// 查看手續費級距	
		$("#Bracket").click(function(){
				$(".Bracket").slideToggle(300);
			});
			
		
			
			
	});







