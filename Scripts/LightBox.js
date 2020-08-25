// JavaScript Document


	$(function(){
		$("#Label_LightBox").hide();
		$(".Label").click(function(){
			var _w = $(window).width();
			var _h = $(window).height();
			var _W = $(document).width();
			var _H = $(document).height();
			var _WW = $("#Label_LightBox").width();
			var _HH = $("#Label_LightBox").height();
	
			$("<div class='showDiv' />").css({
				position: "absolute",
				width: _W,
				height: _H,
				left: 0,
				top: 0,
				opacity: 0.6,
				display: "none",
				zIndex: 99999,
				backgroundColor: "black"
			}).appendTo("body").fadeIn(400);		
			
			$("#Label_LightBox").fadeIn(400).css({
				left: (_w - _WW) / 2,
				top: (_h - _HH) / 2
				
				});	
			
			$(".showDiv,.OFF").click(function(){
				$(".showDiv, #Label_LightBox" ).fadeOut();
				});	
		});
		
	});