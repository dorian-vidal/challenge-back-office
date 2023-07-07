import jQuery from "jquery";

(function ($) {
  "use strict";
  function testAnim(x) {
    $("body .modal .modal-dialog").attr(
      "class",
      "modal-dialog  " + x + "  animated"
    );
  }
  var modal_animate_custom = {
    init: function () {
      $("#myModal").on("show.bs.modal", function (e) {
        e.preventDefault();
        var anim = $("#entrance").val();
        testAnim(anim);
      });
      $("#myModal").on("hide.bs.modal", function (e) {
        e.preventDefault();
        var anim = $("#exit").val();
        testAnim(anim);
      });
      // $("a").tooltip();
    },
  };
  // $(window).on('load', function () {
  modal_animate_custom.init();
  // })
})(jQuery);
