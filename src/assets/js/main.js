import React from 'react'

const Main = () => {
  (function ($) {
    "use strict";
      var nav = $('nav');
      var navHeight = nav.outerHeight();

      $(function() {
          $('.nav-default a, #home a').on('click', function(event) {
            var $anchor = $(this);
              $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
              }, 1000);
                event.preventDefault();
          });
        });  
    

      /*--/ Star Typed /--*/
    if ($('.text-slider').length == 1) {
          var typed_strings = $('.text-slider-items').text();
              var typed = new Typed('.text-slider', {
                  strings: typed_strings.split(','),
                  typeSpeed: 80,
                  loop: true,
                  backDelay: 1100,
                  backSpeed: 30
              });
      }
      

      $('.navbar-toggler').on('click', function(){
          if(! $('#mainNav').hasClass('navbar-reduce')){
              $('#mainNav').addClass('navbar-reduce')
          }
      });

    // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll').on('click' , function(){
          $('navbar-collapse').collapse('hide')
      });

      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
      target: '#mainNav',
      offset: navHeight
    });

      // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
      return false;
    });

      // Preloader
      $(window).on('load', function () {
          if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
              $(this).remove();
            });
          }
      });
      

  })(jQuery);
}

export default Main
