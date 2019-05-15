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
           7. Who
========================================== */
  var newRoleField = $("#new-role");
  $(".btn-add-role").click(e => {
    $.ajax({
      url: "https://formspree.io/mrygaqex",
      method: "POST",
      data: {
        newRole: newRoleField.val()
      },
      dataType: "json"
    })
      .done(() => {
        newRoleField.val("");
      })
      .fail(() => {
        alert(
          "Er is iets mis gegaan bij het versturen van uw rol. Mijn excuses daarvoor! U kunt een mailtje sturen naar contact@pokayoka.com"
        );
      });
    e.preventDefault();
    return false;
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
  var nameField = $("#name"),
    emailField = $("#contact-email"),
    commentField = $("#comment"),
    informedField = $("#keep-me-informed");
  $(".btn-contact").click(e => {
    if (nameField.val() && emailField.val()) {
      $.ajax({
        url: "https://formspree.io/mrygaqex",
        method: "POST",
        data: {
          contactName: nameField.val(),
          email: emailField.val(),
          comment: commentField.val(),
          keepMeInformed: informedField.prop("checked")
        },
        dataType: "json"
      })
        .done(() => {
          nameField.val("");
          emailField.val("");
          commentField.val("");
          informedField.prop("checked", false);
          alert(
            "Uw vraag is verzonden en wordt door ons in behandeling genomen!"
          );
        })
        .fail(() => {
          alert(
            "Er is iets mis gegaan bij het versturen van uw vraag. Mijn excuses daarvoor! U kunt een mailtje sturen naar contact@pokayoka.com"
          );
        });
      e.preventDefault();
      return false;
    }
  });

  $("span.copyright-year").html(new Date().getFullYear());
})(jQuery);
