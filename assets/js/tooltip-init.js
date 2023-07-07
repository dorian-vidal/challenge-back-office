import jQuery from "jquery";
import bootstrap from "bootstrap";

(function ($) {
  "use strict";
  // $(document).on('load', function() {
  var tooltip_init = {
    init: function () {
      $("body button").tooltip();
      $("body a").tooltip();
      $("body input").tooltip();
    },
  };
  tooltip_init.init();
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  // });
})(jQuery);
