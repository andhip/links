// document ready
$(document).ready(() => {
  $(document.getElementById("kontak")).on("click", function (event) {
    if (this.hash !== "0") {
      event.preventDefault();
      // Store hash
      var hash = this.hash;

      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1500,
        "easeInOutExpo",
        function () {
          window.location.hash = hash;
        }
      );
    }
    // End if
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // preloader
  // $(document).ready(function () {
  //   setTimeout(function () {
  //     $("body").addClass("loaded");
  //   }, 3000);
  // });
});
