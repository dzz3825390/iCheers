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

//step1 訂單送出後(老客戶通一方通行)
function PopWindow_Submited_VIPPass(){

    InitPop();

    var WindowContent = [
        '<p style="text-align:left;">Cheers!!<br/>系統已偵測確認您為經常消費的老客戶，<br/>日後將直接提供老客戶專屬的「快速通關」功能，下單更加方便！</p>',
        '<a href="https://www.icheers.tw/iCheers/" target="_self" class="BackhomeBTN">啟動快速通關</a>',
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
        '<div style="display:flex;justify-content:center;margin-top:20px;"><button class="GrayBTN" style="width:38%;margin:0;margin-right:10px;">沒關係謝謝</button><button class="BackhomeBTN" style="margin:0;margin-right:10px;width:38%;">登入並啟動快速通關</button></div>',

    ];

    //視窗標題
    $('.notice_title').text('老客戶快速通關功能啟用！');
    $('.notice_title').text('啟用快速通關功能');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 550;
    var PopWindowWidth = 450;

    LocatePop(PopWindowWidth);
}

//沒有收到確認信
function Reconfirmed(){

    InitPop();
    var WindowContent = [
        '<p>依法令規定，酒類商品無法提供線上交易服務，<br/>請留下您的Email，客服夥伴將會盡快與您聯繫！</p>',
        '<div class="notice_body_input_layout"><input name="Email" type="text" style="width: 100%" placeholder="請輸入Email"><input type="checkbox" style="margin-top:10px;"><span style="font-size: 14px;font-weight:normal;margin-top: 0px;">記住我</span></div>',
        '<button class="SubmitBTN">送出</button>'
    ]

    //視窗標題
    $('.notice_title').text('沒有收到確認信?');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 500;

    LocatePop(PopWindowWidth);
}

