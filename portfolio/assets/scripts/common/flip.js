// Flip effect
$(document).ready(function () {
  var flag = false;
  $('.welcome__auth-link').click(function (auth) {
    auth.preventDefault();
    $('.welcome__flipper').css({
      'transform': 'rotateY(180deg)'
    });
    $('.welcome__auth').fadeOut('slow');
    flag = true;
  });
  $('.btns__link').click(function (back) {
    $('.welcome__flipper').css({
      'transform': 'rotateY(0deg)'
    });
    $('.welcome__auth').fadeIn('slow');
  });
  $(document).mouseup(function (e) {
    var div = $('.welcome__container');
    if (!div.is(e.target) && div.has(e.target).length === 0 && flag) {
      $('.welcome__flipper').css({
        'transform': 'rotateY(0deg)'
      });
      $('.welcome__auth').fadeIn('slow');
      flag = false;
    }
  });
});
