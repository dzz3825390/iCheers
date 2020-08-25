// JavaScript Document

//內文高度處理
$(document).ready(function(){
	var ShortenAAAHeight = $(".ShortenAAA").height();
	//內容高度大於450 設定高度450 隱藏多餘訊息
	if (ShortenAAAHeight >= 450){
		$(".ShortenAAA").addClass("wine_list_grape_text_height450");
	}
	//內容高度小於450 隱藏展開按鈕
	else{
		$(".wine_list_Critic_openmoreBTnN").css("display","none");
	}
});



$(function(){

		// 酒莊詳目頁 &  ＿ 展開更多按鈕
		
		var OpenNN=true;	
		$(".OpenShorten").click(function(){
				if(OpenNN==true){
					$(".ShortenAAA").addClass("ShortenBBB",800);
					$(".OpenShorten").html("收合<img src='images/icon/Menu_Close.png'>");
					OpenNN=false;	
					}else{
					$(".ShortenAAA").removeClass("ShortenBBB",800);
					$(".OpenShorten").html("展開更多<img src='images/icon/Menu_Open.png'>");
					OpenNN=true;}
			});
	
	});    




