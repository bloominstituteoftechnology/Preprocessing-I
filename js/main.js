$(function() {
    var header = $(".ClearHeader");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 500) {
            header.removeClass('ClearHeader').addClass("WhiteHeader ");
            header.addClass("transition");
        } else {
            header.removeClass("WhiteHeader ").addClass('ClearHeader');
            header.addClass("transition");
        }
    });
});