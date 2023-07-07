import jQuery from "jquery";

(function ($) {
  $("body").on("click", ".toggle-nav", function () {
    $(".nav-menu").css("left", "0px");
  });
  $("body").on("click", ".mobile-back", function () {
    $(".nav-menu").css("left", "-410px");
  });

  // $(window).on("load", function () {
  $("body .page-wrapper").attr(
    "class",
    "page-wrapper " + window.cabexcoAdminConfig.layout
  );
  $("body .page-body-wrapper").attr(
    "class",
    "page-body-wrapper " + localStorage.getItem("page-body-wrapper")
  );
  if (localStorage.getItem("page-wrapper") === null) {
    $("body .page-wrapper").addClass("compact-wrapper");
    // left sidebar and horizotal menu
    if ($("body #pageWrapper").hasClass("compact-wrapper")) {
      jQuery("body .submenu-title").append(
        '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
      );
      jQuery("body").on("click", ".submenu-title", function () {
        jQuery("body .submenu-title").removeClass("active");
        jQuery("body .submenu-title")
          .find("div")
          .replaceWith(
            '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
          );
        jQuery("body .submenu-content").slideUp("normal");
        if (jQuery(this).next().is(":hidden") == true) {
          jQuery(this).addClass("active");
          jQuery(this)
            .find("div")
            .replaceWith(
              '<div class="according-menu"><i class="fa fa-angle-down"></i></div>'
            );
          jQuery(this).next().slideDown("normal");
        } else {
          jQuery(this)
            .find("div")
            .replaceWith(
              '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
            );
        }
      });
      jQuery("body .submenu-content").hide();

      jQuery("body .menu-title").append(
        '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
      );
      jQuery("body").on("click", " .menu-title", function () {
        jQuery("body .menu-title").removeClass("active");
        jQuery("body .menu-title")
          .find("div")
          .replaceWith(
            '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
          );
        jQuery("body .menu-content").slideUp("normal");
        if (jQuery(this).next().is(":hidden") == true) {
          jQuery(this).addClass("active");
          jQuery(this)
            .find("div")
            .replaceWith(
              '<div class="according-menu"><i class="fa fa-angle-down"></i></div>'
            );
          jQuery(this).next().slideDown("normal");
        } else {
          jQuery(this)
            .find("div")
            .replaceWith(
              '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
            );
        }
      });
      jQuery("body .menu-content").hide();
    } else if ($("body #pageWrapper").hasClass("horizontal-wrapper")) {
      var contentwidth = jQuery(window).width();
      if (contentwidth < "992") {
        $("body #pageWrapper")
          .removeClass("horizontal-wrapper")
          .addClass("compact-wrapper");
        $("body .page-body-wrapper")
          .removeClass("horizontal-menu")
          .addClass("sidebar-icon");
        jQuery("body .submenu-title").append(
          '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
        );
        jQuery("body").on("click", ".submenu-title", function () {
          jQuery("body .submenu-title").removeClass("active");
          jQuery("body .submenu-title")
            .find("div")
            .replaceWith(
              '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
            );
          jQuery("body .submenu-content").slideUp("normal");
          if (jQuery(this).next().is(":hidden") == true) {
            jQuery(this).addClass("active");
            jQuery(this)
              .find("div")
              .replaceWith(
                '<div class="according-menu"><i class="fa fa-angle-down"></i></div>'
              );
            jQuery(this).next().slideDown("normal");
          } else {
            jQuery(this)
              .find("div")
              .replaceWith(
                '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
              );
          }
        });
        jQuery("body .submenu-content").hide();

        jQuery(".menu-title").append(
          '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
        );
        jQuery("body").on("click", ".menu-title", function () {
          jQuery("body .menu-title").removeClass("active");
          jQuery("body .menu-title")
            .find("div")
            .replaceWith(
              '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
            );
          jQuery("body .menu-content").slideUp("normal");
          if (jQuery(this).next().is(":hidden") == true) {
            jQuery(this).addClass("active");
            jQuery(this)
              .find("div")
              .replaceWith(
                '<div class="according-menu"><i class="fa fa-angle-down"></i></div>'
              );
            jQuery(this).next().slideDown("normal");
          } else {
            jQuery(this)
              .find("div")
              .replaceWith(
                '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
              );
          }
        });
        jQuery("body .menu-content").hide();
      }
    }
  }

  //responsive sidebar
  var $window = $(window);
  var widthwindow = $window.width();
  if (widthwindow + 17 <= 993) {
    $(".toggle-sidebar").attr("checked", false);
    $(".main-nav").addClass("close_icon");
    $(".page-main-header").addClass("close_icon");
  }

  $(window).on("resize", function () {
    var widthwindaw = $window.width();

    if (widthwindaw + 17 <= 991) {
      $(".toggle-sidebar").attr("checked", false);
      $(".main-nav").addClass("close_icon");
      $(".page-main-header").addClass("close_icon");
    } else {
      $(".toggle-sidebar").attr("checked", false);
      $(".main-nav").removeClass("close_icon");
      $(".page-main-header").removeClass("close_icon");
    }

    if (widthwindow >= 768) {
      $("body .toggle-sidebar").click(function () {
        $(".main-nav").toggleClass("close_icon");
        $(".page-main-header").toggleClass("close_icon");
      });
    }
  });

  // horizontal arrowss
  var view = $("body #mainnav");
  var move = "500px";
  var leftsideLimit = -500;

  // get wrapper width
  var getMenuWrapperSize = function () {
    return $("body .sidebar-wrapper").innerWidth();
  };
  var menuWrapperSize = getMenuWrapperSize();
  var sliderLimit;
  if (menuWrapperSize >= "1660") {
    sliderLimit = -3000;
  } else if (menuWrapperSize >= "1440") {
    sliderLimit = -3600;
  } else {
    sliderLimit = -4200;
  }

  $("body #left-arrow").addClass("disabled");
  $("body").on("click", "#right-arrow", function () {
    var currentPosition = parseInt(view.css("marginLeft"));
    if (currentPosition >= sliderLimit) {
      $("#left-arrow").removeClass("disabled");
      view.stop(false, true).animate(
        {
          marginLeft: "-=" + move,
        },
        {
          duration: 400,
        }
      );
      if (currentPosition == sliderLimit) {
        $(this).addClass("disabled");
      }
    }
  });

  $("body").on("click", "#left-arrow", function () {
    var currentPosition = parseInt(view.css("marginLeft"));
    if (currentPosition < 0) {
      view.stop(false, true).animate(
        {
          marginLeft: "+=" + move,
        },
        {
          duration: 400,
        }
      );
      $("body #right-arrow").removeClass("disabled");
      $("body #left-arrow").removeClass("disabled");
      if (currentPosition >= leftsideLimit) {
        $(this).addClass("disabled");
      }
    }
  });

  // page active
  $("body .main-navbar").find("a").removeClass("active");
  $("body .main-navbar").find("li").removeClass("active");

  var current = window.location.pathname;
  $("body .main-navbar ul>li a").filter(function () {
    var link = $(this).attr("href");
    if (link) {
      if (current.indexOf(link) != -1) {
        $(this).parents().children("a").addClass("active");
        $(this).parents().parents().children("ul").css("display", "block");
        $(this).addClass("active");
        $(this)
          .parent()
          .parent()
          .parent()
          .children("a")
          .find("div")
          .replaceWith(
            '<div class="according-menu"><i class="fa fa-angle-down"></i></div>'
          );
        $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .children("a")
          .find("div")
          .replaceWith(
            '<div class="according-menu"><i class="fa fa-angle-down"></i></div>'
          );
        return false;
      }
    }
  });
  if ($("body .custom-scrollbar").length) {
    $("body .custom-scrollbar").animate(
      {
        scrollTop: $("body a.nav-link.menu-title.active").offset().top - 500,
      },
      1000
    );
  }

  // })

  // toggle sidebar
  $("body").on("click", ".toggle-sidebar", function () {
    $("body .main-nav").toggleClass("close_icon");
    $("body .page-main-header").toggleClass("close_icon");
  });
})(jQuery);
