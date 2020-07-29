"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

gsap.registerPlugin(ScrollTrigger);
var ElsaDelay = 2.7;
var ElsaDuration = 1.7;

function animationInit() {
  // 開場動畫
  gsap.timeline().from(".logo", {
    duration: 0.3,
    y: "-100%"
  }, 0.4).from(".backend:not(.background):not(.ladder):not(.elsa):not(.poster):not(.buttonVisitor):not(.buttonFactSheet):not(.buttonExhibitor):not(.buttonMNT):not(.buttonPC):not(.buttonEvents):not(.buttonSVG):not(.buttonPSR):not(.window):not(.window-1)", {
    duration: 0.5,
    transformOrigin: "bottom",
    scaleY: 0
  }, "<+.5").from(".middle:not(.hao):not(.tv):not(.mainTableItems)", {
    duration: 0.5,
    transformOrigin: "bottom",
    scaleY: 0
  }, "<+.3").from(".front:not(.ribbon):not(.ribbon-1):not(.ribbon-2)", {
    duration: 0.5,
    transformOrigin: "bottom",
    scaleY: 0
  }, "<+.3").from(".ribbon,.ribbon-1,.ribbon-2", {
    duration: 0.5,
    transformOrigin: "top",
    scaleY: 0
  }).from(".elsa", {
    duration: ElsaDuration,
    scaleY: 0,
    transformOrigin: "bottom",
    ease: "elastic.out(1, 0.3)"
  }, ElsaDelay); //進場動畫

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

  var eyeAnimation = {
    yoyo: true,
    duration: 0.5,
    repeat: 1
  };
  gsap.timeline({
    repeat: -1
  }).to(".fishEye-1", _objectSpread({}, eyeAnimation, {
    scaleX: 0.01
  }), 0).to(".fishEye-2", _objectSpread({}, eyeAnimation, {
    scaleX: 0.01
  }), "<-.1").to(".fishEye-3", _objectSpread({}, eyeAnimation, {
    scaleX: 0.01
  }), "<-.1").to(".fishEye-4", _objectSpread({}, eyeAnimation, {
    scaleX: 0.01
  }), "<-.35").to(".fishEye-5", _objectSpread({}, eyeAnimation, {
    scaleX: 0.01
  }), "<-.3").to(".fishEye-6", _objectSpread({}, eyeAnimation, {
    scaleY: 0.01
  }), "<-.3").to(".fishEye-7", _objectSpread({}, eyeAnimation, {
    scaleY: 0.01
  }), "<-.3").to(".fishEye-8", _objectSpread({}, eyeAnimation, {
    scaleY: 0.01
  }), "<-.9").to(".fishEye-9", _objectSpread({}, eyeAnimation, {
    scaleY: 0.01
  }), "<-.33").to(".fishEye-10", _objectSpread({}, eyeAnimation, {
    scaleY: 0.01
  }), "<-.13").to(".fishEye-11", _objectSpread({}, eyeAnimation, {
    scaleY: 0.01
  }), "<-.23");
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
  gsap.timeline({
    repeat: -1
  }).to(".mainTableItemsLoudly", {
    duration: 1.5
  }) // .to(".mainTableItemsLoudly", {
  //   duration: 0.5,
  //   repeat: 3,
  //   yoyo: true,
  //   scale: 1.1,
  //   ease: "power2.out",
  //   transformOrigin: "right bottom",
  // });
  .to(".mainTableItemsLoudly", {
    duration: 0.01,
    repeat: 200,
    yoyo: true,
    transformOrigin: "right bottom",
    rotate: 2,
    scaleY: 1
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
  // 1280

  gsap.to(".noodles", {
    rotate: 49,
    scale: 0.67,
    y: -600,
    x: 240,
    duration: 0.001,
    opacity: 0
  });
  gsap.fromTo(".noodles", {
    rotate: 49,
    scale: 0.67,
    y: -600,
    x: 240,
    opacity: 1
  }, {
    scrollTrigger: {
      trigger: ".scrollElement",
      id: "noodles1",
      start: "0% top",
      end: "10% center",
      scrub: 0.001,
      markers: true
    },
    startAt: {
      rotate: 49,
      scale: 0.67,
      y: -600,
      x: 240
    },
    ease: Linear.easeNone,
    rotate: 49,
    scale: 0.67,
    y: -600,
    x: 82
  });
  gsap.fromTo(".noodles", {
    rotate: 49,
    scale: 0.67,
    y: -600,
    x: 82
  }, {
    scrollTrigger: {
      trigger: ".scrollElement",
      id: "noodles2",
      start: "10% center",
      end: "16% center",
      scrub: 0.01,
      markers: true
    },
    ease: Linear.easeNone,
    rotate: 0,
    scale: 1,
    // rotate: -180,
    y: 0,
    x: 0
  });
  gsap.from(".chocolate", {
    scrollTrigger: {
      trigger: ".scrollElement",
      id: "chocolate",
      start: "24% center",
      end: "32% center",
      scrub: 1
    },
    rotate: -180,
    y: -900,
    x: -300
  });
  gsap.from(".crab", {
    scrollTrigger: {
      trigger: ".scrollElement",
      id: "crab",
      start: "38% center",
      end: "46% center",
      scrub: 1
    },
    rotate: -180,
    y: -900,
    x: -300
  });
  gsap.from(".avocado", {
    scrollTrigger: {
      trigger: ".scrollElement",
      id: "avocado",
      start: "52% center",
      end: "60% center",
      scrub: 1
    },
    rotate: -180,
    y: -900,
    x: -300
  });
  gsap.from(".wine", {
    scrollTrigger: {
      trigger: ".scrollElement",
      id: "wine",
      start: "66% center",
      end: "74% center",
      scrub: 1
    },
    rotate: -180,
    y: -900,
    x: -300
  });
  gsap.from(".juice", {
    scrollTrigger: {
      trigger: ".scrollElement",
      id: "juice",
      start: "80% center",
      end: "88% center",
      scrub: 1
    },
    rotate: -180,
    y: -900,
    x: -300
  });
} // 滾動視差  因為 resize 後要清掉，然後重新計算 container 的 x，所以要存在一個變數，方便 resize 清理


var containerDOM = document.querySelector(".container");
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
    x: function x(_, dom) {
      var percent = (dom.offsetWidth - window.innerWidth) / dom.offsetWidth * 100;
      return "-".concat(percent, "%");
    }
  }, 0).to(".backend", {
    x: function x() {
      var delta = containerDOM.offsetHeight / 10.32;
      console.log(delta);
      return delta;
    } //"50px",

  }, 0).to(".ryan, .wineCabinet", {
    x: "-5%"
  }, 0).to(".grandma", {
    x: "-60%"
  }, 0).to(".buttonEvents", {
    x: "-280%"
  }, 0).to(".front", {
    x: function x() {
      var delta = containerDOM.offsetHeight / 5.16;
      console.log(delta);
      return -delta;
    } //"-100px",

  }, 0).to(".richman", {
    x: "152%"
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
[buttonExhibitor, buttonEvents, buttonPSR, buttonSVG, buttonMNT, buttonPC, buttonFactSheet, buttonVisitor].forEach(function (button) {
  gsap.to(button, {
    startAt: {
      opacity: 0
    }
  });
});

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