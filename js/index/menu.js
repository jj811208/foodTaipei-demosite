"use strict";

function menuInit() {
  var menuDOM = document.querySelector(".menu");
  menuDOM.addEventListener("click", function () {
    menuDOM.classList.toggle("menu--active");
  });
  gsap.timeline().from(".menu", {
    duration: 0.3,
    y: "-100%"
  }, 0.4);
}