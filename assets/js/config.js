import jQuery from "jquery";

(function ($) {
  // console.log(window.localStorage.getItem("page-wrapper"));

  compactLayout();
  var primary = window.localStorage.getItem("primary") || "#24695c";
  var secondary = window.localStorage.getItem("secondary") || "#ba895d";
  var layout =
    window.localStorage.getItem("page-wrapper") ||
    "compact-wrapper compact-sidebar";

  window.cabexcoAdminConfig = {
    // Theme Primary Color
    primary: primary,
    // theme secondary color
    secondary: secondary,
    // layout
    layout,
  };

  // default layout
  $("body").on("click", "#default-demo", function () {
    window.localStorage.setItem("page-wrapper", "page-wrapper compact-wrapper");
    window.localStorage.setItem("page-body-wrapper", "sidebar-icon");
  });

  // compact layout
  function compactLayout() {
    window.localStorage.setItem(
      "page-wrapper",
      "page-wrapper compact-wrapper compact-sidebar"
    );
    window.localStorage.setItem("page-body-wrapper", "sidebar-icon");
  }

  // modern layout
  $("body").on("click", "#modern-demo", function () {
    window.localStorage.setItem(
      "page-wrapper",
      "page-wrapper compact-wrapper modern-sidebar"
    );
    window.localStorage.setItem("page-body-wrapper", "sidebar-icon");
  });
})(jQuery);
