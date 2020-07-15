'use strict';

var slider = document.querySelector('.swiper-container');

var mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
