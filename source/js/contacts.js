'use strict';

(function () {
  var mask = new window.IMask(
      document.getElementById('tel'), {
        mask: '{8}0000000000'
      });

  return mask;
})();
