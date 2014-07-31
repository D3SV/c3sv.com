(function ($, Drupal) {

  Drupal.behaviors.STARTER = {
    attach: function(context, settings) {


        $('.no-touch .groups').hover(
             function() {
               $(this).find('.js-init-state').stop(true, true).fadeOut();
               $(this).find('.js-hover-state').stop(true, true).fadeIn();
             }, function() {
                $(this).find('.js-init-state').stop(true, true).fadeIn();
                $(this).find('.js-hover-state').stop(true, true).fadeOut();
             }
           );

        $('.touch .groups').hammer().on('hold',
             function() {
               $(this).find('.js-init-state').stop(true, true).fadeOut();
               $(this).find('.js-hover-state').stop(true, true).fadeIn();
             });
        $('.touch .groups').hammer().on('release',
        function() {
                $(this).find('.js-init-state').stop(true, true).fadeIn();
                $(this).find('.js-hover-state').stop(true, true).fadeOut();
             });

//        $(window).scroll(function(){
//            showHeader();
//        });
        // === /MENU BAR FADE IN AT PASTORS SCREEN ===
//        function showHeader() {
//            var yPos = $(window).scrollTop();
//                    var menuBar = $('.home-nav');
//                    if(yPos < 0) {
//                        menuBar.fadeOut();
//
//                    } else {
//                        menuBar.fadeIn('slow');
//                    }
//        }

        $ (".nav_bar > ul > li > a").on('click', function(e){
                var $div = $(this).data("class");
                var $class = $('.' + $div);
                $('html,body').stop(true,true).animate({
                    scrollTop: $($class).offset().top
                }, 1500);
                return false;
            });

    }/* CLoses the Drupal attach */

  };

})(jQuery, Drupal);

