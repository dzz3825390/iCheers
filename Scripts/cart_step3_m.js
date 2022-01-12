
//綁定性別Radio事件
function SexualRadio() {
	$('.Radio_Sexual').unbind('click');
	//綁定性別radio
	$('.Radio_Sexual').on('click',function(){
		var isSelfClick = $(this).hasClass('RadioBox_active')
		if (!isSelfClick) {
		   	Radiobox(this);
			if ($('.OtherSexual').hasClass('RadioBox_active')){
		   		$(this).parent().parent().next().slideDown(300);
			} else {
		   		$(this).parent().parent().next().slideUp(300);
			}
		 } else {
		   	//do nothing
		}
	});
}

//貨運時間Radio
function DeliveryTimeRadio(){
	$('.Radio_DeliveryTime').unbind('click');
	$('.Radio_DeliveryTime').on('click',function(){
		var isSelfClick = $(this).hasClass('RadioBox_active')
		if (!isSelfClick) {
			Radiobox(this);
		} else {
			//do nothing
		}
	});
}

//發票地址Radio
function InvoiceUnitRadio(){
	$('.Radio_invoice').unbind('click');
	$('.Radio_Delivery').unbind('click');
	$('#invoice_AnotherAddress_2').unbind('click');
	$('#invoice_AnotherAddress_3').unbind('click');

	//發票第一層
	//先隱藏
	//$('.Radio_invoice').next().hide();
	$('.Radio_invoice').on('click',function(){
		var isSelfClick = $(this).hasClass('RadioBox_active')
		if (!isSelfClick) {
		   	Radiobox(this);
		   	$('.invoice_hide').css('display','none');
		   	$('.Radio_invoice_unit').removeClass('RadioBox_active');
		   	$('.Radio_invoice').next().css('display','none');
		   	$(this).next().slideDown(300);
		} else {
		   	//do nothing
		}
	});

	//發票寄送第二層Radio
	$('.Radio_invoice_unit').on('click',function(){
		var isSelfClick = $(this).hasClass('RadioBox_active')
		if (!isSelfClick) {
		   			
			var RidaoType = $(this).attr('id');
		   	switch(RidaoType){
		   		case 'invoice_AnotherAddress_2':
		   		Radiobox(this);
		   		$('.invoice_hide').css('display','none');
		   		$(this).parent().next().slideDown(300);
		   		break;

		   		case 'invoice_SameAddress_2':
		   		Radiobox(this);
		   		$('.invoice_hide').css('display','none');
		   		$(this).parent().next().slideUp(300);
		   		break;

		   		case 'invoice_AnotherAddress_3':
		   		Radiobox(this);
		   		$(this).parent().next().slideDown(300);
		   		break;

		   		case 'invoice_SameAddress_3':
		   		Radiobox(this);
		   		$(this).parent().next().slideUp(300);
		   		break;

		   		case 'electroic_invoice_phone':
		   		Radiobox(this);
		   		$('.invoice_hide').css('display','none');
		    	$('.electroic_invoice_input_phone').slideDown(300);
		    	break;

		    	case 'electroic_invoice_idcard':
		    	Radiobox(this);
		    	$('.invoice_hide').css('display','none');
		    	$('.electroic_invoice_input_idcard').slideDown(300);
		    	break;

		    	case 'invoice_donate_other':
		    	Radiobox(this);
		    	$('.invoice_hide').css('display','none');
		    	$('.invoice_donate_other_input').slideDown(300);
		    	break;

		    	case undefined: 
		    	Radiobox(this);
		    	$('.invoice_hide').css('display','none');
		    	break;
		   	}

		   			
		} else {
		   			//do nothing
		}
	});
}

//checkbox綁定
function CheckboxBind(){
	$('.option_check').unbind('click');
	$('.option_check').click(function(){
		$(this).find('.icon_check').toggleClass('active');
		//紙袋
		if ($('#Checkbox_Paperbag').find('.icon_check').hasClass('active')){
		    $('.number_paperbag span').css('display','inline');
		} else{
		    $('.number_paperbag span').css('display','none');
		}
	});
}


//重算收件人地址下拉寬度
function RecordedAddressSelectorWidth(BTNID){
	var intBrowserW = 0;

	//瀏覽器內容高度
	var intBrowserH = 0;

	//#region 取得瀏覽器內容寬度/高度
	if (document.documentElement && document.documentElement.clientWidth != 0 && document.documentElement.clientHeight != 0) {
		intBrowserW = document.documentElement.clientWidth;
		intBrowserH = document.documentElement.clientHeight;
	} else {
		intBrowserW = document.body.clientWidth;
		intBrowserH = document.body.clientHeight;
	}

	if (intBrowserW < 768) {
		var RecordedAddressSelectorWidth = $('.form_Recorded').width() - BTNID.outerWidth(true) - 8;

		$('#RecordedAddress_Selector').css('width',RecordedAddressSelectorWidth);
	}
}

//重算常用公司下拉寬度
function RecordedCompanyInfoSelectorWidth(BTNID){
	var intBrowserW = 0;

	//瀏覽器內容高度
	var intBrowserH = 0;

	//#region 取得瀏覽器內容寬度/高度
	if (document.documentElement && document.documentElement.clientWidth != 0 && document.documentElement.clientHeight != 0) {
		intBrowserW = document.documentElement.clientWidth;
		intBrowserH = document.documentElement.clientHeight;
	} else {
		intBrowserW = document.body.clientWidth;
		intBrowserH = document.body.clientHeight;
	}

	if (intBrowserW < 768) {
		var RecordedCompanyInfoSelectorWidth = $('.form_Recorded').width() - BTNID.outerWidth(true) - 8;

		$('#RecordedCompany_Selector').css('width',RecordedCompanyInfoSelectorWidth);
	}


}



