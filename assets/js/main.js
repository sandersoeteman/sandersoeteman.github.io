(function($) {
  "use strict";

  /* ==========================================
           1. Skew BG
========================================== */

  function skew_position() {
    var window_width = jQuery(window).width();
    var skew_square_height = window_width / 18.5;
    jQuery(".skew_appended")
      .height(skew_square_height + "px")
      .css("bottom", "-" + skew_square_height / 2 + "px")
      .css("-webkit-backface-visibility", "hidden !important");
    jQuery(".skew_prepended")
      .height(skew_square_height + "px")
      .css("top", "-" + (skew_square_height / 2 + 1) + "px")
      .css("-webkit-backface-visibility", "hidden !important");

    jQuery(".skew")
      .not(".module_google_map")
      .append('<div class="skew_appended"></div>');
    jQuery(".skew, .module_google_map .skew, .pre_footer.skew")
      .not(".remove-top-skew")
      .append('<div class="skew_prepended"></div>');
  }

  skew_position();

  var windos = $(window);
  windos.resize(function() {
    skew_position();
  });

  /* ==========================================
           2. sticky menu
   ========================================== */

  function sticky_menu() {
    var windows = $(window);
    windows.on("scroll", function() {
      var scroll = windows.scrollTop();
      if (scroll < 110) {
        $("#sticky-menu").removeClass("sticky");
      } else {
        $("#sticky-menu").addClass("sticky");
      }
    });
  }
  sticky_menu();

  /* ==========================================
           7. Preloader
========================================== */

  $(window).load(function() {
    $(".preloader").fadeOut(1000);
  });

  /* ==========================================
           10. Smooth Scroll
========================================== */
  var scroll = new SmoothScroll();
  var smoothScrollWithoutHash = function(selector, settings) {
    /**
     * If smooth scroll element clicked, animate scroll
     */
    var clickHandler = function(event) {
      var toggle = event.target.closest(selector);

      if (!toggle || toggle.tagName.toLowerCase() !== "a") return;

      var anchor = document.querySelector(toggle.hash);
      if (!anchor) return;

      event.preventDefault(); // Prevent default click event
      scroll.animateScroll(anchor, toggle, settings || {}); // Animate scroll
    };

    window.addEventListener("click", clickHandler, false);
  };
  smoothScrollWithoutHash('a[href*="#"]');

  /* ==========================================
           11. Footer
========================================== */
  $("span.copyright-year").html(new Date().getFullYear());
})(jQuery);
