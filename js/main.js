
$(document).ready(function(){
   
    $('.menuBtn').click(changeNav)

    function changeNav(){
        $('.links').toggle(1000);
        $( ".links" ).toggleClass("sliderClass")
    }
})