//dropdown展開/收合
function DropdownBind(){
	$('.dropdown').unbind('click');
	$('.dropdown').click(function(){
		//check open
		var isShow = $(this).hasClass('dropdown_show');
		var DropdownExtend = $(this).find('.dropdown_extend');
		if (isShow) {

		} else {
			$(this).addClass('dropdown_show');
			DropdownExtend.css('display','block');
			var isDropdownExtendScroll = false;
			//set isDropdownExtendScroll = true for check is dropdown scroll
			DropdownExtend.scroll(function(){
				isDropdownExtendScroll = true;
				//console.log(isDropdownExtendScroll);
				//console.log('scroll');
			});
			$(window).on('touchend.checkclick',function(e){
				//須改js偵測是否為scroll 若操作方法為scroll則不關閉下拉選單
				//使用變數承接e.target系列以便於巢狀內使用
				var isOption = e.target.className;
				var OptionText = e.target.innerHTML;
				var EventTarget = $(e.target);
				
				//100毫秒後執行判斷，避免過快執行
				setTimeout(function(){
					//console.log(isDropdownExtendScroll);
					if (isDropdownExtendScroll) {
						//console.log('hi');
						isDropdownExtendScroll = false;
					} else {
						$('.dropdown').removeClass('dropdown_show');
						$('.dropdown_extend').css('display','none');
						if (isOption == 'dropdown_option') {
							EventTarget.parent().parent().find('.dropdown_text span').text(OptionText);

							//先寫在這邊，覺得不是很好，有時間再想想 一樣要用settimeout去檢查內容改變
							if (OptionText == '澎湖縣' || OptionText == '連江縣' || OptionText == '金門縣') {
						        $('#DeliveryInfo_Address').next('.NoticeText').css('display','block');
						    } else {
						        $('#DeliveryInfo_Address').next('.NoticeText').css('display','none');
						    }
							
						} else {
							
						}
						isDropdownExtendScroll = false;
						$(window).off('touchend.checkclick');
					}
				},100);
		
			});
		}

	});

	
	
}
	

//修改訂購人資訊
function PurchaseInfoEdit (){
	HasPurchaseInfo = false;
	$('#PurchaseInfo_BTNEdit').css('display','none');
	var PurchaseInfo_Name = $('#PurchaseInfo_Name').text();
	var PurchaseInfo_Sex = $('#PurchaseInfo_Sex').attr('sexual');
	var PurchaseInfo_OtherSexualText = $('#PurchaseInfo_OtherSexualText').text();
	var PurchaseInfo_Phone = $('#PurchaseInfo_Phone').text();
	var PurchaseInfo_Address_PostalCode = $('#PurchaseInfo_Address').text().split(/[^0-9a-zA-Z]+/g)[0];
	var PurchaseInfo_Address_District = $('#PurchaseInfo_Address').text().substring(6,9);
	var PurchaseInfo_Address_City = $('#PurchaseInfo_Address').text().substring(3,6);
	var PurchaseInfo_Address_Other = $('#PurchaseInfo_Address').text().slice(9);

	//清空
    $('#Form_PurchaseInfo .recorded_data').text('');

    //訂購人姓名
    $('#Form_PurchaseInfo .recorded_data').append('<div class="cart_form_row"><div class="formTitle">您的大名</div><input id="PurchaseInfo_Name" type="text" name="" value="'+PurchaseInfo_Name+'"></div>');

    //訂購人姓名
    if (PurchaseInfo_Sex == 'Male'){
        $('#Form_PurchaseInfo .recorded_data').append('<div class="cart_form_row"><div class="formTitle">怎麼稱呼您</div><div class="Radio_Sexual_row" id="PurchaseInfo_Sex"><div class="RadioBox Radio_Sexual RadioBox_active" name="sex" sexual="Male">先生</div><div class="RadioBox Radio_Sexual" name="sex" sexual="Female">小姐</div><div class="RadioBox Radio_Sexual OtherSexual" name="sex" sexual="Other">其他</div></div></div><div class="cart_form_row" style="display:none;margin-top: 0;"><input type="text" name="sex" value="" id="PurchaseInfo_OtherSexualText"></div>');
    } 
    else if (PurchaseInfo_Sex == 'Female'){
        $('#Form_PurchaseInfo .recorded_data').append('<div class="cart_form_row"><div class="formTitle">怎麼稱呼您</div><div class="Radio_Sexual_row" id="PurchaseInfo_Sex"><div class="RadioBox Radio_Sexual" name="sex" sexual="Male">先生</div><div class="RadioBox Radio_Sexual RadioBox_active" name="sex" sexual="Female">小姐</div><div class="RadioBox Radio_Sexual OtherSexual" name="sex" sexual="Other">其他</div></div></div><div class="cart_form_row" style="display:none;margin-top: 0;"><input type="text" name="sex" value="" id="PurchaseInfo_OtherSexualText"></div>');
        
    } else {
		$('#Form_PurchaseInfo .recorded_data').append('<div class="cart_form_row"><div class="formTitle">怎麼稱呼您</div><div class="Radio_Sexual_row" id="PurchaseInfo_Sex"><div class="RadioBox Radio_Sexual" name="sex" sexual="Male">先生</div><div class="RadioBox Radio_Sexual" name="sex" sexual ="Female">小姐</div><div class="RadioBox Radio_Sexual OtherSexual RadioBox_active" name="sex" sexual="Other">其他</div></div></div><div class="cart_form_row" style="margin-top: 0;"><input type="text" name="sex" value="'+PurchaseInfo_OtherSexualText+'" id="PurchaseInfo_OtherSexualText"></div>');
		   		
    }

    //訂購人電話
    $('#Form_PurchaseInfo .recorded_data').append('<div class="cart_form_row"><div class="formTitle">連絡電話</div><input id="PurchaseInfo_Phone" type="text" name="" value="'+PurchaseInfo_Phone+'"></div>');

    //訂購人地址
    $('#Form_PurchaseInfo .recorded_data').append('<div class="cart_form_row form_Address"><div class="formTitle">訂購人地址</div><div id="PurchaseInfo_Address"><div class="dropdown district"><div class="dropdown_text"><span id="PurchaseInfo_AddressCity">'+PurchaseInfo_Address_City+'</span></div><div class="dropdown_extend"><div class="dropdown_option">台北市</div><div class="dropdown_option">新北市</div><div class="dropdown_option">桃園市</div><div class="dropdown_option">澎湖縣</div><div class="dropdown_option">連江縣</div><div class="dropdown_option">金門縣</div><div class="dropdown_option">台北市</div><div class="dropdown_option">新北市</div><div class="dropdown_option">桃園市</div></div></div><div class="dropdown district"><div class="dropdown_text"><span id="PurchaseInfo_AddressDistrict">'+PurchaseInfo_Address_PostalCode+'&nbsp;'+PurchaseInfo_Address_District+'</span></div><div class="dropdown_extend"><div class="dropdown_option">aaa</div><div class="dropdown_option">bbb</div><div class="dropdown_option">ccc</div></div></div><input type="text" id="PurchaseInfo_AddressOther" value="'+PurchaseInfo_Address_Other+'"></div>');
    
    DropdownBind();
    SexualRadio();
} 

