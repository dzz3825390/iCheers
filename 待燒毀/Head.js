// JavaScript Document



$(function(){
	
		// 首頁＿有沒有收到確認信
		//#noticePopUp按鈕
		//#notice彈出
		//.notice_close 關閉
		//.btn_submit 送出
		$(".Reconfirmed").click(function(){
				$("#notice").css({display:"block"});
				return false;
			});	
	
		$(".notice_close,.btn_submit").click(function(){
				$("#notice").css({display:"none"});
				return false;
			});	
			
		
	});