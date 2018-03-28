// Flip effect
$(document).ready(function () {
  $('.welcome__auth-link').click(function (auth) {
    auth.preventDefault();
    $('.welcome__flipper').css({
      'transform': 'rotateY(180deg)'
    });
    $('.welcome__auth').fadeOut('slow');
  });
  $('.btns__link').click(function (back) {
    $('.welcome__flipper').css({
      'transform': 'rotateY(0deg)'
    });
    $('.welcome__auth').fadeIn('slow');
  });
});
