import SwipeCarousel from './swipe-carousel.js';

const carousel = new SwipeCarousel({
  // containerID: '.carousel',
  // slideID: '.slide',
  // interval: 2000,
  // isPlaying: true
});

carousel.init();

$(document).ready(() => {
  $('.header-navbar__btn').on('click', function () {
    $(this).toggleClass('-active');
    $('.header-navbar__list').toggleClass('-active');
  });
});
