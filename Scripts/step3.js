//測試資料
var PurchaseInfo = [
    {
        Name:'劉學涵',
        Sex:'Female',
        OtherSexualText:'',
        Phone:'0987654321',
        Address_PostalCode:'234',
        Address_City:'新北市',
        Address_District:'永和區',
        Address_Other:'成功路一段80號15樓'
    }
]

var DeliveryInfo = [
    {
        Name:'劉學涵',
        Sex:'Female',
        OtherSexualText:'',
        Phone:'0987654321',
        Address_PostalCode:'234',
        Address_City:'新北市',
        Address_District:'永和區',
        Address_Other:'成功路一段80號15樓',
        //Motocycle Car T-cat SuperExpress SelfCollect
        DeliveryType:'T-cat',
        Time:'AM',
        Date:'Both',
        BuildingGuardCollect:true,
        ReuseBox:true,
        ReusePaperMaterial:true,
        InvoiceType:'2',
        IsAnotherAddress: false,
        CompanyName:'',
        BAN:'',
        AnotherAddress:'',
        AnotherAddressRecipient:''
    }
]

var TestData_Custom1 = [
    {
        Name:'李佳叡',
        Sex:'Male',
        OtherSexualText:'',
        Phone:'0912345678',
        Address_PostalCode:'234',
        Address_City:'新北市',
        Address_District:'永和區',
        Address_Other:'成功路一段80號19樓',
        //Motocycle Car T-cat SuperExpress SelfCollect
        DeliveryType:'Motocycle',
        Time:'PM',
        Date:'Weekdays',
        BuildingGuardCollect:true,
        ReuseBox:false,
        ReusePaperMaterial:false,
        InvoiceType:'3',
        IsAnotherAddress: false,
        CompanyName:'佳釀股份有限公司',
        BAN:'29081831',
        AnotherAddress:'',
        AnotherAddressRecipient:''
    }
]
        
var TestData_Custom2 = [
    {
        Name:'陳怡棻',
        Sex:'Female',
        OtherSexualText:'',
        Phone:'0965432189',
        Address_PostalCode:'234',
        Address_City:'新北市',
        Address_District:'永和區',
        Address_Other:'成功路一段80號18樓',
        //Motocycle Car T-cat SuperExpress SelfCollect
        DeliveryType:'T-cat',
        Time:'Both',
        Date:'Both',
        BuildingGuardCollect:false,
        ReuseBox:true,
        ReusePaperMaterial:true,
        InvoiceType:'3',
        IsAnotherAddress: true,
        CompanyName:'華藝數位股份有限公司',
        BAN:'35701598',
        AnotherAddress_Address_PostalCode:'235',
        AnotherAddress_Address_City:'新北市',
        AnotherAddress_Address_District:'中和區',
        AnotherAddress_Address_Other:'中正路300號',
        AnotherAddressRecipient:'牛學行'
    }
]

function CustomRadioBTN(target){
    
    //check self click
    var IsSelfClick = $(target).hasClass('active');

    if(IsSelfClick) {
        //do nothing
    } else {
        $('.custom_radio').removeClass('active');
        $(target).addClass('active');
    }

}

//修改訂購人資訊
function PurchaseInfo_Edit(){
    ClosePop();
    $('#BTN_PurchaseInfoEdit').css('display','none');

    //清空
    $('.recorded_data').text('');

    //聯絡人姓名
    $('.recorded_data').append('<div class="row"><div class="title">您的大名</div><input type="text" name="" value="'+PurchaseInfo[0].Name+'" id="PurchaseInfo_Name"></div>');

    //聯絡人性別
    if (PurchaseInfo[0].Sex == 'Male'){
        $('.recorded_data').append('<div class="row"><div class="title">怎麼稱呼您</div><div class="sex_radio CLEARBOTH" id="PurchaseInfo_Sex"><input type="radio" name="sex" checked="checked" sexual="Male"><span>先生</span><input type="radio" name="sex" sexual="Female"><span>小姐</span><input type="radio" name="sex" sexual="Other"><span>其他</span><input type="text" class="othersexual_text"></div></div>');
    } else if (PurchaseInfo[0].Sex == 'Female') {
        $('.recorded_data').append('<div class="row"><div class="title">怎麼稱呼您</div><div class="sex_radio CLEARBOTH" id="PurchaseInfo_Sex"><input type="radio" name="sex" sexual="Male"><span>先生</span><input type="radio" name="sex" sexual="Female" checked="checked"><span>小姐</span><input type="radio" name="sex" sexual="Other"><span>其他</span><input type="text" class="othersexual_text"></div></div>');        
    } else {
        $('.recorded_data').append('<div class="row"><div class="title">怎麼稱呼您</div><div class="sex_radio CLEARBOTH" id="PurchaseInfo_Sex"><input type="radio" name="sex" sexual="Male"><span>先生</span><input type="radio" name="sex" sexual="Female"><span>小姐</span><input type="radio" name="sex" sexual="Other" checked="checked"><span>其他</span><input type="text" class="othersexual_text" value="'+PurchaseInfo[0].OtherSexualText+'"></div></div>');        
    }

    //聯絡人電話
    $('.recorded_data').append('<div class="row"><div class="title">聯絡電話</div><input type="text" name="" value="'+PurchaseInfo[0].Phone+'" id="PurchaseInfo_Phone"></div>');

    //聯絡人地址
    $('.recorded_data').append('<div class="row"><div class="title">聯絡地址</div><select><option>台北市</option><option>新北市</option></select><select><option>松山區&nbsp;105</option><option>大安區&nbsp;106</option></select><br><input type="text" name="" value="'+PurchaseInfo[0].Address_Other+'"></div>');

}

