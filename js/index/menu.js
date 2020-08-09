"use strict";

function menuInit() {
  var menuDOM = document.querySelector(".menu__container");
  menuDOM.addEventListener("click", function () {
    menuDOM.classList.toggle("menu--active");
  });
  var menuAnime = gsap.timeline({
    repeat: -1,
    duration: 2,
    repeatDelay: 2
  }).to(".menu #topB", {
    ease: Power2.easeOut,
    yPercent: -20,
    duration: 0.8
  }, 0).to(".menu #bottomB", {
    ease: Power2.easeOut,
    yPercent: 40,
    duration: 0.8
  }, 0).to(".menu #topB,.menu #bottomB", {
    ease: Elastic.easeOut.config(1.5, 0.2),
    yPercent: 0,
    duration: 1.2
  }, 0.8);
  mouseHover(".menu", {
    mouseover: function mouseover() {
      menuAnime.pause();
      return gsap.to(".menu svg", {
        yPercent: -12,
        duration: 0.2
      });
    },
    mouseout: function mouseout() {
      menuAnime.play();
      gsap.to(".menu svg", {
        yPercent: 0,
        duration: 0.2
      });
    }
  });
}

function langSwitch() {
  document.querySelector("html").classList.toggle('english');
  document.querySelector("html").classList.toggle('chinese');
}