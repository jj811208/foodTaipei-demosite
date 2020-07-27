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
  const targets = document.querySelectorAll(className);
  if (targets.length===0) return;
  const { mouseover, mouseout } = callback;
  let mouseInEvent = null;

  targets.forEach(target=>{
    console.log(123);
    target.addEventListener("mouseover", () => {
      mouseInEvent = mouseover();
    });
    target.addEventListener("mouseout", () => {
      mouseInEvent.pause();
      mouseout();
    });
  })
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
const a = gsap
  .timeline()
  .from(
    ".logo",
    {
      duration: 0.3,
      y: "-100%",
    },
    0.9
  )
  .from(".carton,.vegetableBasket,.cabinet,.fruitCabinet,.taiwanFishery", {
    duration: 0.4,
    transformOrigin: "bottom",
    scaleY: 0,
    stagger: 0.3,
    // ease: "elastic.out(1, 0.5)",
  });

//進場動畫
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
gsap.from(".mainTableItems", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "mainTableItems",
    start: "15% center",
  },
  duration: 1.7,
  transformOrigin: "bottom",
  scaleY: 0,
  ease: "elastic.out(1, 0.3)",
});
gsap.from(".poster", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "poster",
    start: "25% center",
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

gsap.from(".tv", {
  scrollTrigger: {
    trigger: ".scrollElement",
    id: "tv",
    start: "76% center",
  },
  duration: 1.7,
  transformOrigin: "top",
  scaleY: 0,
  ease: "elastic.out(0.2, 0.1)",
});
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
//常駐動畫
gsap.fromTo(".elsa", {
  scaleY: 1,
},{
  duration: 2.5,
  repeat: -1,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "bottom",
  scaleY: 1.03,
});
gsap.to(".ladderCarton", {
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "left bottom",
  rotate: "-10",
});
gsap.to(".ladderLeftHand", {
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "left bottom",
  rotate: "-10",
});
gsap.to(".ladderRightHand", {
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "left top",
  rotate: "-10",
});
gsap.to(".haoHand", {
  duration: 2,
  repeat: -1,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "45px 0px",
  rotate: "-10",
});
gsap.to(".grandmaHand", {
  duration: 1,
  repeat: -1,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "left bottom",
  rotate: "-6",
});
gsap.to(".ryanLeftHand", {
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "right top",
  rotate: "-10",
});
gsap.to(".ryanRightHand", {
  duration: 1,
  repeat: -1,
  delay: 0.4,
  yoyo: true,
  yoyoEase: "power2.inOut",
  transformOrigin: "right top",
  rotate: "-10",
});

//hover動畫
const ELSA = [".buttonVisitor,.elsa", ".elsa"];
const LADDER = [".buttonFactSheet,.ladder", ".ladder"];
const HAO = [".buttonExhibitor,.hao", ".hao"];
const MAINTABLEITEMS = [".buttonMNT,.mainitableItems", ".mainTableItems"];
const POSTER = [".buttonPC,.poster", ".poster"];
const GRANDMA = [".buttonEvents,.grandma", ".grandma"];
const TV = [".buttonSVG,.tv", ".tv"];
const RYAN = [".buttonPSR,.ryan", ".ryan"];
[ELSA, LADDER, HAO, MAINTABLEITEMS, POSTER, GRANDMA, TV, RYAN].forEach(
  ([hoverClassName, targetClassname]) => {
    mouseHover(hoverClassName, {
      mouseover: () => {
        return gsap.fromTo(targetClassname, ...hoverIn);
      },
      mouseout: () => {
        gsap.to(targetClassname, hoverOut);
      },
    });
  }
);

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

// 氣泡選單
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
    const fn = () => {
      if (isElementInViewport(button)) {
        if (button.style.opacity === 1) return;
        gsap.to(button, {
          opacity: 1,
          ease: "power2.out",
        });
      } else {
        if (button.style.opacity === 0) return;
        gsap.to(button, {
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
