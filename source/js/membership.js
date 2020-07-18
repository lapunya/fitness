'use strict';

(function () {
  var tabs = document.querySelectorAll('.membership__tab-button');
  var slides = document.querySelectorAll('.membership__type-list');

  if (tabs) {
    var getActiveTab = function () {
      var activeTab = document.querySelector('.membership__tab-button--active');
      return activeTab;
    };

    var getActiveSlide = function () {
      var activeSlide = document.querySelector('.membership__type-list--active');
      return activeSlide;
    };

    for (var i = 0; i < tabs.length; i++) {
      var currentItem = tabs[i];

      (function () {
        var currentTab = currentItem;
        var index = i;

        var closeActiveTab = function () {
          var previousActiveTab = getActiveTab();
          previousActiveTab.classList.remove('membership__tab-button--active');
        };

        var setActiveTab = function () {
          closeActiveTab();
          currentTab.classList.add('membership__tab-button--active');
        };

        var closeActiveSlide = function () {
          var previousActiveSlide = getActiveSlide();
          previousActiveSlide.classList.remove('membership__type-list--active');
        };

        var setActiveSlide = function () {
          closeActiveSlide();
          slides[index].classList.add('membership__type-list--active');
        };

        var setMembershipType = function () {
          setActiveTab();
          setActiveSlide();
        };

        currentItem.addEventListener('click', setMembershipType);
      })();
    }
  }
})();
