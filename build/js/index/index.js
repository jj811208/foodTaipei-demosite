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
    yPercent: -100
  }, 0.4).from(".backend:not(.background):not(.ladder):not(.elsa):not(.poster):not(.buttonVisitor):not(.buttonFactSheet):not(.buttonExhibitor):not(.buttonMNT):not(.buttonPC):not(.buttonEvents):not(.buttonSVG):not(.buttonPSR):not(.window):not(.window-1)", {
    duration: 0.5,
    transformOrigin: "bottom",
    y: "1000px"
  }, "<+.5").from(".middle:not(.hao):not(.tv):not(.mainTableItems)", {
    duration: 0.5,
    transformOrigin: "bottom",
    y: "1000px"
  }, "<+.3").from(".front:not(.ribbon):not(.ribbon-1):not(.ribbon-2)", {
    duration: 0.5,
    transformOrigin: "bottom",
    y: "1000px"
  }, "<+.3").from(".ribbon,.ribbon-1,.ribbon-2", {
    duration: 0.5,
    transformOrigin: "top",
    scaleY: 0
  }).from(".elsa", {
    duration: ElsaDuration,
    scaleY: 0,
    transformOrigin: "bottom",
    ease: "elastic.out(1, 0.3)",
    onStart: function onStart() {
      setTimeout(scrollEvent, (ElsaDuration - 0.4) * 1000);
    }
  }, ElsaDelay).from(".ladder", {
    duration: 1.7,
    transformOrigin: "bottom",
    scaleY: 0,
    ease: "elastic.out(1, 0.3)"
  }, ElsaDelay).from(".hao", {
    duration: 1.7,
    transformOrigin: "bottom",
    scaleY: 0,
    ease: "elastic.out(1, 0.3)"
  }, ElsaDelay).from(".mainTableItems", {
    duration: 1.7,
    transformOrigin: "bottom",
    scaleY: 0,
    ease: "elastic.out(1, 0.3)"
  }, ElsaDelay); //進場動畫
  // gsap.from(".ladder", {
  //   duration: 1.7,
  //   transformOrigin: "bottom",
  //   scaleY: 0,
  //   ease: "elastic.out(1, 0.3)",
  // });
  // gsap.from(".hao", {
  //   duration: 1.7,
  //   transformOrigin: "bottom",
  //   scaleY: 0,
  //   ease: "elastic.out(1, 0.3)",
  // });
  // gsap.from(".mainTableItems", {
  //   duration: 1.7,
  //   transformOrigin: "bottom",
  //   scaleY: 0,
  //   ease: "elastic.out(1, 0.3)",
  // });

  gsap.from(".poster", {
    scrollTrigger: {
      trigger: ".scrollElement",
      id: "poster",
      start: "15% center"
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
      start: "72% center"
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
    duration: 0.3,
    repeat: 1
  };
  gsap.timeline({
    repeat: -1
  }).to(".fishEye-1", _objectSpread({}, eyeAnimation, {
    scaleX: 0.01
  }), 0).to(".fishEye-2", _objectSpread({}, eyeAnimation, {
    scaleX: 0.01
  }), "<-".concat(gsap.utils.random(0, 2))).to(".fishEye-3", _objectSpread({}, eyeAnimation, {
    scaleX: 0.01
  }), "<-".concat(gsap.utils.random(0, 2))).to(".fishEye-4", _objectSpread({}, eyeAnimation, {
    scaleX: 0.01
  }), "<-".concat(gsap.utils.random(0, 2))).to(".fishEye-5", _objectSpread({}, eyeAnimation, {
    scaleX: 0.01
  }), "<-".concat(gsap.utils.random(0, 2))).to(".fishEye-6", _objectSpread({}, eyeAnimation, {
    scaleY: 0.01
  }), "<-.3").to(".fishEye-7", _objectSpread({}, eyeAnimation, {
    scaleY: 0.01
  }), "0").to(".fishEye-8", _objectSpread({}, eyeAnimation, {
    scaleY: 0.01
  }), "<-.9").to(".fishEye-9", _objectSpread({}, eyeAnimation, {
    scaleY: 0.01
  }), "0").to(".fishEye-10", _objectSpread({}, eyeAnimation, {
    scaleY: 0.01,
    duration: 0.1
  }), "<-.13").to(".fishEye-11", _objectSpread({}, eyeAnimation, {
    scaleY: 0.01,
    duration: 0.1
  }), "0");
  gsap.fromTo(".windowClouds", {
    translateX: 230
  }, {
    duration: 15.5,
    repeat: -1,
    translateX: -180
  });
  gsap.fromTo(".windowClouds-1", {
    translateX: 130
  }, {
    duration: 9.5,
    repeat: -1,
    translateX: -270
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
  gsap.timeline({
    repeat: -1,
    yoyo: true
  }).to(".haoHandContainer", {
    transformOrigin: "25% 0px",
    rotate: "-10",
    duration: 2,
    ease: "power2.inOut"
  }, 0);
  var pearlUpFunction = Power2.easeInOut;
  var pearlUpDuration = 2.4;
  var pearlDownFunction = Power2.easeInOut;
  var pearlDownDuration = 1.6;
  var pearlDelay = 0;
  gsap.timeline({
    repeat: -1,
    delay: pearlDelay
  }).to(".pearl-1", {
    xPercent: -16,
    yPercent: 340,
    duration: pearlUpDuration,
    ease: pearlDownFunction
  }, 0).to(".pearl-1", {
    xPercent: 0,
    yPercent: 0,
    duration: pearlDownDuration,
    ease: pearlUpFunction
  });
  gsap.timeline({
    repeat: -1,
    delay: pearlDelay
  }).to(".pearl-2", {
    xPercent: -90,
    yPercent: 430,
    duration: pearlUpDuration,
    ease: pearlDownFunction
  }, 0).to(".pearl-2", {
    xPercent: 0,
    yPercent: 0,
    duration: pearlDownDuration,
    ease: pearlUpFunction
  });
  gsap.timeline({
    repeat: -1,
    delay: pearlDelay
  }).to(".pearl-3", {
    xPercent: -210,
    yPercent: 380,
    duration: pearlUpDuration,
    ease: pearlDownFunction
  }, 0).to(".pearl-3", {
    xPercent: 0,
    yPercent: 0,
    duration: pearlDownDuration,
    ease: pearlUpFunction
  });
  gsap.timeline({
    repeat: -1,
    delay: pearlDelay
  }).to(".pearl-4", {
    xPercent: -234,
    yPercent: 100,
    duration: pearlUpDuration,
    ease: pearlDownFunction
  }, 0).to(".pearl-4", {
    xPercent: 0,
    yPercent: 0,
    duration: pearlDownDuration,
    ease: pearlUpFunction
  });
  gsap.timeline({
    repeat: -1,
    delay: pearlDelay
  }).to(".pearl-5", {
    xPercent: -110,
    yPercent: 350,
    duration: pearlUpDuration,
    ease: pearlDownFunction
  }, 0).to(".pearl-5", {
    xPercent: 0,
    yPercent: 0,
    duration: pearlDownDuration,
    ease: pearlUpFunction
  });
  gsap.timeline({
    repeat: -1,
    delay: pearlDelay
  }).to(".pearl-6", {
    xPercent: -200,
    yPercent: 256,
    duration: pearlUpDuration,
    ease: pearlDownFunction
  }, 0).to(".pearl-6", {
    xPercent: 0,
    yPercent: 0,
    duration: pearlDownDuration,
    ease: pearlUpFunction
  });
  gsap.timeline({
    repeat: -1,
    repeatDelay: 2
  }).to(".mainTableItemsLoudly", {
    duration: 0.01,
    repeat: 200,
    yoyo: true,
    transformOrigin: "right bottom",
    rotate: 2
  }, 0).from(".mainTableItemsVoice", {
    repeat: 1,
    duration: 0.4,
    opacity: 0,
    repeatDelay: 0.4
  }, 0).to(".mainTableItemsVoice", {
    opacity: 0
  });
  gsap.timeline({
    repeat: -1
  }).to(".poster", {
    duration: 0.2,
    yoyoEase: "power2.in",
    transformOrigin: "bottom",
    rotate: -5
  }).to(".poster", {
    duration: 0.2,
    repeat: 1,
    yoyo: true,
    yoyoEase: Linear.easeNone,
    transformOrigin: "bottom",
    rotate: 5
  }).to(".poster", {
    duration: 0.2,
    yoyoEase: "power2.out",
    transformOrigin: "bottom",
    rotate: 0
  }).to(".poster", {
    duration: 2.3
  });
  gsap.timeline({
    repeat: -1,
    delay: 1.2
  }).to(".tv", {
    duration: 0.2,
    yoyoEase: "power2.in",
    transformOrigin: "top",
    rotate: -0.8
  }).to(".tv", {
    duration: 0.2,
    repeat: 1,
    yoyo: true,
    yoyoEase: Linear.easeNone,
    transformOrigin: "top",
    rotate: 0.8
  }).to(".tv", {
    duration: 0.2,
    yoyoEase: "power2.out",
    transformOrigin: "top",
    rotate: 0
  }).to(".poster", {
    duration: 2.3
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
  var MAINTABLEITEMSSTAR = [".buttonMNT,.mainTableItemsStar", ".mainTableItemsStar"];
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
  [ELSA, LADDER, HAO, MAINTABLEITEMSSTAR, POSTER, GRANDMA, TV, RYAN].forEach(function (_ref) {
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
  });
  var BV = ".buttonVisitor";
  var BF = ".buttonFactSheet";
  var BE = ".buttonExhibitor";
  var BMNT = ".buttonMNT";
  var BPC = ".buttonPC";
  var BEV = ".buttonEvents";
  var BSVG = ".buttonSVG";
  var BPSR = ".buttonPSR";
  [BV, BF, BE, BMNT, BPC, BEV, BSVG, BPSR].forEach(function (className) {
    mouseHover(className, {
      mouseover: function mouseover() {
        return gsap.to(className, {
          scale: 1.1,
          duration: 0.2
        });
      },
      mouseout: function mouseout() {
        gsap.to(className, {
          scale: 1,
          duration: 0.2
        });
      }
    });
  });
} // 滾動視差  因為 resize 後要清掉，然後重新計算 container 的 x，所以要存在一個變數，方便 resize 清理


var containerDOM = document.querySelector(".container");
var parallaxInstance = undefined;

var ParallaxFn = function ParallaxFn() {
  parallaxInstance = gsap.timeline({
    scrollTrigger: {
      trigger: ".scrollElement",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.1
    }
  }).to(".container", {
    xPercent: function xPercent(_, dom) {
      var percent = (dom.offsetWidth - window.innerWidth) / dom.offsetWidth * 100;
      return -percent;
    }
  }, 0).to(".backend", {
    x: function x() {
      var delta = containerDOM.offsetHeight / 10.32;
      return delta;
    } //"50px",

  }, 0).to(".ryan, .wineCabinet", {
    xPercent: -5
  }, 0).to(".grandma", {
    xPercent: -60
  }, 0).to(".buttonEvents", {
    xPercent: window.innerWidth > 600 ? -280 : -180
  }, 0).to(".front", {
    x: function x() {
      var delta = containerDOM.offsetHeight / -5.16;
      return delta;
    } //"-100px",

  }, 0).to(".richman", window.innerWidth > 600 // || window.innerWidth / window.innerHeight > 360 / 620 //這些數字要和 css 的和 min-height ratio 一樣
  ? {
    xPercent: 200
  } : {
    x: function x() {
      var delta = document.querySelector(".container").offsetWidth - window.innerWidth;
      return delta;
    }
  }, 0).to(".supportingRole", {
    xPercent: -130
  }, 0); // 購物動畫

  gsap.to(".noodles,.chocolate,.crab,.avocado,.wine,.juice", {
    duration: 0.0001,
    opacity: 0
  }); //1017

  var to = {
    ease: Linear.easeNone,
    yPercent: 0,
    xPercent: 0,
    rotate: 0,
    scale: 1
  };
  ScrollTrigger.matchMedia({
    // rwd   and (max-aspect-ratio: 360/620)
    "(max-width: 600px)": function maxWidth600px() {
      gsap.fromTo(".noodles", {
        yPercent: -526,
        xPercent: 190,
        rotate: 50,
        scale: 0.8
      }, _objectSpread({
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "20% center",
          end: "26% center",
          scrub: 0.01
        },
        onStart: function onStart() {
          document.querySelectorAll(".noodles").forEach(function (n) {
            n.style.opacity = 1;
          });
          document.querySelector(".noodles-o").style.opacity = 0;
        },
        onReverseComplete: function onReverseComplete() {
          document.querySelectorAll(".noodles").forEach(function (n) {
            n.style.opacity = 0;
          });
          document.querySelector(".noodles-o").style.opacity = 1;
        }
      }, to));
      gsap.timeline({
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "27% center",
          end: "32% center",
          scrub: 0.01
        },
        onStart: function onStart() {
          document.querySelectorAll(".crab").forEach(function (c) {
            c.style.opacity = 1;
          });
          document.querySelector(".crab-o").style.opacity = 0;
        },
        onReverseComplete: function onReverseComplete() {
          document.querySelectorAll(".crab").forEach(function (c) {
            c.style.opacity = 0;
          });
          document.querySelector(".crab-o").style.opacity = 1;
        }
      }).fromTo(".crab", {
        yPercent: 40.06,
        xPercent: -24.695,
        rotate: -360
      }, _objectSpread({}, to, {
        xPercent: -10,
        yPercent: -60,
        rotate: -100
      })).to(".crab", to);
      gsap.timeline({
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "39% center",
          end: "46% center",
          scrub: 0.01
        },
        onStart: function onStart() {
          document.querySelectorAll(".chocolate").forEach(function (c) {
            c.style.opacity = 1;
          });
          document.querySelector(".chocolate").style.opacity = 1;
          document.querySelector(".chocolate-o").style.opacity = 0;
        },
        onReverseComplete: function onReverseComplete() {
          document.querySelectorAll(".chocolate").forEach(function (c) {
            c.style.opacity = 0;
          });
          document.querySelector(".chocolate").style.opacity = 0;
          document.querySelector(".chocolate-o").style.opacity = 1;
        }
      }).fromTo(".chocolate", {
        yPercent: -455.337,
        xPercent: -22.62,
        rotate: -15,
        scale: 0.95
      }, _objectSpread({}, to));
      gsap.timeline({
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "47% center",
          end: "53% center",
          scrub: 0.01
        },
        onStart: function onStart() {
          document.querySelectorAll(".juice").forEach(function (j) {
            j.style.opacity = 1;
          });
          document.querySelector(".juice-o").style.opacity = 0;
        },
        onReverseComplete: function onReverseComplete() {
          document.querySelectorAll(".juice").forEach(function (j) {
            j.style.opacity = 0;
          });
          document.querySelector(".juice-o").style.opacity = 1;
        }
      }).fromTo(".juice", {
        yPercent: -179,
        xPercent: 9,
        rotate: -23,
        scale: 0.65
      }, _objectSpread({}, to));
      gsap.timeline({
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "53% center",
          end: "59% center",
          scrub: 0.01
        },
        onStart: function onStart() {
          document.querySelectorAll(".avocado").forEach(function (a) {
            a.style.opacity = 1;
          });
          document.querySelector(".avocado-o").style.opacity = 0;
        },
        onReverseComplete: function onReverseComplete() {
          document.querySelectorAll(".avocado").forEach(function (a) {
            a.style.opacity = 0;
          });
          document.querySelector(".avocado-o").style.opacity = 1;
        }
      }).fromTo(".avocado", {
        yPercent: -128.445,
        xPercent: 107.32,
        rotate: 10,
        scale: 0.8
      }, _objectSpread({}, to)).to(".avocado", to);
      gsap.timeline({
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "60% center",
          end: "66% center",
          scrub: 0.01
        },
        onStart: function onStart() {
          document.querySelectorAll(".wine").forEach(function (w) {
            w.style.opacity = 1;
          });
          document.querySelector(".wine-o").style.opacity = 0;
        },
        onReverseComplete: function onReverseComplete() {
          document.querySelectorAll(".wine").forEach(function (w) {
            w.style.opacity = 0;
          });
          document.querySelector(".wine-o").style.opacity = 1;
        }
      }).fromTo(".wine", {
        yPercent: -7.168,
        xPercent: 170.395,
        rotate: 25,
        scale: 0.8
      }, _objectSpread({}, to, {
        xPercent: 130,
        yPercent: -14,
        rotate: 16
      })).to(".wine", to);
    },
    // desktop    or (min-aspect-ratio: 360/621)
    "(min-width: 601px)": function minWidth601px() {
      gsap.fromTo(".noodles", {
        yPercent: -486,
        xPercent: -5,
        rotate: 50,
        scale: 0.65
      }, _objectSpread({
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "10% center",
          end: "16% center",
          scrub: 0.01
        },
        onStart: function onStart() {
          document.querySelectorAll(".noodles").forEach(function (n) {
            n.style.opacity = 1;
          });
          document.querySelector(".noodles-o").style.opacity = 0;
        },
        onReverseComplete: function onReverseComplete() {
          document.querySelectorAll(".noodles").forEach(function (n) {
            n.style.opacity = 0;
          });
          document.querySelector(".noodles-o").style.opacity = 1;
        }
      }, to));
      gsap.timeline({
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "17% center",
          end: "27% center",
          scrub: 0.01
        },
        onStart: function onStart() {
          document.querySelectorAll(".crab").forEach(function (c) {
            c.style.opacity = 1;
          });
          document.querySelector(".crab-o").style.opacity = 0;
        },
        onReverseComplete: function onReverseComplete() {
          document.querySelectorAll(".crab").forEach(function (c) {
            c.style.opacity = 0;
          });
          document.querySelector(".crab-o").style.opacity = 1;
        }
      }).fromTo(".crab", {
        yPercent: 40.06,
        xPercent: -84.695,
        rotate: -360
      }, _objectSpread({}, to, {
        xPercent: -10,
        yPercent: -60,
        rotate: -100
      })).to(".crab", to);
      gsap.timeline({
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "25% center",
          end: "31% center",
          scrub: 0.01
        },
        onStart: function onStart() {
          document.querySelectorAll(".chocolate").forEach(function (c) {
            c.style.opacity = 1;
          });
          document.querySelector(".chocolate").style.opacity = 1;
          document.querySelector(".chocolate-o").style.opacity = 0;
        },
        onReverseComplete: function onReverseComplete() {
          document.querySelectorAll(".chocolate").forEach(function (c) {
            c.style.opacity = 0;
          });
          document.querySelector(".chocolate").style.opacity = 0;
          document.querySelector(".chocolate-o").style.opacity = 1;
        }
      }).fromTo(".chocolate", {
        yPercent: -363.337,
        xPercent: 132.62,
        rotate: -15,
        scale: 0.85
      }, _objectSpread({}, to, {
        yPercent: -80,
        xPercent: 40
      })).to(".chocolate", to);
      gsap.timeline({
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "35% center",
          end: "45% center",
          scrub: 0.01
        },
        onStart: function onStart() {
          document.querySelectorAll(".juice").forEach(function (j) {
            j.style.opacity = 1;
          });
          document.querySelector(".juice-o").style.opacity = 0;
        },
        onReverseComplete: function onReverseComplete() {
          document.querySelectorAll(".juice").forEach(function (j) {
            j.style.opacity = 0;
          });
          document.querySelector(".juice-o").style.opacity = 1;
        }
      }).fromTo(".juice", {
        yPercent: -179,
        xPercent: 190,
        rotate: -23,
        scale: 0.5
      }, _objectSpread({}, to, {
        yPercent: -70,
        xPercent: 100
      })).to(".juice", to);
      gsap.timeline({
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "60% center",
          end: "68% center",
          scrub: 0.01
        },
        onStart: function onStart() {
          document.querySelectorAll(".avocado").forEach(function (a) {
            a.style.opacity = 1;
          });
          document.querySelector(".avocado-o").style.opacity = 0;
        },
        onReverseComplete: function onReverseComplete() {
          document.querySelectorAll(".avocado").forEach(function (a) {
            a.style.opacity = 0;
          });
          document.querySelector(".avocado-o").style.opacity = 1;
        }
      }).fromTo(".avocado", {
        yPercent: -128.445,
        xPercent: 417.32,
        rotate: 50,
        scale: 0.65
      }, _objectSpread({}, to)).to(".avocado", to);
      gsap.timeline({
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "70% center",
          end: "76% center",
          scrub: 0.01
        },
        onStart: function onStart() {
          document.querySelectorAll(".wine").forEach(function (w) {
            w.style.opacity = 1;
          });
          document.querySelector(".wine-o").style.opacity = 0;
        },
        onReverseComplete: function onReverseComplete() {
          document.querySelectorAll(".wine").forEach(function (w) {
            w.style.opacity = 0;
          });
          document.querySelector(".wine-o").style.opacity = 1;
        }
      }).fromTo(".wine", {
        yPercent: -7.168,
        xPercent: 359.395,
        rotate: 25,
        scale: 0.8
      }, _objectSpread({}, to, {
        xPercent: 130,
        yPercent: -34,
        rotate: 16
      })).to(".wine", to);
    }
  });
}; // 氣泡選單


