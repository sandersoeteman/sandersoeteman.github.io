(function($) {
  "use strict";

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
           TRIAL
========================================== */

  FilePond.registerPlugin(
    // encodes the file as base64 data
    FilePondPluginFileEncode,

    // validates files based on input type
    FilePondPluginFileValidateType
  );

  // Select the file input and use create() to turn it into a pond
  // in this example we pass properties along with the create method
  // we could have also put these on the file input element itself
  FilePond.create(document.querySelector('input[type="file"]'), {
    labelIdle: `Drag & Drop your picture or <span class="filepond--label-action">Browse</span>`,
    server: "https://app.pokayoka.com/new",
    stylePanelLayout: "compact",
    styleLoadIndicatorPosition: "center bottom",
    styleButtonRemoveItemPosition: "center bottom"
  });
  /* ==========================================
           11. Footer
========================================== */
  $("span.copyright-year").html(new Date().getFullYear());
})(jQuery);
