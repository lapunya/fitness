'use strict';

(function () {
  var reviewSwiperContainer = document.querySelector('.review__swiper-container');

  var reviewSwiper = new window.Swiper(reviewSwiperContainer, {
    slidesPerView: 1,
    slideClass: 'review__slide',
    navigation: {
      nextEl: '.review__button-next',
      prevEl: '.review__button-prev',
    }
  });

  return reviewSwiper;
})();
