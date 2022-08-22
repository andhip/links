var animatePoints = function () {
  var revealPoint = function () {
    $(this).css({
      opacity: 1,
      transform: "scaleX(1) translateY(0)",
    });
  };

  $.each($(".point"), revealPoint);
};

$(window).load(function () {
  if ($(window).height() > 635) {
    //for index => 950
    animatePoints();
  }

  var scrollDistance =
    $(".selling-points").offset().top - $(window).height() + 60; //for index => 120

  $(window).scroll(function (event) {
    if ($(window).scrollTop() >= scrollDistance) {
      animatePoints();
    }
  });
});
