"use strict";

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= -20 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  /*or $(window).height() */
  && rect.right <= (window.innerWidth || document.documentElement.clientWidth) + 20
  /*or $(window).width() */
  ;
}

var mouseHover = function mouseHover(className) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    mouseover: function mouseover() {},
    mouseout: function mouseout() {}
  };
  var targets = document.querySelectorAll(className);
  if (targets.length === 0) return;
  var mouseover = callback.mouseover,
      mouseout = callback.mouseout;
  var mouseInEvent = null;
  targets.forEach(function (target) {
    target.addEventListener("mouseover", function () {
      mouseInEvent = mouseover();
    });
    target.addEventListener("mouseout", function () {
      mouseInEvent.pause();
      mouseout();
    });
  });
};