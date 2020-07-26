function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 40 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) /*or $(window).height() */ &&
    rect.right <=
      (window.innerWidth || document.documentElement.clientWidth) + 20 /*or $(window).width() */
  );
}

const mouseHover = (className, callback = { mouseover: () => {}, mouseout: () => {} }) => {
  const target = document.querySelector(className);
  if (!target) return;
  const { mouseover, mouseout } = callback;
  let mouseInEvent = null;
  target.addEventListener("mouseover", () => {
    mouseInEvent = mouseover();
  });
  target.addEventListener("mouseout", () => {
    mouseInEvent.pause();
    mouseout();
  });
};
const hoverIn = [
  {
    rotate: 2,
  },
  {
    duration: 0.2,
    repeat: -1,
    yoyo: true,
    yoyoEase: "power1.inOut",
    transformOrigin: "bottom center",
    rotate: -2,
  },
];
const hoverOut = {
  duration: 0.3,
  yoyoEase: "power2.inOut",
  transformOrigin: "bottom center",
  rotate: 0,
};

gsap.registerPlugin(ScrollTrigger);

// 開場動畫
const a = gsap.timeline().from(
  ".logo",
  {
    duration: 0.3,
    y: "-100%",
  },
  0.9
);
// .from(".carton,.vegetableBasket,.cabinet,.fruitCabinet,.taiwanFishery", {
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
    start: "66% center",
  },
  duration: 1.7,
  scaleY: 0,
  transformOrigin: "bottom",
  ease: "elastic.out(1, 0.3)",
});
gsap.from(".elsa", {
  duration: 1.7,
  scaleY: 0,
  delay: 1.2,
  transformOrigin: "bottom",
  ease: "elastic.out(1, 0.3)",
});
gsap.from(".ladder", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "ladder",
    start: "8% center",
  },
  duration: 1.7,
  transformOrigin: "bottom",
  scaleY: 0,
  ease: "elastic.out(1, 0.3)",
});
gsap.from(".grandma", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "grandma",
    start: "28% center",
  },
  duration: 1.7,
  transformOrigin: "bottom",
  scaleY: 0,
  ease: "elastic.out(1, 0.3)",
});
gsap.from(".hao", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "hao",
    start: "11% center",
  },
  duration: 1.7,
  transformOrigin: "bottom",
  scaleY: 0,
  ease: "elastic.out(1, 0.3)",
});

//常駐動畫
gsap.to(".haoHand", {
  duration: 2.3,
  repeat: -1,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "45px 0px",
  rotate: "-10",
  // ease: "elastic.out(1, 0.3)",
});

//hover動畫
const ELSA = ".elsa";
const LADDER = ".ladder";
const HAO = ".hao";
const MAINTABLEITEMS = ".mainTableItems";
const POSTER = ".poster";
const GRANDMA = ".grandma";
const TV = ".tv";
const RYAN = ".ryan";
[ELSA, LADDER, HAO, MAINTABLEITEMS, POSTER, GRANDMA, TV, RYAN].forEach((className) => {
  mouseHover(className, {
    mouseover: () => {
      return gsap.fromTo(className, ...hoverIn);
    },
    mouseout: () => {
      gsap.to(className, hoverOut);
    },
  });
});

// 購物動畫
gsap.from("#noodles", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "noodles",
    start: "10% center",
    end: "18% center",
    scrub: 1,
  },
  rotate: -180,
  opacity: 0,
  y: "-50%",
  x: "-10%",
});
gsap.from("#chocolate", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "chocolate",
    start: "24% center",
    end: "32% center",
    scrub: 1,
  },
  rotate: -180,
  opacity: 0,
  y: "-50%",
  x: "-10%",
});
gsap.from("#crab", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "crab",
    start: "38% center",
    end: "46% center",
    scrub: 1,
  },
  rotate: -180,
  opacity: 0,
  y: "-50%",
  x: "-10%",
});
gsap.from("#Avocado", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "Avocado",
    start: "52% center",
    end: "60% center",
    scrub: 1,
  },
  rotate: -180,
  opacity: 0,
  y: "-50%",
  x: "-10%",
});
gsap.from("#wine", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "wine",
    start: "66% center",
    end: "74% center",
    scrub: 1,
  },
  rotate: -180,
  opacity: 0,
  y: "-50%",
  x: "-10%",
});
gsap.from("#juice", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "juice",
    start: "80% center",
    end: "88% center",
    scrub: 1,
  },
  rotate: -180,
  opacity: 0,
  y: "-50%",
  x: "-10%",
});

