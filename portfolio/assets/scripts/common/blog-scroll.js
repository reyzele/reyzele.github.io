
let scrollMenu = (function () {
  const $news = $('.reviews__item');
  const $item = $('.blog-nav__item');
  const $Menu = $('.blog-nav');
  let positionArticle = [];
  let offsetHeight = 0; // верхнее смещение для скролла
  let flagAnimation = true;

  // выполняем расчет позиций для каждой статьи
  const _setPositionArticle = function (elements) {
    elements.each(function (item) {
      positionArticle[item] = {}
      positionArticle[item].top = $(this).offset().top - offsetHeight
      positionArticle[item].bottom = positionArticle[item].top + $(this).innerHeight()
    })
  }

  const _scrollPageFixMenu = function (e) {
    let scroll = window.pageYOffset;
    if (scroll < $news.offset().top) {
      $Menu.removeClass('blog-nav__fixed')
    } else {
      $Menu.addClass('blog-nav__fixed')
    }
  }

  const _scrollPage = function (e) {
    const isFirstVision = function (element, current) {
      let scroll = window.pageYOffset;
      return scroll >= element.top && scroll < element.bottom && !current.hasClass('blog-nav__item_active')
    }
    positionArticle.forEach((element, index) => {
      let $currentElement = $item.eq(index);
      let $bottomOfPage = Math.ceil($(window).scrollTop());
      if (isFirstVision(element, $currentElement)) {
        $currentElement.addClass('blog-nav__item_active').siblings().removeClass('blog-nav__item_active')
      } else if ($bottomOfPage == $(document).height() - $(window).height()) {
        $currentElement.addClass('blog-nav__item_active').siblings().removeClass('blog-nav__item_active')
      }
    })
  }

  const _clickMenu = function (e) {
    if (flagAnimation) {
      flagAnimation = false;
      let $element = $(e.target)
      let index = $element.index()
      let sectionOffset = Math.ceil(positionArticle[index].top)
      $(document).off('scroll', _scrollPage)
      $element.siblings(['blog - nav__item']).removeClass('blog-nav__item_active')

      $('body, html').animate({ scrollTop: sectionOffset }, 1000, () => {
        $element.addClass('blog-nav__item_active')
        $(document).on('scroll', _scrollPage)
        flagAnimation = true;
      })

    }
  }

  const addListener = function () {
    $(window).one('load', function (e) {
      _setPositionArticle($news)
      $('.blog-nav__list').on('click', _clickMenu)
      $(document).on('scroll', _scrollPage)
      $(document).on('scroll', _scrollPageFixMenu)
    })

    $(window).on('resize', function (e) {
      _setPositionArticle($news)
    })
  }

  return {
    init: addListener
  }

})()

scrollMenu.init();