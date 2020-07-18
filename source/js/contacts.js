'use strict';

(function () {
  var inputTel = document.querySelector('#tel');

  if (inputTel) {
    var mask = new window.IMask(
        inputTel, {
          mask: '{8}0000000000'
        });
  }
  return mask;
})();
