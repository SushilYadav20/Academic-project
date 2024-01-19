   
   $(document).ready(function()
   {
      $.fn.bootstrapcarousel.Constructor.TRANSITION_DURATION = 500;
      $("#intro").bootstrapcarousel({interval:3000});
      var $overlaymenu = $('#OverlayMenu1-overlay');
      $overlaymenu.overlay({'hideTransition':true});
      $('#OverlayMenu1').on('click', function(e)
      {
         $.overlay.show($overlaymenu);
         return false;
      });
   });