//修改收件人地址
function DeliveryInfoEdit (){
	$('#DeliveryInfo_BTNEdit').css('display','none');
	$('#DeliveryInfo_BTNSave').css('display','flex');
	RecordedAddressSelectorWidth($('#DeliveryInfo_BTNSave'));
	var DeliveryInfo_Name = $('#DeliveryInfo_Name').text();
	var DeliveryInfo_Sex = $('#DeliveryInfo_Sex').attr('sexual');
	var DeliveryInfo_OtherSexulText = $('#DeliveryInfo_OtherSexualText').text();
	var DeliveryInfo_Phone = $('#DeliveryInfo_Phone').text();
	var DeliveryInfo_Address_PostalCode = $('#DeliveryInfo_Address').text().split(/[^0-9a-zA-Z]+/g)[0];
	var DeliveryInfo_Address_District = $('#DeliveryInfo_Address').text().substring(6,9);
	var DeliveryInfo_Address_City = $('#DeliveryInfo_Address').text().substring(3,6);
	var DeliveryInfo_Address_Other = $('#DeliveryInfo_Address').text().slice(9);
	var DeliveryInfo_Time = $('#DeliveryInfo_Time').text();
    var DeliveryInfo_Date = $('#DeliveryInfo_Date').text();    	
    var DeliveryInfo_BuildingGuardCollect = $('#BuildingGuardCollect').text();
    var DeliveryInfo_ReuseBox = $('#ReuseBox').text();
    var DeliveryInfo_ReusePaperMaterial = $('#ReusePaperMaterial').text();

    var DeliveryInfo_FormStatus = $('#Form_RecordedAddress').attr('formstatus');


    //清空
    $('#Form_RecordedAddress .recorded_data').text('');

    //收件人姓名
    $('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row"><div class="formTitle">收件人大名</div><input id="DeliveryInfo_Name" type="text" name="" value="'+DeliveryInfo_Name+'"></div>');

    //收件人性別
    if (DeliveryInfo_Sex == 'Male'){
        $('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row"><div class="formTitle">怎麼稱呼收件人</div><div class="Radio_Sexual_row" id="DeliveryInfo_Sex"><div class="RadioBox Radio_Sexual RadioBox_active" name="sex" sexual="Male">先生</div><div class="RadioBox Radio_Sexual" name="sex" sexual="Female">小姐</div><div class="RadioBox Radio_Sexual OtherSexual" name="sex" sexual="Other">其他</div></div></div><div class="cart_form_row" style="display:none;margin-top: 0;"><input type="text" name="sex" value="" id="DeliveryInfo_OtherSexualText"></div>');
    } 
    else if (DeliveryInfo_Sex == 'Female'){
        $('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row"><div class="formTitle">怎麼稱呼收件人</div><div class="Radio_Sexual_row" id="DeliveryInfo_Sex"><div class="RadioBox Radio_Sexual" name="sex" sexual="Male">先生</div><div class="RadioBox Radio_Sexual RadioBox_active" name="sex" sexual="Female">小姐</div><div class="RadioBox Radio_Sexual OtherSexual" name="sex" sexual="Other">其他</div></div></div><div class="cart_form_row" style="display:none;margin-top: 0;"><input type="text" name="sex" value="" id="DeliveryInfo_OtherSexualText"></div>');
        
    } else {
		$('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row"><div class="formTitle">怎麼稱呼收件人</div><div class="Radio_Sexual_row" id="DeliveryInfo_Sex"><div class="RadioBox Radio_Sexual" name="sex" sexual="Male">先生</div><div class="RadioBox Radio_Sexual" name="sex" sexual ="Female">小姐</div><div class="RadioBox Radio_Sexual OtherSexual RadioBox_active" name="sex" sexual="Other">其他</div></div></div><div class="cart_form_row" style="margin-top: 0;"><input type="text" name="sex" value="'+DeliveryInfo_OtherSexulText+'" id="DeliveryInfo_OtherSexualText"></div>');
		    		
    }

    //收件人電話
    $('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row"><div class="formTitle">收件人連絡電話</div><input id="DeliveryInfo_Phone" type="text" name="" value="'+DeliveryInfo_Phone+'"></div>');

    //收件人地址
    if (DeliveryInfo_FormStatus == 'NewCustomers'){
    	$('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row form_Address"><div class="formTitle">收件人地址</div><div id="DeliveryInfo_Address"><div class="dropdown district"><div class="dropdown_text"><span>'+DeliveryInfo_Address_City+'</span></div><div class="dropdown_extend"><div class="dropdown_option">台北市</div><div class="dropdown_option">新北市</div><div class="dropdown_option">桃園市</div><div class="dropdown_option">澎湖縣</div><div class="dropdown_option">連江縣</div><div class="dropdown_option">金門縣</div><div class="dropdown_option">台北市</div><div class="dropdown_option">新北市</div><div class="dropdown_option">桃園市</div></div></div><div class="dropdown district"><div class="dropdown_text"><span>'+DeliveryInfo_Address_PostalCode+'&nbsp;'+DeliveryInfo_Address_District+'</span></div><div class="dropdown_extend"><div class="dropdown_option">aaa</div><div class="dropdown_option">bbb</div><div class="dropdown_option">ccc</div></div></div><input type="text" value="'+DeliveryInfo_Address_Other+'"></div><div class="NoticeText">*離島冷藏宅配將統一收取200元運費，離島訂單恕無法享有滿額免運費優惠。</div><div class="checkbox_layout" id="BuildingGuardCollect"><div class="option_check"><div class="icon_check"></div></div><div class="checkbox_text">管理員可代收</div></div>');
	    
    } else {
    	//DeliveryInfo_BuildingGuardCollect=空字串帶表管理員代收未勾選
    	if (DeliveryInfo_BuildingGuardCollect == ''){
	    	$('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row form_Address"><div class="formTitle">收件人地址</div><div id="DeliveryInfo_Address"><div class="dropdown district"><div class="dropdown_text"><span>'+DeliveryInfo_Address_City+'</span></div><div class="dropdown_extend"><div class="dropdown_option">台北市</div><div class="dropdown_option">新北市</div><div class="dropdown_option">桃園市</div><div class="dropdown_option">澎湖縣</div><div class="dropdown_option">連江縣</div><div class="dropdown_option">金門縣</div><div class="dropdown_option">台北市</div><div class="dropdown_option">新北市</div><div class="dropdown_option">桃園市</div></div></div><div class="dropdown district"><div class="dropdown_text"><span>'+DeliveryInfo_Address_PostalCode+'&nbsp;'+DeliveryInfo_Address_District+'</span></div><div class="dropdown_extend"><div class="dropdown_option">aaa</div><div class="dropdown_option">bbb</div><div class="dropdown_option">ccc</div></div></div><input type="text" value="'+DeliveryInfo_Address_Other+'"></div><div class="NoticeText">*離島冷藏宅配將統一收取200元運費，離島訂單恕無法享有滿額免運費優惠。</div><div class="checkbox_layout" id="BuildingGuardCollect"><div class="option_check"><div class="icon_check"></div></div><div class="checkbox_text">管理員可代收</div></div>');
	    	
	    } else {
	    	$('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row form_Address"><div class="formTitle">收件人地址</div><div id="DeliveryInfo_Address"><div class="dropdown district"><div class="dropdown_text"><span>'+DeliveryInfo_Address_City+'</span></div><div class="dropdown_extend"><div class="dropdown_option">台北市</div><div class="dropdown_option">新北市</div><div class="dropdown_option">桃園市</div><div class="dropdown_option">澎湖縣</div><div class="dropdown_option">連江縣</div><div class="dropdown_option">金門縣</div><div class="dropdown_option">台北市</div><div class="dropdown_option">新北市</div><div class="dropdown_option">桃園市</div></div></div><div class="dropdown district"><div class="dropdown_text"><span>'+DeliveryInfo_Address_PostalCode+'&nbsp;'+DeliveryInfo_Address_District+'</span></div><div class="dropdown_extend"><div class="dropdown_option">aaa</div><div class="dropdown_option">bbb</div><div class="dropdown_option">ccc</div></div></div><input type="text" value="'+DeliveryInfo_Address_Other+'"></div><div class="NoticeText">*離島冷藏宅配將統一收取200元運費，離島訂單恕無法享有滿額免運費優惠。</div><div class="checkbox_layout" id="BuildingGuardCollect"><div class="option_check"><div class="icon_check"></div></div><div class="checkbox_text">管理員可代收</div></div>');
	    	
	    	$('#BuildingGuardCollect .option_check').click();
	    	
	    }
    }
    
    //離島運費顯示/隱藏
    if (DeliveryInfo_Address_City == '澎湖縣' || DeliveryInfo_Address_City == '連江縣' || DeliveryInfo_Address_City == '金門縣') {
        $('#DeliveryInfo_Address').next('.NoticeText').css('display','block');
    } else {
        $('#DeliveryInfo_Address').next('.NoticeText').css('display','none');
    }

    //希望配送時段
    if (DeliveryInfo_Time == '上午(08~13時)'){
        $('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row"><div class="formTitle">希望配送時段</div><div class="Radio_Delivery_row" id="DeliveryInfo_Time"><div class="RadioBox Radio_DeliveryTime RadioBox_active" name="deliverytime">上午(08~13時)</div><div class="RadioBox Radio_DeliveryTime" name="deliverytime">下午(14~18時)</div>	<div class="RadioBox Radio_DeliveryTime" name="deliverytime">皆可</div></div></div>');
        
    } else if (DeliveryInfo_Time == '下午(14~18時)') {
        $('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row"><div class="formTitle">希望配送時段</div><div class="Radio_Delivery_row" id="DeliveryInfo_Time"><div class="RadioBox Radio_DeliveryTime" name="deliverytime">上午(08~13時)</div><div class="RadioBox Radio_DeliveryTime RadioBox_active" name="deliverytime">下午(14~18時)</div><div class="RadioBox Radio_DeliveryTime" name="deliverytime">皆可</div></div></div>');
   		
    } else if (DeliveryInfo_Time == '皆可'){
        $('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row"><div class="formTitle">希望配送時段</div><div class="Radio_Delivery_row" id="DeliveryInfo_Time"><div class="RadioBox Radio_DeliveryTime" name="deliverytime">上午(08~13時)</div><div class="RadioBox Radio_DeliveryTime" name="deliverytime">下午(14~18時)</div><div class="RadioBox Radio_DeliveryTime RadioBox_active" name="deliverytime">皆可</div></div></div>');
        
    } else {
    	$('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row"><div class="formTitle">希望配送時段</div><div class="Radio_Delivery_row" id="DeliveryInfo_Time"><div class="RadioBox Radio_DeliveryTime" name="deliverytime">上午(08~13時)</div><div class="RadioBox Radio_DeliveryTime" name="deliverytime">下午(14~18時)</div><div class="RadioBox Radio_DeliveryTime" name="deliverytime">皆可</div></div></div>');
        
    }

   	//希望配送星期
   	if (DeliveryInfo_Date == '平日'){
   		$('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row"><div class="formTitle">希望配送星期</div><div class="Radio_Delivery_row" id="DeliveryInfo_Date"><div class="RadioBox Radio_DeliveryTime RadioBox_active" name="deliverydate">平日</div><div class="RadioBox Radio_DeliveryTime" name="deliverydate">假日</div><div class="RadioBox Radio_DeliveryTime" name="deliverydate">皆可</div></div></div>');
   		
   	} else if (DeliveryInfo_Date == '假日'){
   		$('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row"><div class="formTitle">希望配送星期</div><div class="Radio_Delivery_row" id="DeliveryInfo_Date"><div class="RadioBox Radio_DeliveryTime" name="deliverydate">平日</div><div class="RadioBox Radio_DeliveryTime RadioBox_active" name="deliverydate">假日</div><div class="RadioBox Radio_DeliveryTime" name="deliverydate">皆可</div></div></div>');        		
   		
   	} else if (DeliveryInfo_Date == '皆可'){
   		$('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row"><div class="formTitle">希望配送星期</div><div class="Radio_Delivery_row" id="DeliveryInfo_Date"><div class="RadioBox Radio_DeliveryTime" name="deliverydate">平日</div><div class="RadioBox Radio_DeliveryTime" name="deliverydate">假日</div><div class="RadioBox Radio_DeliveryTime RadioBox_active" name="deliverydate">皆可</div></div></div>');        		        		
   		
   	} else {
   		$('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row"><div class="formTitle">希望配送星期</div><div class="Radio_Delivery_row" id="DeliveryInfo_Date"><div class="RadioBox Radio_DeliveryTime" name="deliverydate">平日</div><div class="RadioBox Radio_DeliveryTime" name="deliverydate">假日</div><div class="RadioBox Radio_DeliveryTime" name="deliverydate">皆可</div></div></div>');        		        		   		
   		
   	}
        	
   	//環保選項
   	if (DeliveryInfo_FormStatus == 'NewCustomers'){

   	} else {
   		$('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row" id="ECO_Options"><div class="formTitle">環保選項</div></div>')

   		//紙箱
   		if (DeliveryInfo_ReuseBox){
	        $('#Form_RecordedAddress .recorded_data #ECO_Options').append('<div class="checkbox_layout" id="ReuseBox"><div class="option_check"><div class="icon_check active"></div></div><div class="checkbox_text">我愛地球，我選擇用乾淨堅固的二手紙箱出貨。</div></div>');
	    } else {
	        $('#Form_RecordedAddress .recorded_data #ECO_Options').append('<div class="checkbox_layout" id="ReuseBox"><div class="option_check"><div class="icon_check"></div></div><div class="checkbox_text">我愛地球，我選擇用乾淨堅固的二手紙箱出貨。</div></div>');
	    }

	    //環保包材
	    
	    if (DeliveryInfo_ReusePaperMaterial) {
	        $('#Form_RecordedAddress .recorded_data #ECO_Options').append('<div class="checkbox_layout" id="ReusePaperMaterial"><div class="option_check"><div class="icon_check active"></div></div><div class="checkbox_text">我愛地球，我選擇用回收紙緩衝材(取代塑膠氣泡袋)。<a href="#">示意圖</a></div></div>');
	    } else {
	        $('#Form_RecordedAddress .recorded_data #ECO_Options').append('<div class="checkbox_layout" id="ReusePaperMaterial"><div class="option_check"><div class="icon_check"></div></div><div class="checkbox_text">我愛地球，我選擇用回收紙緩衝材(取代塑膠氣泡袋)。<a href="#">示意圖</a></div></div>');
	    }
   	}

   	SexualRadio();
   	DeliveryTimeRadio();
   	CheckboxBind();
   	DropdownBind();
}

