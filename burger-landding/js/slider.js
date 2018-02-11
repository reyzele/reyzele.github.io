const left = document.querySelector(".slider__side--left");
const right = document.querySelector(".slider__side--right");
const items = document.querySelector(".slider__list");

const minRight = 0;
const maxRight = -2820;
const step = -940;
let currentRight = 0;

right.addEventListener("click", function (right) {
  right.preventDefault();
  if (currentRight > maxRight) {
    currentRight += step;
    items.style = ("transform: translate3d(" + currentRight + "px, 0px, 0px);");
  }

  else if (currentRight <= maxRight) {
    currentRight = minRight;
    items.style.right = currentRight + "px";
    items.style = ("transform: translate3d(" + currentRight + "px, 0px, 0px);");
  }
});

left.addEventListener("click", function (left) {
  left.preventDefault();
  if (currentRight < minRight) {
    currentRight -= step;
    items.style = ("transform: translate3d(" + currentRight + "px, 0px, 0px);");
  }

  else if (currentRight >= maxRight) {
    currentRight = maxRight;
    items.style.right = currentRight + "px";
    items.style = ("transform: translate3d(" + currentRight + "px, 0px, 0px);");
  }
});
