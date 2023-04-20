// eslint-disable-next-line no-undef
const carousel = new SwipeCarousel();

carousel.init();

$(document).ready(() => {
  $('.header-navbar__btn').on('click', function () {
    $(this).toggleClass('-active');
    $('.header-navbar__list').toggleClass('-active');
  });
});