//新增常用地址
function DeliveryInfoAddNew(intBrowserW){
	$('#DeliveryInfo_BTNEdit').css('display','none');
	$('#DeliveryInfo_BTNSave').css('display','flex');

	RecordedAddressSelectorWidth($('#DeliveryInfo_BTNSave'));
	var DeliveryInfo_FormStatus = $('#Form_RecordedAddress').attr('formstatus');

	//清空
    $('#Form_RecordedAddress .recorded_data').text('');

    $('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row"><div class="formTitle">收件人大名</div><input id="DeliveryInfo_Name" type="text" name="" value=""></div>');
    $('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row"><div class="formTitle">怎麼稱呼收件人</div><div class="Radio_Sexual_row" id="DeliveryInfo_Sex"><div class="RadioBox Radio_Sexual" name="sex" sexual="Male">先生</div><div class="RadioBox Radio_Sexual" name="sex" sexual="Female">小姐</div><div class="RadioBox Radio_Sexual OtherSexual" name="sex" sexual="Other">其他</div></div></div>');
    $('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row" style="display:none;margin-top: 0;"><input type="text" name="sex" value="" id="DeliveryInfo_OtherSexualText"></div>');
    $('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row"><div class="formTitle">收件人連絡電話</div><input id="DeliveryInfo_Phone" type="text" name="" value=""></div>');
    $('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row form_Address"><div class="formTitle">收件人地址</div><div id="DeliveryInfo_Address"><div class="dropdown district"><div class="dropdown_text"><span>新北市</span></div><div class="dropdown_extend"><div class="dropdown_option">台北市</div><div class="dropdown_option">新北市</div><div class="dropdown_option">桃園市</div><div class="dropdown_option">澎湖縣</div><div class="dropdown_option">連江縣</div><div class="dropdown_option">金門縣</div><div class="dropdown_option">台北市</div><div class="dropdown_option">新北市</div><div class="dropdown_option">桃園市</div></div></div><div class="dropdown district"><div class="dropdown_text"><span>234&nbsp;永和區</span></div><div class="dropdown_extend"><div class="dropdown_option">aaa</div><div class="dropdown_option">bbb</div><div class="dropdown_option">ccc</div></div></div><input type="text" value=""></div><div class="NoticeText" style="display: none;">*離島冷藏宅配將統一收取200元運費，離島訂單恕無法享有滿額免運費優惠。</div><div class="checkbox_layout" id="BuildingGuardCollect"><div class="option_check"><div class="icon_check"></div></div><div class="checkbox_text">管理員可代收</div></div></div>');

    if (DeliveryInfo_FormStatus == 'NewCustomers') {
    	
    } else {
	    $('#Form_RecordedAddress .recorded_data').append('<div class="cart_form_row" id="ECO_Options"><div class="formTitle">環保選項</div><div class="checkbox_layout" id="ReuseBox"><div class="option_check"><div class="icon_check"></div></div><div class="checkbox_text">我愛地球，我選擇用乾淨堅固的二手紙箱出貨。</div></div><div class="checkbox_layout" id="ReusePaperMaterial"><div class="option_check"><div class="icon_check"></div></div><div class="checkbox_text">我愛地球，我選擇用回收紙緩衝材(取代塑膠氣泡袋)。<a href="#">示意圖</a></div></div></div>')

    }

    SexualRadio();
   	DeliveryTimeRadio();
   	CheckboxBind();
   	DropdownBind();
}