var buttonExhibitor = document.querySelector(".buttonExhibitor");
var buttonEvents = document.querySelector(".buttonEvents");
var buttonPSR = document.querySelector(".buttonPSR");
var buttonSVG = document.querySelector(".buttonSVG");
var buttonMNT = document.querySelector(".buttonMNT");
var buttonPC = document.querySelector(".buttonPC");
var buttonFactSheet = document.querySelector(".buttonFactSheet");
var buttonVisitor = document.querySelector(".buttonVisitor");
var buttonToLeft = document.querySelector(".toLeft");
[buttonExhibitor, buttonEvents, buttonPSR, buttonSVG, buttonMNT, buttonPC, buttonFactSheet, buttonVisitor, buttonToLeft].forEach(function (button) {
  gsap.to(button, {
    startAt: {
      opacity: 0,
      scale: 0.7
    }
  });
});

var scrollEvent = function scrollEvent() {
  [buttonExhibitor, buttonEvents, buttonPSR, buttonSVG, buttonMNT, buttonPC, buttonFactSheet, buttonVisitor].forEach(function (button) {
    if (isElementInViewport(button)) {
      if (button.style.opacity !== "0") return;
      gsap.to(button, {
        opacity: 1,
        scale: 1,
        ease: Back.easeOut.config(7)
      });
    } else {
      if (button.style.opacity !== "1") return;
      gsap.timeline().to(button, {
        opacity: 0
      }).to(button, {
        scale: 0.7,
        duration: 0.1
      });
    }
  });
  var ladder = document.querySelector(".ladder");

  if (isElementInViewport(ladder)) {
    if (buttonToLeft.style.opacity !== "0") return;
    gsap.timeline().to(buttonToLeft, {
      zIndex: 1
    }).to(buttonToLeft, {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut.config(7)
    });
  } else {
    if (buttonToLeft.style.opacity !== "1") return;
    gsap.timeline().to(buttonToLeft, {
      opacity: 0,
      zIndex: -2
    }).to(buttonToLeft, {
      scale: 0.7,
      duration: 0.1
    });
  }
};

function toLeft() {
  document.querySelector("html").scrollTo({
    behavior: "smooth",
    top: 0
  });
}