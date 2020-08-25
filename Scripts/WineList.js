// JavaScript Document

$(function(){
	
		// 取消最後一品項的底線
		// 簡目頁 
		$(".Result").children().last("ul").css({borderBottom:"none"});
		// 酒莊簡目頁 
		$(".Result").children().last("div").css({borderBottom:"none"});
		
		//$(".List_Year").parent().siblings().filter(":").css({borderBottom:"none"});
		
		//顯示酒莊 收合
		$(".OneKind ul").hide();
		$(".OneKind h1").click( function(){
			
			$(this).parent().find("ul").slideToggle(300);
			$(this).find("em").css({backgroundColor:"#999"});
			return false;
			
		});	
		
		
	
	})