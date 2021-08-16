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