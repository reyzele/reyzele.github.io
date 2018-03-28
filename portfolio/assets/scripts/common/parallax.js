var parallaxContainer = document.getElementById('welcome__parallax'),
  layers = parallaxContainer.children;

var moveLayers = function (e) {
<<<<<<< HEAD

  var initialX = (window.innerWidth / 2) - e.pageX;
  var initialY = (window.innerHeight / 2) - e.pageY;

  // console.log(e.pageX);
  // console.log(e.pageY);

=======
  var initialX = (window.innerWidth / 2) - e.pageX;
  var initialY = (window.innerHeight / 2) - e.pageY;

>>>>>>> ea3a91c5afefa8841455a9ba088ecfbcf4efc725
  [].slice.call(layers).forEach(function (layer, index) {
    var
      divider = index / 100,
      positionX = initialX * divider,
      positionY = initialY * divider,
<<<<<<< HEAD
      Procent = window.innerHeight / 100 * 20;
    bottomPosition = (window.innerHeight / 2) * divider + Procent,
=======
      Procent = window.innerHeight / 100 * 15;
      bottomPosition = (window.innerHeight / 2) * divider + Procent,
>>>>>>> ea3a91c5afefa8841455a9ba088ecfbcf4efc725
      transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
      image = layer.firstElementChild;

    layer.style.transform = transformString;
    image.style.bottom = '-' + bottomPosition + 'px';
  });

};

window.addEventListener('mousemove', moveLayers);