//icon圖示說明
function LegendInfo(){

    InitPop();
    var WindowContent = [
        '<div class="LegendInfo_iframe_body_title_layout"><div class="LegendInfo_iframe_body_title_icon"><img src="images/icon/BuyICONH22.png" /></div><div class="LegendInfo_iframe_body_title">一般配送</div><div class="LegendInfo_iframe_body_title_line"></div><div class="CLEAR"></div></div>',
        '<div class="LegendInfo_iframe_body_text">完成訂單後3個工作天可收到商品。</div>',
        '<div class="LegendInfo_iframe_body_Noticetext"><span>※需知：</span><span>若選擇匯款／線下刷卡，則會在收到款項之後才出貨，通常出貨的隔天就會收到商品。</span><div class="CLEAR"></div></div>',
        '<div class="LegendInfo_iframe_body_title_layout" style="margin-top:15px;"><div class="LegendInfo_iframe_body_title_icon"><img src="images/icon/Fast_Icon22H.png" /></div><div class="LegendInfo_iframe_body_title">快速到貨</div><div class="LegendInfo_iframe_body_title_line"></div><div class="CLEAR"></div></div>',
        '<div class="LegendInfo_iframe_body_text">於每日截單時間<span>HH:MM</span>之前完成訂單，下一個工作天即可收到商品！</div>',
        '<div class="LegendInfo_iframe_body_Noticetext">※如遇國定假日則會順延一天。</div>',
        '<div class="LegendInfo_iframe_body_text" style="font-weight:bold;color:#333333;">舉例說明：</div>',
        '<div class="LegendInfo_iframe_body_text">狀況A：星期五(上班日)<span>HH:MM</span>前完成訂單，星期六即可收到商品！</div>',
        '<div class="LegendInfo_iframe_body_text">狀況B：星期六(放假日)<span>HH:MM</span>前完成訂單，要下周二(上班日)才會收到商品喔！</div>',
        '<div class="LegendInfo_iframe_body_title_layout" style="margin-top:15px;"><div class="LegendInfo_iframe_body_title_icon"><img src="images/icon/PreOrder_ICONH22.png" /></div><div class="LegendInfo_iframe_body_title">預訂品項</div><div class="LegendInfo_iframe_body_title_line"></div><div class="CLEAR"></div></div>',
        '<div class="LegendInfo_iframe_body_text">完成訂單後（限匯款／線下刷卡），依預計到貨月份安排出貨，出貨前會另行Email通知。</div>',
        '<div class="LegendInfo_iframe_body_Noticetext"><span>※需知：</span><span>預訂商品通常數量有限，需完成付款才能為您保留數量；付款完成後會郵寄收款證明供留存，恕發票僅能於出貨的時候才開立。</span><div class="CLEAR"></div></div>'
    ]

    //視窗標題
    $('.notice_title').text('到貨時間說明');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 700;

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

//會員註冊條款
function MemberRegisterTerms(){
    InitPop();
    var WindowContent = [
        '<p style="text-align:center;font-weight:bold;color:#000;">iCheers愛酒窩會員服務使用條款</p>',
        '<p style="margin-top:10px;">為了保障您的權益，請務必詳讀iCheers愛酒窩網站服務條款。 依據菸酒管理法規定，iCheers愛酒窩網站（以下簡稱「本網站」）使用者須年滿18歲，方得使用或繼續使用本網站。當使用者使用或繼續使用本網站時，即推定其已滿18歲，且已閱讀、瞭解並同意接受本文之所有內容及其後修改變更。</p>',
        '<p style="margin-top:10px;"><b>使用者守法義務及承諾</b><br/>使用者承諾絕不為任何非法目的或以任何非法方式使用本網站，並承諾遵守中華民國相關法規及一切使用網際網路之國際慣例。使用者若係中華民國以外之使用者，並同意遵守所屬國家或地域之法令。使用者同意並保證不得利用本網站從事侵害他人權益或違法之行為，包括但不限於：</p>',
        '<p style="margin-top:10px;">公布或傳送違反公共秩序或善良風俗之文字、圖片或任何形式的檔案。<br/>侵害或毀損本網站或他人名譽、隱私權、營業秘密、商標權、著作權、專利權、其他智慧財產權及其他權利。</br>違反依法律或契約所應負之保密義務。<br/>冒用他人名義使用本網站。<br/>傳輸或散佈電腦病毒。<br/>其他不符本網站所提供的使用目的之行為或本網站有正當理由認為不適當之行為。</p>',
        '<p style="margin-top:10px;"><b>服務內容之變更與電子報及EDM發送</b><br/>同意本公司所提供本網站之範圍，本公司均得視業務需要及實際情形，增減、變更或終止相關服務的項目或內容，且無需個別通知。<br/>使用者同意本公司得依實際執行情形，增加、修改或終止相關活動，並選擇最適方式告知使用者。<br/>使用者同意本公司得不定期發送電子報或商品訊息（EDM）至使用者所登錄的電子信箱。當使用者收到訊息後表示拒絕接受行銷時，本公司將停止繼續發送行銷訊息。</p>',
        '<p style="margin-top:10px;"><b>服務之停止、中斷</b><br/>本公司將依一般合理之技術及方式，維持系統及服務之正常運作。但於以下各項情況時，本公司有權可以停止、中斷提供本網站：</p>',
        '<p style="margin-top:10px;">本網站電子通信設備進行必要之保養及施工時。</br>發生突發性之電子通信設備故障時。</br>本網站申請之電子通信服務被停止，無法提供服務時。</br>由於天災等不可抗力之因素或其他不可歸責於本公司致使本網站無法提供服務時。</p>',
        '<p style="margin-top:10px;"><b>責任之限制與排除</b>本網站所提供之各項功能，均依該功能當時之現況提供使用，本網站對於其效能、速度、完整性、可靠性、安全性、正確性等，皆不負擔任何明示或默示之擔保責任。</br>本公司並不保證本網站之網頁、伺服器、網域等所傳送的電子郵件或其內容不會含有電腦病毒等有害物；亦不保證郵件、檔案或資料之傳輸儲存均正確無誤不會斷線和出錯等，因各該郵件、檔案或資料傳送或儲存失敗、遺失或錯誤等所致之損害，本公司不負賠償責任。</p>',
        '<p style="margin-top:10px;"><b>廣告</b>本網站上瀏覽到的所有廣告內容、文字與圖片之說明、展示樣品等資訊，均由各該廣告商、產品與服務的供應商所設計與提出。您對於廣告之正確性與可信度應自行斟酌與判斷。本網站僅接受委託予以刊登，不對前述廣告負擔保責任。</p>',
        '<p style="margin-top:10px;"><b>智慧財產權的保護</b>本網站所使用之軟體或程式、網站上所有內容，包括但不限於著作、圖片、檔案、資訊、資料、網站架構、網站畫面的安排、網頁設計，均由本網站或其他權利人依法擁有其智慧財產權，包括但不限於商標權、專利權、著作權、營業秘密與專有技術等。任何人不得逕自使用、修改、重製、公開播送、改作、散布、發行、公開發表、進行還原工程、解編或反向組譯。若使用者欲引用或轉載前述軟體、程式或網站內容，必須依法取得本網站或其他權利人的事前書面同意。尊重智慧財產權是使用者應盡的義務，如有違反，使用者應對本網站負損害賠償責任（包括但不限於訴訟費用及律師費用等）。</br>在尊重他人智慧財產權之原則下，使用者同意在使用本網站之服務時，不作侵害他人智慧財產權之行為。</br>若使用者有涉及侵權之情事，本網站可暫停全部或部份之服務，或逕自以取消使用者帳號之方式處理。</br>若有發現智慧財產權遭侵害之情事，請將所遭侵權之情形及聯絡方式，並附具真實陳述及擁有合法智慧財產權之聲明，寄送至service@icheers.tw聯絡本網站客服中心。</p>',
        '<p style="margin-top:10px;"><b>使用者對iCheers愛酒窩網站之授權</b>對於使用者上載、傳送、輸入或提供之資料，使用者同意本網站得於合理之範圍內蒐集、處理、保存、傳遞及使用該等資料，以提供使用者其他資訊或服務、或作成使用者統計資料、或進行關於網路行為之調查或研究，或為任何之合法使用。</br>若使用者無合法權利得授權他人使用、修改、重製、公開播送、改作、散布、發行、公開發表某資料，並將前述權利轉授權第三人，請勿擅自將該資料上載、傳送、輸入或提供至本網站任何資料一經使用者上載、傳送、輸入或提供至本網站時，視為使用者已允許本網站。無條件使用、修改、重製、公開播送、改作、散布、發行、公開發表該等資料，並得將前述權利轉授權他人，使用者對此絕無異議。使用者並應保證本網站使用、修改、重製、公開播送、改作、散布、發行、公開發表、轉授權該等資料，不致侵害任何第三人之智慧財產權，否則應對本網站負損害賠償責任（包括但不限於訴訟費用及律師費用等）。</p>',
        '<p style="margin-top:10px;"><b>特別授權事項</b>因使用本網站所提供之服務，可能須透過宅配或貨運業者始能完成貨品（或贈品等）之配送或取回，因此，使用者同意並授權本網站得視該次服務之需求及目的，將由使用者所提供且為配送所必要之個人資料（如收件人姓名、配送地址、連絡電話等），提供予宅配貨運業者及相關配合之廠商，以利完成該次貨品（或贈品等）之配送、取回。</p>',
        '<p style="margin-top:10px;"><b>準據法與管轄法院</b>本服務條款之解釋與適用，以及與本服務條款有關或使用者與本網站間因本公司服務而產生之爭議或糾紛，應依照中華民國法律予以處理，並以台灣台北地方法院為第一審管轄法院，但若法律對於管轄法院另有強制規定者，仍應依其規定。</p>',
        '<div class="notice_btn_row"><button class="notice_cancelBTN" style="width:auto;">我不同意</button><button class="notice_confirmBTN" style="width:auto;padding:0 8px;">我已了解(並)接受上述條款</button></div>'

    ]

    //修正Css
    $('.notice_title_layout').css('background-color','#ffffff');
    $('.notice_body').css(
        {
            'max-height':'80vh',
            'padding-top':'0'
        }
    );

    //視窗標題
    $('.notice_title').text('iCheers愛酒窩會員服務使用條款');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 600;

    //安裝scroll bar
    $(".notice_body").mCustomScrollbar({
        theme:"minimal-dark"
    });

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
        '<div class="notice_btn_row"><button class="notice_cancelBTN">直接刪除</button><button class="notice_confirmBTN">加入追蹤清單</button></div>'
    ]

    //視窗標題
    $('.notice_title').text('刪除商品');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 350;

    LocatePop(PopWindowWidth);
}

