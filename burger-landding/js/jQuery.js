jQuery(document).ready(function (e) {
  e(".scroll").click(function (t) {
    t.preventDefault();
    e("html,body").animate({
      scrollTop: e(this.hash).offset().top
    }, 1e3)
  })
  $(".menu__item").click(function (e) {
    e.preventDefault();
    $(".menu__item").removeClass('menu__item_active');
    $(this).addClass('menu__item_active');
  })
  $(".team-acco__item").click(function (e) {
    e.preventDefault();
    $(".team-acco__item").removeClass('team-acco__item--active');
    $(this).addClass('team-acco__item--active');
  })
});