//代入常用地址
function ImportDeliveryInfo(data){
	$('#DeliveryInfo_BTNEdit').css('display','block');
	$('#DeliveryInfo_BTNSave').css('display','none');


	RecordedAddressSelectorWidth($('#DeliveryInfo_BTNEdit'));

	var DeliveryInfo_Name = data[0].Name;
    var DeliveryInfo_Sex = data[0].Sex;
    var OtherSexualText = data[0].OtherSexualText;
    var DeliveryInfo_Phone = data[0].Phone;
    var DeliveryInfo_Address = data[0].Address;
    var DeliveryInfo_AddressCity = data[0].Address.substring(3,6);
    var DeliveryInfo_Time = data[0].Time;
    var DeliveryInfo_Date = data[0].Date;
    var DeliveryInfo_BuildingGuardCollect = data[0].BuildingGuardCollect;
    var DeliveryInfo_ReuseBox = data[0].ReuseBox;
    var DeliveryInfo_ReusePaperMaterial = data[0].ReusePaperMaterial;
    //清空
    $('#Form_RecordedAddress .recorded_data').text('');

    //收件人姓名性別
    if (DeliveryInfo_Sex == 'Male'){
        $('#Form_RecordedAddress .recorded_data').append('<div class="text"><span id="DeliveryInfo_Name" style="margin-left:0;">'+DeliveryInfo_Name+'</span><span id="DeliveryInfo_Sex" sexual="Male">&nbsp;先生<span id="DeliveryInfo_OtherSexualText"></span></span></div>');
    } 
    else if (DeliveryInfo_Sex == 'Female'){
        $('#Form_RecordedAddress .recorded_data').append('<div class="text"><span id="DeliveryInfo_Name" style="margin-left:0;">'+DeliveryInfo_Name+'</span><span id="DeliveryInfo_Sex" sexual="Female">&nbsp;小姐<span id="DeliveryInfo_OtherSexualText"></span></span></div>');
    } else {
        $('#Form_RecordedAddress .recorded_data').append('<div class="text"><span id="DeliveryInfo_Name" style="margin-left:0;">'+DeliveryInfo_Name+'</span><span id="DeliveryInfo_Sex" sexual="Other">&nbsp;<span id="DeliveryInfo_OtherSexualText">'+OtherSexualText+'</span></span></div>');    		
    }

    //收件人電話
    $('#Form_RecordedAddress .recorded_data').append('<div class="text" id="DeliveryInfo_Phone">'+DeliveryInfo_Phone+'</div>');

    //收件人地址
    $('#Form_RecordedAddress .recorded_data').append('<div class="text" id="DeliveryInfo_Address">'+DeliveryInfo_Address+'</div>');

    //離島運費顯示/隱藏
    if (DeliveryInfo_AddressCity == '澎湖縣' || DeliveryInfo_AddressCity == '連江縣' || DeliveryInfo_AddressCity == '金門縣') {
        $('#Form_RecordedAddress .recorded_data').append('<div class="NoticeText">*離島冷藏宅配將統一收取200元運費，離島訂單恕無法享有滿額免運費優惠。</div>');
    } else {
        
    }

    //管理員代收
	if (DeliveryInfo_BuildingGuardCollect) {
		$('#Form_RecordedAddress .recorded_data').append('<div class="text" id="BuildingGuardCollect">✓&nbsp;管理員可代收</div>');
	} else if (DeliveryInfo_BuildingGuardCollect == false){
		//$('#Form_RecordedAddress .recorded_data').append('<div class="checkbox_layout" id="BuildingGuardCollect"><div class="option_check"><div class="icon_check"></div></div><div class="checkbox_text">管理員可代收</div></div>');
	} else {
		$('#Form_RecordedAddress .recorded_data').append('<div class="checkbox_layout" id="BuildingGuardCollect"><div class="option_check"><div class="icon_check"></div></div><div class="checkbox_text">管理員可代收</div></div>');

	}


    //希望配送時段
    if (DeliveryInfo_Time == '') {
    	
    } else {
    	if (DeliveryInfo_Time == '上午(08~13時)'){
	        $('#Form_RecordedAddress .recorded_data').append('<div class="text">希望於<span id="DeliveryInfo_Time">上午(08~13時)</span>配送</div>');
	        DeliveryTimeRadio();
	    } else if (DeliveryInfo_Time == '下午(14~18時)') {
	        $('#Form_RecordedAddress .recorded_data').append('<div class="text">希望於<span id="DeliveryInfo_Time">下午(14~18時)</span>配送</div>');
	   		DeliveryTimeRadio();
	    } else {
	        $('#Form_RecordedAddress .recorded_data').append('<div class="text">任何時段<span id="DeliveryInfo_Time">皆可</span>配送</div>');
	        DeliveryTimeRadio();
	    }
    }
    

   	//希望配送星期
   	if (DeliveryInfo_Date == ''){
   		
   	} else {
   		if (DeliveryInfo_Date == '平日'){
	   		$('#Form_RecordedAddress .recorded_data').append('<div class="text">希望於<span id="DeliveryInfo_Date">平日</span>配送</div>');
	   	} else if (DeliveryInfo_Date == '假日'){
	   		$('#Form_RecordedAddress .recorded_data').append('<div class="text">希望於<span id="DeliveryInfo_Date">假日</span>配送</div>');        		
	   	} else {
	   		$('#Form_RecordedAddress .recorded_data').append('<div class="text"><span id="DeliveryInfo_Date">平日、假日皆可</span>配送</div>');        		        		
	   	}
   	}


	//使用回收紙箱
	if (DeliveryInfo_ReuseBox){
	    $('#Form_RecordedAddress .recorded_data').append('<div class="text" id="ReuseBox">✓&nbsp;我愛地球，我選擇用乾淨堅固的二手紙箱出貨。</div>');
	} else if (DeliveryInfo_ReuseBox == false){
	    
	} else{

	}

	//使用環保包材
	if (DeliveryInfo_ReusePaperMaterial) {
	    $('#Form_RecordedAddress .recorded_data').append('<div class="text" id="ReusePaperMaterial">✓&nbsp;我愛地球，我選擇用回收紙緩衝材(取代塑膠氣泡袋)。<a href="#">示意圖</a></div>');
	} else {

	}
	
        	
}

