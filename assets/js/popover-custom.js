import jQuery from "jquery";

("use strict");
(function ($) {
  // $(window).on('load', function() {
  $("body .example-popover").popover({
    container: "body",
  });
  var dcolor = $("body .example-popover").attr("data-theme");
  if (dcolor == "dark") {
    $("body .popover").addClass("bg-dark");
  }
  // })
})(jQuery);
