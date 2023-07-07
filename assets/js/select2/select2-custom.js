import jQuery from "jquery";

(function ($) {
  "use strict";
  $(window).on("load", function () {
    // Single Search Select
    $("body .js-example-basic-single").select2();
    $("body .js-example-disabled-results").select2();

    // Multi Select
    $("body .js-example-basic-multiple").select2();

    // With Placeholder
    $("body .js-example-placeholder-multiple").select2({
      placeholder: "Select Your Name",
    });

    //Limited Numbers
    $("body .js-example-basic-multiple-limit").select2({
      maximumSelectionLength: 2,
    });

    //RTL Suppoort
    $("body .js-example-rtl").select2({
      dir: "rtl",
    });
    // Responsive width Search Select
    $("body .js-example-basic-hide-search").select2({
      minimumResultsForSearch: Infinity,
    });
    $("body .js-example-disabled").select2({
      disabled: true,
    });
    $("body .js-programmatic-enable").on("click", function () {
      $("body .js-example-disabled").prop("disabled", false);
    });
    $("body .js-programmatic-disable").on("click", function () {
      $("body .js-example-disabled").prop("disabled", true);
    });
  });
})(jQuery);