function DeliveryInfoEdit(){
        var DeliveryInfo_FormStatus = $('.recorded_data ').attr('formstatus');

        $('#BTN_DeliveryInfoEdit').css('display','none');
        if (DeliveryInfo_FormStatus == 'NewCustomers') {

        } else {
            $('#BTN_DeliveryInfoSave').css('display','flex');
        }
        
        /*var DeliveryInfo_Name = $('#DeliveryInfo_Name').text();
        var DeliveryInfo_Sex = $('#DeliveryInfo_Name').attr('sexual');
        var DeliveryInfo_Phone = $('#DeliveryInfo_Phone').text();
        var DeliveryInfo_Address = $('#DeliveryInfo_Address').text();*/


        //清空
        $('.recorded_data').text('');

        //收件人姓名
        $('.recorded_data').append('<div class="row"><div class="title">收件人的大名</div><input type="text" name="" value="'+DeliveryInfo[0].Name+'" id="DeliveryInfo_Name"></div>');        

        //收件人性別
        if (DeliveryInfo[0].Sex == 'Male'){
            $('.recorded_data').append('<div class="row"><div class="title">怎麼稱呼收件人</div><div class="sex_radio CLEARBOTH" id="PurchaseInfo_Sex"><input type="radio" name="sex" checked="checked" sexual="Male"><span>先生</span><input type="radio" name="sex" sexual="Female"><span>小姐</span></div></div>');
        } else if (DeliveryInfo[0].Sex == 'Female') {
            $('.recorded_data').append('<div class="row"><div class="title">怎麼稱呼收件人</div><div class="sex_radio CLEARBOTH" id="PurchaseInfo_Sex"><input type="radio" name="sex" sexual="Male"><span>先生</span><input type="radio" name="sex" sexual="Female" checked="checked"><span>小姐</span></div></div>');        
        } else {
            $('.recorded_data').append('<div class="row"><div class="title">怎麼稱呼收件人</div><div class="sex_radio CLEARBOTH" id="PurchaseInfo_Sex"><input type="radio" name="sex" sexual="Male"><span>先生</span><input type="radio" name="sex" sexual="Female"><span>小姐</span></div></div>');                    
        }

        //收件人電話
        $('.recorded_data').append('<div class="row"><div class="title">收件人電話</div><input type="text" name="" value="'+DeliveryInfo[0].Phone+'" id="PurchaseInfo_Phone"></div>');

        //收件人地址
        if (DeliveryInfo_FormStatus == 'NewCustomers') {     
            $('.recorded_data').append('<div class="row"><div class="title">收件人地址</div><select><option>台北市</option><option>新北市</option></select><select><option>松山區&nbsp;105</option><option>大安區&nbsp;106</option></select><br><input type="text" name="" value="'+DeliveryInfo[0].Address_Other+'"><div class="note CLEARBOTH">*離島冷藏宅配統一收取200元運費，恕無法享有滿額免運費優惠。</div><div class="note CLEARBOTH" id="BuildingGuardCollect"><input type="checkbox" name=""><span>管理員可代收</span></div></div>');
        } else {
            //管理員可代收
            if (DeliveryInfo[0].BuildingGuardCollect == true) {
                $('.recorded_data').append('<div class="row"><div class="title">收件人地址</div><select><option>台北市</option><option>新北市</option></select><select><option>松山區&nbsp;105</option><option>大安區&nbsp;106</option></select><br><input type="text" name="" value="'+DeliveryInfo[0].Address_Other+'"><div class="note CLEARBOTH">*離島冷藏宅配統一收取200元運費，恕無法享有滿額免運費優惠。</div><div class="note CLEARBOTH" id="BuildingGuardCollect"><input type="checkbox" name="" checked="checked"><span>管理員可代收</span></div></div>');
            } else {
                $('.recorded_data').append('<div class="row"><div class="title">收件人地址</div><select><option>台北市</option><option>新北市</option></select><select><option>松山區&nbsp;105</option><option>大安區&nbsp;106</option></select><br><input type="text" name="" value="'+DeliveryInfo[0].Address_Other+'"><div class="note CLEARBOTH">*離島冷藏宅配統一收取200元運費，恕無法享有滿額免運費優惠。</div><div class="note CLEARBOTH" id="BuildingGuardCollect"><input type="checkbox" name=""><span>管理員可代收</span></div></div>');
            }
        }

        //配送方式
        switch (DeliveryInfo[0].DeliveryType) {
            case 'SuperExpress':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SuperExpress" checked="checked"><span>特急件<label class="icon_question" id="SuperExpressInfo">?</label> 運費$300 (限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配<label class="icon_question" id="ExpressInfo">?</label> 運費$200 (限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取<label class="icon_question" id="SelfCollectInfo">?</label> </span></div></div></div>');
            break; 

            case 'Motocycle':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle" checked="checked"><span>當日配<label class="icon_question" id="ExpressInfo">?</label>(限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div></div></div>');
            break;
            /*
            case 'Car':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>機車當日配到府 (雙北特定區域、1400前)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Car" checked="checked"><span>汽車當日配需下樓自取 (雙北特定區域、1400前)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SuperExpress"><span>特急件2hr內到貨<label class="icon_question" id="SuperExpressInfo">?</label> (雙北特定區域、1700前)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>自取<label class="icon_question" id="SelfCollectInfo">?</label> </span></div></div></div>');
            break;
            */
            case 'T-cat':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配<label class="icon_question" id="ExpressInfo">?</label>(限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat" checked="checked"><span>宅配到府</span></div></div></div>');
            break;

            case 'SelfCollect':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SuperExpress"><span>特急件<label class="icon_question" id="SuperExpressInfo">?</label> 運費$300 (限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配<label class="icon_question" id="ExpressInfo">?</label> 運費$200 (限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect" checked="checked"><span>預約自取<label class="icon_question" id="SelfCollectInfo">?</label> </span></div></div></div>');
            break;            
            }
        //配送時間
        if (DeliveryInfo_FormStatus == 'NewCustomers'){
            $('.recorded_data').append('<div class="row"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');
        } else {
            //上午
            if (DeliveryInfo[0].Time == 'AM') {
                $('.recorded_data').append('<div class="row"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time" checked="checked"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');                            
            } 
            //下午
            else if (DeliveryInfo[0].Time == 'PM') {
                $('.recorded_data').append('<div class="row"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time" checked="checked"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');                                            
            }
            //皆可
            else {
                $('.recorded_data').append('<div class="row"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time" checked="checked"><span>皆可</span></div></div>');                                                            
            }
        }

        //配送日期
        if (DeliveryInfo_FormStatus == 'NewCustomers'){
            $('.recorded_data').append('<div class="row"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');
        } else {
            //平日
            if (DeliveryInfo[0].Date == 'Weekdays') {
                $('.recorded_data').append('<div class="row"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date" checked="checked"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');
            }
            //假日
            else if (DeliveryInfo[0].Date == 'Weekend') {
                $('.recorded_data').append('<div class="row"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date" checked="checked"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');
            }
            //皆可
            else {
                $('.recorded_data').append('<div class="row"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date" checked="checked"><span>皆可</span></div></div>');                
            }
        }

        //環保選項
        if (DeliveryInfo_FormStatus == 'NewCustomers'){
            $('.recorded_data').append('<div class="row"><div class="title">環保選項</div><div class="note CLEARBOTH" id="ReuseBox"><input type="checkbox" name=""><span>我愛地球我選用乾淨堅固的二手紙箱出貨。</span></div><div class="note CLEARBOTH" id="ReusePaperMaterial"><input type="checkbox" name=""><span>我愛地球我選用回收紙緩衝材（取代塑膠氣泡袋）。<a href="images/green_package.jpg" target="_blank">示意圖</a></span></div><div class="text" style="line-height: 25px;">敬請知悉：環保包材有可能不適用於部分商品，譬如禮盒，我們將會斟酌替換為氣泡袋。</div></div>');
        } else {
            $('.recorded_data').append('<div class="row"><div class="title">環保選項</div><div class="note CLEARBOTH" id="ReuseBox"><input type="checkbox" name=""><span>我愛地球我選用乾淨堅固的二手紙箱出貨。</span></div><div class="note CLEARBOTH" id="ReusePaperMaterial"><input type="checkbox" name=""><span>我愛地球我選用回收紙緩衝材（取代塑膠氣泡袋）。<a href="images/green_package.jpg" target="_blank">示意圖</a></span></div><div class="text" style="line-height: 25px;">敬請知悉：環保包材有可能不適用於部分商品，譬如禮盒，我們將會斟酌替換為氣泡袋。</div></div>');
            //紙箱
            if (DeliveryInfo[0].ReuseBox == true) {
                $('#ReuseBox input[type=checkbox]').attr('checked','checked');
            }

            //環保包材
            if (DeliveryInfo[0].ReusePaperMaterial == true) {
                $('#ReusePaperMaterial input[type=checkbox] ').attr('checked','checked');
            }
        }

        //重綁一次點checkbox、radio後面的文字
        $('.sex_radio span').click(function(){
            $(this).prev().click();
        });

        $('.note span').click(function(){
            $(this).prev().click();
        });

        //重綁一次說明
        //特急件說明視窗
        $('#SuperExpressInfo').click(function(){
            CWC_SuperExpressInfo();
        });

        //當日配說明視窗
        $('#ExpressInfo').click(function(){
            CWC_ExpressInfo();
        });

        //自取說明視窗
        $('#SelfCollectInfo').click(function(){
            CWC_SelfCollectInfo();
        });

}

function CWC_DeliveryInfoEdit(){
        var DeliveryInfo_FormStatus = $('.recorded_data ').attr('formstatus');

        $('#BTN_DeliveryInfoEdit').css('display','none');
        if (DeliveryInfo_FormStatus == 'NewCustomers') {

        } else {
            $('#BTN_DeliveryInfoSave').css('display','flex');
        }
        
        /*var DeliveryInfo_Name = $('#DeliveryInfo_Name').text();
        var DeliveryInfo_Sex = $('#DeliveryInfo_Name').attr('sexual');
        var DeliveryInfo_Phone = $('#DeliveryInfo_Phone').text();
        var DeliveryInfo_Address = $('#DeliveryInfo_Address').text();*/


        //清空
        $('.recorded_data').text('');

        //收件人姓名
        $('.recorded_data').append('<div class="row"><div class="title">收件人的大名</div><input type="text" name="" value="'+DeliveryInfo[0].Name+'" id="DeliveryInfo_Name"></div>');        

        //收件人性別
        if (DeliveryInfo[0].Sex == 'Male'){
            $('.recorded_data').append('<div class="row"><div class="title">怎麼稱呼收件人</div><div class="sex_radio CLEARBOTH" id="PurchaseInfo_Sex"><input type="radio" name="sex" checked="checked" sexual="Male"><span>先生</span><input type="radio" name="sex" sexual="Female"><span>小姐</span></div></div>');
        } else if (DeliveryInfo[0].Sex == 'Female') {
            $('.recorded_data').append('<div class="row"><div class="title">怎麼稱呼收件人</div><div class="sex_radio CLEARBOTH" id="PurchaseInfo_Sex"><input type="radio" name="sex" sexual="Male"><span>先生</span><input type="radio" name="sex" sexual="Female" checked="checked"><span>小姐</span></div></div>');        
        } else {
            $('.recorded_data').append('<div class="row"><div class="title">怎麼稱呼收件人</div><div class="sex_radio CLEARBOTH" id="PurchaseInfo_Sex"><input type="radio" name="sex" sexual="Male"><span>先生</span><input type="radio" name="sex" sexual="Female"><span>小姐</span></div></div>');                    
        }

        //收件人電話
        $('.recorded_data').append('<div class="row"><div class="title">收件人電話</div><input type="text" name="" value="'+DeliveryInfo[0].Phone+'" id="PurchaseInfo_Phone"></div>');

        //收件人地址
        if (DeliveryInfo_FormStatus == 'NewCustomers') {     
            $('.recorded_data').append('<div class="row"><div class="title">收件人地址</div><select><option>台北市</option><option>新北市</option></select><select><option>松山區&nbsp;105</option><option>大安區&nbsp;106</option></select><br><input type="text" name="" value="'+DeliveryInfo[0].Address_Other+'"><div class="note CLEARBOTH">*離島冷藏宅配統一收取200元運費，恕無法享有滿額免運費優惠。</div><div class="note CLEARBOTH" id="BuildingGuardCollect"><input type="checkbox" name=""><span>管理員可代收</span></div></div>');
        } else {
            //管理員可代收
            if (DeliveryInfo[0].BuildingGuardCollect == true) {
                $('.recorded_data').append('<div class="row"><div class="title">收件人地址</div><select><option>台北市</option><option>新北市</option></select><select><option>松山區&nbsp;105</option><option>大安區&nbsp;106</option></select><br><input type="text" name="" value="'+DeliveryInfo[0].Address_Other+'"><div class="note CLEARBOTH">*離島冷藏宅配統一收取200元運費，恕無法享有滿額免運費優惠。</div><div class="note CLEARBOTH" id="BuildingGuardCollect"><input type="checkbox" name="" checked="checked"><span>管理員可代收</span></div></div>');
            } else {
                $('.recorded_data').append('<div class="row"><div class="title">收件人地址</div><select><option>台北市</option><option>新北市</option></select><select><option>松山區&nbsp;105</option><option>大安區&nbsp;106</option></select><br><input type="text" name="" value="'+DeliveryInfo[0].Address_Other+'"><div class="note CLEARBOTH">*離島冷藏宅配統一收取200元運費，恕無法享有滿額免運費優惠。</div><div class="note CLEARBOTH" id="BuildingGuardCollect"><input type="checkbox" name=""><span>管理員可代收</span></div></div>');
            }
        }

        //配送方式
        switch (DeliveryInfo[0].DeliveryType) {
            case 'SuperExpress':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SuperExpress" checked="checked"><span>特急件<label class="icon_question" id="SuperExpressInfo">?</label> 運費$300 (限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配<label class="icon_question" id="ExpressInfo">?</label> 運費$200 (限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取<label class="icon_question" id="SelfCollectInfo">?</label> </span></div></div></div>');
            break; 

            case 'Motocycle':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SuperExpress"><span>特急件<label class="icon_question" id="SuperExpressInfo">?</label> 運費$300 (限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle" checked="checked"><span>當日配<label class="icon_question" id="ExpressInfo">?</label> 運費$200 (限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div>                    <div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取<label class="icon_question" id="SelfCollectInfo">?</label> </span></div></div>');
            break;
            /*
            case 'Car':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>機車當日配到府 (雙北特定區域、1400前)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Car" checked="checked"><span>汽車當日配需下樓自取 (雙北特定區域、1400前)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SuperExpress"><span>特急件2hr內到貨<label class="icon_question" id="SuperExpressInfo">?</label> (雙北特定區域、1700前)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>自取<label class="icon_question" id="SelfCollectInfo">?</label> </span></div></div></div>');
            break;
            */
            case 'T-cat':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SuperExpress"><span>特急件<label class="icon_question" id="SuperExpressInfo">?</label> 運費$300 (限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配<label class="icon_question" id="ExpressInfo">?</label> 運費$200 (限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat" checked="checked"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取<label class="icon_question" id="SelfCollectInfo">?</label> </span></div></div></div>');
            break;

            case 'SelfCollect':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SuperExpress"><span>特急件<label class="icon_question" id="SuperExpressInfo">?</label> 運費$300 (限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配<label class="icon_question" id="ExpressInfo">?</label> 運費$200 (限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect" checked="checked"><span>預約自取<label class="icon_question" id="SelfCollectInfo">?</label> </span></div></div></div>');
            break;            
            }
        //配送時間
        if (DeliveryInfo_FormStatus == 'NewCustomers'){
            $('.recorded_data').append('<div class="row"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');
        } else {
            //上午
            if (DeliveryInfo[0].Time == 'AM') {
                $('.recorded_data').append('<div class="row"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time" checked="checked"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');                            
            } 
            //下午
            else if (DeliveryInfo[0].Time == 'PM') {
                $('.recorded_data').append('<div class="row"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time" checked="checked"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');                                            
            }
            //皆可
            else {
                $('.recorded_data').append('<div class="row"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time" checked="checked"><span>皆可</span></div></div>');                                                            
            }
        }

        //配送日期
        if (DeliveryInfo_FormStatus == 'NewCustomers'){
            $('.recorded_data').append('<div class="row"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');
        } else {
            //平日
            if (DeliveryInfo[0].Date == 'Weekdays') {
                $('.recorded_data').append('<div class="row"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date" checked="checked"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');
            }
            //假日
            else if (DeliveryInfo[0].Date == 'Weekend') {
                $('.recorded_data').append('<div class="row"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date" checked="checked"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');
            }
            //皆可
            else {
                $('.recorded_data').append('<div class="row"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date" checked="checked"><span>皆可</span></div></div>');                
            }
        }

        //環保選項
        if (DeliveryInfo_FormStatus == 'NewCustomers'){
            $('.recorded_data').append('<div class="row"><div class="title">環保選項</div><div class="note CLEARBOTH" id="ReuseBox"><input type="checkbox" name=""><span>我愛地球我選用乾淨堅固的二手紙箱出貨。</span></div><div class="note CLEARBOTH" id="ReusePaperMaterial"><input type="checkbox" name=""><span>我愛地球我選用回收紙緩衝材（取代塑膠氣泡袋）。<a href="images/green_package.jpg" target="_blank">示意圖</a></span></div><div class="text" style="line-height: 25px;">敬請知悉：環保包材有可能不適用於部分商品，譬如禮盒，我們將會斟酌替換為氣泡袋。</div></div>');
        } else {
            $('.recorded_data').append('<div class="row"><div class="title">環保選項</div><div class="note CLEARBOTH" id="ReuseBox"><input type="checkbox" name=""><span>我愛地球我選用乾淨堅固的二手紙箱出貨。</span></div><div class="note CLEARBOTH" id="ReusePaperMaterial"><input type="checkbox" name=""><span>我愛地球我選用回收紙緩衝材（取代塑膠氣泡袋）。<a href="images/green_package.jpg" target="_blank">示意圖</a></span></div><div class="text" style="line-height: 25px;">敬請知悉：環保包材有可能不適用於部分商品，譬如禮盒，我們將會斟酌替換為氣泡袋。</div></div>');
            //紙箱
            if (DeliveryInfo[0].ReuseBox == true) {
                $('#ReuseBox input[type=checkbox]').attr('checked','checked');
            }

            //環保包材
            if (DeliveryInfo[0].ReusePaperMaterial == true) {
                $('#ReusePaperMaterial input[type=checkbox] ').attr('checked','checked');
            }
        }

        //重綁一次點checkbox、radio後面的文字
        $('.sex_radio span').click(function(){
            $(this).prev().click();
        });

        $('.note span').click(function(){
            $(this).prev().click();
        });

        //重綁一次說明
        //特急件說明視窗
        $('#SuperExpressInfo').click(function(){
            CWC_SuperExpressInfo();
        });

        //當日配說明視窗
        $('#ExpressInfo').click(function(){
            CWC_ExpressInfo();
        });

        //自取說明視窗
        $('#SelfCollectInfo').click(function(){
            CWC_SelfCollectInfo();
        });

}

function AddNewDeliveryInfo() {
    $('#BTN_DeliveryInfoEdit').css('display','none');
    $('#BTN_DeliveryInfoSave').css('display','flex');

    //清空
    $('.recorded_data').text('');

    //收件人姓名
    $('.recorded_data').append('<div class="row"><div class="title">收件人的大名</div><input type="text" name="" value="" id="DeliveryInfo_Name"></div>');        

    //收件人性別
    $('.recorded_data').append('<div class="row"><div class="title">怎麼稱呼收件人</div><div class="sex_radio CLEARBOTH" id="PurchaseInfo_Sex"><input type="radio" name="sex" sexual="Male"><span>先生</span><input type="radio" name="sex" sexual="Female"><span>小姐</span></div></div>');

    //收件人電話
    $('.recorded_data').append('<div class="row"><div class="title">收件人電話</div><input type="text" name="" value="" id="PurchaseInfo_Phone"></div>');

    //收件人地址
    $('.recorded_data').append('<div class="row"><div class="title">收件人地址</div><select><option>台北市</option><option>新北市</option></select><select><option>松山區&nbsp;105</option><option>大安區&nbsp;106</option></select><br><input type="text" name="" value=""><div class="note CLEARBOTH">*離島冷藏宅配統一收取200元運費，恕無法享有滿額免運費優惠。</div><div class="note CLEARBOTH" id="BuildingGuardCollect"><input type="checkbox" name=""><span>管理員可代收</span></div></div>');

    //配送方式
    $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配<label class="icon_question" id="ExpressInfo">?</label>(限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div></div></div>');

    //配送時間
    $('.recorded_data').append('<div class="row"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');

    //配送星期
    $('.recorded_data').append('<div class="row"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');

    //環保選項
    $('.recorded_data').append('<div class="row"><div class="title">環保選項</div><div class="note CLEARBOTH" id="ReuseBox"><input type="checkbox" name=""><span>我愛地球我選用乾淨堅固的二手紙箱出貨。</span></div><div class="note CLEARBOTH" id="ReusePaperMaterial"><input type="checkbox" name=""><span>我愛地球我選用回收紙緩衝材（取代塑膠氣泡袋）。<a href="images/green_package.jpg" target="_blank">示意圖</a></span></div><div class="text" style="line-height: 25px;">敬請知悉：環保包材有可能不適用於部分商品，譬如禮盒，我們將會斟酌替換為氣泡袋。</div></div>');

    //重綁一次點checkbox、radio後面的文字
    $('.sex_radio span').click(function(){
        $(this).prev().click();
    });

    $('.note span').click(function(){
        $(this).prev().click();
    });

    //重綁當日配說明視窗
    $('#ExpressInfo').click(function(){
        CWC_ExpressInfo();
    });

}

function ImportDeliveryInfo(data) {
    var DeliveryInfo_FormStatus = $('.recorded_data ').attr('formstatus');

    if (DeliveryInfo_FormStatus == 'PurchaseInfo'){
        $('#BTN_DeliveryInfoSave').css('display','none');
        $('#BTN_DeliveryInfoEdit').css('display','none');
    } else {
        $('#BTN_DeliveryInfoSave').css('display','none');
        $('#BTN_DeliveryInfoEdit').css('display','block');
    }
    

    //清空
    $('.recorded_data').text('');

    //新客人
    if (DeliveryInfo_FormStatus == 'NewCustomers') {
        $('.recorded_data').append('<div class="row"></div>');

        //姓名
        if (data[0].Sex == 'Male') {
            $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Name" sexual="'+data[0].Sex+'">'+data[0].Name+'</div>');
        } else if (data[0].Sex == 'Female') {
            $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Name" sexual="'+data[0].Sex+'">'+data[0].Name+'</div>');            
        }else {
            $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Name" sexual="'+data[0].Sex+'">'+data[0].Name+'</div>');                        
        }

        //電話
        $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Phone">'+data[0].Phone+'</div>');

        //地址
        $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Address">'+data[0].Address_PostalCode+data[0].Address_City+data[0].Address_District+data[0].Address_Other+'</div><div class="note CLEARBOTH">*離島冷藏宅配統一收取200元運費，恕無法享有滿額免運費優惠。</div><div class="note CLEARBOTH" id="BuildingGuardCollect"><input type="checkbox" name=""><span>管理員可代收</span></div>');

        //配送方式
        $('.recorded_data .row').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配<label class="icon_question" id="ExpressInfo">?</label>(限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div></div></div>');

        //配送時間
        $('.recorded_data').append('<div class="row"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_Time"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');

        //配送星期
        $('.recorded_data').append('<div class="row"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_Date"><input type="radio" name="date"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');

        //環保選項
        $('.recorded_data').append('<div class="row"><div class="title">環保選項</div><div class="note CLEARBOTH" id="ReuseBox"><input type="checkbox" name=""><span>我愛地球我選用乾淨堅固的二手紙箱出貨。</span></div><div class="note CLEARBOTH" id="ReusePaperMaterial"><input type="checkbox" name=""><span>我愛地球我選用回收紙緩衝材（取代塑膠氣泡袋）。<a href="images/green_package.jpg" target="_blank">示意圖</a></span></div><div class="text" style="line-height: 25px;">敬請知悉：環保包材有可能不適用於部分商品，譬如禮盒，我們將會斟酌替換為氣泡袋。</div></div>');
    } 
    //舊客人
    else {
        $('.recorded_data').append('<div class="row"></div>');
        //姓名
        if (data[0].Sex == 'Male') {
            $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Name" sexual="'+data[0].Sex+'">'+data[0].Name+'</div>');
        } else if (data[0].Sex == 'Female') {
            $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Name" sexual="'+data[0].Sex+'">'+data[0].Name+'</div>');            
        }else {
            $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Name" sexual="'+data[0].Sex+'">'+data[0].Name+'</div>');                        
        }

        //電話
        $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Phone">'+data[0].Phone+'</div>');

        //地址
        if (data[0].BuildingGuardCollect == true) {
            $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Address">'+data[0].Address_PostalCode+data[0].Address_City+data[0].Address_District+data[0].Address_Other+'</div><div class="note CLEARBOTH">*離島冷藏宅配統一收取200元運費，恕無法享有滿額免運費優惠。</div><div class="text" id="BuildingGuardCollect">✓&nbsp;管理員可代收</div>');
        } else {
            $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Address">'+data[0].Address_PostalCode+data[0].Address_City+data[0].Address_District+data[0].Address_Other+'</div><div class="note CLEARBOTH">*離島冷藏宅配統一收取200元運費，恕無法享有滿額免運費優惠。</div>');
        }

        //配送方式
        switch (data[0].DeliveryType) {
            case 'Motocycle':
                $('.recorded_data .row').append('<div class="text" id="DeliveryType_Motocycle">當日配</div>');
            break;
            /*
            case 'Car':
                $('.recorded_data .row').append('<div class="text" id="DeliveryType_Car">汽車當日配(需下樓自取)</div>');
            break;
            */
            case 'T-cat':            
                $('.recorded_data .row').append('<div class="text" id="DeliveryType_T-Cat">宅配到府</div>');
            break;

            case 'SuperExpress':
                $('.recorded_data .row').append('<div class="text" id="DeliveryType_SuperExpress">特急件</div>');
            break;

            case 'SelfCollect':
                $('.recorded_data .row').append('<div class="text" id="DeliveryType_SelfCollect">預約自取</div>');
            break;                            
        }

        //配送時間
        if (data[0].Time == 'AM') {
            $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Time">希望於上午(08~13時)送達</div>');
        } else if (data[0].Time == 'PM') {
            $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Time">希望於下午(14~18時)送達</div>');            
        } else {
            $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Time">上午、下午皆可配送</div>');            
        }

        //配送星期
        if (data[0].Date == 'Weekdays'){
            $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Date">希望於平日配送</div>');
        } else if (data[0].Date == 'Weekend') {
            $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Date">希望於假日配送</div>');            
        } else {
            $('.recorded_data .row').append('<div class="text" id="DeliveryInfo_Date">平日、假日皆可配送</div>');           
        }

        //環保選項
        if (data[0].ReuseBox == true){
            $('.recorded_data .row').append('<div class="text" id="ReuseBox">✓&nbsp;我愛地球我選用乾淨堅固的二手紙箱出貨。</div>');
        }

        if (data[0].ReusePaperMaterial == true) {
            $('.recorded_data .row').append('<div class="text" id="ReusePaperMaterial">✓&nbsp;我愛地球我選用回收紙緩衝材（取代塑膠氣泡袋）<a href="images/green_package.jpg" target="_blank">示意圖</a></div>');
        }

    }

    //重綁一次點checkbox、radio後面的文字
    $('.sex_radio span').click(function(){
        $(this).prev().click();
    });

    $('.note span').click(function(){
        $(this).prev().click();
    });

}

function InvoiceInfoEdit(data) {
    $('#BTN_InvoiceInfoEdit').css('display','none');
    $('#BTN_InvoiceInfoSave').css('display','flex');

    //清空
    $('.recorded_data').text('');

    //公司名稱
    $('.recorded_data').append('<div class="row" style="margin-top: 20px;"><div class="title">發票抬頭</div><input type="text" name="" id="InvoiceInfo_CompanyName" value="'+data[0].CompanyName+'"></div>');

    //統編
    $('.recorded_data').append('<div class="row"><div class="title">發票統編</div><input type="text" name="" id="InvoiceInfo_BAN" value="'+data[0].BAN+'"></div>');

    //提示文字
    $('.recorded_data').append('<div class="row"><div class="note">發票將於出貨後開立並Email至您的信箱，亦可至「訂單查詢」自行下載列印，恕不再提供紙本發票。</div><div class="text">發票聯式一經開立後，恕無法再行更改。</div></div>');

}

function ImportInvoiceInfo(data){
    $('#BTN_InvoiceInfoEdit').css('display','block');
    $('#BTN_InvoiceInfoSave').css('display','none');

    //清空
    $('.recorded_data').text('');

    $('.recorded_data').append('<div class="row"></div>');

    //公司名稱
    $('.recorded_data .row').append('<div class="text" id="CompanyInfo_Name">'+data[0].CompanyName+'</div>');

    //統編
    $('.recorded_data .row').append('<div class="text" id="CompanyInfo_BAN">'+data[0].BAN+'</div>');

    //提示文字
    $('.recorded_data').append('<div class="row"><div class="note">發票將於出貨後開立並Email至您的信箱，亦可至「訂單查詢」自行下載列印，恕不再提供紙本發票。</div><div class="text">發票聯式一經開立後，恕無法再行更改。</div></div>');
}

function AddNewCompanyInfo() {
    $('#BTN_InvoiceInfoEdit').css('display','none');
    $('#BTN_InvoiceInfoSave').css('display','flex');

    //清空
    $('.recorded_data').text('');

    //公司名稱
    $('.recorded_data').append('<div class="row" style="margin-top: 20px;"><div class="title">發票抬頭</div><input type="text" name="" id="InvoiceInfo_CompanyName"></div>');

    //統編
    $('.recorded_data').append('<div class="row"><div class="title">發票統編</div><input type="text" name="" id="InvoiceInfo_BAN"></div>');

    //提示文字
    $('.recorded_data').append('<div class="row"><div class="note">發票將於出貨後開立並Email至您的信箱，亦可至「訂單查詢」自行下載列印，恕不再提供紙本發票。</div><div class="text">發票聯式一經開立後，恕無法再行更改。</div></div>');
}