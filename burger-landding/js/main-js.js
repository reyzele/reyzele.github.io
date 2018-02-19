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

  var tablets = 768;

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


  $(window).resize(function () {

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


    if ($(window).width() > tablets) {
      $(".overlay-menu").css("display", "none");
      $(".slider-compos").css("opacity", "");
      $(".slider__menu-btn").css("background-color", "");

      $(".slider__menu-btn").click(function (open_menu) {
        $(".overlay-menu").css("display", "none");
        $(".slider-compos").css("opacity", "");
        $(".slider__menu-btn").css("background-color", "");
      })
    }
  });

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

  



  $(document).ready(function () {
    $('#fullpage').fullpage({
      //Навигация
      menu: '#menu',
      anchors: ['hero', 'best', 'slider', 'team', 'menu', 'reviews', 'order', 'map'],
      navigation: true,
      navigationPosition: 'right',
      showActiveTooltip: true,
      slidesNavigation: false,
      slidesNavPosition: 'bottom',


      //Скроллинг
      responsiveWidth: 800,
      css3: true,
      scrollingSpeed: 900,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: false,
      scrollHorizontally: false,
      interlockedSlides: false,
      dragAndMove: false,
      offsetSections: false,
      resetSliders: false,
      fadingEffect: false,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,
      bigSectionsDestination: null,

     
    });
  });

  $('.owl-carousel').owlCarousel({

    items: 1,
    loop: true,
    dots: false,
  });

  var owl = $('.owl-carousel');
  owl.owlCarousel();
  // Go to the next item
  $('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.customPrevBtn').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  });
});


