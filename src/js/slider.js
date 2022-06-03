jQuery(document).ready(function ($) {
  $('.customers-list').slick({
    arrows: false,
    dots: true,
    appendDots: $('.customers-slider__thumb'),
  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 1) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });

  $(document).on('click', '.header__burger', function () {
    $('.overlay-block').addClass('open');
    $('body').css('overflow', 'hidden');
  });
  $('.modal-toggle__close').on('click', function () {
    $('.overlay-block').removeClass('open');
  });

  $('.overlay-block').on('click', function () {
    $(this).removeClass('open');
    $('.js-menu-container').removeClass('is-open');
    $('.js-open-menu').attr('aria-expanded', false);
    $('body').css('overflow', 'visible');
  });
});
