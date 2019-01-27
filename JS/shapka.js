$(window).scroll(function(){
    if ($(window).scrollTop() >= 40) {
       $('#menu').addClass('fixed-menu');
       $('header').addClass('fix-header');
    }
    else {
       $('#menu').removeClass('fixed-menu');
       $('header').removeClass('fix-header');
    }
});