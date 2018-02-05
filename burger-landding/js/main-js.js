
jQuery(document).ready(function (e) {
  $(".hamburger-menu-link").click(function (overlay) {
    overlay.preventDefault();
    $(".overlay-menu").css("display", "flex");
  })
  $(".overlay-menu__close-link").click(function (close) {
    close.preventDefault();
    $(".overlay-menu").css("display", "none");
  })
  $(window).resize(function () {
    let tablets = 768;
    if ($(window).width() > tablets) {
      $(".overlay-menu").css("display", "none");
    }
  });

  $(".scroll").click(function (onclick) {
    onclick.preventDefault();
    $("html,body").animate({
      scrollTop: $(this.hash).offset().top
    }, 1e3)
  })
  $(".menu__item").click(function (rewiev_aco) {
    if ($(this).hasClass("menu__item_active")) {
      rewiev_aco.preventDefault();
      $(".menu__item").removeClass("menu__item_active");
    }
    else {
      rewiev_aco.preventDefault();
      $(".menu__item").removeClass("menu__item_active");
      $(this).addClass("menu__item_active");
    }
  })
  
  $(".team-acco__item").click(function (team_aco) {
    if ($(this).hasClass("team-acco__item--active")) {
      team_aco.preventDefault();
      $(".team-acco__item").removeClass("team-acco__item--active");
    }
    else {
      team_aco.preventDefault();
      $(".team-acco__item").removeClass("team-acco__item--active");
      $(this).addClass("team-acco__item--active");
    }
  })

});


