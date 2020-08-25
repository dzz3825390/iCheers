// JavaScript Document

$(function(){
	
	// 詳目頁 
		$(".DetailedALL").children().last("div").css({borderBottom:"none"});
		$(".ThisYearAward ul").find("li:last-child").css({borderBottom:"none"});
	
	//風味開關
	
	$(".TAG_SecondLayer").hide(); 
	var TAGOff=true; //開關
	
	$(".TAG h2").click(function(){
			//$(".TAG_Separated").height=$(".TAG").height;
			$(this).parent().find(".TAG_SecondLayer").slideToggle(300);
			
			if(TAGOff==true){
				$(this).html("▲Close");
				TAGOff=false;  
			}else{
				$(this).html("▼More..."); 
				TAGOff=true;  
			}
			
			return false;
			
		});
		
		
		
		
		
	});