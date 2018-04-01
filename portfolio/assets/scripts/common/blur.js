var Blur = function () {
  var imgWidth = $('.about__background').width();
  var imgMinWidth = $('.about__background');
  var blurSection = $('.about');
  var blurSectionHeight = $('.about').height();
  var blur = $('.about__form-background');
  var posY = blurSection.offset().top - blur.offset().top; //   текущее положение элемента относительно документа.
  var posX = blurSection.offset().left - blur.offset().left;
  if (blurSectionHeight > 1376) {
    var minWidth;
    minWidth = 1800 + ((1800 / 1376) * ((blurSectionHeight) - 1376));
    imgMinWidth.css({
      'min-width': minWidth + 'px'
    });
    imgWidth = minWidth;
  } else {
    imgMinWidth.css({
      'min-width': 1800 + 'px'
    });
  }
  blur.css({
    'background-size': imgWidth + 'px' + ' ' + 'auto',
    'background-position': posX + 'px' + ' ' + posY + 'px'
  });
}
export { Blur };