//新增常用公司
function AddNewCompanyInfo(intBrowserW){
	$('#CompanyInfo_BTNEdit').css('display','none');
	$('#CompanyInfo_BTNSave').css('display','flex');

	RecordedCompanyInfoSelectorWidth($('#CompanyInfo_BTNSave'));
	var CompanyInfo_FormStatus = $('#Form_RecordedCompany').attr('formstatus');

	//清空
	$('#Form_RecordedCompany .recorded_data').text('');

	//抬頭
	$('#Form_RecordedCompany .recorded_data').append('<div class="cart_form_row"><div class="formTitle">發票抬頭</div><input type="text" value="" id="CompanyIfo_CompanyName"></div>');

	//統編
	$('#Form_RecordedCompany .recorded_data').append('<div class="cart_form_row"><div class="formTitle">統一編號</div><input type="text" value="" id="CompanyIfo_BAN"></div>');

	//寄送radio
	$('#Form_RecordedCompany .recorded_data').append('<div class="invoice_radiobox_layout"><div class="RadioBox Radio_invoice_unit" name="invoice_unit3" id="invoice_SameAddress_3"><span>隨商品寄出</span></div><div class="RadioBox Radio_invoice_unit" name="invoice_unit3" id="invoice_AnotherAddress_3"><span>發票分開寄出</span></div></div>');

	//分開寄送地址
	$('#Form_RecordedCompany .recorded_data').append('<div class="invoice_AnotherAddress invoice_hide" style="display: none;"><div class="cart_form_row"><div class="formTitle">發票收件人姓名</div><input type="text" id="CompanyInfo_Name">	</div><div class="cart_form_row form_Address"><div class="formTitle">發票收件人地址</div>	<div id="CompanyInfo_Address"><div class="dropdown district"><div class="dropdown_text"><span>縣市</span></div><div class="dropdown_extend"><div class="dropdown_option">台北市</div><div class="dropdown_option">新北市</div><div class="dropdown_option">桃園市</div></div></div><div class="dropdown district"><div class="dropdown_text"><span>鄉鎮區</span></div><div class="dropdown_extend"><div class="dropdown_option">aaa</div><div class="dropdown_option">bbb</div><div class="dropdown_option">ccc</div></div></div><input type="text" placeholder="請輸入地址"></div></div></div>');

	InvoiceUnitRadio();
   	DropdownBind();
}


