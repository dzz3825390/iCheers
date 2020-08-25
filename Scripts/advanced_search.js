// JavaScript Document


$(function(){
	
		// 分類找酒
	
		$("ul#ALLSearch li a, ul#ALLSearch li span").mouseover(function(){
			
				//$(this).parent().find("span").css({display:"block"});
				$(this).parent().find("span").css({backgroundImage:"url(images/icon/Delete_ICON.png)"});
				$(this).parent().css({textDecoration:"line-through"});
				
			});
	
		$("ul#ALLSearch li a, ul#ALLSearch li span").mouseout(function(){
			
				$(this).parent().find("span").css({backgroundImage:"none"});
				$(this).parent().css({textDecoration:"none"});
				
			});
		
		
		// 進階搜尋選單
		$("#TypeLayer ul li input, #RegionLayer ul li input").click(function() {
		
		   if($(this).attr("checked")){
				$(this).parent().find("ul").css({display:"block"});
				$(this).parent().find("ul").find("ul").css({display:"none"});
			   } else {
				$(this).parent().find("ul").css({display:"none"});
			   }
				   
		 });
	
		// 近階搜尋＿記憶搜尋條件
		//#Show_Show_Criteria 顯示記憶搜尋條件
		//.Show_Criteria  全部
		//#Show_Criteria_close 關閉
		
		$("#Show_Show_Criteria").click(function(){
				$(".ShowMyFavorite_advanced_search").slideToggle(200);
				return false;							
			});
			
			
				
			
			
	});