// JavaScript Document

			$(function() {

				//	Scrolled by user interaction
				$('#foo2').carouFredSel({
					auto: false,
					width: 824,
					algin: "left",
					prev: '#prev2',
					next: '#next2',
					padding:[15,0],
					pagination: "#pager2",
					mousewheel: true,
					swipe: {
						onMouse: true,
						onTouch: true
					}
				});

				

			});