// 氣泡選單
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
let parallaxInstance;
const ParallaxFn = () => {
  parallaxInstance = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
      },
    })
    .to(
      ".container",
      {
        x: (_, dom, __) => {
          const percent = ((dom.offsetWidth - window.innerWidth) / dom.offsetWidth) * 100;
          console.log(`-${percent}%`);
          return `-${percent}%`;
        },
        // left: "100%",
      },
      0
    )
    .to(
      ".backend",
      {
        x: "50px",
      },
      0
    )
    .to(
      ".ryan, .wineCabinet",
      {
        x: "-5%",
      },
      0
    )
    .to(
      ".grandma",
      {
        x: "-60%",
      },
      0
    )
    .to(
      ".buttonEvents",
      {
        x: "-280%",
      },
      0
    )
    .to(
      ".front",
      {
        x: "-100px",
      },
      0
    )
    .to(
      ".protagonistSvg",
      {
        x: 1136,
      },
      0
    )
    .to(
      ".supportingRole",
      {
        x: "-130%",
      },
      0
    );
};

const buttonExhibitor = document.querySelector(".buttonExhibitor");
const buttonEvents = document.querySelector(".buttonEvents");
const buttonPSR = document.querySelector(".buttonPSR");
const buttonSVG = document.querySelector(".buttonSVG");
const buttonMNT = document.querySelector(".buttonMNT");
const buttonPC = document.querySelector(".buttonPC");
const buttonFactSheet = document.querySelector(".buttonFactSheet");
const buttonVisitor = document.querySelector(".buttonVisitor");
const scrollEvent = () => {
  [
    buttonExhibitor,
    buttonEvents,
    buttonPSR,
    buttonSVG,
    buttonMNT,
    buttonPC,
    buttonFactSheet,
    buttonVisitor,
  ].forEach((button) => {
    const buttonClassName = `.${button.className}`;

    const fn = () => {
      if (isElementInViewport(button)) {
        if (button.style.opacity === 1) return;
        gsap.to(buttonClassName, {
          opacity: 1,
          ease: "power2.out",
        });
      } else {
        if (button.style.opacity === 0) return;
        gsap.to(buttonClassName, {
          opacity: 0,
          ease: "power2.out",
        });
      }
    };
    fn();
    setTimeout(fn, 1000);
  });
};

var debounceId;
var resizeDebounce = () => {
  if (debounceId) clearTimeout(debounceId);
  debounceId = setTimeout(() => {
    if (parallaxInstance && parallaxInstance) {
      // ParallaxFn() 的時候 要確保scrollbar 和 動畫 維持初始狀態
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";

      // 等待動畫跑到對的地方
      setTimeout(() => {
        document.body.style.overflow = "unset";
        parallaxInstance.clear();
        ParallaxFn();
      }, 1500);
    }
  }, 500);
};

//載入所有資源再進入場景
window.onload = function () {
  ParallaxFn();
  scrollEvent();
  window.addEventListener("scroll", () => {
    scrollEvent();
  });
  if (!isMobile)
    window.addEventListener("resize", () => {
      resizeDebounce();
    });

  setTimeout(() => {
    document.querySelector(".loadingAsset").classList.add("loadingAsset__loaded");
    ScrollTrigger.refresh();
  }, 500);
  document.querySelector(".container").classList.add("container__loaded");
};
