// JavaScript Document

$(function(){
	
	
		// 館別切換
		
					
		
		$(".TagWhisky a").hover(
			function(){$(".TagALL").css({backgroundImage:"url(images/Tag_WhiskyBG.jpg)"});},
			function(){$(".TagALL").css({backgroundImage:"url(images/Tag_WineBG.jpg)"});}	
		);

		$(".TagWine a").hover(
			function(){$(".TagALL").css({backgroundImage:"url(images/Tag_WhiskyBG.jpg)"});},
			function(){$(".TagALL").css({backgroundImage:"url(images/Tag_WineBG.jpg)"});}	
		);
			
			
		
			
	});