// JavaScript Document


$(function(){
		/*  左選單的控制  */
		
		$(".Menu_More").hide();
		
		// 類型 	
			var TypeOpenNN=true;// 開關
			$("#TypeOpen").click(function(){
				$("#Menu_Type li input").css({display:"inline-block"});
				$("#Menu_Type_More").slideDown(300);
				document.getElementById("TypeOpen").innerHTML="<img src='images/icon/Sent.png' />";
				$("#Menu_Type li a").css("margin-left","5px");
				$("#TypeOpen").css({
					"paddingBottom":"10",
					"margin-left":"0"
				});
				
				TypeOpenNN=false;
				return false;
				
				});
		 		
			// 產區
			var PlaceOpenNN=true;// 開關	
			$("#PlaceOpen").click(function(){
				$("#Menu_Place li input").css({display:"inline-block"});
				$("#Menu_Place_More").slideDown(300);
				document.getElementById("PlaceOpen").innerHTML="<img src='images/icon/Sent.png' />";
				document.getElementById("PlaceOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png'/>";
				$("#Menu_Place li a").css("margin-left","5px");
				$("#PlaceOpen").css({
					"paddingBottom":"10",
					"margin-left":"0"
				});
				PlaceOpenNN=false;
				return false;
				});
				
			$("#PlaceOpen2").click(function(){
					if(PlaceOpenNN==true){
						$("#Menu_Place_More").slideDown();
						$("#GoToList").css({display:"block"})
						document.getElementById("PlaceOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png'/>";
						PlaceOpenNN=false;
						}else{
						$("#Menu_Place_More").slideUp();
						$("#Menu_Place li input").css({display:"none"});
						$("#GoToList").css({display:"none"})
						document.getElementById("PlaceOpen").innerHTML="<img src='images/icon/Menu_Check.png'/> 複選";
						document.getElementById("PlaceOpen2").innerHTML="展開更多<img src='images/icon/Menu_Open.png'/>";
						PlaceOpenNN=true;	

							}
					return false;
				});
				
			// 品種	
		    	var VarietyOpenNN=true;// 開關	
			$("#VarietyOpen").click(function(){
				$("#Menu_Variety li input").css({display:"inline-block"});
				$("#Menu_Variety_More").slideDown(300);
				$(".GoToList").css({display:"block"})
				document.getElementById("VarietyOpen").innerHTML="<img src='images/icon/Sent.png' />";
				document.getElementById("VarietyOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
				$("#VarietyOpen3").css("display","block");
				$("#GoToList22").css("display","block");
				document.getElementById("VarietyOpen3").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
				$("#Menu_Variety li a").css("margin-left","5px");
				$("#VarietyOpen").css({
					"paddingBottom":"10",
					"margin-left":"0"
				});
				VarietyOpenNN=false;
				return false;
				});
				
			$("#VarietyOpen2, #VarietyOpen3").click(function(){
					if(VarietyOpenNN==true){
						$("#Menu_Variety_More").slideDown();
						$("#GoToList2").css({display:"block"})
						document.getElementById("VarietyOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
						$("#VarietyOpen3").css("display","block");
						$("#GoToList22").css("display","block");
						document.getElementById("VarietyOpen3").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
						VarietyOpenNN=false;
						}else{
						$("#Menu_Variety_More").slideUp({display:"none"});
						$("#Menu_Variety li input").css({display:"none"});
						$("#GoToList2").css({display:"none"});
						$("#VarietyOpen3").css("display","none");
						$("#GoToList22").css("display","none");
						document.getElementById("VarietyOpen").innerHTML="<img src='images/icon/Menu_Check.png'/> 複選";
						document.getElementById("VarietyOpen2").innerHTML="展開更多<img src='images/icon/Menu_Open.png'/>";
						VarietyOpenNN=true;	
							}
					return false;
				});
				
			//評價	
			var EvaluateOpenNN=true;// 開關	
			$("#EvaluateOpen").click(function(){
				$("#Menu_Evaluate li input").css({display:"inline-block"});
				$("#Menu_Evaluate_More").slideDown(300);
				document.getElementById("EvaluateOpen").innerHTML="<img src='images/icon/Sent.png' />";
				document.getElementById("EvaluateOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
				$("#Menu_Evaluate li a").css("margin-left","5px");
				$("#EvaluateOpen").css({
					"paddingBottom":"10",
					"margin-left":"0"
				});
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
						document.getElementById("EvaluateOpen").innerHTML="<img src='images/icon/Menu_Check.png'/> 複選";
						document.getElementById("EvaluateOpen2").innerHTML="展開全部<img src='images/icon/Menu_Open.png'/>";
						EvaluateOpenNN=true;	
							}
					return false;
			});
			
			//等級	
			var GradeOpenNN=true;// 開關	
			$("#GradeOpen").click(function(){
				$("#Menu_grade li input").css({display:"inline-block"});
				$("#Menu_Grade_More").slideDown(300);
				document.getElementById("GradeOpen").innerHTML="<img src='images/icon/Sent.png' />";
				document.getElementById("GradeOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
				$("#Menu_grade li a").css("margin-left","5px");
				$("#GradeOpen").css({
					"paddingBottom":"10",
					"margin-left":"0"
				});
				GradeOpenNN=false;
				return false;
			});
				
			$("#GradeOpen2").click(function(){
					if(GradeOpenNN==true){
						$("#Menu_Grade_More").slideDown({display:"block"});
						document.getElementById("GradeOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
						GradeOpenNN=false;
						}else{
						$("#Menu_Grade_More").slideUp({display:"none"});
						$("#Menu_grade li input").css({display:"none"});
						document.getElementById("GradeOpen").innerHTML="<img src='images/icon/Menu_Check.png'/> 複選";
						document.getElementById("GradeOpen2").innerHTML="展開全部<img src='images/icon/Menu_Open.png'/>";
						GradeOpenNN=true;	
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

			//酵母 Yeasts
			
			
			var YeastsOpenNN=true;// 開關	
			$("#YeastsOpen").click(function(){
				$("#Menu_Yeasts_More li input").css({display:"block"});
				$("#Menu_Yeasts_More").slideDown(300);
				document.getElementById("YeastsOpen").innerHTML="<img src='images/icon/Sent.png' />";
				document.getElementById("YeastsOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
				$("#YeastsOpen").css({paddingLeft:0})
				YeastsOpenNN=false;
				return false;
				});
				
			$("#YeastsOpen2").click(function(){
				if(YeastsOpenNN==true){
					$("#Menu_Yeasts_More").slideDown({display:"block"});
					document.getElementById("YeastsOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
					YeastsOpenNN=false;
					}else{
					$("#Menu_Yeasts_More").slideUp({display:"none"});
					$("#Menu_Yeasts_More li input").css({display:"none"});
					$("#YeastsOpen").css({paddingLeft:8})
					document.getElementById("YeastsOpen").innerHTML="<img src='images/icon/Menu_Check.png'/> 複選";
					document.getElementById("YeastsOpen2").innerHTML="展開全部<img src='images/icon/Menu_Open.png'/>";
					YeastsOpenNN=true;	
					}
				return false;
			});

			//水 Water
			
			
			var WaterOpenNN=true;// 開關	
			$("#WaterOpen").click(function(){
				$("#Menu_Water_More li input").css({display:"block"});
				$("#Menu_Water_More").slideDown(300);
				document.getElementById("WaterOpen").innerHTML="<img src='images/icon/Sent.png' />";
				document.getElementById("WaterOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
				$("#WaterOpen").css({paddingLeft:0})
				YeastsOpenNN=false;
				return false;
				});
				
			$("#WaterOpen2").click(function(){
				if(WaterOpenNN==true){
					$("#Menu_Water_More").slideDown({display:"block"});
					document.getElementById("WaterOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
					WaterOpenNN=false;
					}else{
					$("#Menu_Water_More").slideUp({display:"none"});
					$("#Menu_Water_More li input").css({display:"none"});
					$("#WaterOpen").css({paddingLeft:8})
					document.getElementById("WaterOpen").innerHTML="<img src='images/icon/Menu_Check.png'/> 複選";
					document.getElementById("WaterOpen2").innerHTML="展開全部<img src='images/icon/Menu_Open.png'/>";
					YeastsOpenNN=true;	
					}
				return false;
			});

			//米 Rice
			
			
			var RiceOpenNN=true;// 開關	
			$("#RiceOpen").click(function(){
				$("#Menu_Water_More li input").css({display:"block"});
				$("#Menu_Water_More").slideDown(300);
				document.getElementById("RiceOpen").innerHTML="<img src='images/icon/Sent.png' />";
				document.getElementById("RiceOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
				$("#RiceOpen").css({paddingLeft:0})
				YeastsOpenNN=false;
				return false;
				});
				
			$("#RiceOpen2").click(function(){
				if(WaterOpenNN==true){
					$("#Menu_Rice_More").slideDown({display:"block"});
					document.getElementById("RiceOpen2").innerHTML="收合<img src='images/icon/Menu_Close.png' />";
					WaterOpenNN=false;
					}else{
					$("#Menu_Rice_More").slideUp({display:"none"});
					$("#Menu_Rice_More li input").css({display:"none"});
					$("#RiceOpen").css({paddingLeft:8})
					document.getElementById("RiceOpen").innerHTML="<img src='images/icon/Menu_Check.png'/> 複選";
					document.getElementById("RiceOpen2").innerHTML="展開全部<img src='images/icon/Menu_Open.png'/>";
					YeastsOpenNN=true;	
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