//購物車運費說明
function CartDeliveryFeeInfo(){
    InitPop();

    var WindowContent = [
        '<div class="PopWindow_DeliveryFeeInfo_row"><span class="normal">一般配送</span><img src="images/icon/BuyICON.png"/>折扣後商品總額未滿$2,000&nbsp;需酌收運費$200</div>',
        '<div class="PopWindow_DeliveryFeeInfo_row"><span class="fast">快速到貨</span><img src="images/icon/Fast_Icon.png"/>折扣後商品總額未滿$2,000&nbsp;需酌收運費$200</div>',        
        '<div class="PopWindow_DeliveryFeeInfo_row"><span class="preorder">預訂商品</span><img src="images/icon/PreOrder_ICON.png"/>折扣後商品總額未滿$2,000&nbsp;需酌收運費$200</div>',
        '<div class="PopWindow_DeliveryFeeInfo_row"><span class="preorder">預訂商品&nbsp;2022/12</span><img src="images/icon/PreOrder_ICON.png"/>折扣後商品總額未滿$2,000&nbsp;需酌收運費$200</div>'
    ]

    //視窗標題
    $('.notice_title').text('運費說明');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 600;

    LocatePop(PopWindowWidth);
}


//step3 修改訂購人資訊
function PurchaseInfoEditClick(){
    InitPop();

    var WindowContent = [
        '<p style="text-align:center;">確定要修改訂單聯絡資訊？<br/>若商品有問題，我們會透過此資訊與您聯繫，<br/>如需更改配送資訊，可於下個步驟設定。</p>',
        '<div class="notice_btn_row"><button class="notice_cancelBTN" onclick="ClosePop();">取消</button><button class="notice_confirmBTN" onclick="PurchaseInfo_Edit();">確認</button></div>'
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
        '<div class="CWC_bottledetail_infobox"><div class="winenameCN">'+winedata[0].WineNameCN+'</div><div class="winenameEN">'+winedata[0].WineNameEN+'</div><div class="label_box year CLEARBOTH">'+YearsLabel+'</div><div class="label_box capacity CLEARBOTH">'+CapacityLabel+'</div><div class="bottle_count CLEARBOTH"><img class="icon_bottle" src="images/icon/icon_CWC_bottle_number.svg"><div class="numbertext">x'+winedata[0].BottleCount+'&nbsp;('+winedata[0].BottleAmount+')</div><button class="btn_addcart">配送窖藏</button><div class="count delivery"><div class="icon_minus"></div><input type="number" class="bottle_number" value="4"><div class="icon_plus"></div><div class="btn_getwine_comfirm" onclick="CWC_NotEnoughWineNotice(winedata);">確認</div></div></div><table cellpadding="0" cellspacing="0" border="0" class="info_table"><tr><td>購入價格</td><td>'+winedata[0].PriceBuy+'</td></tr><tr><td>目前市價</td><td>'+winedata[0].PriceNow+PriceUpDown+'</td></tr><tr><td>評價</td><td>'+winedata[0].Rate+'</td></tr><tr><td>試飲期</td><td>'+winedata[0].ReadytoDrink+'</td></tr><tr><td>類型</td><td>'+winedata[0].Type+'</td></tr><tr><td>產區</td><td>'+winedata[0].Region+'</td></tr></table></div>'
    ]

    //視窗標題
    //$('.notice_title').text(title);
    //修正Css
    $('.notice_title_layout').css('background-color','#ffffff');
    $('.notice_body').css(
        {
            'max-height':'80vh',
            'padding-top':'0'
        }
    );

    //視窗內容
    $('.notice_body').html(WindowContent);

    //配送窖藏
    $('.btn_addcart').click(function(){
        $(this).css('display','none');
        $(this).next().css('display','flex');
    });


    //指定大視窗時pop寬度
    var PopWindowWidth = 870;

    //安裝scroll bar
    $(".notice_body").mCustomScrollbar({
        theme:"minimal-dark"
    });

    LocatePop(PopWindowWidth);
}

