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
        y: "1000px",
      },
      "<+.5"
    )
    .from(
      ".middle:not(.hao):not(.tv):not(.mainTableItems)",
      {
        duration: 0.5,
        transformOrigin: "bottom",
        y: "1000px",
      },
      "<+.3"
    )
    .from(
      ".front:not(.ribbon):not(.ribbon-1):not(.ribbon-2)",
      {
        duration: 0.5,
        transformOrigin: "bottom",
        y: "1000px",
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
    )
    .from(".ladder", {
      //   scrollTrigger: {
      //     trigger: ".scrollElement",
      //     id: "ladder",
      //     start: "8% center",
      //   },
      duration: 1.7,
      transformOrigin: "bottom",
      scaleY: 0,
      ease: "elastic.out(1, 0.3)",
    },ElsaDelay)
    .from(".hao", {
      // scrollTrigger: {
      //   trigger: ".scrollElement",
      //   id: "hao",
      //   start: "11% center",
      // },
      duration: 1.7,
      transformOrigin: "bottom",
      scaleY: 0,
      ease: "elastic.out(1, 0.3)",
    },ElsaDelay)
    .from(".mainTableItems", {
      // scrollTrigger: {
      //   trigger: ".scrollElement",
      //   id: "mainTableItems",
      //   start: "15% center",
      // },
      duration: 1.7,
      transformOrigin: "bottom",
      scaleY: 0,
      ease: "elastic.out(1, 0.3)",
    },ElsaDelay); 

  //進場動畫
  gsap.from(".ladder", {
    //   scrollTrigger: {
    //     trigger: ".scrollElement",
    //     id: "ladder",
    //     start: "8% center",
    //   },
    duration: 1.7,
    transformOrigin: "bottom",
    scaleY: 0,
    ease: "elastic.out(1, 0.3)",
  });
  gsap.from(".hao", {
    // scrollTrigger: {
    //   trigger: ".scrollElement",
    //   id: "hao",
    //   start: "11% center",
    // },
    duration: 1.7,
    transformOrigin: "bottom",
    scaleY: 0,
    ease: "elastic.out(1, 0.3)",
  });
  gsap.from(".mainTableItems", {
    // scrollTrigger: {
    //   trigger: ".scrollElement",
    //   id: "mainTableItems",
    //   start: "15% center",
    // },
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
  const eyeAnimation = {
    yoyo: true,
    duration: 0.3,
    repeat: 1,
  };
  gsap
    .timeline({
      repeat: -1,
    })
    .to(
      ".fishEye-1",
      {
        ...eyeAnimation,
        scaleX: 0.01,
      },
      0
    )
    .to(
      ".fishEye-2",
      {
        ...eyeAnimation,
        scaleX: 0.01,
      },
      `<-${gsap.utils.random(0, 2)}`
    )
    .to(
      ".fishEye-3",
      {
        ...eyeAnimation,
        scaleX: 0.01,
      },
      `<-${gsap.utils.random(0, 2)}`
    )
    .to(
      ".fishEye-4",
      {
        ...eyeAnimation,
        scaleX: 0.01,
      },
      `<-${gsap.utils.random(0, 2)}`
    )
    .to(
      ".fishEye-5",
      {
        ...eyeAnimation,
        scaleX: 0.01,
      },
      `<-${gsap.utils.random(0, 2)}`
    )
    .to(
      ".fishEye-6",
      {
        ...eyeAnimation,
        scaleY: 0.01,
      },
      "<-.3"
    )
    .to(
      ".fishEye-7",
      {
        ...eyeAnimation,
        scaleY: 0.01,
      },
      "0"
    )
    .to(
      ".fishEye-8",
      {
        ...eyeAnimation,
        scaleY: 0.01,
      },
      "<-.9"
    )
    .to(
      ".fishEye-9",
      {
        ...eyeAnimation,
        scaleY: 0.01,
      },
      "0"
    )
    .to(
      ".fishEye-10",
      {
        ...eyeAnimation,
        scaleY: 0.01,
        duration: 0.1,
      },
      "<-.13"
    )
    .to(
      ".fishEye-11",
      {
        ...eyeAnimation,
        scaleY: 0.01,
        duration: 0.1,
      },
      "0"
    );
  gsap.fromTo(
    ".windowClouds",
    {
      translateX: 230,
    },
    {
      duration: 15.5,
      repeat: -1,
      translateX: -180,
    }
  );
  gsap.fromTo(
    ".windowClouds-1",
    {
      translateX: 130,
    },
    {
      duration: 9.5,
      repeat: -1,
      translateX: -270,
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

  //hover動畫
  const ELSA = [".buttonVisitor,.elsa", ".elsa"];
  const LADDER = [".buttonFactSheet,.ladder", ".ladder"];
  const HAO = [".buttonExhibitor,.hao", ".hao"];
  const MAINTABLEITEMSSTAR = [".buttonMNT,.mainTableItemsStar", ".mainTableItemsStar"];
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
  [ELSA, LADDER, HAO, MAINTABLEITEMSSTAR, POSTER, GRANDMA, TV, RYAN].forEach(
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
}

// 滾動視差  因為 resize 後要清掉，然後重新計算 container 的 x，所以要存在一個變數，方便 resize 清理
const containerDOM = document.querySelector(".container");
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
        x: (_, dom) => {
          const percent = ((dom.offsetWidth - window.innerWidth) / dom.offsetWidth) * 100;
          return `-${percent}%`;
        },
      },
      0
    )
    .to(
      ".backend",
      {
        x: () => {
          const delta = containerDOM.offsetHeight / 10.32;
          return delta;
        },
        //"50px",
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
        x: () => {
          const delta = containerDOM.offsetHeight / -5.16;
          return delta;
        }, //"-100px",
      },
      0
    )
    .to(
      ".richman",
      {
        x: "152%",
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

  // 購物動畫
  gsap.to(".noodles", {
    duration: 0.0001,
    opacity: 0,
  });
  gsap.to(".chocolate", {
    duration: 0.0001,
    opacity: 0,
  });
  gsap.to(".crab", {
    duration: 0.0001,
    opacity: 0,
  });
  gsap.to(".avocado", {
    duration: 0.0001,
    opacity: 0,
  });
  gsap.to(".wine", {
    duration: 0.0001,
    opacity: 0,
  });
  gsap.to(".juice", {
    duration: 0.0001,
    opacity: 0,
  });
  //1017
  gsap.fromTo(
    ".noodles",
    {
      yPercent: -482,
      xPercent: 50, //48.3,
      rotate: 50,
      scale: 0.65,
    },
    {
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "10% center",
        end: "16% center",
        scrub: 0.01,
      },
      onStart: () => {
        document.querySelector(".noodles").style.opacity = 1;
        document.querySelector(".noodles-o").style.opacity = 0;
      },
      onReverseComplete: () => {
        document.querySelector(".noodles").style.opacity = 0;
        document.querySelector(".noodles-o").style.opacity = 1;
      },
      ease: Linear.easeNone,
      yPercent: 0,
      xPercent: 0,
      rotate: 0,
      scale: 1,
    }
  );

  gsap.fromTo(
    ".crab",
    {
      yPercent: 40.06,
      xPercent: -24.695,
      rotate: -360,
    },
    {
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "17% center",
        end: "23% center",
        scrub: 0.01,
      },
      onStart: () => {
        document.querySelector(".crab").style.opacity = 1;
        document.querySelector(".crab-o").style.opacity = 0;
      },
      onReverseComplete: () => {
        document.querySelector(".crab").style.opacity = 0;
        document.querySelector(".crab-o").style.opacity = 1;
      },
      ease: Linear.easeNone,
      yPercent: 0,
      xPercent: 0,
      rotate: 0,
      scale: 1,
    }
  );
  gsap.fromTo(
    ".chocolate",
    {
      yPercent: -363.337,
      xPercent: 212.62, //48.3,
      rotate: -15,
      scale: 0.85,
    },
    {
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "25% center",
        end: "31% center",
        scrub: 0.01,
      },
      onStart: () => {
        document.querySelector(".chocolate").style.opacity = 1;
        document.querySelector(".chocolate-o").style.opacity = 0;
      },
      onReverseComplete: () => {
        document.querySelector(".chocolate").style.opacity = 0;
        document.querySelector(".chocolate-o").style.opacity = 1;
      },
      ease: Linear.easeNone,
      yPercent: 0,
      xPercent: 0,
      rotate: 0,
      scale: 1,
    }
  );
  gsap.fromTo(
    ".juice",
    {
      yPercent: -179,
      xPercent: 419, //48.3,
      rotate: -23,
      scale: 0.5,
    },
    {
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "35% center",
        end: "41% center",
        scrub: 0.01,
      },
      onStart: () => {
        document.querySelector(".juice").style.opacity = 1;
        document.querySelector(".juice-o").style.opacity = 0;
      },
      onReverseComplete: () => {
        document.querySelector(".juice").style.opacity = 0;
        document.querySelector(".juice-o").style.opacity = 1;
      },
      ease: Linear.easeNone,
      yPercent: 0,
      xPercent: 0,
      rotate: 0,
      scale: 1,
    }
  );
  gsap.fromTo(
    ".avocado",
    {
      yPercent: -128.445,
      xPercent: 417.32, //48.3,
      rotate: 50,
      scale: 0.65,
    },
    {
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "47% center",
        end: "53% center",
        scrub: 0.01,
      },
      onStart: () => {
        document.querySelector(".avocado").style.opacity = 1;
        document.querySelector(".avocado-o").style.opacity = 0;
      },
      onReverseComplete: () => {
        document.querySelector(".avocado").style.opacity = 0;
        document.querySelector(".avocado-o").style.opacity = 1;
      },
      ease: Linear.easeNone,
      yPercent: 0,
      xPercent: 0,
      rotate: 0,
      scale: 1,
    }
  );
  gsap.fromTo(
    ".wine",
    {
      yPercent: -7.168,
      xPercent: 359.395, //48.3,
      rotate: 25,
      scale: 0.8,
    },
    {
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "59% center",
        end: "65% center",
        scrub: 0.01,
      },
      onStart: () => {
        document.querySelector(".wine").style.opacity = 1;
        document.querySelector(".wine-o").style.opacity = 0;
      },
      onReverseComplete: () => {
        document.querySelector(".wine").style.opacity = 0;
        document.querySelector(".wine-o").style.opacity = 1;
      },
      ease: Linear.easeNone,
      yPercent: 0,
      xPercent: 0,
      rotate: 0,
      scale: 1,
    }
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
