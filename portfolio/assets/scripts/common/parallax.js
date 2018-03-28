var parallaxContainer = document.getElementById('welcome__parallax'),
  layers = parallaxContainer.children;

var moveLayers = function (e) {

  var initialX = (window.innerWidth / 2) - e.pageX;
  var initialY = (window.innerHeight / 2) - e.pageY;

  // console.log(e.pageX);
  // console.log(e.pageY);

  [].slice.call(layers).forEach(function (layer, index) {
    var
      divider = index / 100,
      positionX = initialX * divider,
      positionY = initialY * divider,
      Procent = window.innerHeight / 100 * 20;
    bottomPosition = (window.innerHeight / 2) * divider + Procent,
      transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
      image = layer.firstElementChild;

    layer.style.transform = transformString;
    image.style.bottom = '-' + bottomPosition + 'px';
  });

};

window.addEventListener('mousemove', moveLayers);
