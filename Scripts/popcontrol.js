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
    var PopWindowWidth = 350;

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

function CWC_BottleDetail(winedata){
    InitPop();
    
    //年份label組合
    var YearsLabel = '';
    winedata[0].AllYears.forEach(function(year,index){
        if (year == winedata[0].Year){
            YearsLabel = YearsLabel + '<div class="one_label active">'+year+'</div>';
        } else {
            YearsLabel = YearsLabel + '<div class="one_label">'+year+'</div>';
        }
    });

    //容量label組合
    var CapacityLabel = '';
    winedata[0].AllCapacity.forEach(function(capacity,index){
        if (capacity == winedata[0].Capacity){
            CapacityLabel = CapacityLabel + '<div class="one_label active">'+capacity+'</div>';
        } else {
            CapacityLabel = CapacityLabel + '<div class="one_label">'+capacity+'</div>';
        }
    });

    //漲跌組合
    var PriceUpDown = '';
    if (winedata[0].PriceUpDown == 'up') {
        PriceUpDown = '<span class="red">+'+winedata[0].PriceUpDownRange+'('+winedata[0].PriceUpDownRangePercentage+'%<em class="icon_arrow"></em>)</span>'
    } else {
        PriceUpDown = '<span class="green">-'+winedata[0].PriceUpDownRange+'(-'+winedata[0].PriceUpDownRangePercentage+'%<em class="icon_arrow"></em>)</span>'
    }

    var WindowContent = [
        '<div class="CWC_bottledetail_bottleimg" style="background-image:url(images/pic/wine_bottle_sample.jpg)"></div>',
        '<div class="CWC_bottledetail_infobox"><div class="winenameCN">'+winedata[0].WineNameCN+'</div><div class="winenameEN">'+winedata[0].WineNameEN+'</div><div class="label_box year CLEARBOTH">'+YearsLabel+'</div><div class="label_box capacity CLEARBOTH">'+CapacityLabel+'</div><div class="title">'+winedata[0].Year+'<span></span>'+winedata[0].Capacity+'&nbsp;數量(各年份容量總數量)</div><div class="bottle_count CLEARBOTH"><img class="icon_bottle" src="images/icon/icon_CWC_bottle_number.svg"><div class="numbertext">x'+winedata[0].BottleCount+'&nbsp;('+winedata[0].BottleAmount+')</div><button class="btn_addcart">取酒</button></div><table cellpadding="0" cellspacing="0" border="0" class="info_table"><tr><td>購入價格</td><td>'+winedata[0].PriceBuy+'</td></tr><tr><td>目前市價</td><td>'+winedata[0].PriceNow+PriceUpDown+'</td></tr><tr><td>評價</td><td>'+winedata[0].Rate+'</td></tr><tr><td>試飲期</td><td>'+winedata[0].ReadytoDrink+'</td></tr><tr><td>類型</td><td>'+winedata[0].Type+'</td></tr><tr><td>產區</td><td>'+winedata[0].Region+'</td></tr></table></div>'
    ]

    //視窗標題
    //$('.notice_title').text(title);
    //修正Css
    $('.notice_title_layout').css('background-color','#ffffff');
    $('.notice_body').css('padding-top','0px')
    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 870;

    LocatePop(PopWindowWidth);
}

function CWC_SuperExpressInfo() {
    InitPop();

    var WindowContent = [
        '<p style="text-align:center;">內容未定</p>'
    ]

    //視窗標題
    $('.notice_title').text('特急件說明');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 350;

    LocatePop(PopWindowWidth);
}

function CWC_SelfCollectInfo(){
    InitPop();

    var WindowContent = [
        '<p style="text-align:center;">內容未定</p>'
    ]

    //視窗標題
    $('.notice_title').text('自取說明');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 350;

    LocatePop(PopWindowWidth);
}

function CWC_RentContract() {
    InitPop();

    var WindowContent = [
        '<p style="text-align:center;">內容未定</p>'
    ]

    //視窗標題
    $('.notice_title').text('租賃合約');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 350;
    //修正Css
    $('.notice_title_layout').css('background-color','#ffffff');

    LocatePop(PopWindowWidth);
}

function CWC_RentRecipeDetail(recipedata){
    InitPop();

    var TableRowContent = '';
    recipedata.forEach(function(item,index){
        TableRowContent = TableRowContent + '<tr><td style="height:50px;">'+recipedata[index].date+'</td><td style="height:50px;">'+recipedata[index].item+'</td><td style="height:50px;">'+recipedata[index].price+'</td></tr>'
    });

    var WindowContent = [
        '<table cellpadding="0" cellspacing="0" border="0" style="font-size:18px;color:#666;width:100%;text-align:center;"><tr><td style="border-bottom:1px solid #cccccc;height:40px;width:30%;">日期</td><td style="border-bottom:1px solid #cccccc;height:40px;">項目</td><td style="border-bottom:1px solid #cccccc;height:40px;">金額</td></tr>'+TableRowContent+'</table>'
    ]

    //視窗標題
    $('.notice_title').text('租金明細');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 500;
    //修正Css
    $('.notice_title_layout').css('background-color','#ffffff');
    $('.notice_body').css(
        {
            'max-height':'60vh',
            'padding-top':'0'
        }
    );

    //安裝scroll bar
    $(".notice_body").mCustomScrollbar({
        theme:"minimal-dark"
    });

    LocatePop(PopWindowWidth);
}

function CWC_StorageRecord(recorddata){
    InitPop();

    var TableRowContent = '';
    recorddata.forEach(function(item,index){
        var MoveRecord = '';
        if (recorddata[index].storage) {
            MoveRecord = '<span style="color:#d30a0a;">'+recorddata[index].moverecord+'</span>'
        } else {
            MoveRecord = '<span style="color:#0b7b62;">'+recorddata[index].moverecord+'</span>'
        }

        TableRowContent = TableRowContent + '<tr><td>'+recorddata[index].date+'</td><td style="padding: 20px 10px;text-align:left;"><div style="line-height:30px;">'+recorddata[index].nameCN+'</div><div style="line-height:25px;">'+recorddata[index].nameEN+'</div></td><td>'+recorddata[index].year+'</td><td>'+recorddata[index].capacity+'</td><td>'+MoveRecord+'</td><td>'+recorddata[index].allbottlecount+'</td><td><a href="#" style="color:#296993;">'+recorddata[index].order+'</a></td></tr>'
    });

    var WindowContent = [
        '<table cellpadding="0" cellspacing="0" border="0" style="font-size:18px;color:#666;width:100%;text-align:center;"><tr><td style="border-bottom:1px solid #cccccc;height:40px;width:12%;">日期</td><td style="border-bottom:1px solid #cccccc;height:40px;width:40%;">酒款</td><td style="border-bottom:1px solid #cccccc;height:40px;width:8%;">年份</td><td style="border-bottom:1px solid #cccccc;height:40px;width:8%;">容量</td><td style="border-bottom:1px solid #cccccc;height:40px;width:8%;">異動</td><td style="border-bottom:1px solid #cccccc;height:40px;">目前窖藏</td><td style="border-bottom:1px solid #cccccc;height:40px;">異動訂單</td></tr>'+TableRowContent+'</table>'
    ]

    //視窗標題
    $('.notice_title').text('異動明細');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 1250;
    //修正Css
    $('.notice_title_layout').css('background-color','#ffffff');
    $('.notice_body').css(
        {
            'max-height':'60vh',
            'padding-top':'0'
        }
    );

    //安裝scroll bar
    $(".notice_body").mCustomScrollbar({
        theme:"minimal-dark"
    });

    LocatePop(PopWindowWidth);
}