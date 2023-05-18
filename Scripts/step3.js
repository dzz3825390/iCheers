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
        LabelCheck:true,
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
        LabelCheck:true,
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
        LabelCheck:false,
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
            /*case 'SuperExpress':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SuperExpress" checked="checked"><span>特急件<label class="icon_question" id="SuperExpressInfo">?</label> 運費$300 (限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配<label class="icon_question" id="ExpressInfo">?</label> 運費$200 (限雙北區域、付款方式僅限匯款/刷卡)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取<label class="icon_question" id="SelfCollectInfo">?</label> </span></div></div></div>');
            break;*/

            case 'Motocycle':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle" checked="checked"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span><div class="extend">將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。</div></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取(免運費)</span><div class="extend">請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/>地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面）</div></div></div></div>');
            break;
            /*
            case 'Car':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>機車當日配到府 (雙北特定區域、1400前)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Car" checked="checked"><span>汽車當日配需下樓自取 (雙北特定區域、1400前)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SuperExpress"><span>特急件2hr內到貨<label class="icon_question" id="SuperExpressInfo">?</label> (雙北特定區域、1700前)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>自取<label class="icon_question" id="SelfCollectInfo">?</label> </span></div></div></div>');
            break;
            */
            case 'T-cat':
                $('.recorded_data').append('<div class="row"> <div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat" checked="checked"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span><div class="extend">將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。</div></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取(免運費)</span><div class="extend">請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/>地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面）</div></div></div></div>');
            break;

            case 'SelfCollect':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span><div class="extend">將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。</div></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect" checked="checked"><span>預約自取(免運費)</span><div class="extend">請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/>地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面）</div></div></div></div>');
            break;            
            }
        //配送時間
        if (DeliveryInfo_FormStatus == 'NewCustomers'){
            $('.recorded_data').append('<div class="row delivery_time" style="display:none;"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');
        } else {
            //上午
            if (DeliveryInfo[0].Time == 'AM') {
                $('.recorded_data').append('<div class="row delivery_time" style="display:none;"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time" checked="checked"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');                            
            } 
            //下午
            else if (DeliveryInfo[0].Time == 'PM') {
                $('.recorded_data').append('<div class="row delivery_time" style="display:none;"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time" checked="checked"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');                                            
            }
            //皆可
            else {
                $('.recorded_data').append('<div class="row delivery_time" style="display:none;"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time" checked="checked"><span>皆可</span></div></div>');                                                            
            }
        }

        //配送日期
        if (DeliveryInfo_FormStatus == 'NewCustomers'){
            $('.recorded_data').append('<div class="row delivery_date" style="display:none;"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');
        } else {
            //平日
            if (DeliveryInfo[0].Date == 'Weekdays') {
                $('.recorded_data').append('<div class="row delivery_date" style="display:none;"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date" checked="checked"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');
            }
            //假日
            else if (DeliveryInfo[0].Date == 'Weekend') {
                $('.recorded_data').append('<div class="row delivery_date" style="display:none;"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date" checked="checked"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');
            }
            //皆可
            else {
                $('.recorded_data').append('<div class="row delivery_date" style="display:none;"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date" checked="checked"><span>皆可</span></div></div>');                
            }
        }

        //包裝選項
        if (DeliveryInfo_FormStatus == 'NewCustomers'){
            $('.recorded_data').append('<div class="row"><div class="title">關於包裝</div><div class="note CLEARBOTH"><input type="checkbox" name="" id="iCheersPaperbagCheck"><span>請隨貨附提袋</span><label id="iCheersPaaerbagCount" style="display: none;"><input type="text" name="" style="float: left;width: 40px;margin-left: 5px;margin-top: -12px;text-align: center;"><span>個</span></label><div class="extend">敬請知悉：<br/>iCheers提袋為單入常規尺寸，若商品屬於下列情況，我們將<b style="color:#c20012">「不會」</b>隨貨附贈，恕不另行通知：1) 商品已有附贈原廠提袋、2)特殊瓶身無法裝入、3)禮盒型商品無法裝入。</div></div><div class="note CLEARBOTH" id="ReusePaperMaterial"><input type="checkbox" name=""><span>我不介意用回收紙緩衝材（取代塑膠氣泡袋）。<a href="images/green_package.jpg" target="_blank">示意圖</a></span><div class="extend">敬請知悉：環保包材有可能不適用於部分商品，譬如禮盒，我們將會斟酌替換為氣泡袋。</div></div><div class="note CLEARBOTH" id="ReuseBox"><input type="checkbox" name="" checked="checked"><span>我不介意用乾淨堅固的二手紙箱。</span></div><div class="note CLEARBOTH" id="LabelCheck"><input type="checkbox" name="" checked="checked"><span>我不介意酒標有微小瑕疵。</span><label class="icon_question" id="LabelCheckInfo">?</label></div></div></div>');
        } else {
            $('.recorded_data').append('<div class="row"><div class="title">關於包裝</div><div class="note CLEARBOTH"><input type="checkbox" name="" id="iCheersPaperbagCheck"><span>請隨貨附提袋</span><label id="iCheersPaaerbagCount" style="display: none;"><input type="text" name="" style="float: left;width: 40px;margin-left: 5px;margin-top: -12px;text-align: center;"><span>個</span></label><div class="extend">敬請知悉：<br/>iCheers提袋為單入常規尺寸，若商品屬於下列情況，我們將<b style="color:#c20012">「不會」</b>隨貨附贈，恕不另行通知：1) 商品已有附贈原廠提袋、2)特殊瓶身無法裝入、3)禮盒型商品無法裝入。</div></div><div class="note CLEARBOTH" id="ReusePaperMaterial"><input type="checkbox" name=""><span>我不介意用回收紙緩衝材（取代塑膠氣泡袋）。<a href="images/green_package.jpg" target="_blank">示意圖</a></span><div class="extend">敬請知悉：環保包材有可能不適用於部分商品，譬如禮盒，我們將會斟酌替換為氣泡袋。</div></div><div class="note CLEARBOTH" id="ReuseBox"><input type="checkbox" name="" checked="checked"><span>我不介意用乾淨堅固的二手紙箱。</span></div><div class="note CLEARBOTH" id="LabelCheck"><input type="checkbox" name="" checked="checked"><span>我不介意酒標有微小瑕疵。</span><label class="icon_question" id="LabelCheckInfo">?</label></div></div></div>');
            //紙箱
            if (DeliveryInfo[0].ReuseBox == true) {
                $('#ReuseBox input[type=checkbox]').attr('checked','checked');
            }

            //環保包材
            if (DeliveryInfo[0].ReusePaperMaterial == true) {
                $('#ReusePaperMaterial input[type=checkbox] ').attr('checked','checked');
            }

            //超完美酒標
            if (DeliveryInfo[0].LabelCheck == true){

            } else {
                $('#LabelCheck input[type=checkbox] ').attr('checked','checked');
            }
        }

        //宅配到府時顯示配送時間與星期選項
        if (DeliveryInfo[0].DeliveryType == 'T-cat') {
            $('.delivery_time').css('display','block');
            $('.delivery_date').css('display','block');
        }

        //重綁一次點checkbox、radio後面的文字
        $('.sex_radio span').click(function(){
            $(this).prev().click();
        });

        $('.note span').click(function(){
            $(this).prev().click();
        });

        //重綁一次宅配到府選項check確認
        $('#DeliveryInfo_project input[type=radio]').change(function(){
            if($('#DeliveryType_T-Cat').prop('checked') == true){
                $('.delivery_time').slideDown('fast');
                $('.delivery_date').slideDown();
            } else {
                $('.delivery_time').slideUp();
                $('.delivery_date').slideUp('fast');
            }
        });

        //重綁一次紙袋check
        $('#iCheersPaperbagCheck').click(function(){
            if($(this).prop('checked')){
                $('#iCheersPaaerbagCount').css('display','block');
                $('#iCheersPaaerbagCount input[type="text"]').attr('value','0');
            } else {
                $('#iCheersPaaerbagCount').css('display','none');
            }
        });

        //重綁一次酒標瑕疵說明
        $('#LabelCheckInfo').click(function(){
            LabelCheckInfo();
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
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span><div class="extend">將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。</div></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SuperExpress" checked="checked"><span>特急件(限雙北區域、付款方式僅限匯款/刷卡)</span><div class="extend">將於上班日（周一至周五，國定假日除外）火速出貨，歡迎備註說明，我們會盡力達成您的期望；若已截單（超過當日17:00）將順延至下個工作日急件出貨。特急件將加收運費$300，若滿免運門檻則加收$100。</div></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取(免運費)</span><div class="extend">請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/>地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面）</div></div></div></div>');
            break;

            case 'Motocycle':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle" checked="checked"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span><div class="extend">將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。</div></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SuperExpress"><span>特急件(限雙北區域、付款方式僅限匯款/刷卡)</span><div class="extend">將於上班日（周一至周五，國定假日除外）火速出貨，歡迎備註說明，我們會盡力達成您的期望；若已截單（超過當日17:00）將順延至下個工作日急件出貨。特急件將加收運費$300，若滿免運門檻則加收$100。</div></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取(免運費)</span><div class="extend">請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/>地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面）</div></div></div></div>');
            break;
            /*
            case 'Car':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>機車當日配到府 (雙北特定區域、1400前)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Car" checked="checked"><span>汽車當日配需下樓自取 (雙北特定區域、1400前)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SuperExpress"><span>特急件2hr內到貨<label class="icon_question" id="SuperExpressInfo">?</label> (雙北特定區域、1700前)</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>自取<label class="icon_question" id="SelfCollectInfo">?</label> </span></div></div></div>');
            break;
            */
            case 'T-cat':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat" checked="checked"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span><div class="extend">將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。</div></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SuperExpress"><span>特急件(限雙北區域、付款方式僅限匯款/刷卡)</span><div class="extend">將於上班日（周一至周五，國定假日除外）火速出貨，歡迎備註說明，我們會盡力達成您的期望；若已截單（超過當日17:00）將順延至下個工作日急件出貨。特急件將加收運費$300，若滿免運門檻則加收$100。</div></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取(免運費)</span><div class="extend">請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/>地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面）</div></div></div></div>');
            break;

            case 'SelfCollect':
                $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span><div class="extend">將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。</div></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SuperExpress"><span>特急件(限雙北區域、付款方式僅限匯款/刷卡)</span><div class="extend">將於上班日（周一至周五，國定假日除外）火速出貨，歡迎備註說明，我們會盡力達成您的期望；若已截單（超過當日17:00）將順延至下個工作日急件出貨。特急件將加收運費$300，若滿免運門檻則加收$100。</div></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect" checked="checked"><span>預約自取(免運費)</span><div class="extend">請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/>地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面）</div></div></div></div>');
            break;            
            }
        //配送時間
        if (DeliveryInfo_FormStatus == 'NewCustomers'){
            $('.recorded_data').append('<div class="row delivery_time" style="display:none;"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');
        } else {
            //上午
            if (DeliveryInfo[0].Time == 'AM') {
                $('.recorded_data').append('<div class="row delivery_time" style="display:none;"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time" checked="checked"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');                            
            } 
            //下午
            else if (DeliveryInfo[0].Time == 'PM') {
                $('.recorded_data').append('<div class="row delivery_time" style="display:none;"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time" checked="checked"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');                                            
            }
            //皆可
            else {
                $('.recorded_data').append('<div class="row delivery_time" style="display:none;"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time" checked="checked"><span>皆可</span></div></div>');                                                            
            }
        }

        //配送日期
        if (DeliveryInfo_FormStatus == 'NewCustomers'){
            $('.recorded_data').append('<div class="row delivery_date" style="display:none;"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');
        } else {
            //平日
            if (DeliveryInfo[0].Date == 'Weekdays') {
                $('.recorded_data').append('<div class="row delivery_date" style="display:none;"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date" checked="checked"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');
            }
            //假日
            else if (DeliveryInfo[0].Date == 'Weekend') {
                $('.recorded_data').append('<div class="row delivery_date" style="display:none;"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date" checked="checked"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');
            }
            //皆可
            else {
                $('.recorded_data').append('<div class="row delivery_date" style="display:none;"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date" checked="checked"><span>皆可</span></div></div>');                
            }
        }

        //包裝選項
        if (DeliveryInfo_FormStatus == 'NewCustomers'){
            $('.recorded_data').append('<div class="row"><div class="title">關於包裝</div><div class="note CLEARBOTH"><input type="checkbox" name="" id="iCheersPaperbagCheck"><span>請隨貨附提袋</span><label id="iCheersPaaerbagCount" style="display: none;"><input type="text" name="" style="float: left;width: 40px;margin-left: 5px;margin-top: -12px;text-align: center;"><span>個</span></label><div class="extend">敬請知悉：<br/>iCheers提袋為單入常規尺寸，若商品屬於下列情況，我們將<b style="color:#c20012">「不會」</b>隨貨附贈，恕不另行通知：1) 商品已有附贈原廠提袋、2)特殊瓶身無法裝入、3)禮盒型商品無法裝入。</div></div><div class="note CLEARBOTH" id="ReusePaperMaterial"><input type="checkbox" name=""><span>我不介意用回收紙緩衝材（取代塑膠氣泡袋）。<a href="images/green_package.jpg" target="_blank">示意圖</a></span><div class="extend">敬請知悉：環保包材有可能不適用於部分商品，譬如禮盒，我們將會斟酌替換為氣泡袋。</div></div><div class="note CLEARBOTH" id="ReuseBox"><input type="checkbox" name="" checked="checked"><span>我不介意用乾淨堅固的二手紙箱。</span></div></div></div>');
        } else {
            $('.recorded_data').append('<div class="row"><div class="title">關於包裝</div><div class="note CLEARBOTH"><input type="checkbox" name="" id="iCheersPaperbagCheck"><span>請隨貨附提袋</span><label id="iCheersPaaerbagCount" style="display: none;"><input type="text" name="" style="float: left;width: 40px;margin-left: 5px;margin-top: -12px;text-align: center;"><span>個</span></label><div class="extend">敬請知悉：<br/>iCheers提袋為單入常規尺寸，若商品屬於下列情況，我們將<b style="color:#c20012">「不會」</b>隨貨附贈，恕不另行通知：1) 商品已有附贈原廠提袋、2)特殊瓶身無法裝入、3)禮盒型商品無法裝入。</div></div><div class="note CLEARBOTH" id="ReusePaperMaterial"><input type="checkbox" name=""><span>我不介意用回收紙緩衝材（取代塑膠氣泡袋）。<a href="images/green_package.jpg" target="_blank">示意圖</a></span><div class="extend">敬請知悉：環保包材有可能不適用於部分商品，譬如禮盒，我們將會斟酌替換為氣泡袋。</div></div><div class="note CLEARBOTH" id="ReuseBox"><input type="checkbox" name="" checked="checked"><span>我不介意用乾淨堅固的二手紙箱。</span></div></div></div>');
            //紙箱
            if (DeliveryInfo[0].ReuseBox == true) {
                $('#ReuseBox input[type=checkbox]').attr('checked','checked');
            }

            //環保包材
            if (DeliveryInfo[0].ReusePaperMaterial == true) {
                $('#ReusePaperMaterial input[type=checkbox] ').attr('checked','checked');
            }

        }

        //宅配到府時顯示配送時間與星期選項
        if (DeliveryInfo[0].DeliveryType == 'T-cat') {
            $('.delivery_time').css('display','block');
            $('.delivery_date').css('display','block');
        }

        //重綁一次點checkbox、radio後面的文字
        $('.sex_radio span').click(function(){
            $(this).prev().click();
        });

        $('.note span').click(function(){
            $(this).prev().click();
        });

        //重綁一次宅配到府選項check確認
        $('#DeliveryInfo_project input[type=radio]').change(function(){
            if($('#DeliveryType_T-Cat').prop('checked') == true){
                $('.delivery_time').slideDown('fast');
                $('.delivery_date').slideDown();
            } else {
                $('.delivery_time').slideUp();
                $('.delivery_date').slideUp('fast');
            }
        });

        //重綁一次紙袋check
        $('#iCheersPaperbagCheck').click(function(){
            if($(this).prop('checked')){
                $('#iCheersPaaerbagCount').css('display','block');
                $('#iCheersPaaerbagCount input[type="text"]').attr('value','0');
            } else {
                $('#iCheersPaaerbagCount').css('display','none');
            }
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
    $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span><div class="extend">將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。</div></div>                <div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取(免運費)</span><div class="extend">請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/>地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面）</div></div></div></div>');

    //配送時間
    $('.recorded_data').append('<div class="row delivery_time" style="display:none;"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');

    //配送星期
    $('.recorded_data').append('<div class="row delivery_date" style="display:none;"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');

    //關於包裝
    $('.recorded_data').append('<div class="row"><div class="title">關於包裝</div><div class="note CLEARBOTH"><input type="checkbox" name="" id="iCheersPaperbagCheck"><span>請隨貨附提袋</span><label id="iCheersPaaerbagCount" style="display: none;"><input type="text" name="" style="float: left;width: 40px;margin-left: 5px;margin-top: -12px;text-align: center;"><span>個</span></label><div class="extend">敬請知悉：<br/>iCheers提袋為單入常規尺寸，若商品屬於下列情況，我們將<b style="color:#c20012">「不會」</b>隨貨附贈，恕不另行通知：1) 商品已有附贈原廠提袋、2)特殊瓶身無法裝入、3)禮盒型商品無法裝入。</div></div><div class="note CLEARBOTH" id="ReusePaperMaterial"><input type="checkbox" name=""><span>我不介意用回收紙緩衝材（取代塑膠氣泡袋）。<a href="images/green_package.jpg" target="_blank">示意圖</a></span><div class="extend">敬請知悉：環保包材有可能不適用於部分商品，譬如禮盒，我們將會斟酌替換為氣泡袋。</div></div><div class="note CLEARBOTH" id="ReuseBox"><input type="checkbox" name="" checked="checked"><span>我不介意用乾淨堅固的二手紙箱。</span></div><div class="note CLEARBOTH" id="LabelCheck"><input type="checkbox" name="" checked="checked"><span>我不介意酒標有微小瑕疵。</span><label class="icon_question" id="LabelCheckInfo">?</label></div></div></div>');

        //重綁一次點checkbox、radio後面的文字
        $('.sex_radio span').click(function(){
            $(this).prev().click();
        });

        $('.note span').click(function(){
            $(this).prev().click();
        });

        //重綁一次宅配到府選項check確認
        $('#DeliveryInfo_project input[type=radio]').change(function(){
            if($('#DeliveryType_T-Cat').prop('checked') == true){
                $('.delivery_time').slideDown('fast');
                $('.delivery_date').slideDown();
            } else {
                $('.delivery_time').slideUp();
                $('.delivery_date').slideUp('fast');
            }
        });

        //重綁一次紙袋check
        $('#iCheersPaperbagCheck').click(function(){
            if($(this).prop('checked')){
                $('#iCheersPaaerbagCount').css('display','block');
                $('#iCheersPaaerbagCount input[type="text"]').attr('value','0');
            } else {
                $('#iCheersPaaerbagCount').css('display','none');
            }
        });

        //重綁一次酒標瑕疵說明
        $('#LabelCheckInfo').click(function(){
            LabelCheckInfo();
        });

    

}

function CWC_AddNewDeliveryInfo() {
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
    $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span><div class="extend">將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。</div></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SuperExpress"><span>特急件(限雙北區域、付款方式僅限匯款/刷卡)</span><div class="extend">將於上班日（周一至周五，國定假日除外）火速出貨，歡迎備註說明，我們會盡力達成您的期望；若已截單（超過當日17:00）將順延至下個工作日急件出貨。特急件將加收運費$300，若滿免運門檻則加收$100。</div></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取(免運費)</span><div class="extend">請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/>地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面）</div></div></div></div>');

    //配送時間
    $('.recorded_data').append('<div class="row delivery_time" style="display:none;"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');

    //配送星期
    $('.recorded_data').append('<div class="row delivery_date" style="display:none;"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');

    //關於包裝
    $('.recorded_data').append('<div class="row"><div class="title">關於包裝</div><div class="note CLEARBOTH"><input type="checkbox" name="" id="iCheersPaperbagCheck"><span>請隨貨附提袋</span><label id="iCheersPaaerbagCount" style="display: none;"><input type="text" name="" style="float: left;width: 40px;margin-left: 5px;margin-top: -12px;text-align: center;"><span>個</span></label><div class="extend">敬請知悉：<br/>iCheers提袋為單入常規尺寸，若商品屬於下列情況，我們將<b style="color:#c20012">「不會」</b>隨貨附贈，恕不另行通知：1) 商品已有附贈原廠提袋、2)特殊瓶身無法裝入、3)禮盒型商品無法裝入。</div></div><div class="note CLEARBOTH" id="ReusePaperMaterial"><input type="checkbox" name=""><span>我不介意用回收紙緩衝材（取代塑膠氣泡袋）。<a href="images/green_package.jpg" target="_blank">示意圖</a></span><div class="extend">敬請知悉：環保包材有可能不適用於部分商品，譬如禮盒，我們將會斟酌替換為氣泡袋。</div></div><div class="note CLEARBOTH" id="ReuseBox"><input type="checkbox" name="" checked="checked"><span>我不介意用乾淨堅固的二手紙箱。</span></div></div></div>');

        //重綁一次點checkbox、radio後面的文字
        $('.sex_radio span').click(function(){
            $(this).prev().click();
        });

        $('.note span').click(function(){
            $(this).prev().click();
        });

        //重綁一次宅配到府選項check確認
        $('#DeliveryInfo_project input[type=radio]').change(function(){
            if($('#DeliveryType_T-Cat').prop('checked') == true){
                $('.delivery_time').slideDown('fast');
                $('.delivery_date').slideDown();
            } else {
                $('.delivery_time').slideUp();
                $('.delivery_date').slideUp('fast');
            }
        });

        //重綁一次紙袋check
        $('#iCheersPaperbagCheck').click(function(){
            if($(this).prop('checked')){
                $('#iCheersPaaerbagCount').css('display','block');
                $('#iCheersPaaerbagCount input[type="text"]').attr('value','0');
            } else {
                $('#iCheersPaaerbagCount').css('display','none');
            }
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
        $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span><div class="extend">將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。</div></div>                <div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取(免運費)</span><div class="extend">請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/>地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面）</div></div></div></div>');

        //配送時間
        $('.recorded_data').append('<div class="row delivery_time" style="display:none;"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');

        //配送星期
        $('.recorded_data').append('<div class="row delivery_date" style="display:none;"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');

        //關於包裝
        $('.recorded_data').append('<div class="row"><div class="title">關於包裝</div><div class="note CLEARBOTH"><input type="checkbox" name="" id="iCheersPaperbagCheck"><span>請隨貨附提袋</span><label id="iCheersPaaerbagCount" style="display: none;"><input type="text" name="" style="float: left;width: 40px;margin-left: 5px;margin-top: -12px;text-align: center;"><span>個</span></label><div class="extend">敬請知悉：<br/>iCheers提袋為單入常規尺寸，若商品屬於下列情況，我們將<b style="color:#c20012">「不會」</b>隨貨附贈，恕不另行通知：1) 商品已有附贈原廠提袋、2)特殊瓶身無法裝入、3)禮盒型商品無法裝入。</div></div><div class="note CLEARBOTH" id="ReusePaperMaterial"><input type="checkbox" name=""><span>我不介意用回收紙緩衝材（取代塑膠氣泡袋）。<a href="images/green_package.jpg" target="_blank">示意圖</a></span><div class="extend">敬請知悉：環保包材有可能不適用於部分商品，譬如禮盒，我們將會斟酌替換為氣泡袋。</div></div><div class="note CLEARBOTH" id="ReuseBox"><input type="checkbox" name="" checked="checked"><span>我不介意用乾淨堅固的二手紙箱。</span></div><div class="note CLEARBOTH" id="LabelCheck"><input type="checkbox" name="" checked="checked"><span>我不介意酒標有微小瑕疵。</span><label class="icon_question" id="LabelCheckInfo">?</label></div></div></div>');
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
        

        //關於包裝

        if (data[0].ReusePaperMaterial == true) {
            $('.recorded_data .row').append('<div class="text" id="ReusePaperMaterial">✓&nbsp;我不介意用回收紙緩衝材（取代塑膠氣泡袋）<a href="images/green_package.jpg" target="_blank">示意圖</a></div>');
        }

        if (data[0].ReuseBox == true){
            $('.recorded_data .row').append('<div class="text" id="ReuseBox">✓&nbsp;我不介意用乾淨堅固的二手紙箱。</div>');
        }

        if (data[0].LabelCheck == true){
            $('.recorded_data .row').append('<div class="text" id="LabelCheck">✓&nbsp;我不介意酒標有微小瑕疵。<label class="icon_question" id="LabelCheckInfo">?</label></div>');
        }

        //配送方式
        switch (data[0].DeliveryType) {
            case 'Motocycle':
                $('.recorded_data').append('<div class="row"> <div class="title">配送方式</div> <div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_T-Cat" checked="checked"><span>宅配到府</span> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span> <div class="extend"> 將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。 </div> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取(免運費)</span> <div class="extend"> 請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/> 地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面） </div> </div> </div> </div>');

                //配送時間
                if (data[0].Time == 'AM') {
                    $('.recorded_data').append('<div class="row delivery_time"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time" checked="checked"> <span>上午(08~13時)</span> <input type="radio" name="time"> <span>下午(14~18時)</span> <input type="radio" name="time"> <span>皆可</span> </div> </div>');
                } else if (data[0].Time == 'PM') {
                    $('.recorded_data').append('<div class="row delivery_time"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time"> <span>上午(08~13時)</span> <input type="radio" name="time" checked="checked"> <span>下午(14~18時)</span> <input type="radio" name="time"> <span>皆可</span> </div> </div>');            
                } else {
                    $('.recorded_data').append('<div class="row delivery_time"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time"> <span>上午(08~13時)</span> <input type="radio" name="time"> <span>下午(14~18時)</span> <input type="radio" name="time" checked="checked"> <span>皆可</span> </div> </div>');            
                }

                //配送星期
                if (data[0].Date == 'Weekdays'){
                    $('.recorded_data').append('<div class="row delivery_date"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date" checked="checked"> <span>平日</span> <input type="radio" name="date"> <span>假日</span> <input type="radio" name="date"> <span>皆可</span> </div> </div>');
                } else if (data[0].Date == 'Weekend') {
                    $('.recorded_data').append('<div class="row delivery_date"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date"> <span>平日</span> <input type="radio" name="date" checked="checked"> <span>假日</span> <input type="radio" name="date"> <span>皆可</span> </div> </div>');            
                } else {
                    $('.recorded_data').append('<div class="row delivery_date"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date"> <span>平日</span> <input type="radio" name="date"> <span>假日</span> <input type="radio" name="date" checked="checked"> <span>皆可</span> </div> </div>');           
                }            break;
            /*
            case 'Car':
                $('.recorded_data').append('<div class="text" id="DeliveryType_Car">汽車當日配(需下樓自取)</div>');
            break;
            */
            case 'T-cat':            
                $('.recorded_data').append('<div class="row"> <div class="title">配送方式</div> <div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_T-Cat" checked="checked"><span>宅配到府</span> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span> <div class="extend"> 將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。 </div> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取(免運費)</span> <div class="extend"> 請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/> 地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面） </div> </div> </div> </div>');

                //配送時間
                if (data[0].Time == 'AM') {
                    $('.recorded_data').append('<div class="row delivery_time"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time" checked="checked"> <span>上午(08~13時)</span> <input type="radio" name="time"> <span>下午(14~18時)</span> <input type="radio" name="time"> <span>皆可</span> </div> </div>');
                } else if (data[0].Time == 'PM') {
                    $('.recorded_data').append('<div class="row delivery_time"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time"> <span>上午(08~13時)</span> <input type="radio" name="time" checked="checked"> <span>下午(14~18時)</span> <input type="radio" name="time"> <span>皆可</span> </div> </div>');            
                } else {
                    $('.recorded_data').append('<div class="row delivery_time"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time"> <span>上午(08~13時)</span> <input type="radio" name="time"> <span>下午(14~18時)</span> <input type="radio" name="time" checked="checked"> <span>皆可</span> </div> </div>');            
                }

                //配送星期
                if (data[0].Date == 'Weekdays'){
                    $('.recorded_data').append('<div class="row delivery_date"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date" checked="checked"> <span>平日</span> <input type="radio" name="date"> <span>假日</span> <input type="radio" name="date"> <span>皆可</span> </div> </div>');
                } else if (data[0].Date == 'Weekend') {
                    $('.recorded_data').append('<div class="row delivery_date"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date"> <span>平日</span> <input type="radio" name="date" checked="checked"> <span>假日</span> <input type="radio" name="date"> <span>皆可</span> </div> </div>');            
                } else {
                    $('.recorded_data').append('<div class="row delivery_date"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date"> <span>平日</span> <input type="radio" name="date"> <span>假日</span> <input type="radio" name="date" checked="checked"> <span>皆可</span> </div> </div>');           
                }
            break;

            /*case 'SuperExpress':
                $('.recorded_data').append('<div class="text" id="DeliveryType_SuperExpress">特急件</div>');
            break;*/

            case 'SelfCollect':
                $('.recorded_data').append('<div class="row"> <div class="title">配送方式</div> <div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span> <div class="extend"> 將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。 </div> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_SelfCollect" checked="checked"><span>預約自取(免運費)</span> <div class="extend"> 請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/> 地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面） </div> </div> </div> </div> <div class="row delivery_time" style="display:none;"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time"> <span>上午(08~13時)</span> <input type="radio" name="time"> <span>下午(14~18時)</span> <input type="radio" name="time"> <span>皆可</span> </div> </div> <div class="row delivery_date" style="display:none;"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date"> <span>平日</span> <input type="radio" name="date"> <span>假日</span> <input type="radio" name="date"> <span>皆可</span> </div> </div>');
            break;                            
        }


        $('.recorded_data').append('<div class="row"><div class="note CLEARBOTH"><input type="checkbox" name="" id="iCheersPaperbagCheck"><span>請隨貨附提袋</span><label id="iCheersPaaerbagCount" style="display: none;"><input type="text" name="" style="float: left;width: 50px;margin-left: 5px;margin-top: -12px;text-align: center;"><span>個</span></label></div></div>');
        

    }

    //重綁一次點checkbox、radio後面的文字
    $('.sex_radio span').click(function(){
        $(this).prev().click();
    });

    $('.note span').click(function(){
        $(this).prev().click();
    });

    //重綁一次宅配到府選項check確認
        $('#DeliveryInfo_project input[type=radio]').change(function(){
            if($('#DeliveryType_T-Cat').prop('checked') == true){
                $('.delivery_time').slideDown('fast');
                $('.delivery_date').slideDown();
            } else {
                $('.delivery_time').slideUp();
                $('.delivery_date').slideUp('fast');
            }
        });

        //重綁一次紙袋check
        $('#iCheersPaperbagCheck').click(function(){
            if($(this).prop('checked')){
                $('#iCheersPaaerbagCount').css('display','block');
                $('#iCheersPaaerbagCount input[type="text"]').attr('value','0');
            } else {
                $('#iCheersPaaerbagCount').css('display','none');
            }
        });

        //重綁一次酒標瑕疵說明
        $('#LabelCheckInfo').click(function(){
            LabelCheckInfo();
        });

}

function CWC_ImportDeliveryInfo(data) {
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
        $('.recorded_data').append('<div class="row"><div class="title">配送方式</div><div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span></div><div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span><div class="extend">將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。</div></div>                <div class="CLEARBOTH"><input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取(免運費)</span><div class="extend">請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/>地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面）</div></div></div></div>');

        //配送時間
        $('.recorded_data').append('<div class="row delivery_time" style="display:none;"><div class="title">希望配送時段</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryTime"><input type="radio" name="time"><span>上午(08~13時)</span><input type="radio" name="time"><span>下午(14~18時)</span><input type="radio" name="time"><span>皆可</span></div></div>');

        //配送星期
        $('.recorded_data').append('<div class="row delivery_date" style="display:none;"><div class="title">希望配送星期</div><div class="sex_radio CLEARBOTH" id="DeliveryInfo_DeliveryDate"><input type="radio" name="date"><span>平日</span><input type="radio" name="date"><span>假日</span><input type="radio" name="date"><span>皆可</span></div></div>');

        //關於包裝
        $('.recorded_data').append('<div class="row"><div class="title">關於包裝</div><div class="note CLEARBOTH"><input type="checkbox" name="" id="iCheersPaperbagCheck"><span>請隨貨附提袋</span><label id="iCheersPaaerbagCount" style="display: none;"><input type="text" name="" style="float: left;width: 40px;margin-left: 5px;margin-top: -12px;text-align: center;"><span>個</span></label><div class="extend">敬請知悉：<br/>iCheers提袋為單入常規尺寸，若商品屬於下列情況，我們將<b style="color:#c20012">「不會」</b>隨貨附贈，恕不另行通知：1) 商品已有附贈原廠提袋、2)特殊瓶身無法裝入、3)禮盒型商品無法裝入。</div></div><div class="note CLEARBOTH" id="ReusePaperMaterial"><input type="checkbox" name=""><span>我不介意用回收紙緩衝材（取代塑膠氣泡袋）。<a href="images/green_package.jpg" target="_blank">示意圖</a></span><div class="extend">敬請知悉：環保包材有可能不適用於部分商品，譬如禮盒，我們將會斟酌替換為氣泡袋。</div></div><div class="note CLEARBOTH" id="ReuseBox"><input type="checkbox" name="" checked="checked"><span>我不介意用乾淨堅固的二手紙箱。</span></div><div class="note CLEARBOTH" id="LabelCheck"><input type="checkbox" name="" checked="checked"><span>我不介意酒標有微小瑕疵。</span><label class="icon_question" id="LabelCheckInfo">?</label></div></div></div>');
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
        

        //關於包裝

        if (data[0].ReusePaperMaterial == true) {
            $('.recorded_data .row').append('<div class="text" id="ReusePaperMaterial">✓&nbsp;我不介意用回收紙緩衝材（取代塑膠氣泡袋）<a href="images/green_package.jpg" target="_blank">示意圖</a></div>');
        }

        if (data[0].ReuseBox == true){
            $('.recorded_data .row').append('<div class="text" id="ReuseBox">✓&nbsp;我不介意用乾淨堅固的二手紙箱。</div>');
        }

        if (data[0].LabelCheck == true){
            $('.recorded_data .row').append('<div class="text" id="LabelCheck">✓&nbsp;我不介意酒標有微小瑕疵。<label class="icon_question" id="LabelCheckInfo">?</label></div>');
        }

        //配送方式
        switch (data[0].DeliveryType) {
            case 'Motocycle':
                $('.recorded_data').append('<div class="row"> <div class="title">配送方式</div> <div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_T-Cat" checked="checked"><span>宅配到府</span> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span> <div class="extend"> 將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。 </div> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_SuperExpress"><span>特急件(限雙北區域、付款方式僅限匯款/刷卡)</span> <div class="extend"> 將於上班日（周一至周五，國定假日除外）火速出貨，歡迎備註說明，我們會盡力達成您的期望；若已截單（超過當日17:00）將順延至下個工作日急件出貨。特急件將加收運費$300，若滿免運門檻則加收$100。 </div> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取(免運費)</span> <div class="extend"> 請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/> 地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面） </div> </div> </div> </div>');

                //配送時間
                if (data[0].Time == 'AM') {
                    $('.recorded_data').append('<div class="row delivery_time"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time" checked="checked"> <span>上午(08~13時)</span> <input type="radio" name="time"> <span>下午(14~18時)</span> <input type="radio" name="time"> <span>皆可</span> </div> </div>');
                } else if (data[0].Time == 'PM') {
                    $('.recorded_data').append('<div class="row delivery_time"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time"> <span>上午(08~13時)</span> <input type="radio" name="time" checked="checked"> <span>下午(14~18時)</span> <input type="radio" name="time"> <span>皆可</span> </div> </div>');            
                } else {
                    $('.recorded_data').append('<div class="row delivery_time"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time"> <span>上午(08~13時)</span> <input type="radio" name="time"> <span>下午(14~18時)</span> <input type="radio" name="time" checked="checked"> <span>皆可</span> </div> </div>');            
                }

                //配送星期
                if (data[0].Date == 'Weekdays'){
                    $('.recorded_data').append('<div class="row delivery_date"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date" checked="checked"> <span>平日</span> <input type="radio" name="date"> <span>假日</span> <input type="radio" name="date"> <span>皆可</span> </div> </div>');
                } else if (data[0].Date == 'Weekend') {
                    $('.recorded_data').append('<div class="row delivery_date"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date"> <span>平日</span> <input type="radio" name="date" checked="checked"> <span>假日</span> <input type="radio" name="date"> <span>皆可</span> </div> </div>');            
                } else {
                    $('.recorded_data').append('<div class="row delivery_date"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date"> <span>平日</span> <input type="radio" name="date"> <span>假日</span> <input type="radio" name="date" checked="checked"> <span>皆可</span> </div> </div>');           
                }            break;
            /*
            case 'Car':
                $('.recorded_data').append('<div class="text" id="DeliveryType_Car">汽車當日配(需下樓自取)</div>');
            break;
            */
            case 'T-cat':            
                $('.recorded_data').append('<div class="row"> <div class="title">配送方式</div> <div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_T-Cat" checked="checked"><span>宅配到府</span> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span> <div class="extend"> 將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。 </div> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_SuperExpress"><span>特急件(限雙北區域、付款方式僅限匯款/刷卡)</span> <div class="extend"> 將於上班日（周一至周五，國定假日除外）火速出貨，歡迎備註說明，我們會盡力達成您的期望；若已截單（超過當日17:00）將順延至下個工作日急件出貨。特急件將加收運費$300，若滿免運門檻則加收$100。 </div> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取(免運費)</span> <div class="extend"> 請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/> 地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面） </div> </div> </div> </div>');

                //配送時間
                if (data[0].Time == 'AM') {
                    $('.recorded_data').append('<div class="row delivery_time"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time" checked="checked"> <span>上午(08~13時)</span> <input type="radio" name="time"> <span>下午(14~18時)</span> <input type="radio" name="time"> <span>皆可</span> </div> </div>');
                } else if (data[0].Time == 'PM') {
                    $('.recorded_data').append('<div class="row delivery_time"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time"> <span>上午(08~13時)</span> <input type="radio" name="time" checked="checked"> <span>下午(14~18時)</span> <input type="radio" name="time"> <span>皆可</span> </div> </div>');            
                } else {
                    $('.recorded_data').append('<div class="row delivery_time"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time"> <span>上午(08~13時)</span> <input type="radio" name="time"> <span>下午(14~18時)</span> <input type="radio" name="time" checked="checked"> <span>皆可</span> </div> </div>');            
                }

                //配送星期
                if (data[0].Date == 'Weekdays'){
                    $('.recorded_data').append('<div class="row delivery_date"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date" checked="checked"> <span>平日</span> <input type="radio" name="date"> <span>假日</span> <input type="radio" name="date"> <span>皆可</span> </div> </div>');
                } else if (data[0].Date == 'Weekend') {
                    $('.recorded_data').append('<div class="row delivery_date"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date"> <span>平日</span> <input type="radio" name="date" checked="checked"> <span>假日</span> <input type="radio" name="date"> <span>皆可</span> </div> </div>');            
                } else {
                    $('.recorded_data').append('<div class="row delivery_date"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date"> <span>平日</span> <input type="radio" name="date"> <span>假日</span> <input type="radio" name="date" checked="checked"> <span>皆可</span> </div> </div>');           
                }
            break;

            case 'SuperExpress':
                $('.recorded_data').append('<div class="row"> <div class="title">配送方式</div> <div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_T-Cat" checked="checked"><span>宅配到府</span> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span> <div class="extend"> 將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。 </div> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_SuperExpress"><span>特急件(限雙北區域、付款方式僅限匯款/刷卡)</span> <div class="extend"> 將於上班日（周一至周五，國定假日除外）火速出貨，歡迎備註說明，我們會盡力達成您的期望；若已截單（超過當日17:00）將順延至下個工作日急件出貨。特急件將加收運費$300，若滿免運門檻則加收$100。 </div> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_SelfCollect"><span>預約自取(免運費)</span> <div class="extend"> 請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/> 地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面） </div> </div> </div> </div>');

                //配送時間
                if (data[0].Time == 'AM') {
                    $('.recorded_data').append('<div class="row delivery_time"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time" checked="checked"> <span>上午(08~13時)</span> <input type="radio" name="time"> <span>下午(14~18時)</span> <input type="radio" name="time"> <span>皆可</span> </div> </div>');
                } else if (data[0].Time == 'PM') {
                    $('.recorded_data').append('<div class="row delivery_time"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time"> <span>上午(08~13時)</span> <input type="radio" name="time" checked="checked"> <span>下午(14~18時)</span> <input type="radio" name="time"> <span>皆可</span> </div> </div>');            
                } else {
                    $('.recorded_data').append('<div class="row delivery_time"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time"> <span>上午(08~13時)</span> <input type="radio" name="time"> <span>下午(14~18時)</span> <input type="radio" name="time" checked="checked"> <span>皆可</span> </div> </div>');            
                }

                //配送星期
                if (data[0].Date == 'Weekdays'){
                    $('.recorded_data').append('<div class="row delivery_date"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date" checked="checked"> <span>平日</span> <input type="radio" name="date"> <span>假日</span> <input type="radio" name="date"> <span>皆可</span> </div> </div>');
                } else if (data[0].Date == 'Weekend') {
                    $('.recorded_data').append('<div class="row delivery_date"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date"> <span>平日</span> <input type="radio" name="date" checked="checked"> <span>假日</span> <input type="radio" name="date"> <span>皆可</span> </div> </div>');            
                } else {
                    $('.recorded_data').append('<div class="row delivery_date"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date"> <span>平日</span> <input type="radio" name="date"> <span>假日</span> <input type="radio" name="date" checked="checked"> <span>皆可</span> </div> </div>');           
                }
            break;

            case 'SelfCollect':
                $('.recorded_data').append('<div class="row"> <div class="title">配送方式</div> <div id="DeliveryInfo_project" class="sex_radio CLEARBOTH"> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_T-Cat"><span>宅配到府</span> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_Motocycle"><span>當日配(限雙北區域、付款方式僅限匯款/刷卡)</span> <div class="extend"> 將於上班日（周一至周五，國定假日除外）15:00前出貨、最晚19:00到貨；若已截單（超過當日14:00）將順延至下一個工作當日出貨。 </div> </div> <div class="CLEARBOTH"> <input type="radio" name="project" id="DeliveryType_SelfCollect" checked="checked"><span>預約自取(免運費)</span> <div class="extend"> 請於抵達前1小時來電確認已備好貨，<br/>可預約時段：上班日11:00~12:00、16:00~18:00。<br/> 地址：新北市汐止區中興路43號1樓 國揚矽谷大廳（開車可臨停在大廳對面） </div> </div> </div> </div> <div class="row delivery_time" style="display:none;"> <div class="title">希望配送時段</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="time"> <span>上午(08~13時)</span> <input type="radio" name="time"> <span>下午(14~18時)</span> <input type="radio" name="time"> <span>皆可</span> </div> </div> <div class="row delivery_date" style="display:none;"> <div class="title">希望配送星期</div> <div class="sex_radio CLEARBOTH"> <input type="radio" name="date"> <span>平日</span> <input type="radio" name="date"> <span>假日</span> <input type="radio" name="date"> <span>皆可</span> </div> </div>');
            break;                            
        }


        $('.recorded_data').append('<div class="row"><div class="note CLEARBOTH"><input type="checkbox" name="" id="iCheersPaperbagCheck"><span>請隨貨附提袋</span><label id="iCheersPaaerbagCount" style="display: none;"><input type="text" name="" style="float: left;width: 50px;margin-left: 5px;margin-top: -12px;text-align: center;"><span>個</span></label></div></div>');
        

    }

    //重綁一次點checkbox、radio後面的文字
    $('.sex_radio span').click(function(){
        $(this).prev().click();
    });

    $('.note span').click(function(){
        $(this).prev().click();
    });

    //重綁一次宅配到府選項check確認
        $('#DeliveryInfo_project input[type=radio]').change(function(){
            if($('#DeliveryType_T-Cat').prop('checked') == true){
                $('.delivery_time').slideDown('fast');
                $('.delivery_date').slideDown();
            } else {
                $('.delivery_time').slideUp();
                $('.delivery_date').slideUp('fast');
            }
        });

        //重綁一次紙袋check
        $('#iCheersPaperbagCheck').click(function(){
            if($(this).prop('checked')){
                $('#iCheersPaaerbagCount').css('display','block');
                $('#iCheersPaaerbagCount input[type="text"]').attr('value','0');
            } else {
                $('#iCheersPaaerbagCount').css('display','none');
            }
        });

        //重綁一次酒標瑕疵說明
        $('#LabelCheckInfo').click(function(){
            LabelCheckInfo();
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