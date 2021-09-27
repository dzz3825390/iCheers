//初始視窗
function InitPop(){

	//視窗標題
	$('.notice_title').text('');

	//視窗內容
	$('.notice_body').html('');

	$('.notice_BG').css({
		'width':'unset',
	    'height':'unset',
	    'top':'unset',
	    'left':'unset'
	});

    //瀏覽器內容寬度
    var intBrowserW = 0;
    //瀏覽器內容高度
    var intBrowserH = 0;
    //取得瀏覽器內容寬度/高度
    if (document.documentElement) {
        intBrowserW = document.documentElement.clientWidth;
        intBrowserH = document.documentElement.clientHeight;
    } else {
        intBrowserW = document.body.clientWidth;
        intBrowserH = document.body.clientHeight;
    }

    if (intBrowserW < 740) {
        $('#bg_black').css({
            'height':intBrowserH,
            'width':intBrowserW
        });
        $('#bg_black').fadeIn();
        $('#bg_black').css('display','flex');

    } else if (intBrowserW < 1200){
        $('#bg_black').css({
            'height':intBrowserH,
            'width':intBrowserW
        });
        $('#bg_black').fadeIn();
        $('#bg_black').css('display','flex');
    } else {
        //blackshow
        $('#bg_black').css({
            'height':intBrowserH - 77,
            'width':intBrowserW
        });
        $('#bg_black').fadeIn();
        $('#bg_black').css('display','flex');
    }
}

function LocatePop(PopWindowWidth){
    //瀏覽器內容寬度
    var intBrowserW = 0;
    //瀏覽器內容高度
    var intBrowserH = 0;
    //取得瀏覽器內容寬度/高度
    if (document.documentElement) {
        intBrowserW = document.documentElement.clientWidth;
        intBrowserH = document.documentElement.clientHeight;
    } else {
        intBrowserW = document.body.clientWidth;
        intBrowserH = document.body.clientHeight;
    }

    //先設定寬度 才抓高度
    if (intBrowserW < 740) {
        $('.notice_BG').css('width','90vw');
    } else if (intBrowserW < 1200) {
        $('.notice_BG').css('width','70vw');
    } else {
        $('.notice_BG').css('width',PopWindowWidth);
    }
}

//關閉視窗
function ClosePop(){
    $('body').css('overflow','auto');
	$('#bg_black').fadeOut();
}



//step1 訂單送出
function PopWindow_Submit(OrderTimeStatus){

	InitPop();

	if (OrderTimeStatus == 'normal') {
		var WindowContent = [
			'<p>依法令規定，酒類商品無法提供線上交易服務，<br/>請留下您的Email，客服夥伴將會盡快與您聯繫！</p>',
			'<div class="notice_body_input_layout"><input name="Email" type="text" style="width: 100%" placeholder="請輸入Email"><input type="checkbox" style="margin-top:10px;"><span style="font-size: 14px;font-weight:normal;margin-top: 0px;">記住我</span></div>',
			'<button class="SubmitBTN">送出</button>'
		];
	} else if (OrderTimeStatus == 'before3pm'){
		var WindowContent = [
			'<p>依法令規定，酒類商品無法提供線上交易服務，<br/>請留下您的Email，客服夥伴將會盡快與您聯繫！</p>',
			'<div class="notice_body_input_layout"><input name="Email" type="text" style="width: 100%" placeholder="請輸入Email"><input type="checkbox" style="margin-top:10px;"><span style="font-size: 14px;font-weight:normal;margin-top: 0px;">記住我</span></div>',
			'<p>快速到貨截單時間倒數計時：<span>'+'HH'+'</span>時<span>'+'MM'+'</span>分<span>'+'SS'+'</span>秒</p>',
			'<p class="hint" style="margin-top: -5px;">*逾時恕無法快速到貨！</p>',
			'<button class="SubmitBTN">快速到貨，15:00前完成付款</button><button class="SubmitBTN">一般速度出貨即可</button>'
		];
	} else if (OrderTimeStatus == 'after3pm'){
		var WindowContent = [
			'<p>依法令規定，酒類商品無法提供線上交易服務，<br/>請留下您的Email，客服夥伴將會盡快與您聯繫！</p>',
			'<div class="notice_body_input_layout"><input name="Email" type="text" style="width: 100%" placeholder="請輸入Email"><input type="checkbox" style="margin-top:10px;"><span style="font-size: 14px;font-weight:normal;margin-top: 0px;">記住我</span></div>',
			'<p>已超過快速到貨截止時間(<span>15:00</span>)，將於下個工作日安排出貨</p>',
			'<p class="hint" style="margin-top: -5px;">*逾時恕無法快速到貨！</p>',
			'<button class="SubmitBTN">快速到貨，下個工作日15:00前完成付款</button><button class="SubmitBTN">一般速度出貨即可</button>'
		];
	}

	//視窗標題
	$('.notice_title').text('發送確認信');

	//視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 500;

    LocatePop(PopWindowWidth);
    
}

