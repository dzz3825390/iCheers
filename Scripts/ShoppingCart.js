// JavaScript Document



// 原本的購物車事件 
$(function(){
	
		// 移動的購物車
		var $win = $(window),
			$ad = $('#MyWineList'),
			_width = $ad.width(),
			_height = $ad.height(),
			_moveSpeed = 400;	
		
		
		
		$win.bind('scroll resize', function(){
			var $this = $(this);
			var TT = $this.scrollTop();
			var TTGO = $this.scrollTop()- 130;
			
			if(TT>130)
				$ad.stop().animate({
					top: TTGO
				}, _moveSpeed);	
			else
				$ad.stop().animate({
					top: 0
				}, _moveSpeed);
			
		}).scroll();
		
		
		
		
		/*  酒單展開  */ 
		 var OpenNN=true;	
		 
		 $(".WineList_Info h1").click(function(){
			 	if(OpenNN==true){
				 	$(".WineList_Info h1").css("background-image","url(images/index_mylist_close.png)");						 
					$("#WineList_ALL").stop(true,false).animate({width:600},350);
					OpenNN=false;	
				}else{
					$(".WineList_Info h1").css("background-image","url(images/index_mylist.png)");
					$("#WineList_ALL").stop(true,false).animate({width:30},350);
					OpenNN=true;	
					}
			});
			
		// 我的酒單 - 捲動時就關閉  
		
		$(window).scroll(function() {
		 	if(OpenNN==false){
				$("#WineList_ALL").stop(true,false).animate({width:30},50);
				OpenNN=true;}	
		});
		
		
		/*  酒單內的小圖輪播  */
		
		$("#GoLeft2").click(function(){
			$("#Recent_IMG").stop(true,false).animate({left:"3"},300);
			});
		$("#GoRight2").click(function(){
			$("#Recent_IMG").stop(true,false).animate({left:"-500"},300);
			});	
		
		$("#GoLeft3").click(function(){
			$("#Recent_IMG2").stop(true,false).animate({left:"3"},300);
			});
		$("#GoRight3").click(function(){
			$("#Recent_IMG2").stop(true,false).animate({left:"-500"},300);
			});	
			
			
			
		
		
	
	});





	  
