"use strict";

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
  var target = document.querySelector(className);
  if (!target) return;
  var mouseover = callback.mouseover,
      mouseout = callback.mouseout;
  var mouseInEvent = null;
  target.addEventListener("mouseover", function () {
    mouseInEvent = mouseover();
  });
  target.addEventListener("mouseout", function () {
    mouseInEvent.pause();
    mouseout();
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
}, 0.9); // .from(".carton,.vegetableBasket,.cabinet,.fruitCabinet,.taiwanFishery", {
//   duration: 0.8,
//   scaleY: 0,
//   stagger: 0.3,
//   // ease: "elastic.out(1, 0.5)",
// });
//進場動畫

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
});
gsap.from(".elsa", {
  duration: 1.7,
  scaleY: 0,
  delay: 1.2,
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
}); //常駐動畫

gsap.to(".haoHand", {
  duration: 2.3,
  repeat: -1,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "45px 0px",
  rotate: "-10" // ease: "elastic.out(1, 0.3)",

}); //hover動畫

var ELSA = ".elsa";
var LADDER = ".ladder";
var HAO = ".hao";
var MAINTABLEITEMS = ".mainTableItems";
var POSTER = ".poster";
var GRANDMA = ".grandma";
var TV = ".tv";
var RYAN = ".ryan";
[ELSA, LADDER, HAO, MAINTABLEITEMS, POSTER, GRANDMA, TV, RYAN].forEach(function (className) {
  mouseHover(className, {
    mouseover: function mouseover() {
      var _gsap;

      return (_gsap = gsap).fromTo.apply(_gsap, [className].concat(hoverIn));
    },
    mouseout: function mouseout() {
      gsap.to(className, hoverOut);
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
}); // 氣泡選單
// gsap.from("#noodles", {
//   scrollTrigger: {
//     trigger: ".scrollElement",
//     id: "noodles",
//     start: "10% center",
//     end: "18% center",
//     scrub: 1,
//   },
//   rotate:180,
//   opacity: 0,
//   y: "-50%",
//   x: "-10%",
// });
// 滾動視差  因為 resize 後要清掉，然後重新計算 container 的 x，所以要存在一個變數，方便 resize 清理

var parallaxInstance;

var ParallaxFn = function ParallaxFn() {
  parallaxInstance = gsap.timeline({
    scrollTrigger: {
      trigger: ".scrollElement",
      start: "top top",
      end: "bottom bottom",
      scrub: 1
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
};

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
    var buttonClassName = ".".concat(button.className);

    var fn = function fn() {
      if (isElementInViewport(button)) {
        if (button.style.opacity === 1) return;
        gsap.to(buttonClassName, {
          opacity: 1,
          ease: "power2.out"
        });
      } else {
        if (button.style.opacity === 0) return;
        gsap.to(buttonClassName, {
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
  window.addEventListener("resize", function () {
    resizeDebounce();
  });
  setTimeout(function () {
    document.querySelector(".loadingAsset").classList.add("loadingAsset__loaded");
    ScrollTrigger.refresh();
  }, 500);
  document.querySelector(".container").classList.add("container__loaded");
};