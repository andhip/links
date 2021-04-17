!(function ($) {
  "use strict";

  // preloader
  $(document).ready(function () {
    setTimeout(function () {
      $("body").addClass("loaded");
    }, 1500);
  });
})(jQuery);
