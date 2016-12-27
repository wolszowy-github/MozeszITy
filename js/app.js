$(function(){

    var nav = $('.stickyNav');
    var logoNav = nav.find('.logoNav');

    function scroll(){
         var windowScrollTop = $(window).scrollTop();

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

    function smartScroll(){

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
      })

    };

    smartScroll();

    function hideIcon(){
      var aboutFourth = $('.aboutFourth');
      var boxLocalize1 = aboutFourth.find('.boxLocalize1');
      var boxLocalize2 = aboutFourth.find('.boxLocalize2');
      var boxLocalize3 = aboutFourth.find('.boxLocalize3');
      var icon1 = aboutFourth.find('.iconFirst');
      var icon2 = aboutFourth.find('.iconSecond');
      var icon3 = aboutFourth.find('.iconThird');

      var width = $(window).width();
        if (width > 1023) {

          boxLocalize1.on('mouseenter', function(){
            icon1.slideUp(400);
          });

          boxLocalize1.on('mouseleave', function(){
            icon1.slideDown(400);
          });

          boxLocalize2.on('mouseenter', function(){
            icon2.slideUp(400);
          });

          boxLocalize2.on('mouseleave', function(){
            icon2.slideDown(400);
          });

          boxLocalize3.on('mouseenter', function(){
            icon3.slideUp(400);
          });

          boxLocalize3.on('mouseleave', function(){
            icon3.slideDown(400);
          });
        }
    }

    hideIcon();

    $(window).on('resize', function(){
       hideIcon();
   });

   function showHamburgerMenu(){
     var hamburgerOpened = $('.hamburgerOpened');
     var hamburgerButton = $('.hamburgerMenu');

     hamburgerButton.on('click', function(){
       hamburgerOpened.toggleClass('hamburgerOpenedHide');
     });
   }

   showHamburgerMenu();

   function hideHamburgerMenuClick(){
     var a = $('.menuHamList').find('li').find('a');
     var hamburgerOpened = $('.hamburgerOpened');

      a.on('click', function(){
        hamburgerOpened.toggleClass('hamburgerOpenedHide');
      });
   }

   hideHamburgerMenuClick();
});