function CWC_NotEnoughWineNotice(winedata) {
    InitPop();

    var WindowContent = [
        '<p>提醒您，您的窖藏配送清單中已有<span style="font-weight:bold;">X</span>瓶&nbsp;'+winedata[0].WineNameEN+'&nbsp;'+winedata[0].Year+'尚未配送，請至窖藏配送清單確認。</p>',
        '<div class="notice_btn_row"><button class="notice_confirmBTN">前往確認</button></div>'        
    ]

    //視窗標題
    $('.notice_title').text('窖藏配送確認');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 550;

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

//租金收費規則
function RentRule(){
    InitPop();

    var WindowContent = [
        '<p style="text-align:center;">租金每天<span>3</span>元/箱，每次最少承租1箱、1天，逐日計算。</p>',
        '<div style="display:flex;align-items:center;justify-content:center;"><img src="images/img_box.jpg" style="width:150px;height:auto;"/><div style="font-size:18px;color:#333;margin-left:16px;text-align:center;"><b>1箱&nbsp;=&nbsp;12瓶750ml</b><br/>(1500ml以2瓶計)</div></div>',
        '<p style="font-size:14px;color:#999">*每月1日結算自動扣繳上個月租金。</p>',
        '<p style="font-size:14px;color:#999">*需綁定信用卡後才能啟用儲酒服務，信用卡僅供租金扣繳使用。</p>'
    ]

    //視窗標題
    $('.notice_title').text('儲酒租金收費規則');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 500;

    LocatePop(PopWindowWidth);
}

//已租箱數
function RentQuota(){
    InitPop();

    var WindowContent = [
        '<p>您目前租用了<span>5</span>箱、60瓶750ml的儲藏空間，目前已使用了<span>55</span>瓶750ml。</p>',
        '<div style="display:flex;align-items:center;justify-content:center;"><img src="images/img_box.jpg" style="width:150px;height:auto;"/><div style="font-size:18px;color:#333;margin-left:16px;text-align:center;"><b>1箱&nbsp;=&nbsp;12瓶750ml</b><br/>(1500ml以2瓶計)</div></div>',
    ]

    //視窗標題
    $('.notice_title').text('已租箱數');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 500;

    LocatePop(PopWindowWidth);
}

//修改綁定卡片
function Changecreditcard(cardtype){
    InitPop();

    var WindowContent = [
        '<p style="text-align:center;">您目前綁定的卡片為</p>',
        '<div class="popwindow_creditcard_row"><label class="'+cardtype+'"></label><div class="cardnumber">******5678</div><div class="carddate">到期日&nbsp;08/27</div></div>',
        '<div class="notice_btn_row"><button class="notice_cancelBTN" onclick="ClosePop();">暫不更換</button><button class="notice_confirmBTN">更換卡片</button></div>'

    ]

    //視窗標題
    $('.notice_title').text('更換綁定信用卡');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 340;

    LocatePop(PopWindowWidth);
}

//啟用儲酒服務
function ActiveCWC01(){
    InitPop();

    var WindowContent = [
        '<div class="PopWindow_ActiveCWC_progressbar"><div class="text active">使用者條款</div><div class="circle_arrow">></div><div class="text">設定發票資料</div><div class="circle_arrow">></div><div class="text">綁定信用卡</div></div>',
        '<div class="PopWindow_ActiveCWC_policy"><p style="margin-top:30px;font-weight:bold;color:#333;text-align:center;font-size:18px;">儲酒服務契約書</p><p style="margin-top:10px;">親愛的會員您好，<br/>歡迎使用儲酒服務，為保障您的權益，請仔細閱讀以下內容，成功啟用儲酒服務即表示您已詳閱、了解並同意遵守iCheers愛酒窩（www.iCheers.tw佳釀股份有限公司）儲酒服務契約內容，若有任何疑問，歡迎隨時與我們聯繫。</p><p style="margin-top:10px;"><b>立契約書人</b></p><p style="margin-top:10px;">甲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方：佳釀股份有限公司<br/>統一編號：29081831<br/>負&nbsp;&nbsp;責&nbsp;&nbsp;人：常效宇<br/>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：新北市永和區成功路一段82號15樓之1<br/>電&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;話：02-2926-3667</p><p style="margin-top:10px;">乙&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方：<input type="text" style="width:30%;" placeholder="請務必填寫本名"/><br/>身分證字號：<input type="text" style="width:30%;"/><br/>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：<input type="text" /><br/>電&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;話：<input type="text" style="width:30%;"></p><p style="margin-top:20px;"><b>契約書簽署日期&nbsp;&nbsp;2022&nbsp;年&nbsp;12&nbsp;月&nbsp;31&nbsp;日</b></p><p style="margin-top:20px;">緣，甲方為「iCheers 愛酒窩」網站（下稱「<b>iCheers網站</b>」）之所有及經營者，提供客戶於iCheers網站購買各式酒品，並為於iCheers網站購酒之客戶提供儲酒及運酒之服務。<br/><br/>緣，乙方擬利用iCheers網站購酒，並將其所購得之酒品逕委由甲方儲存，及俟取得乙方指示後由甲方進行後續運送。<br/><br/>為此，甲乙雙方間就前述儲酒及運酒服務事宜，雙方同意訂定本服務契約書（以下稱「<b>本契約</b>」），並約定條款如後，以資遵循。</p><p style="margin-top:40px;"><b>1&nbsp;契約期間</b><br/>本契約自甲乙雙方完成簽署時起生效（以下稱「<b>生效日</b>」），至本契約依法或依約終止或解除時失其效力。</p><p style="margin-top:20px;"><b>2&nbsp;服務範圍</b><br/>甲方依本契約提供乙方儲酒及運酒之服務如下：<div class="textindent16"><div>2.1</div>&nbsp;<div>甲方提供符合國際認證標準且全年維持最佳儲酒溫溼度（濕度60%以上，溫度攝氏18度以下）之酒窖，供乙方於iCheers網站購酒後儲存。</div></div><div class="textindent16"><div>2.2</div>&nbsp;<div>乙方購酒時，得指示甲方不按通常出貨流程將乙方購買之酒品送交乙方指定地點，而改由甲方於本契約期間在其酒窖內儲藏並保管乙方購買之酒品直至乙方另外指示甲方將該等酒品運送至指定地點。</div></div><div class="textindent16"><div>2.3</div>&nbsp;<div>經乙方要求儲酒後，甲方得依己意全權決定是否接受或拒絕乙方儲酒要求之全部或一部，且不因拒絕乙方進而負擔任何契約或法律上責任。除甲乙雙方另行合意外，乙方自他處購買之酒品不得使用甲方提供之儲酒服務。</div></div><div class="textindent16"><div>2.4</div>&nbsp;<div>乙方於本契約期間得透過iCheers網站規定之方式，指示甲方將乙方所儲存之酒品運送予台灣境內乙方指定地點及指定收受人（以年滿18歲之成年人為限）。甲方收到乙方前開指示後，應自行或委由合格物流業者，以冷藏配送方式，將乙方之酒品按通常運送流程送予乙方指定地點及指定收受人。</div></div><div class="textindent16"><div>2.5</div>&nbsp;<div>乙方理解並同意，如因乙方或乙方指定收受人提供之資料不全，或因物流配送業者之運送限制，甲方可能無法運送酒品至指定地點或予指定收受人，該等酒品將退回甲方倉儲。於此情形，甲方會於合理期間內及時通知乙方，而乙方應繼續支付前述酒品返回倉儲之日起至乙方另外指示運送時之相關費用。</div></div><div class="textindent16"><div>2.6</div>&nbsp;<div>乙方及其授權代理人僅得透過iCheers網站指示甲方取出並運送乙方所購之酒品；除有iCheers網站無法使用之情況外，甲方不接受乙方以其他方式指示甲方取出並運送酒品，酒品取出及運送流程，乙方、其授權代理人及其指定收受人同意配合甲方之合理要求，並提供相關身份資料以供查驗。</div></div><div class="textindent16"><div>2.7</div>&nbsp;<div>甲方儲酒及取酒之流程及相關規範，已於iCheers網站公告；甲方有權依實際作業需求不定時修訂該等流程及規範，並透過iCheers網站公告公告或其他方式另行通知乙方。乙方如於前開流程及規範修訂後繼續使用甲方提供之服務，視為接受該等流程及規範之修訂。</div></div></p><p style="margin-top:20px;"><b>3&nbsp;酒品之所有權及檢查義務</b><br/><div class="textindent16"><div>3.1</div>&nbsp;<div>甲乙雙方同意，乙方於iCheers網站購買酒品及付清款項後，乙方所購酒品之所有權即已歸乙方所有；甲方提供本契約所約定儲酒服務之時起，乙方已取得其所購酒品之間接占有並代替實際交付。</div></div><div class="textindent16"><div>3.2</div>&nbsp;<div>乙方同意委由甲方代其按通常出貨程序檢查乙方所購酒品之外觀及品相。甲方於受乙方指示及委託儲存乙方所購酒品後，代乙方檢查該酒品之外觀是否有破損或有任何合理推估可能影響酒品品質之情況。如有前述情況，甲方應從速通知乙方。</div></div><div class="textindent16"><div>3.3</div>&nbsp;<div>乙方同意其依消費者保護法所得行使七日猶豫期<sup>1</sup>之始日應於乙方取得酒品之間接占有<sup>2</sup>之時起算；乙方得於前開期間以書面通知甲方解除酒品之買賣契約，並退回購酒款項。但乙方行使買賣契約解除權前之儲酒期間，甲方仍得按本契約計算並收取儲酒服務費用。</div></div></p><p style="margin-top:20px;"><b>4&nbsp;收費及付款方式</b><br/><div class="textindent16"><div>4.1</div>&nbsp;<div>除另有書面約定外，甲方提供服務之費用如下：</div></div><div class="textindent48"><div>4.1.1</div>&nbsp;<div>儲酒服務：</div></div><div class="textindent96"><div>4.1.1.1</div>&nbsp;<div>每箱（每箱總存放量為9,000毫升之酒品。可存放750毫升酒品12支，或375毫升酒品24支。），每日儲酒費用為新台幣（下同）<b style="color:#c29c20;">0.5</b>元，按日計費。惟若適用活動優惠條件，則依優惠價計費。</div></div><div class="textindent96"><div>4.1.1.2</div>&nbsp;<div>儲酒之費用按箱計算，如未滿一箱，視為一箱。惟如無任何儲酒時，不計算儲酒服務費用。</div></div><div class="textindent96"><div>4.1.1.3</div>&nbsp;<div>甲方得調整儲酒服務之費用，並於iCheers網站公告或其他方式另行通知乙方；乙方如不接受調整之價格，至遲應於費用調整10日內以書面通知甲方，嗣甲方收受前開通知後，本契約即視為合意終止。</div></div><div class="textindent48"><div>4.1.2</div>&nbsp;<div>運送服務：按甲方使用之物流業者公告費率計算。費用詳載於iCheers網站，並可能依照物流業者價格調整而變動。</div></div><div class="textindent16"><div>4.2</div>&nbsp;<div>雙方帳務採月結方式作業，甲方應於每月1日（如遇假日則順延至下一個工作日）結算前月之一切費用（包括但不限於儲酒服務、運送服務或其他乙方應付之費用）總額，並於當日（下稱「付款日」）以乙方預先留存且授權之信用卡或金融卡刷卡結帳支付前開費用。經甲方書面同意者，乙方得例外以匯款或其他甲方接受之方式支付前開費用，惟仍應於付款日前支付。</div></div><div class="textindent16"><div>4.3</div>&nbsp;<div>若乙方因任何原因未能在付款日足額支付應付之款項（包括但不限於發卡銀行拒絕付款），甲方得按年利率5%計算並收取逾期利息。</div></div><div class="textindent16"><div>4.4</div>&nbsp;<div>雙方因執行匯款、轉帳、刷卡作業產生之金融機構手續費及應付稅費由雙方各自負擔。</div></div></p><p style="margin-top:20px;"><b>5&nbsp;保險</b><br/>甲方應就儲酒之處所及設施投保甲方認為適當之保險（包括但不限於火險、竊盜險、公共意外責任險等）；惟雙方不因甲方投保保險而免除因各自之故意過失所應負擔之責任。</p><p style="margin-top:20px;"><b>6 &nbsp;保密與安全</b><br/><div class="textindent16"><div>6.1</div>&nbsp;<div>乙方對因本契約而知悉或持有之甲方非公開且註記為機密或有類似標示之資料或文件（以下簡稱「<b>機密資訊</b>」），均應負保密責任，且乙方未經甲方之事先書面授權，不得將甲方之機密資訊以履行本契約以外之目的予以揭露、複製、公開或為其他任何利用。</div></div><div class="textindent16"><div>6.2</div>&nbsp;<div>乙方依本條應負擔之義務，不因本契約期間屆滿或終止而失效。</div></div></p><p style="margin-top:20px;"><b>7&nbsp;個資條款</b><br/><div class="textindent16"><div>7.1</div>&nbsp;<div>乙方瞭解並同意，為獲取甲方提供之本服務，乙方需提供其個人資料予甲方，甲方得基於提供本服務及履行本契約之目的內蒐集、處理、利用該等個人資料，並得將乙方之個人資料提供予甲方履行契約所必要之第三人處理及利用之。</div></div><div class="textindent16"><div>7.2</div>&nbsp;<div>乙方如於使用甲方服務之過程中，提供甲方任何第三人之個人資訊，乙方應擔保其蒐集、處理、利用該等第三人之個人資料及將該等資料提供予甲方，均已按個人資料保護法及相關法令辦理，並已取得該第三人之同意。</div></div></p><p style="margin-top:20px;"><b>8&nbsp;契約終止</b><br/><div class="textindent16"><div>8.1</div>&nbsp;<div>甲方得不附理由，提前30日以書面通知乙方終止本契約。</div></div><div class="textindent16"><div>8.2</div>&nbsp;<div>如有以下情形，甲方得以書面通知立即終止本契約：</div></div><div class="textindent48"><div>8.2.1</div>&nbsp;<div>乙方連續三個月未按時給付甲方儲酒服務費用（包括但不限於扣款失敗）</div></div><div class="textindent48"><div>8.2.2</div>&nbsp;<div>乙方發生破產、解散、重整、清算、或有其他嚴重影響債信之情事時。</div></div><div class="textindent48"><div>8.2.3</div>&nbsp;<div>發生天災、地震、颱風、豪雨、戰爭、暴亂、疫情或其他不可歸責於任一方致甲方儲酒處所毀損滅失且不可修復或致不能繼續營業之情事（下稱「<b>不可抗力事件</b>」）。</div></div><div class="textindent16"><div>8.3</div>&nbsp;<div>除本契約另有約定外，如乙方違反或未履行本契約任一條款時，經甲方催告限期改善，而未遵期改善時，甲方得終止本契約。</div></div><div class="textindent16"><div>8.4</div>&nbsp;<div>本契約終止前雙方已屆期之契約上義務，不因本契約之終止而生影響。</div></div></p><p style="margin-top:20px;"><b>9&nbsp;留置權及酒品處理</b><br/><div class="textindent16"><div>9.1</div>&nbsp;<div>乙方瞭解並同意，甲方對於乙方儲存於甲方之酒品具有留置權，留置權得行使之範圍限於甲方對乙方基於本契約所生之債權範圍內。</div></div><div class="textindent16"><div>9.2</div>&nbsp;<div>如乙方連續三個月未按時給付甲方儲酒服務費，或有任何其他已屆清償期而未清償之債務，甲方得以書面向乙方為行使留置權之通知，並訂一個月以上之期限要求乙方清償並敘明如未清償將以酒品抵償；如前述通知送達後乙方未依限清償，甲方得酌情自行出售留置之任一或全部酒品於已屆期債權範圍內取償，或以酒品市價（亦即iCheers網站相同或類似酒品最近一次成交金額）之七折抵償所欠之費用，乙方不得異議。</div></div><div class="textindent16"><div>9.3</div>&nbsp;<div>於本契約終止或解除5日內，乙方應以書面提供甲方寄送儲存酒品之地址及收件人；如乙方未提供書面指示，甲方得逕將儲存酒品寄送至乙方所留存之地址及收件人，費用由乙方負擔。</div></div><div class="textindent16"><div>9.4</div>&nbsp;<div>如乙方未依前項提供寄送酒品之地址及收件人或乙方寄出後因任何原因遭物流業者退回，甲方應通知乙方，並限期30日內自行取回或另外提供寄送資訊。如逾30日乙方未取回或提供寄送資訊，視為乙方拋棄該等酒品之所有權，並得由甲方自行酌情處理該等酒品。乙方逾期領回或視為拋棄該等酒品所有權前之儲酒費用，仍應由乙方負擔。</div></div></p><p style="margin-top:20px;"><b>10&nbsp;責任限制</b><br/><div class="textindent16"><div>10.1</div>&nbsp;<div>乙方僅就儲存之酒品因甲方或其員工之故意過失而毀損滅失所生之損害，負擔損害賠償責任；惟甲方不就非直接損害負責。為免疑義，如乙方儲存之酒品因不可抗力事件或其他不可歸責於甲方之事由毀損滅失，甲方無庸負擔損害賠償責任。</div></div><div class="textindent16"><div>10.2</div>&nbsp;<div>在法律允許最大程度範圍內，如乙方請求以金錢給付賠償損害，則酒品之價值應以毀損滅失事實發生日之通常市價（亦即iCheers網站相同或類似酒品最近一次成交金額）計算，且不考慮事實發生日至實際賠償日間可能的價值波動，且甲方對於酒品毀損滅失之損害賠償上限，應以其所儲存酒品通常市價之60%為上限。</div></div><div class="textindent16"><div>10.3</div>&nbsp;<div>於乙方指示甲方運送酒品時，自甲方將酒品交予物流業者起，運送過程所生之損害，除有可歸責於甲方之事由外，甲方均不負擔任何責任。</div></div></p><p style="margin-top:20px;"><b>11&nbsp;可分性</b><br/>倘若本契約之任何規定依據法律規定或法院裁判有無效或無法執行之情形時，本契約之其餘條款仍繼續有效。前述情形中效力存疑之條款，甲乙雙方同意應依雙方締約之真意以書面修改之，以符合相關法律規定或法院裁判之意旨。</p><p style="margin-top:20px;"><b>12&nbsp;法律適用</b><br/>本契約以中華民國法律為準據法，並從其解釋。本契約如有未盡事宜，悉依中華民國相關法令、習慣及誠信原則公平處理之。雙方同意如因本契約涉訟，以台灣台北地方法院為第一審管轄法院。</p><p style="margin-top:20px;"><sup>1</sup>消費者保護法第19條第1項規定：「通訊交易或訪問交易之消費者，得於收受商品或接受服務後七日內，以退回商品或書面通知方式解除契約，無須說明理由及負擔任何費用或對價。但通訊交易有合理例外情事者，不在此限。」<br/><sup>2</sup>民法第761條第2項規定：「讓與動產物權，而讓與人仍繼續占有動產者，讓與人與受讓人間，得訂立契約，使受讓人因此取得間接占有，以代交付。」</p><div class="notice_btn_row"><button class="notice_cancelBTN" style="width:auto;">我不同意</button><button class="notice_confirmBTN" style="width:auto;padding:0 8px;" onclick="ActiveCWC02();">我已了解(並)接受上述條款，繼續</button></div></div>'

    ]

    //視窗標題
    $('.notice_title').text('啟用儲酒服務');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //安裝scroll bar
    $(".PopWindow_ActiveCWC_policy").mCustomScrollbar({
        theme:"minimal-dark"
    });

    //指定大視窗時pop寬度
    var PopWindowWidth = 600;

    LocatePop(PopWindowWidth);
}

function ActiveCWC02(){
    InitPop();

    var WindowContent = [
        '<div class="PopWindow_ActiveCWC_progressbar"><div class="text">使用者條款</div><div class="circle_arrow">></div><div class="text active">設定發票資料</div><div class="circle_arrow">></div><div class="text">綁定信用卡</div></div>',
        '<div class="PopWindow_ActiveCWC_invoice"><div class="row CLEARBOTH"><div class="custom_radio invoice_type active" invoice_type="Duplicate">二聯式電子發票</div><div class="custom_radio invoice_type" invoice_type="Triplicate">三聯式電子發票</div><div class="custom_radio invoice_type" invoice_type="Donate">捐贈發票</div></div><!--2聯--><div class="invoice_content" invoice_type="Duplicate"><div class="row" style="margin-top: 20px;"><div class="invoice_radio"><div class="invoice_radio_oneoption CLEARBOTH"><input type="radio" name="invoice_2" checked="checked"><span class="radio_text">手機載具</span><div class="CLEARBOTH"></div><div class="extend" style="display:block;"><input type="text" name="" class="carrier"><div class="notice_text">含斜線英數共8碼，例：/RZREDHQ</div></div></div><div class="invoice_radio_oneoption CLEARBOTH"><input type="radio" name="invoice_2"><span class="radio_text">自然人憑證載具</span><div class="CLEARBOTH"></div><div class="extend"><input type="text" name="" class="carrier"><div class="notice_text">含英數共16碼，例：GP00000012345678</div></div></div><div class="invoice_radio_oneoption CLEARBOTH"><input type="radio" name="invoice_2"><span class="radio_text">我沒有載具</span><div class="CLEARBOTH"></div><div class="extend"><p style="color:#666;margin-top:-10px;">發票將於扣款後開立並Email至您的信箱，您可透過<a href="#" style="float:none;margin:0 5px;font-size:16px;">財政部電子發票整合平台</a>查詢及兌獎，若有任何需要協助之處，歡迎連繫iCheers愛酒窩客服團隊。</p></div></div></div><div style="display:flex;align-items:flex-start;margin-top:10px;line-height:28px;"><input type="checkbox" style="margin-top:6px;"><span style="color:#666;font-size:16px;margin-left:4px;">若此訂單發票金額發生變動，本人同意愛酒窩得對本次消費發票進行折讓作業以符合稅務法規。</span></div></div></div><!--3聯--><div class="invoice_content" invoice_type="Triplicate" style="display: none;"><div class="recorded_data" formstatus="NewCustomer"><div class="row" style="margin-top: 20px;"><div class="title">發票抬頭</div><input type="text" name="" id="InvoiceInfo_CompanyName"></div><div class="row"><div class="title">發票統編</div><input type="text" name="" id="InvoiceInfo_BAN"></div><p style="margin-top:10px;color:#666;line-height:28px;">發票將於每月扣款後開立並Email至您的信箱，亦可至「收費明細」自行下載列印。</p></div></div><!--捐贈--><div class="invoice_content" invoice_type="Donate" style="display: none;"><div class="row" style="margin-top: 20px;"><div class="invoice_radio"><div class="invoice_radio_oneoption CLEARBOTH"><input type="radio" name="invoice_d"><span class="radio_text">伊甸社會福利基金會</span></div><div class="invoice_radio_oneoption CLEARBOTH"><input type="radio" name="invoice_d"><span class="radio_text">創世基金會</span></div><div class="invoice_radio_oneoption CLEARBOTH"><input type="radio" name="invoice_d"><span class="radio_text">陽光社會福利基金會</span></div><div class="invoice_radio_oneoption CLEARBOTH"><input type="radio" name="invoice_d"><span class="radio_text">其他</span><div class="CLEARBOTH"></div><div class="extend"><input type="text" name="" class="carrier"><a href="#">機構代碼查詢</a></div></div></div><div class="note" style="margin-left:22px;">依據法令規定，已捐贈發票無法索回，若需要退換貨，該發票將予以作廢。</div></div></div><div class="notice_btn_row"><button class="notice_cancelBTN" style="width:auto;">上一步</button><button class="notice_confirmBTN" style="width:auto;padding:0 8px;" onclick="ActiveCWC03();">下一步</button></div></div>'
    ]

    //視窗標題
    $('.notice_title').text('啟用儲酒服務');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //綁定自製radio選項
        $('.custom_radio').click(function(){
            CustomRadioBTN(this);

            //check self click
            var IsSelfClick = $(this).hasClass();

            if (IsSelfClick) {
                //donothing
            } else {
                //init底下選項
                $('.invoice_radio_oneoption .extend').slideUp();

                //切換不同發票內容選項
                var InvoiceType = $(this).attr('invoice_type');
                $('#InvoiceInfoRow').css('display','none');
                $('.invoice_content').css('display','none');
                
                switch (InvoiceType){
                    case 'Duplicate':
                        $('#InvoiceInfoRow').css('display','none');
                        $('[invoice_type=Duplicate].invoice_content').css('display','block');
                    break;

                    case 'Triplicate':
                        $('[invoice_type=Triplicate].invoice_content').css('display','block');
                        $('#InvoiceInfoRow').css('display','block');
                        //$('#BTN_InvoiceInfoEdit').css('display','none');
                    break;

                    case 'Donate':
                        $('#InvoiceInfoRow').css('display','none');
                        $('[invoice_type=Donate].invoice_content').css('display','block');
                    break;
                }
            }
        });


        //發票分開寄出 捐贈 載具展開
        $('.invoice_radio_oneoption input[type=radio]').change(function(){
            $('.invoice_radio_oneoption .extend').slideUp();
            $('.invoice_radio_oneoption input[type=radio]:checked ~ .extend').slideDown();

        });


    //指定大視窗時pop寬度
    var PopWindowWidth = 600;

    LocatePop(PopWindowWidth);
}

function ActiveCWC03(){
    InitPop();

    var WindowContent = [
        '<div class="PopWindow_ActiveCWC_progressbar"><div class="text">使用者條款</div><div class="circle_arrow">></div><div class="text">設定發票資料</div><div class="circle_arrow">></div><div class="text active">綁定信用卡</div></div>',
        '<p style="margin-top:10px;">請注意，您即將離開本頁面至數位鎏綁定信用卡，綁定完成後會自動回到此頁面，完成綁定後即可開始使用儲酒服務。</p>',
        '<div class="notice_btn_row"><button class="notice_cancelBTN" style="width:auto;">上一步</button><button class="notice_confirmBTN" style="width:auto;padding:0 8px;">去綁卡</button></div>'
    ]

    //視窗標題
    $('.notice_title').text('啟用儲酒服務');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 600;

    LocatePop(PopWindowWidth);
}

//綁卡完成
function ActiveCWC04(){
    InitPop();

    var WindowContent = [
        '<div class="PopWindow_ActiveCWC_progressbar"><div class="text">使用者條款</div><div class="circle_arrow">></div><div class="text">設定發票資料</div><div class="circle_arrow">></div><div class="text active">綁定信用卡</div></div>',
        '<p style="margin-top:20px;text-align:center;">您已完成信用卡綁卡登記</p>',
        '<p style="text-align:center;">(卡號末四碼&nbsp;<b>1234</b>，到期日&nbsp;<b>99/99</b>)</p>',
        '<div class="notice_btn_row"><button class="notice_confirmBTN" style="width:auto;padding:0 8px;">回我的清單</button></div>'
    ]

    //視窗標題
    $('.notice_title').text('啟用儲酒服務');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 500;

    LocatePop(PopWindowWidth);
}

//組合商品不單賣提示
function GroupItemNotice() {

    InitPop();

    var WindowContent = [
        '<p style="text-align:center;">此商品僅限綁定組合銷售，暫不個別單品銷售</p>',
        '<div class="notice_btn_row"><button class="notice_cancelBTN">取消</button><button class="notice_confirmBTN">查看組合</button></div>'
    ]

    //視窗標題
    $('.notice_title').text('刪除商品');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 350;

    LocatePop(PopWindowWidth);
}

//酒標瑕疵說明
function LabelCheckInfo(){
    InitPop();

    var WindowContent = [
        '<p>裸瓶難免有微小瑕疵，瑕疵率約2%以下，如遇下列狀況，我們將視為正常品出貨，「不會」另行通知：<br/>1)酒標破損面積1mm以下且不影響主視覺<br/>2)十年以上老酒標污漬、泛黃<br/>3)酒標摺痕（常見於手工貼標商品）<br/>4)酒標有凸起氣泡、面積1cm以下且只有一顆<br/>5)紙盒有凹痕但未掉色<br/>6)背標有污漬、破損但不影響閱讀。</p>',
    ]

    //視窗標題
    $('.notice_title').text('瑕疵說明');

    //視窗內容
    $('.notice_body').html(WindowContent);

    //指定大視窗時pop寬度
    var PopWindowWidth = 500;

    LocatePop(PopWindowWidth);
}