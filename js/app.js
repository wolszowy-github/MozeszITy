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

    function smartScroll1(){
         var menu = $('.menu');
         var a = menu.find('a');

         a.on('click', function(){
             var href = $(this).attr('href');
             var adres = $(href).offset().top - 77;
             $('html, body').animate({
                scrollTop: adres
               }, 1000);
         })
     }

    smartScroll1();

    function smartScroll2(){
      var headerIcon = $('.headerIcon');
      var linkHeaderIcon = headerIcon.find('a');


        linkHeaderIcon.on('click', function(){
            var href = $(this).attr('href');
            var adres = $(href).offset().top;
            var width = $(window).width();
            if (width > 1023) {
              $('html, body').animate({
                 scrollTop: adres - 77
                }, 1000);
            }  else {
              $('html, body').animate({
                 scrollTop: adres
                }, 1000);
            }
        })
    }

    smartScroll2();

    function smartScroll3(){
      var arrowSign = $('.arrowSign');
      var arrowSignLink = arrowSign.find('a');

        arrowSignLink.on('click', function(){
            var href = $(this).attr('href');
            var adres = $(href).offset().top;
            var width = $(window).width();
            if (width > 1023) {
              $('html, body').animate({
                 scrollTop: adres - 77
                }, 1000);
            }  else {
              $('html, body').animate({
                 scrollTop: adres
                }, 1000);
            }
        })
    }

    smartScroll3();

    function smartScroll4(){
      var menuHamList = $('.menuHamList');
      var menuHamListLinks = menuHamList.find('a');

        menuHamListLinks.on('click', function(){
            var href = $(this).attr('href');
            var adres = $(href).offset().top;
            $('html, body').animate({
               scrollTop: adres
              }, 1000);
        })
    }

    smartScroll4();

    function smartScroll5(){
      var logoNav = $('.logoNav');
      var logoNavLink = logoNav.find('a');

        logoNavLink.on('click', function(){
            var href = $(this).attr('href');
            var adres = $(href).offset().top;
            $('html, body').animate({
               scrollTop: adres
              }, 1000);
        })
    }

    smartScroll5();


    function hideIcon(){
      var aboutFourth = $('.aboutFourth');
      var boxLocalize = aboutFourth.find('.boxInfo');
      var width = $(window).width();

        if (width > 1023) {

          boxLocalize.on('mouseenter', function(){
            $(this).children().first().stop(true, false).slideUp(400);
          });

          boxLocalize.on('mouseleave', function(){
            $(this).children().first().stop(true, false).slideDown(400);
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



   function slider(){
      var wrapInfoSheetLi = $('.wrapInfoSheet').find('li');
      var sliderLeftArrow = $('#processArrowLeft');
      var sliderRightArrow = $('#processArrowRight');
      var index = 0;

     function processButtonsBigRes(){
       var buttonsBigRes = $('.processButtSingle')

       buttonsBigRes.on('click', function(){
         var indexButtons = $(this).index('.processButtSingle');
         index = indexButtons;
         console.log(index);

         if(index === 0){
           sliderLeftArrow.fadeOut();
           sliderRightArrow.fadeIn();
         } else if(index === wrapInfoSheetLi.length - 1){
           sliderRightArrow.fadeOut();
           sliderLeftArrow.fadeIn();
         } else {
           sliderRightArrow.fadeIn();
           sliderLeftArrow.fadeIn();
         }
         wrapInfoSheetLi.hide();
         wrapInfoSheetLi.eq(indexButtons).fadeIn();
       })
     }

     processButtonsBigRes();

     function processButtonsSmallerRes(){

       var buttonsSmallerRes = $('.processButtSingle2');

       buttonsSmallerRes.on('click', function(){
         var indexButtons = $(this).index('.processButtSingle2');
         index = indexButtons;
         console.log(index);

         if(index === 0){
           sliderLeftArrow.fadeOut();
           sliderRightArrow.fadeIn();
         } else if(index === wrapInfoSheetLi.length - 1){
           sliderRightArrow.fadeOut();
           sliderLeftArrow.fadeIn();
         } else {
           sliderRightArrow.fadeIn();
           sliderLeftArrow.fadeIn();
         }
         wrapInfoSheetLi.hide();
         wrapInfoSheetLi.eq(indexButtons).fadeIn();
       })
     }

     processButtonsSmallerRes();

     function arrowsClick(){

       sliderRightArrow.on('click', function(){
           index = index + 1;
           console.log(index);


           if(index >= wrapInfoSheetLi.length - 1){
             index = wrapInfoSheetLi.length - 1;
             $(this).fadeOut();
           } else {
             sliderLeftArrow.fadeIn();
           }

           wrapInfoSheetLi.hide();
           wrapInfoSheetLi.eq(index).fadeIn();
       });

      sliderLeftArrow.on('click', function(){
            index = index - 1;
            console.log(index);

            if(index <= 0){
              index = 0;
              $(this).fadeOut();
            } else {
              sliderRightArrow.fadeIn();
            }

            wrapInfoSheetLi.hide();
            wrapInfoSheetLi.eq(index).fadeIn();
        });
     }

     arrowsClick();

   }

   slider();

});
