import jQuery from "jquery";
(function ($) {
  "use strict";
  var support_ticket_datatable = {
    init: function () {
      $("body #basic-6").DataTable();
    },
  };
  $(document).ready(function () {
    support_ticket_datatable.init();
  });
})(jQuery);
