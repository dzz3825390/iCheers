// JavaScript Document


$(function(){
		/*  左選單的控制  */
		
		$(".Menu_More").hide();
		
		 // 類型 	
			var TypeOpenNN=true;// 開關
			$("#TypeOpen").click(function(){
				$("#Menu_Type li input").css({display:"block"});
				$("#Menu_Type_More").slideDown(300);
				document.getElementById("TypeOpen").innerHTML="<img src='images/icon/Sent.png' />";
				$("#TypeOpen").css({paddingLeft:0});
				$("#TypeOpen").css({paddingBottom:10});
				
				TypeOpenNN=false;
				return false;
				
				});
		 		
			//  威-產區 	
			
			var TasteOpenNN=true;// 開關
			$("#TasteOpen").click(function(){
				$("#Menu_Taste li input").css({display:"block"});
				$("#Menu_Taste_More").slideDown(300);
				document.getElementById("TasteOpen").innerHTML="<img src='images/icon/Sent.png' />";
				$("#TasteOpen").css({paddingLeft:0});
				$("#TasteOpen").css({paddingBottom:10});
				
				TasteOpenNN=false;
				return false;
				
				});
				
				
			//  威-特殊風味 	
			
			var WPlaceOpenNN=true;// 開關
			$("#WPlaceOpen").click(function(){
				$("#Menu_WPlace li input").css({display:"block"});
				$("#Menu_WPlace_More").slideDown(300);
				document.getElementById("WPlaceOpen").innerHTML="<img src='images/icon/Sent.png' />";
				$("#WPlaceOpen").css({paddingLeft:0});
				$("#WPlaceOpen").css({paddingBottom:10});
				
				WPlaceOpenNN=false;
				return false;
				
				});
				
				
			//價格
			
			var PriceOpenNN=true;// 開關	
			$("#PriceOpen2").click(function(){
					if(PriceOpenNN==true){
						$("#Menu_Price_More").slideDown({display:"block"});
						document.getElementById("PriceOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
						PriceOpenNN=false;
						}else{
						$("#Menu_Price_More").slideUp({display:"none"});
						document.getElementById("PriceOpen2").innerHTML="展開全部<img src='images/icon/Menu_Open.png'/>";
						PriceOpenNN=true;	
							}
					return false;
				});
				
				
			
			
			//評價	
			var EvaluateOpenNN=true;// 開關	
			$("#EvaluateOpen").click(function(){
				$("#Menu_Evaluate li input").css({display:"block"});
				$("#Menu_Evaluate_More").slideDown(300);
				document.getElementById("EvaluateOpen").innerHTML="<img src='images/icon/Sent.png' />";
				document.getElementById("EvaluateOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
				$("#EvaluateOpen").css({paddingLeft:0})
				EvaluateOpenNN=false;
				return false;
				});
				
			$("#EvaluateOpen2").click(function(){
					if(EvaluateOpenNN==true){
						$("#Menu_Evaluate_More").slideDown({display:"block"});
						document.getElementById("EvaluateOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
						EvaluateOpenNN=false;
						}else{
						$("#Menu_Evaluate_More").slideUp({display:"none"});
						$("#Menu_Evaluate li input").css({display:"none"});
						$("#EvaluateOpen").css({paddingLeft:8})
						document.getElementById("EvaluateOpen").innerHTML="<img src='images/icon/Menu_Check.png'/> 複選";
						document.getElementById("EvaluateOpen2").innerHTML="展開全部<img src='images/icon/Menu_Open.png'/>";
						EvaluateOpenNN=true;	
							}
					return false;
				});
			
			//容量
			var CapacityOpenNN=true;// 開關	
			$("#CapacityOpen").click(function(){
				$("#Menu_Capacity li input").css({display:"block"});
				$("#Menu_Capacity_More").slideDown(300);
				document.getElementById("CapacityOpen").innerHTML="<img src='images/icon/Sent.png' />";
				$("#CapacityOpen").css({paddingLeft:0,paddingBottom:10});
				CapacityOpenNN=false;
				return false;
				});
				
			
				
			//容量 Capacity
			
			
			var CapacityOpenNN=true;// 開關	
			$("#CapacityOpen").click(function(){
				$("#Menu_Capacity_More li input").css({display:"block"});
				$("#Menu_Capacity_More").slideDown(300);
				document.getElementById("CapacityOpen").innerHTML="<img src='images/icon/Sent.png' />";
				document.getElementById("CapacityOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
				$("#CapacityOpen").css({paddingLeft:0})
				CapacityOpenNN=false;
				return false;
				});
				
			$("#CapacityOpen2").click(function(){
					if(CapacityOpenNN==true){
						$("#Menu_Capacity_More").slideDown({display:"block"});
						document.getElementById("CapacityOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
						CapacityOpenNN=false;
						}else{
						$("#Menu_Capacity_More").slideUp({display:"none"});
						$("#Menu_Capacity_More li input").css({display:"none"});
						$("#CapacityOpen").css({paddingLeft:8})
						document.getElementById("CapacityOpen").innerHTML="<img src='images/icon/Menu_Check.png'/> 複選";
						document.getElementById("CapacityOpen2").innerHTML="展開全部<img src='images/icon/Menu_Open.png'/>";
						CapacityOpenNN=true;	
							}
					return false;
				});
				
			
			
			//年份 Year	
			
			var YearOpenNN=true;// 開關	
			$("#YearOpen2").click(function(){
					if(YearOpenNN==true){
						$("#Menu_Year_More").slideDown({display:"block"});
						document.getElementById("YearOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
						YearOpenNN=false;
						}else{
						$("#Menu_Year_More").slideUp({display:"none"});
						document.getElementById("YearOpen2").innerHTML="展開全部<img src='images/icon/Menu_Open.png'/>";
						YearOpenNN=true;	
							}
					return false;
				});
				
			
			
			// 換酒單
			var ChangeOnOff=true; //開關
			$("#Change").click(function(){
				if(ChangeOnOff==true){
					document.getElementById("Change").innerHTML="轉為中文選單⇌";
					ChangeOnOff=false; 
				}else{
					document.getElementById("Change").innerHTML="轉為原文選單⇌";
					ChangeOnOff=true;
					}
					return false;
				});	
				
			
			// 首頁＿顯示我的最愛
			//#OPENMyFavorite 顯示我的最愛按鈕
			//.ShowMyFavorite  全部
			//#Close_MyFavorite 關閉
			
			$("#OPENMyFavorite").click(function(){
					$(".ShowMyFavorite").slideToggle(200);
					return false;							
				});	
				
			
				
			
			
		
		
	});