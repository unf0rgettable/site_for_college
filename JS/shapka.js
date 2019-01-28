$(window).scroll(function(){
    if ($(window).scrollTop() >= 40) {
       $('#menu').addClass('fixed-menu');
       $('header').addClass('fix-header');
       $('content').addClass('fixing-content');

    }
    else {
       $('#menu').removeClass('fixed-menu');
       $('header').removeClass('fix-header');
       $('content').removeClass('fixing-content');
    }
});