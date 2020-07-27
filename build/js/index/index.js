"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 40 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
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
    console.log(123);
    target.addEventListener("mouseover", function () {
      mouseInEvent = mouseover();
    });
    target.addEventListener("mouseout", function () {
      mouseInEvent.pause();
      mouseout();
    });
  });
};

var hoverIn = [{
  rotate: 2
}, {
  duration: 0.2,
  repeat: -1,
  yoyo: true,
  yoyoEase: "power1.inOut",
  transformOrigin: "bottom center",
  rotate: -2
}];
var hoverOut = {
  duration: 0.3,
  yoyoEase: "power2.inOut",
  transformOrigin: "bottom center",
  rotate: 0
};
gsap.registerPlugin(ScrollTrigger); // 開場動畫

var a = gsap.timeline().from(".logo", {
  duration: 0.3,
  y: "-100%"
}, 0.9).from(".backend:not(.background):not(.ladder):not(.elsa):not(.poster):not(.buttonVisitor):not(.buttonFactSheet):not(.buttonExhibitor):not(.buttonMNT):not(.buttonPC):not(.buttonEvents):not(.buttonSVG):not(.buttonPSR)", {
  duration: 0.5,
  transformOrigin: "bottom",
  scaleY: 0
}, "+=.5").from(".middle:not(.hao):not(.tv):not(.mainTableItems)", {
  duration: 0.5,
  transformOrigin: "bottom",
  scaleY: 0
}, "-=.1").from(".front", {
  duration: 0.5,
  transformOrigin: "bottom",
  scaleY: 0
}, "-=.1"); //進場動畫

var ElsaDelay = 3.5;
var ElsaDuration = 1.7;
gsap.from(".elsa", {
  duration: ElsaDuration,
  scaleY: 0,
  delay: ElsaDelay,
  transformOrigin: "bottom",
  ease: "elastic.out(1, 0.3)"
});
gsap.from(".ladder", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "ladder",
    start: "8% center"
  },
  duration: 1.7,
  transformOrigin: "bottom",
  scaleY: 0,
  ease: "elastic.out(1, 0.3)"
});
gsap.from(".hao", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "hao",
    start: "11% center"
  },
  duration: 1.7,
  transformOrigin: "bottom",
  scaleY: 0,
  ease: "elastic.out(1, 0.3)"
});
gsap.from(".mainTableItems", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "mainTableItems",
    start: "15% center"
  },
  duration: 1.7,
  transformOrigin: "bottom",
  scaleY: 0,
  ease: "elastic.out(1, 0.3)"
});
gsap.from(".poster", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "poster",
    start: "25% center"
  },
  duration: 1.7,
  transformOrigin: "bottom",
  scaleY: 0,
  ease: "elastic.out(1, 0.3)"
});
gsap.from(".grandma", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "grandma",
    start: "28% center"
  },
  duration: 1.7,
  transformOrigin: "bottom",
  scaleY: 0,
  ease: "elastic.out(1, 0.3)"
});
gsap.from(".tv", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "tv",
    start: "76% center"
  },
  duration: 1.7,
  transformOrigin: "top",
  scaleY: 0,
  ease: "elastic.out(0.2, 0.1)"
});
gsap.from(".ryan", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "ryan",
    start: "66% center"
  },
  duration: 1.7,
  scaleY: 0,
  transformOrigin: "bottom",
  ease: "elastic.out(1, 0.3)"
}); //常駐動畫

gsap.fromTo(".windowClouds", {
  translateX: 200
}, {
  duration: 15.5,
  repeat: -1,
  translateX: -150
});
gsap.fromTo(".windowClouds-1", {
  translateX: 100
}, {
  duration: 9.5,
  repeat: -1,
  translateX: -240
});
setTimeout(function () {
  gsap.fromTo(".elsa", {
    scaleY: 1
  }, {
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    yoyoEase: "power2.inOut",
    transformOrigin: "bottom",
    scaleY: 1.03
  });
}, (ElsaDelay + ElsaDuration) * 1000);
gsap.to(".ladderCarton", {
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "left bottom",
  rotate: "-10"
});
gsap.to(".ladderLeftHand", {
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "left bottom",
  rotate: "-10"
});
gsap.to(".ladderRightHand", {
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "left top",
  rotate: "-10"
});
gsap.to(".haoHand", {
  duration: 2,
  repeat: -1,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "45px 0px",
  rotate: "-10"
});
gsap.to(".grandmaHand", {
  duration: 1,
  repeat: -1,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "left bottom",
  rotate: "-6"
});
gsap.to(".ryanLeftHand", {
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "right top",
  rotate: "-10"
});
gsap.to(".ryanRightHand", {
  duration: 1,
  repeat: -1,
  delay: 0.4,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "right top",
  rotate: "-10"
}); //hover動畫