//帶入常用公司
function ImportCompanyInfo(data) {
	$('#CompanyInfo_BTNEdit').css('display','block');
	$('#CompanyInfo_BTNSave').css('display','none');
	RecordedCompanyInfoSelectorWidth($('#CompanyInfo_BTNEdit'));

	var CompanyInfo_Name = data[0].Name;
	var CompanyInfo_Sex = data[0].Sex;
	var CompanyInfo_Phone = data[0].Phone;
	var CompanyInfo_Address = data[0].Address;
	var CompanyInfo_CompanyName = data[0].CompanyName;
	var CompanyInfo_BAN = data[0].BAN;
	var IsAnotherAddress = data[0].AnotherAddress;

	//清空
	$('#Form_RecordedCompany .recorded_data').text('');

	//抬頭
	$('#Form_RecordedCompany .recorded_data').append('<div class="text" id="CompanyIfo_CompanyName">'+CompanyInfo_CompanyName+'</div>');

	//統編
	$('#Form_RecordedCompany .recorded_data').append('<div class="text" id="CompanyInfo_BAN">'+CompanyInfo_BAN+'</div>');

	//發票寄送
	if (IsAnotherAddress) {
		$('#Form_RecordedCompany .recorded_data').append('<div class="text" id="CompanyInfo_InvoiceDelivery" AnotherAddress="yes">發票分開寄送至</div>');
		$('#Form_RecordedCompany .recorded_data').append('<div class="text" id="CompanyInfo_Name">'+CompanyInfo_Name+'&nbsp;收</div>');		
		$('#Form_RecordedCompany .recorded_data').append('<div class="text" id="CompanyInfo_Address">'+CompanyInfo_Address+'</div>');		

	} else {
		$('#Form_RecordedCompany .recorded_data').append('<div class="text" id="CompanyInfo_InvoiceDelivery" AnotherAddress="no">發票隨商品寄出</div>');

	}

}


