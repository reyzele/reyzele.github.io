jQuery(document).ready(function () {
  $("#hero").height($(window).height());
  $(window).resize(function () {
    $("#hero").height($(window).height());
    $("#hero").css("min-height", "650px")
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