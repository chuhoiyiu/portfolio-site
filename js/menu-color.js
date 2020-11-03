// Change Color Navbar Elements on Scroll

   $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
       $('.icon-bar').addClass('opaque');

       $('.navbar-default').attr('style', 'margin-top: 0');
       $('.navbar-brand img').attr('style', 'margin-top: -25px');
       

    } else {
       $('.icon-bar').removeClass('opaque');
       $('.navbar-default').attr('style', 'margin-top: -80px');
       $('.navbar-brand img').attr('style', 'margin-top: -105px');
       if ($('#navigation').hasClass('showNav')) {
         $('#navigation').attr('class','nav-content hideNav');
       }
    }
});

