
$(document).ready(function () {
  setTimeout(blur, 500);
});
 


$(window).resize(function () {
  blur();
});

function blur() {
  var imgWidth = $('.about__background').width(),
    imgMinWidth = $('.about__background'),
    blurSection = $('.about'),
    blurSectionHeight = $('.about').height(),
    blur = $('.about__form'),
    posY = blurSection.offset().top - blur.offset().top, //   текущее положение элемента относительно документа.
    posX = blurSection.offset().left - blur.offset().left;
  if (blurSectionHeight > 1376) {
    console.log('Внутри!');
    var minWidth;
    minWidth = 1800+((1800/1376)*((blurSectionHeight)-1376));
    console.log(minWidth);
    imgMinWidth.css({
      'min-width': minWidth + 'px'
    });
    imgWidth = minWidth;
  }
  else {
    imgMinWidth.css({
      'min-width': 1800 + 'px'
    });
  }
  blur.css({
    'background-size': imgWidth + 'px' + ' ' + 'auto',
    'background-position': posX + 'px' + ' ' + posY + 'px'
  });
  console.log(blurSectionHeight);
}