var ELSA = [".buttonVisitor,.elsa", ".elsa"];
var LADDER = [".buttonFactSheet,.ladder", ".ladder"];
var HAO = [".buttonExhibitor,.hao", ".hao"];
var MAINTABLEITEMS = [".buttonMNT,.mainTableItems", ".mainTableItems"];
var POSTER = [".buttonPC,.poster", ".poster"];
var GRANDMA = [".buttonEvents,.grandma", ".grandma"];
var TV = [".buttonSVG,.tv", ".tv"];
var RYAN = [".buttonPSR,.ryan", ".ryan"];
[ELSA, LADDER, HAO, MAINTABLEITEMS, POSTER, GRANDMA, TV, RYAN].forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      hoverClassName = _ref2[0],
      targetClassname = _ref2[1];

  mouseHover(hoverClassName, {
    mouseover: function mouseover() {
      var _gsap;

      return (_gsap = gsap).fromTo.apply(_gsap, [targetClassname].concat(hoverIn));
    },
    mouseout: function mouseout() {
      gsap.to(targetClassname, hoverOut);
    }
  });
}); // 購物動畫

gsap.from("#noodles", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "noodles",
    start: "10% center",
    end: "18% center",
    scrub: 1
  },
  rotate: -180,
  opacity: 0,
  y: "-50%",
  x: "-10%"
});
gsap.from("#chocolate", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "chocolate",
    start: "24% center",
    end: "32% center",
    scrub: 1
  },
  rotate: -180,
  opacity: 0,
  y: "-50%",
  x: "-10%"
});
gsap.from("#crab", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "crab",
    start: "38% center",
    end: "46% center",
    scrub: 1
  },
  rotate: -180,
  opacity: 0,
  y: "-50%",
  x: "-10%"
});
gsap.from("#Avocado", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "Avocado",
    start: "52% center",
    end: "60% center",
    scrub: 1
  },
  rotate: -180,
  opacity: 0,
  y: "-50%",
  x: "-10%"
});
gsap.from("#wine", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "wine",
    start: "66% center",
    end: "74% center",
    scrub: 1
  },
  rotate: -180,
  opacity: 0,
  y: "-50%",
  x: "-10%"
});
gsap.from("#juice", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "juice",
    start: "80% center",
    end: "88% center",
    scrub: 1
  },
  rotate: -180,
  opacity: 0,
  y: "-50%",
  x: "-10%"
}); // 滾動視差  因為 resize 後要清掉，然後重新計算 container 的 x，所以要存在一個變數，方便 resize 清理

var parallaxInstance;

var ParallaxFn = function ParallaxFn() {
  parallaxInstance = gsap.timeline({
    scrollTrigger: {
      trigger: ".scrollElement",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.1
    }
  }).to(".container", {
    x: function x(_, dom, __) {
      var percent = (dom.offsetWidth - window.innerWidth) / dom.offsetWidth * 100;
      console.log("-".concat(percent, "%"));
      return "-".concat(percent, "%");
    } // left: "100%",

  }, 0).to(".backend", {
    x: "50px"
  }, 0).to(".ryan, .wineCabinet", {
    x: "-5%"
  }, 0).to(".grandma", {
    x: "-60%"
  }, 0).to(".buttonEvents", {
    x: "-280%"
  }, 0).to(".front", {
    x: "-100px"
  }, 0).to(".protagonistSvg", {
    x: 1136
  }, 0).to(".supportingRole", {
    x: "-130%"
  }, 0);
}; // 氣泡選單


var buttonExhibitor = document.querySelector(".buttonExhibitor");
var buttonEvents = document.querySelector(".buttonEvents");
var buttonPSR = document.querySelector(".buttonPSR");
var buttonSVG = document.querySelector(".buttonSVG");
var buttonMNT = document.querySelector(".buttonMNT");
var buttonPC = document.querySelector(".buttonPC");
var buttonFactSheet = document.querySelector(".buttonFactSheet");
var buttonVisitor = document.querySelector(".buttonVisitor");

var scrollEvent = function scrollEvent() {
  [buttonExhibitor, buttonEvents, buttonPSR, buttonSVG, buttonMNT, buttonPC, buttonFactSheet, buttonVisitor].forEach(function (button) {
    var fn = function fn() {
      if (isElementInViewport(button)) {
        if (button.style.opacity === 1) return;
        gsap.to(button, {
          opacity: 1,
          ease: "power2.out"
        });
      } else {
        if (button.style.opacity === 0) return;
        gsap.to(button, {
          opacity: 0,
          ease: "power2.out"
        });
      }
    };

    fn();
    setTimeout(fn, 1000);
  });
};

var debounceId;

var resizeDebounce = function resizeDebounce() {
  if (debounceId) clearTimeout(debounceId);
  debounceId = setTimeout(function () {
    if (parallaxInstance && parallaxInstance) {
      // ParallaxFn() 的時候 要確保scrollbar 和 動畫 維持初始狀態
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden"; // 等待動畫跑到對的地方

      setTimeout(function () {
        document.body.style.overflow = "unset";
        parallaxInstance.clear();
        ParallaxFn();
      }, 1500);
    }
  }, 500);
}; //載入所有資源再進入場景


window.onload = function () {
  ParallaxFn();
  scrollEvent();
  window.addEventListener("scroll", function () {
    scrollEvent();
  });
  if (!isMobile) window.addEventListener("resize", function () {
    resizeDebounce();
  });
  setTimeout(function () {
    document.querySelector(".loadingAsset").classList.add("loadingAsset__loaded");
    ScrollTrigger.refresh();
  }, 500);
  document.querySelector(".container").classList.add("container__loaded");
};