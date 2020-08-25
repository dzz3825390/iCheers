// JavaScript Document

$(function(){
	
		
			/*  ＡＤ輪撥  */ 
				var ADNN=0; //要用來記錄被摸到的物件的排行
				var MOVE=0; //要用來計算座標
				
				$("#ADB_Title li").eq(0).addClass("ADB_Title_Hover");
				
				function GOGO(){
					if (ADNN < $("#ADB_Title li").length - 1){
						ADNN += 1;
						MOVE = ADNN*630*-1;
					}else{
						ADNN=0;
						MOVE=0;
					}
					$("ul#ADB_Img ").stop(true,true).animate({left:MOVE},350);
					$("ul#ADB_Title li ").removeClass().eq(ADNN).addClass("ADB_Title_Hover");
				}
					
				var TT = setInterval(GOGO,3000);	
					
				$("ul#ADB_Img, ul#ADB_Title li ").hover(
					function(){ clearInterval(TT);}, 
					function(){TT = setInterval(GOGO,3000);}
				);
				
					
				$("ul#ADB_Title li ").mouseover( function(){
					ADNN2 = $(this).index();								   
					MOVE2 = ADNN2*630*-1;
					$("ul#ADB_Img ").stop(true,true).animate({left:MOVE2},350);
					$(this).addClass("ADB_Title_Hover").siblings().removeClass();
			});
			
			
			/*  風琴效果 */
			
			// 亂數選擇展開三張桌子
			var maxNum = 3;  
			var minNum = 1;  
			var NN = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
			
			switch (NN)
					{
					case 1:
					  $("#Organ_FirstLL").hide();
					  $("#Organ_SecondALL").hide();
					  $("#Organ_ThirdALL").hide();
					  break;
					case 2:
					  $("#Organ_FirstALL").hide();
					  $("#Organ_SecondLL").hide();
					  $("#Organ_ThirdALL").hide();
					  break;
					case 3:
					  $("#Organ_FirstALL").hide();
					  $("#Organ_SecondALL").hide();
					  $("#Organ_ThirdLL").hide();
					  break;
					}
			
			
			$("#Organ_FirstLL").click(function(){ 
				$("#Organ_FirstLL").hide();
				$("#Organ_SecondLL").show();
				$("#Organ_ThirdLL").show();
				
				$("#Organ_SecondALL").stop(true,true).hide(0);
				$("#Organ_ThirdALL").stop(true,true).hide(0);
				$("#Organ_FirstALL").stop(true,true).show(200);
				return false; 
			});
			
			$("#Organ_SecondLL").click(function(){
				$("#Organ_FirstLL").show();
				$("#Organ_SecondLL").hide();
				$("#Organ_ThirdLL").show();
				
				$("#Organ_ThirdALL").stop(true,true).hide(0);
				$("#Organ_FirstALL").stop(true,true).hide(0);
				$("#Organ_SecondALL").stop(true,true).show(200); 
				return false;
			});
			
			$("#Organ_ThirdLL").click(function(){
				$("#Organ_FirstLL").show();
				$("#Organ_SecondLL").show();
				$("#Organ_ThirdLL").hide();
				
				$("#Organ_SecondALL").stop(true,true).hide(0);
				$("#Organ_FirstALL").stop(true,true).hide(0);
				$("#Organ_ThirdALL").stop(true,true).show(200);
				return false;
			});
			
			
			
		/*  新聞輪播 左右  */	
		
		var NewsLength=( $(".Right_content_iCheersCoulmn_info").length/2);
		var NewsSlideBoxWidth = 816 * NewsLength;
		$(".Right_content_iCheersCoulmn_slidebox").css("width",NewsSlideBoxWidth); 
		//輪播的一定要是2的倍數  
		var LestLength=NewsLength -1 ;
		
		var NN=1;
		$("#NewsGoRight").click(function(){
			if(NN==1){
				$(".Right_content_iCheersCoulmn_slidebox").stop(true,true).animate({left:"-816"},500);
				NN=2;
				}
				else if(NN< NewsLength){
				$(".Right_content_iCheersCoulmn_slidebox").stop(true,true).animate({left:"-=816"},500);
				NN+=1;
				}
				else if(NN==NewsLength){
				$(".Right_content_iCheersCoulmn_slidebox").stop(true,true).animate({left:"0"},500);
				NN=1;
				}
			});	
			
		$("#NewsGoLeft").click(function(){
			if(NN==1){
				$(".Right_content_iCheersCoulmn_slidebox").stop(true,true).animate({left:"-816"* LestLength},500);
				NN=NewsLength;
				}
				else if(NN<= NewsLength){
				$(".Right_content_iCheersCoulmn_slidebox").stop(true,true).animate({left:"+=816"},500);
				NN-=1;
				}
			});		
		
			
			
		
		/*  熱門酒款 左右  */		
		var NN2=0;
		$(".Right_content_WeekSpecial_GoLeftBTN").click(function(){
			if(NN2==1){
				$(".Right_content_WeekSpecial_AllWine_slidebox").stop(true,true).animate({left:"0"},500);
				NN2=0;
				}else{
				$(".Right_content_WeekSpecial_AllWine_slidebox").stop(true,true).animate({left:"-=816"},500);
				NN2+=1;
					}
			});
			
		$(".Right_content_WeekSpecial_GoRightBTN").click(function(){
			if(NN2==0){
				$(".Right_content_WeekSpecial_AllWine_slidebox").stop(true,true).animate({left:"-816"},500);
				NN2=1;
				}else{
				$(".Right_content_WeekSpecial_AllWine_slidebox").animate({left:"+=816"},500);
				NN2-=1;
				}
			});		
			
		/*  熱門酒款 價格  */	
		
			$(this).find(".HOT8_PIC h5").mouseover(function(){
					$(this).parents().siblings().find("h6").stop(false,false).animate({top:"133"},200);
					$(this).siblings().stop(true,false).animate({top:"53"},200);
				});
				
			
			
		
		
			
		
		 
		
	});