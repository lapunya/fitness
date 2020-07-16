'use strict';

(function () {
  var slides = document.querySelectorAll('.trainers__slide');

  for (var i = 0; i < slides.length; i++) {
    var currentSlide = slides[i];
    (function () {
      var popup = currentSlide.querySelector('.trainers__popup');

      var showCard = function () {
        popup.style = 'display: flex;';
      };

      var hideCard = function () {
        popup.style = 'display: none;';
      };

      currentSlide.addEventListener('mouseover', showCard);
      currentSlide.addEventListener('mouseout', hideCard);
    })();
  }
})();
