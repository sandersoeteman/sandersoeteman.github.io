(function($) {
  "use strict";

  const _newRolesKeyName = "newRoles";

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
  const addNewRole = roleName => {
    var newRoles = [];
    try {
      newRoles = JSON.parse(sessionStorage.getItem(_newRolesKeyName)) || [];
      if (newRoles.indexOf(roleName) === -1) {
        newRoles.push(roleName);
        sessionStorage.setItem(_newRolesKeyName, JSON.stringify(newRoles));
      }
    } catch (e) {
      // do nothing
    }
  };

  const displayRoles = () => {
    $(".new-role").remove();
    var newRoles = JSON.parse(sessionStorage.getItem(_newRolesKeyName)) || [];
    newRoles.forEach(role => {
      var elem =
        `<div class="role new-role">
      <label>` +
        role +
        `</label>
      </div>`;
      $(elem).insertBefore(".role.add-new-role");
    });
  };

  var newRoleField = $("#add-new-role"),
    btnAddRole = $(".btn-add-role");
  btnAddRole.click(e => {
    var newRole = (newRoleField.val() || "").toLowerCase();
    if (newRole) {
      btnAddRole.prop("disabled", true);
      $.ajax({
        url: "https://formspree.io/mjpkyqam",
        method: "POST",
        data: {
          newRole
        },
        dataType: "json"
      })
        .done(() => {
          newRoleField.val("");
          addNewRole(newRole);
          displayRoles();
          btnAddRole.prop("disabled", false);
        })
        .fail(() => {
          btnAddRole.prop("disabled", false);
          alert(
            "Er is iets mis gegaan bij het versturen van uw rol. Mijn excuses daarvoor! U kunt een mailtje sturen naar contact@pokayoka.com"
          );
        });
      e.preventDefault();
      return false;
    }
  });
  displayRoles();

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
