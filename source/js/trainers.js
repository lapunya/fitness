'use strict';

(function () {
  var trainersSwiperContainer = document.querySelector('.trainers__swiper-container');

  var trainersSwiper = new window.Swiper(trainersSwiperContainer, {
    breakpoints: {
      1199: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40
      },
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    },
    slideClass: 'trainers__slide',
    wrapperClass: 'trainers__wrapper',
    navigation: {
      nextEl: '.trainers__button-next',
      prevEl: '.trainers__button-prev',
    }
  });
  return trainersSwiper;
})();