//step1 訂單送出後
function PopWindow_Submited(){

	InitPop();

    var WindowContent = [
    	'<p style="text-align:center;">謝謝您的支持，<br/>若未收到來信，請至垃圾信箱確認，<br/>或連繫我們，謝謝！</p>',
    	'<a href="https://www.icheers.tw/iCheers/" target="_self" class="BackhomeBTN">回首頁</a>'
    ];

	//視窗標題
	$('.notice_title').text('稍後查看您的信箱');

	//視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 350;

    LocatePop(PopWindowWidth);
}

//step1 訂單送出後(老客戶通一方通行_已登入)
function PopWindow_Submited_VIPPass(){

    InitPop();

    var WindowContent = [
        '<img src="images/icon/icon_vippass.svg" style="width:120px;height:auto;margin:0 auto;display:block;margin-bottom:16px;">',
        '<p style="text-align:center;">系統已偵測確認您為經常消費的老客戶，<br/>適用專屬的「快速通關」功能，下單更加方便！</p>',
        '<div style="display:flex;justify-content:center;"><button class="BackhomeBTN" style="width:38%;">啟動快速通關</button></div>',
        '<div class="row flex_center"><input type="checkbox"><span class="text">以後不要再出現此提醒</span></div>',
    ];

    //視窗標題
    $('.notice_title').text('啟用快速通關功能');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 450;

    LocatePop(PopWindowWidth);
}

//step1 訂單送出後(老客戶通一方通行_未登入)
function PopWindow_Submited_VIPPass_NotLogin(){

    InitPop();

    var WindowContent = [
        '<img src="images/icon/icon_vippass.svg" style="width:120px;height:auto;margin:0 auto;display:block;margin-bottom:16px;">',
        '<p style="text-align:center;">系統已偵測確認您為經常消費的老客戶，<br/>適用專屬的「快速通關」功能，下單更加方便！</p>',
        '<div style="display:flex;justify-content:center;margin-top:20px;"><button class="GrayBTN" style="width:43%;margin:0;margin-right:10px;">沒關係謝謝</button><button class="BackhomeBTN" style="margin:0;margin-right:10px;width:43%;">登入並啟動快速通關</button></div>',
        
    ];

    //視窗標題
    $('.notice_title').text('啟用快速通關功能');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 500;

    LocatePop(PopWindowWidth);
}

//老客戶刷卡
function VIPPass_Creditcard(){
    InitPop();

    var WindowContent = [
        '<p style="text-align:center;">請選擇付款方式</p>',
        '<div class="onlinepay_box"><div class="one_option"><a href="#"><img class="qrcode" src="https://www.icheers.tw/iCheers/Content/images/letter_qrcode_sample.jpg"></a><a href="#"><img class="icon" src="https://www.icheers.tw/iCheers/Content/images/letter_creditcard.jpg"></a></div><div class="one_option"><a href="#"><img class="qrcode" src="https://www.icheers.tw/iCheers/Content/images/letter_qrcode_sample.jpg"></a><a href="#"><img class="icon" src="https://www.icheers.tw/iCheers/Content/images/letter_applepay.jpg"></a></div><div class="one_option"><a href="#"><img class="qrcode" src="https://www.icheers.tw/iCheers/Content/images/letter_qrcode_sample.jpg"></a><a href="#"><img class="icon" src="https://www.icheers.tw/iCheers/Content/images/letter_googlepay.jpg"></a></div></div>',
        
    ];

    //視窗標題
    $('.notice_title').text('刷卡/行動支付');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 450;

    LocatePop(PopWindowWidth);
}


//會員登入
function MemberLogin(){

	InitPop();
    var WindowContent = [
    	'<div class="member_login_row"><div class="title">帳號</div><input type="text"></div>',
    	'<div class="member_login_row"><div class="title"></div><input type="checkbox"><span>記住我</span></div>',
    	'<div class="member_login_row"><div class="title">密碼</div><input type="password"></div>',
    	'<div class="member_login_row"><div class="title">驗證碼</div><input type="text" style="width:120px;"><img src="images/Captcha.gif" class="captcha"><button class="reload"></button></div>',
    	'<div class="member_login_row"><a href="#" style="margin-left: calc(15% + 16px);">忘記密碼</a><a href="#">申請帳號</a></div>',
    	'<div class="notice_btn_row"><button class="notice_confirmBTN">確認</button></div>'
    ]

    //視窗標題
	$('.notice_title').text('會員登入');

	//視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 450;

    LocatePop(PopWindowWidth);
}

