$(window).scroll(function(){
    if ($(window).scrollTop() >= 40) {
       $('#menu').addClass('fixed-menu');
    }
    else {
       $('#menu').removeClass('fixed-menu');
    }
});