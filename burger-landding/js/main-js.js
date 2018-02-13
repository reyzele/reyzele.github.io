// Hamburger overlay-menu open
$(document).ready(function (e) {
  $(".hamburger-menu-link").click(function (overlay) {
    overlay.preventDefault();
    $(".overlay-menu").css("display", "flex");
  })

// Hamburger overlay-menu close
  $(".close-link_overlay-menu").click(function (close) {
    close.preventDefault();
    $(".overlay-menu").css("display", "none");
  })

  var tablets = (768 + 18);
  $(window).resize(function () {
    if ($(window).width() > tablets) {
      $(".overlay-menu").css("display", "none");
    }
  });

//Section Slider open & close composition
  if ($(window).width() <= tablets) {  
    $(".slider__menu-btn").click(function (open_menu) {
      open_menu.preventDefault();
      $(this).css("background-color", "#e25028");
      $(".slider-compos").css("opacity", "1");
    })

    $(".close-link_compos").click(function (close_menu) {
      close_menu.preventDefault();
      $(".slider-compos").css("opacity", "0");
      $(".slider__menu-btn").css("background-color", "#f08c33");
    })
  }

  $(".scroll").click(function (onclick) {
    onclick.preventDefault();
    $("html,body").animate({
      scrollTop: $(this.hash).offset().top
    }, 1e3)
  })

  //Section menu
  $(".menu__item").click(function (rewiev_aco_tr) {
    rewiev_aco_tr.preventDefault();
    $(".menu__item").removeClass("menu__item_active");
    $(this).addClass("menu__item_active");
  })

  // Section menu (overlay close)
  $(".close-link_menu").click(function (close) { setTimeout(() => {
    close.preventDefault();
    $(".menu__item").removeClass("menu__item_active");
  }, 10);

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

  $(".reviews__btn").click(function (reviews__overlay) {
    reviews__overlay.preventDefault();
    $(".reviews__overlay").css("display", "flex");
  })

  $(".reviews__overlay-close").click(function (reviews__overlay_close) {
    reviews__overlay_close.preventDefault();
    $(".reviews__overlay").css("display", "none");
  })
});


