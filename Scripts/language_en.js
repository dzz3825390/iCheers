// JavaScript Document
$(document).ready(function() {
    $('#language_en').click(function(){
		$('#bg_black').removeClass('animated fadeOut');
		$('#notice_en').removeClass('animated zoomOut');
		$('#bg_black').css('display','block');
		$('#notice_en').css('display','block');
		$('#bg_black').addClass('animated fadeIn');
		$('#notice_en').addClass('animated zoomIn');
	});
	$('#Browse_Wine').click(function(){
		$('#bg_black').removeClass('animated fadeIn');
		$('#notice_en').removeClass('animated zoomIn');
		$('#notice_en').addClass('animated zoomOut');
		$('#bg_black').addClass('animated fadeOut');
		setTimeout(function(){$('#notice_en').css('display','none');$('#bg_black').css('display','none');},500);		
	});
});


//for safari

$(document).ready(function(){

	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
	  //alert('Its Safari');
	  $(".Right_content_WeekSpecial_title").css("width","112px");
	} else {
	  //alert('Not Safari');
	}

});