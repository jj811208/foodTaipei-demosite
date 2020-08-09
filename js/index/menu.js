"use strict";

function menuInit() {
  var menuDOM = document.querySelector(".menu__container");
  menuDOM.addEventListener("click", function () {
    menuDOM.classList.toggle("menu--active");
  });
  gsap.timeline({
    repeat: -1,
    duration: 2
  }).to(".menu svg", {
    scaleX: 0.8,
    duration: 1,
    yoyo: 1
  }).to(".menu #topB", {
    yPercent: -30,
    duration: 1,
    yoyo: 1
  }).to(".menu #bottomB", {
    yPercent: 30,
    duration: 1,
    yoyo: 1
  });
} // #topB
// #centerM
// #bottomB