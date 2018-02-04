
jQuery(document).ready(function (e) {
  $(".hamburger-menu-link").click(function (overlay) {
    overlay.preventDefault();
    $(".overlay-menu").css("display", "flex");
  })
  $(".overlay-menu__close-link").click(function (close) {
    close.preventDefault();
    $(".overlay-menu").css("display", "none");
  })

  $(".scroll").click(function (onclick) {
    onclick.preventDefault();
    $("html,body").animate({
      scrollTop: $(this.hash).offset().top
    }, 1e3)
  })
  $(".menu__item").click(function (menu) {
    menu.preventDefault();
    $(".menu__item").removeClass('menu__item_active');
    $(this).addClass('menu__item_active');
  })
  $(".team-acco__item").click(function (team) {
    team.preventDefault();
    $(".team-acco__item").removeClass('team-acco__item--active');
    $(this).addClass('team-acco__item--active');
  })
});


