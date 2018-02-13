const left = document.querySelector(".slider__side--left");
const right = document.querySelector(".slider__side--right");
const items = document.querySelector(".slider__list");

const slider1020 = 1020;
const slider864 = 864;
const slider768 = 768;
const slider480 = 480;
const r_scroll = 17;

var minRight = 0;
var maxRight = -2820;
var step = -940;
var currentRight = 0;

function Right_Scroll () {
  currentRight += step;
  items.style = ("transform: translate3d(" + currentRight + "px, 0px, 0px);");
}

function Left_Scroll () {
    currentRight -= step;
    items.style = ("transform: translate3d(" + currentRight + "px, 0px, 0px);");
}

$(window).resize(function () {

  if (($(window).width() <= (slider1020 - (r_scroll - 2))) && ($(window).width() >= (slider1020 - r_scroll))) {
    currentRight = 0;
    items.style = ("transform: translate3d(" + currentRight + "px, 0px, 0px);");
  }

  else if (($(window).width() <= (slider864 - (r_scroll - 2))) && ($(window).width() >= (slider864 - r_scroll))) {
    currentRight = 0;
    items.style = ("transform: translate3d(" + currentRight + "px, 0px, 0px);");
  }

  else if ($(window).width() <= slider768 && $(window).width() >= slider768) {
    currentRight = 0;
    items.style = ("transform: translate3d(" + currentRight + "px, 0px, 0px);");
  }

  else if ($(window).width() <= slider480 && $(window).width() >= slider480) {
    currentRight = 0;
    items.style = ("transform: translate3d(" + currentRight + "px, 0px, 0px);");
  }
  
});

right.addEventListener("click", function (right) {
  right.preventDefault();
    //check window width 864px-1020px
  if ($(window).width() > (slider864 - r_scroll) && $(window).width() <= (slider1020 - r_scroll)) {
      maxRight = -2304;
      step = -768;

      if ((currentRight % step == 0) || (currentRight == minRight)) {
        if (currentRight > maxRight) {
          Right_Scroll();
        }
      } else {
        currentRight = minRight;
      }
    }

  //check window width 768px-864px
  else if ($(window).width() > (slider768) && $(window).width() <= (slider864)) {
    maxRight = -2070;
    step = -690;

    if ((currentRight % step == 0) || (currentRight == minRight)) {
      if (currentRight > maxRight) {
        Right_Scroll();
      }
    } else {
      currentRight = minRight;
    }
  }

  //check window width tablets
  else if ($(window).width() > (slider480) && $(window).width() <= (slider768)) {
    maxRight = -2304;
    step = -768;

    if ((currentRight % step == 0) || (currentRight == minRight)) {
      if (currentRight > maxRight) {
        Right_Scroll();
      }
    } else {
      currentRight = minRight;
    }
  }

  //check window width phones
  else if ($(window).width() <= (slider480)) {
    maxRight = -1440;
    step = -480;

    if ((currentRight % step == 0) || (currentRight == minRight)) {
      if (currentRight > maxRight) {
        Right_Scroll();
      }
    } else {
      currentRight = minRight;
    }
  }

    else {
    step = -940;
    if ((currentRight % step) != 0) {
      currentRight = 0;
    }

    if (currentRight > maxRight) {
        Right_Scroll();
      }
    }
  //else if (currentRight <= maxRight) {
  //  currentRight = minRight;
  //  items.style.right = currentRight + "px";
  //  items.style = ("transform: translate3d(" + currentRight + "px, 0px, 0px); width: 3760px; transition: all 1s; position: relative; display: flex;");
  //}
});

left.addEventListener("click", function (left) {
  left.preventDefault();

  //check window width 864px-1020px
  if ($(window).width() > (slider864 - r_scroll) && $(window).width() <= (slider1020 - r_scroll)) {
    maxRight = -2304;
    step = -768;

    if ((currentRight % step == 0) || (currentRight == minRight)) {
      if (currentRight < minRight) {
        Left_Scroll();
      }
    } else {
      currentRight = maxRight;
    }
  }

  //check window width 768px-864px
  else if ($(window).width() > slider768 && $(window).width() <= slider864) {
    maxRight = -2070;
    step = -690;

    if ((currentRight % step == 0) || (currentRight == minRight)) {
      if (currentRight < minRight) {
        Left_Scroll();
      }
    } else {
      currentRight = maxRight;
    }
  }

  //check window width tablets
  else if ($(window).width() > slider480 && $(window).width() <= slider768) {
    maxRight = -2304;
    step = -768;

    if ((currentRight % step == 0) || (currentRight == minRight)) {
      if (currentRight < minRight) {
        Left_Scroll();
      }
    } else {
      currentRight = maxRight;
    }
  }

  //check window width phones
  else if ($(window).width() <= slider480) {
    maxRight = -1440;
    step = -480;

    if ((currentRight % step == 0) || (currentRight == minRight)) {
      if (currentRight < minRight) {
        Left_Scroll();
      }
    } else {
      currentRight = maxRight;
    }
  }

  else {
    step = -940;
    if ((currentRight % step) != 0) {
      currentRight = 0;
    }
    if (currentRight < minRight) {
      Left_Scroll();
    }
  }
  //else if (currentRight >= maxRight) {
  //  currentRight = maxRight;
  //  items.style.right = currentRight + "px";
   // items.style = ("transform: translate3d(" + currentRight + "px, 0px, 0px); width: 3760px; transition: all 1s;");
  //}
});
