'use strict';

var slider = document.querySelector('.review__swiper-container');

var reviewSwiper = new Swiper(slider, {
  slidesPerView: 1,
  slideClass: 'review__slide',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
