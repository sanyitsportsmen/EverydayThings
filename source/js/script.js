(function($) {
  var nav = $('.main-nav');
  $(".loader").css('display', 'block');
  $(window).load(function() {
    $(".loader__inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
  });
  $(window).resize(function() {
    if (window.matchMedia('screen and (max-width: 625px)').matches) {
      nav.hide();
      nav.removeClass('main-nav__toggle');
      $('.page-header__hamburger').removeClass('open');
      $('.logo').css('background-color', 'rgba(0,0,0,.65)');
    }
    else {
      nav.show();
      $('.logo').css('background-color', 'transparent');
    }
  });
  $(document).ready(function() {
    $('.page-header__hamburger').click(function() {
      $(this).toggleClass('open');
      if (!nav.is('.main-nav__toggle')) {
        nav.addClass('main-nav__toggle').fadeIn(600);
        $('.logo').css('background-color', 'transparent');
      } else {
        nav.removeClass('main-nav__toggle').fadeOut(600);
        $('.logo').css('background-color', 'rgba(0,0,0,.65)');
      }
    });
  });
})(jQuery);