//bonus
function UseBonus(BonusData){

	InitPop();

    var WindowContent = [
    	'<p>您目前的紅利累計有<span>'+BonusData+'</span>點，可折抵<span>'+BonusData+'</span>元。</p>',
    	'<p>本次折抵點數：</p>',
    	'<div class="notice_body_input_layout"><input name="Bonus" type="text" style="width: 100%" value="'+BonusData+'"></div>',
    	'<div class="notice_btn_row"><button class="notice_confirmBTN">確認</button></div>'
    ]

    //視窗標題
	$('.notice_title').text('e-coupon優惠');

	//視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 350;

    LocatePop(PopWindowWidth);
}

//e-coupon
function UseEcoupon(){

	InitPop();

    var WindowContent = [
    	'<p>請輸入e-Coupon號碼：</p>',
    	'<div class="notice_body_input_layout"><input name="Ecoupon" type="text" style="width: 100%"></div>',
    	'<div class="notice_btn_row"><button class="notice_confirmBTN">確認</button></div>'
    ]

    //視窗標題
	$('.notice_title').text('e-coupon優惠');

	//視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 350;

    LocatePop(PopWindowWidth);
}

//活動折扣詳細資訊
function EventDiscountInfo(EventDiscountData){
	InitPop();

    var WindowContent = []


    for (i = 0; i <EventDiscountData.length; i++){
    	var SeperateLine = '<div class="eventdiscount_seperateline"></div>'
    	var AddDataRow = '<div class="eventdiscount_row"><div class="eventname">'+EventDiscountData[i].Name+'</div><div class="discount">-&nbsp;$&nbsp;'+EventDiscountData[i].Discount+'</div></div>'

    	if (i==0){
    		WindowContent.push(AddDataRow);
    	} else {
    		WindowContent.push(SeperateLine);
    		WindowContent.push(AddDataRow);
    	}
    }

    //視窗標題
	$('.notice_title').text('活動折扣詳細資訊');

	//視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 650;

    LocatePop(PopWindowWidth);
}

//購物車刪除
function CartDeleteItem() {

    InitPop();

    var WindowContent = [
        '<p style="text-align:center;">請問是否將刪除商品加入追蹤清單?</p>',
        '<p style="text-align:center;"><input type="checkbox" name="" style="margin-right:5px;">在我重新造訪網頁前皆使用此設定</p>',
        '<div class="notice_btn_row"><button class="notice_cancelBTN">直接刪除</button><button class="notice_confirmBTN">確認</button></div>'
    ]

    //視窗標題
    $('.notice_title').text('刪除商品');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 350;

    LocatePop(PopWindowWidth);
}


//step3 修改訂購人資訊
function PurchaseInfoEdit(){
    InitPop();

    var WindowContent = [
        '<p style="text-align:center;">確定要修改訂單聯絡資訊？<br/>若商品有問題，我們會透過此資訊與您聯繫，<br/>如需更改配送資訊，可於下個步驟設定。</p>',
        '<div class="notice_btn_row"><button class="notice_cancelBTN" onclick="ClosePop();">取消</button><button class="notice_confirmBTN" onclick="ConfirmEdit();">確認</button></div>'
    ]

    //視窗標題
    $('.notice_title').text('修改訂購人資訊');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 450;

    LocatePop(PopWindowWidth);
}

function StroageInfo(){
    InitPop();

    var WindowContent = [
        '<p style="text-align:center;">您目前(不含本訂單)的儲酒空間尚餘N瓶酒(依750ml計)</p>'
    ]

    //視窗標題
    $('.notice_title').text('已租箱數說明');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 440;

    LocatePop(PopWindowWidth);
}


function CheckLinkCard(){
    InitPop();

    var WindowContent = [
        '<p style="text-align:center;">儲酒服務需綁定信用卡方可啟用。</p>',
        '<p style="text-align:center;"><a href="#">點我了解儲酒收費規則</a></p>'
    ]

    //視窗標題
    $('.notice_title').text('儲酒服務說明');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 350;

    LocatePop(PopWindowWidth);
}

function LinkedCard(){
    InitPop();

    var WindowContent = [
        '<p style="text-align:center;">您已完成信用卡綁定</p>'
    ]

    //視窗標題
    $('.notice_title').text('儲酒服務說明');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 350;

    LocatePop(PopWindowWidth);
}

function PopOriginalThem(title,content){
    InitPop();

    var WindowContent = content

    //視窗標題
    $('.notice_title').text(title);

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 450;

    LocatePop(PopWindowWidth);
}

//step3 18歲確認
function Step3_Confirm18(){

    InitPop();

    var WindowContent = [
        '<p style="text-align:center;">我同意訂購人及收貨人皆已年滿18歲，<br/>並請在收貨時出示身分證件。若未攜帶身分證，<br/>無法辨識是否年滿18歲，恕不交貨。</p>',
        
        '<div class="notice_btn_row"><button class="notice_confirmBTN" style="width:40%;" onclick="ClosePop();">我已年滿18歲</button></div>'
    ]

    //視窗標題
    $('.notice_title').text('請問您滿18歲了嗎');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 450;

    LocatePop(PopWindowWidth);
}