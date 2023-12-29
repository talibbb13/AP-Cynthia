

document.querySelector(".layer").addEventListener("mouseenter", function () {
  var icon1 = document.querySelector(".layer .ri-arrow-down-line")
  icon1.style.transform = `translateY(100%)`

  setInterval(() => {
    icon1.style.opacity = 1
  }, 200);

  setTimeout(() => {
    icon1.style.transform = `translateY(-100%)`
  }, 400);

  setTimeout(() => {
    icon1.style.transform = `translateY(0%)`
  }, 600);
})

document.querySelectorAll(".layer")[1].addEventListener("mouseenter", function () {
  var icon1 = document.querySelector(".layer .ri-arrow-up-line")
  icon1.style.transform = `translateY(-100%)`

  setInterval(() => {
    icon1.style.opacity = 1
  }, 200);

  setTimeout(() => {
    icon1.style.transform = `translateY(100%)`
  }, 400);

  setTimeout(() => {
    icon1.style.transform = `translateY(0%)`
  }, 600);
})

// loco 4 line code here
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
var timeOut;

function heroAnim() {
  var tl = gsap.timeline();

  tl.from("nav h3, nav h6", {
    y: "-100",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
  });

  tl.to(".boundryElem", {
    y: "0",
    ease: Expo.easeInOut,
    duration: 1.5,
    stagger: .3,
    delay: -1,
  })

  tl.from("#heroFooter", {
    y: "-30",
    ease: Expo.easeInOut,
    duration: 1.5,
    opacity: 0,
    delay: -1,
  })
}
heroAnim();



function screwing() {
  var xScale = 1;
  var yScale = 1;
  var xPrev = 0;
  var yPrev = 0

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeOut);
    var xDiff = dets.x - xPrev;
    var yDiff = dets.y - yPrev;
    xScale = gsap.utils.clamp(.8, 1.2, xDiff);
    yScale = gsap.utils.clamp(.8, 1.2, yDiff);
    xPrev = dets.x;
    yPrev = dets.y;

    cursorMove(xScale, yScale);
    timeOut = setTimeout(function () {
      document.querySelector("#cursor").style.transform = `translate(${dets.x}px, ${dets.y}px) scale(1, 1)`
    }, 100)
  })
}

document.querySelectorAll(".elem").forEach(function (elem) {
  var rot = 0;
  var rotDiff = 0;
  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power4,
      duration: .5,
    })
  })
  elem.addEventListener("mousemove", function (dets) {
    var yLoc = dets.y - elem.getBoundingClientRect().top;
    rotDiff = dets.x - rot;
    rot = dets.x;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power4,
      left: dets.x,
      top: yLoc,
      rotate: gsap.utils.clamp(-20, 20, rotDiff * .3)
    })
  })

})



function cursorMove(xScale, yScale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#cursor").style.transform = `translate(${dets.x}px, ${dets.y}px) scale(${xScale}, ${yScale})`;
  })
}
screwing();
cursorMove()



function tym() {
  setInterval(function () {
    var tymCon = document.querySelector("#tym");
    var now = new Date();
    var hours = now.getHours() % 12 || 12;
    var min = now.getMinutes();
    var sec = now.getSeconds();
    document.querySelector("#tym").innerHTML = `${hours} : ${min}: ${sec}`
  }, 100)
}
tym();

