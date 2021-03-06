$(document).ready(function () {
  function rere() {
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
      autoScrolling: false,
      css3: false,
      scrollingSpeed: 900,
      fitToSection: false,
      fitToSectionDelay: 200,
    });
    
  }

  if ($(window).width() >= 768 && $(window).height() < 650) {
    rere();
  }

  else {
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
      responsiveHeight: 650,
      autoScrolling: true,
      css3: false,
      scrollingSpeed: 900,
      fitToSection: false,
      fitToSectionDelay: 200,
    });
  }


});

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

    $("html").removeClass("fp-enabled");
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

  $(".order__overlay-close").click(function (overlay_close) {
    overlay_close.preventDefault();
    $(".order__overlay").css("display", "none");
  })


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

  ymaps.ready(init);
  var myMap,
      myPlacemark1,
      myPlacemark2,
      myPlacemark3,
      myPlacemark4;


  function init() {
    myMap = new ymaps.Map("map-m", {
      center: [59.91502556, 30.48654800],
      zoom: 10,
      
    });

    myPlacemark1 = new ymaps.Placemark([59.91502556, 30.48654800], { hintContent: 'Mr.Burger на Товарищеском', balloonContentHeader: 'Mr.Burger на Товарищеском', 
    balloonContentBody: 'Бургеры у нас - быстро, вкусно, сытно, ждем по адресу:',
    balloonContentFooter: 'Санкт-Петербург, Товарищеский проспект, 20/27' 
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'http://burger-landding.reyzele.com/img/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-3, -42]
    });
    myPlacemark2 = new ymaps.Placemark([59.94704056, 30.38503850], { hintContent: 'Mr.Burger на Тверской', balloonContentHeader: 'Mr.Burger на Тверской', 
    balloonContentBody: 'Бургеры у нас - быстро, вкусно, сытно, ждем по адресу:',
    balloonContentFooter: 'Санкт-Петербург, Товарищеский проспект, 20/27'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'http://burger-landding.reyzele.com/img/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-3, -42]
    });
    myPlacemark3 = new ymaps.Placemark([59.89125906, 30.31689200], { hintContent: 'Mr.Burger на Московском', balloonContentHeader: 'Mr.Burger на Московском', 
    balloonContentBody: 'Бургеры у нас - быстро, вкусно, сытно, ждем по адресу:', 
    balloonContentFooter: 'Санкт-Петербург, Товарищеский проспект, 20/27'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'http://burger-landding.reyzele.com/img/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-3, -42]
    });
    myPlacemark4 = new ymaps.Placemark([59.97356806, 30.31127750], { hintContent: 'Mr.Burger на Чапыгина', balloonContentHeader: 'Mr.Burger на Чапыгина', 
    balloonContentBody: 'Бургеры у нас - быстро, вкусно, сытно, ждем по адресу:', 
    balloonContentFooter: 'Санкт-Петербург, Товарищеский проспект, 20/27'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'http://burger-landding.reyzele.com/img/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-3, -42]
    });


    myMap.geoObjects
      .add(myPlacemark1)
      .add(myPlacemark2)
      .add(myPlacemark3)
      .add(myPlacemark4);

    myMap.behaviors.disable('scrollZoom');
  }
  
  
});