function EditCompanyInfo () {
	$('#CompanyInfo_BTNEdit').css('display','none');
	$('#CompanyInfo_BTNSave').css('display','flex');
	RecordedCompanyInfoSelectorWidth($('#CompanyInfo_BTNSave'));

	var CompanyIfo_CompanyName = $('#CompanyIfo_CompanyName').text();
	var CompanyIfo_BAN = $('#CompanyInfo_BAN').text();
	var CompanyInfo_Name = $('#CompanyInfo_Name').text();
	var IsAnotherAddress = $('#CompanyInfo_InvoiceDelivery').attr('anotheraddress');
	var CompanyInfo_Address_PostalCode = $('#CompanyInfo_Address').text().split(/[^0-9a-zA-Z]+/g)[0];
	var CompanyInfo_Address_District = $('#CompanyInfo_Address').text().substring(6,9);
	var CompanyInfo_Address_City = $('#CompanyInfo_Address').text().substring(3,6);
	var CompanyInfo_Address_Other = $('#CompanyInfo_Address').text().slice(9);

	//清空
	$('#Form_RecordedCompany .recorded_data').text('');

	//抬頭
	$('#Form_RecordedCompany .recorded_data').append('<div class="cart_form_row"><div class="formTitle">發票抬頭</div><input type="text" value="'+CompanyIfo_CompanyName+'" id="CompanyIfo_CompanyName"></div>'); 	

	//統編
	$('#Form_RecordedCompany .recorded_data').append('<div class="cart_form_row"><div class="formTitle">統一編號</div><input type="text" value="'+CompanyIfo_BAN+'" id="CompanyIfo_BAN"></div>');

	//發票寄送
	if (IsAnotherAddress == 'yes'){
		$('#Form_RecordedCompany .recorded_data').append('<div class="invoice_radiobox_layout"><div class="RadioBox Radio_invoice_unit" name="invoice_unit3" id="invoice_SameAddress_3"><span>隨商品寄出</span></div><div class="RadioBox Radio_invoice_unit RadioBox_active" name="invoice_unit3" id="invoice_AnotherAddress_3"><span>發票分開寄出</span></div></div>');
		$('#Form_RecordedCompany .recorded_data').append('<div class="invoice_AnotherAddress invoice_hide"><div class="cart_form_row"><div class="formTitle">發票收件人姓名</div><input type="text" id="CompanyInfo_Name" value="'+CompanyInfo_Name+'"></div><div class="cart_form_row form_Address"><div class="formTitle">發票收件人地址</div><div id="CompanyInfo_Address"><div class="dropdown district"><div class="dropdown_text"><span>'+CompanyInfo_Address_City+'</span></div><div class="dropdown_extend"><div class="dropdown_option">台北市</div><div class="dropdown_option">新北市</div><div class="dropdown_option">桃園市</div></div></div><div class="dropdown district"><div class="dropdown_text"><span>'+CompanyInfo_Address_PostalCode+'&nbsp;'+CompanyInfo_Address_District+'</span></div><div class="dropdown_extend"><div class="dropdown_option">aaa</div><div class="dropdown_option">bbb</div><div class="dropdown_option">ccc</div></div></div><input type="text" placeholder="請輸入地址" value="'+CompanyInfo_Address_Other+'"></div></div></div>');

	} else {
		$('#Form_RecordedCompany .recorded_data').append('<div class="invoice_radiobox_layout"><div class="RadioBox Radio_invoice_unit RadioBox_active" name="invoice_unit3" id="invoice_SameAddress_3"><span>隨商品寄出</span></div><div class="RadioBox Radio_invoice_unit" name="invoice_unit3" id="invoice_AnotherAddress_3"><span>發票分開寄出</span></div></div>');
		$('#Form_RecordedCompany .recorded_data').append('<div class="invoice_AnotherAddress invoice_hide" style="display: none;"><div class="cart_form_row"><div class="formTitle">發票收件人姓名</div><input type="text" id="CompanyInfo_Name">	</div><div class="cart_form_row form_Address"><div class="formTitle">發票收件人地址</div>	<div id="CompanyInfo_Address"><div class="dropdown district"><div class="dropdown_text"><span>縣市</span></div><div class="dropdown_extend"><div class="dropdown_option">台北市</div><div class="dropdown_option">新北市</div><div class="dropdown_option">桃園市</div></div></div><div class="dropdown district"><div class="dropdown_text"><span>鄉鎮區</span></div><div class="dropdown_extend"><div class="dropdown_option">aaa</div><div class="dropdown_option">bbb</div><div class="dropdown_option">ccc</div></div></div><input type="text" placeholder="請輸入地址"></div></div></div>');
	}

	InvoiceUnitRadio();
	DropdownBind();
}