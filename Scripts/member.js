// JavaScript Document



$(function () {

});



$(document).ready(function () {

    //所有訂單

    $(".ShoppingDetails").hide();

    $(".moreOrder").on('click', function () {
        $(this).addClass("collapseOrder");
        $(this).val("- 收合");
        $(this).parent().next().slideDown();
        $(this).parent().css("border-bottom", "none");
    });

    $(".collapseOrder").on('click', function () {
        $(this).removeClass("collapseOrder");
        $(this).parent().next().slideUp();
        $(this).val("+看詳細");
        $(this).parent().css("border-bottom", "1px solid #D2D2D2");
    });
    $(".ShoppingDetails").children().last().css("border-bottom", "1px solid #D2D2D2");

});


