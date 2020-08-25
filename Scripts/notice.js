// JavaScript Document

//
$(function(){
	$("#notice4").hide();
	$("#notice2").hide();
	$("#links .btn_Resubmit").click(function(){
		var _w = $(window).width();
		var _h = $(window).height();
		var _W = $(document).width();
		var _H = $(document).height();
	
		$("#notice4").fadeIn(400).css({
			left: (_w - 470) / 2,
			top: (_h - 210) / 2
			});	
		$("#notice4 .notice_close").click(function(){
			$("#notice4").fadeOut(200);
			});	
		$("#notice4 .btn_submit").click(function(){
			$("#notice4" ).fadeOut(200);	
			$("#notice2").fadeIn(400).css({
				left: (_w - 470) / 2,
				top: (_h - 210) / 2
			});	
		});
		$("#notice2 .notice_close").click(function(){
			$("#notice2").fadeOut(200);
			});
		
	});
	
});

/* e-Coupon優惠視窗 */
$(function(){
	$("#notice6").hide();
	$(".btn_eCoupon").click(function(){
		var _w = $(window).width();
		var _h = $(window).height();
		var _W = $(document).width();
		var _H = $(document).height();
		$("#notice6").fadeIn(400).css({
			left: (_w - 470) / 2,
			top: (_h - 210) / 2
			});	
		$("#notice6 .notice_close").click(function(){
			$("#notice6").fadeOut(200);
			});	
		});
});

/* 紅利折點視窗 */
$(function(){
	$("#notice7").hide();
	$(".btn_bonus").click(function(){
		var _w = $(window).width();
		var _h = $(window).height();
		var _W = $(document).width();
		var _H = $(document).height();
		$("#notice7").fadeIn(400).css({
			left: (_w - 470) / 2,
			top: (_h - 210) / 2
			});	
		$("#notice7 .notice_close").click(function(){
			$("#notice7" ).fadeOut(200);
			});	
		});
	});

$(function(){
	$("#notice9").hide();
	$(".btn_add_to_wishList3").click(function(){
		var _w = $(window).width();
		var _h = $(window).height();
		var _W = $(document).width();
		var _H = $(document).height();
		$("#notice9").fadeIn(400).css({
			left: (_w - 470) / 2,
			top: (_h - 210) / 2
			});	
		$("#notice9 .notice_close, #notice9 .btn_confirm").click(function(){
			$("#notice9" ).fadeOut(200);
			});	
		});
	});

$(function(){
	$("#notice5").hide();
	$("#notice6").hide();
	$(".Group a.btn_Mail").click(function(){
		var _w = $(window).width();
		var _h = $(window).height();
		var _W = $(document).width();
		var _H = $(document).height();
	
		$("#notice5").fadeIn(400).css({
			left: (_w - 470) / 2,
			top: (_h - 210) / 2
			});	
		$("#notice5 .notice_close").click(function(){
			$("#notice5" ).fadeOut(200);
			});	
		$("#notice5 .btn_submit").click(function(){
			$("#notice5" ).fadeOut(200);	
			$("#notice6").fadeIn(400).css({
				left: (_w - 470) / 2,
				top: (_h - 210) / 2
			});	
		});
		$("#notice6 .notice_close").click(function(){
			$("#notice6" ).fadeOut(200);
			});
	});
	
});

$(function(){
	$("#ShowWineLabel").hide();
	$(".WineLabel img").click(function(){
		var _w = $(window).width();
		var _h = $(window).height();
		var _W = $(document).width();
		var _H = $(document).height();

		$("<div class='showDiv' />").css({
			position: "absolute",
			width: _W,
			height: _H,
			left: 0,
			top: 0,
			opacity: 0.6,
			display: "none",
			backgroundColor: "black"
		}).appendTo("body").fadeIn(400);	
		
		$("#ShowWineLabel").fadeIn(400).css({
			left: (_W - 510) / 2,
			top: (_h - 410) / 2
			
			});	
		$("#ShowWineLabel .btn_close").click(function(){
			$(".showDiv, #ShowWineLabel" ).fadeOut(200);
			});	
	});
});

$(function(){
		$("#surCharge").hide();
		$(".fee").click(function(){
			$("#surCharge").slideToggle(300);
			});
		});