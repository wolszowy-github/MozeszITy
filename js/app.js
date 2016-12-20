$(function(){

    var nav = $('.stickyNav');
    var logoNav = nav.find('.logoNav');
    console.log(logoNav);

    function scroll(){
         var windowScrollTop = $(window).scrollTop();

        console.log(windowScrollTop);
        // console.log(menuTop);

        if(windowScrollTop > 0){
            nav.addClass('sticky');
            logoNav.addClass('logoNavSticky');
        } else {
            nav.removeClass('sticky');
            logoNav.removeClass('logoNavSticky');
        }
    }

    $(window).on('scroll',function(){
     scroll();
    });

    scroll();

  //   function zadanie2(){
  //       var menu = $('.menu');
   //
   //
  //       var a = menu.find('a');
   //
  //       a.on('click', function(){
  //           var href = $(this).attr('href');
  //           var adres = $(href).offset().top;
  //           $('html, body').animate({
  //              scrollTop: adres
  //             }, 1000);
  //       })
  //   }
   //
  //  zadanie2();

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 77
        }, 1000);
        return false;
      }
    }
  });


});
