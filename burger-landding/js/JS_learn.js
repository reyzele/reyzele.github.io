
function animateProp(el, prop, from, to, duration) {
  return new Promise(function (resolve) {
    function animate() {
      const currentTime = Date.now(); // time
      const timesLeft = startTime + duration - currentTime;

      if (timesLeft <= 0) {
        el.style[prop] = to + "px";
        resolve();
      } else {
        const progress = 1 / duration * (duration - timesLeft);

        el.style[prop] = from + (to - from) * progress + "px";
        requestAnimationFrame(animate);
      }
    }

    const startTime = Date.now();

    requestAnimationFrame(animate);
  });
}



animateProp(my, "left", 0, 200, 5000)
  .then(function () {
    return animateProp(my, "left", 200, 0, 5000);
  })
  .then(function () {
    return animateProp(my, "left", 0, 200, 500);
  })
  .then(function () {
    return animateProp(my, "left", 200, 0, 500);
  });


  