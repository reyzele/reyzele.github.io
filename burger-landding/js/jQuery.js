jQuery(document).ready(function () {
  $("#burger, #about-us, #reviews").height($(window).height());
  $(window).resize(function () {
    $("#burger, #about-us, #reviews").height($(window).height());
    $("#burger, #about-us, #reviews").css("min-height", "650px")
  });
});
jQuery(document).ready(function (e) {
  e(".scroll").click(function (t) {
    t.preventDefault();
    e("html,body").animate({
      scrollTop: e(this.hash).offset().top
    }, 1e3)
  })
});