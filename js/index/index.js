gsap.registerPlugin(ScrollTrigger);
const ElsaDelay = 2.7;
const ElsaDuration = 1.7;

function animationInit() {
  // 開場動畫
  gsap
    .timeline()
    .from(
      ".logo",
      {
        duration: 0.3,
        y: "-100%",
      },
      0.4
    )
    .from(
      ".backend:not(.background):not(.ladder):not(.elsa):not(.poster):not(.buttonVisitor):not(.buttonFactSheet):not(.buttonExhibitor):not(.buttonMNT):not(.buttonPC):not(.buttonEvents):not(.buttonSVG):not(.buttonPSR):not(.window):not(.window-1)",
      {
        duration: 0.5,
        transformOrigin: "bottom",
        scaleY: 0,
      },
      "<+.5"
    )
    .from(
      ".middle:not(.hao):not(.tv):not(.mainTableItems)",
      {
        duration: 0.5,
        transformOrigin: "bottom",
        scaleY: 0,
      },
      "<+.3"
    )
    .from(
      ".front:not(.ribbon):not(.ribbon-1):not(.ribbon-2)",
      {
        duration: 0.5,
        transformOrigin: "bottom",
        scaleY: 0,
      },
      "<+.3"
    )
    .from(".ribbon,.ribbon-1,.ribbon-2", {
      duration: 0.5,
      transformOrigin: "top",
      scaleY: 0,
    })
    .from(
      ".elsa",
      {
        duration: ElsaDuration,
        scaleY: 0,
        transformOrigin: "bottom",
        ease: "elastic.out(1, 0.3)",
      },
      ElsaDelay
    );

  //進場動畫
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
  gsap.fromTo(
    ".windowClouds",
    {
      translateX: 200,
    },
    {
      duration: 15.5,
      repeat: -1,
      translateX: -150,
    }
  );
  gsap.fromTo(
    ".windowClouds-1",
    {
      translateX: 100,
    },
    {
      duration: 9.5,
      repeat: -1,
      translateX: -240,
    }
  );
  setTimeout(() => {
    gsap.fromTo(
      ".elsa",
      {
        scaleY: 1,
      },
      {
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        yoyoEase: "power2.inOut",
        transformOrigin: "bottom",
        scaleY: 1.03,
      }
    );
  }, (ElsaDelay + ElsaDuration) * 1000);
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
  gsap
    .timeline({
      repeat: -1,
    })
    .to(".mainTableItemsLoudly", {
      duration: 1.5,
    })
    // .to(".mainTableItemsLoudly", {
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
      scaleY: 1,
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
}

//hover動畫
const ELSA = [".buttonVisitor,.elsa", ".elsa"];
const LADDER = [".buttonFactSheet,.ladder", ".ladder"];
const HAO = [".buttonExhibitor,.hao", ".hao"];
const MAINTABLEITEMS = [".buttonMNT,.mainTableItems", ".mainTableItems"];
const POSTER = [".buttonPC,.poster", ".poster"];
const GRANDMA = [".buttonEvents,.grandma", ".grandma"];
const TV = [".buttonSVG,.tv", ".tv"];
const RYAN = [".buttonPSR,.ryan", ".ryan"];
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
  gsap.to(button, {
    startAt: {
      opacity: 0,
    },
  });
});

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
