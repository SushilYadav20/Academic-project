   
   $(document).ready(function()
   {
      $.fn.bootstrapcarousel.Constructor.TRANSITION_DURATION = 500;
      $("#intro").bootstrapcarousel({interval:3000});
      $("a[href*='#reviews']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#reviews').offset().top-60 }, 600, 'easeInCubic');
      });
      var $overlaymenu = $('#OverlayMenu1-overlay');
      $overlaymenu.overlay({'hideTransition':true});
      $('#OverlayMenu1').on('click', function(e)
      {
         $.overlay.show($overlaymenu);
         return false;
      });
   });
