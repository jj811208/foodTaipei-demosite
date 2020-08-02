const loadingtransform = { y: -20, duration: 0.4, yoyo: true, repeat: 3, ease: "power1.inOut" };
const speed = ".2";
gsap
  .timeline({
    repeat: -1,
  })
  .to("#F", loadingtransform, 0)
  .to("#O", loadingtransform, `<+${speed}`)
  .to("#O-1", loadingtransform, `<+${speed}`)
  .to("#D", loadingtransform, `<+${speed}`)
  .to("#T", loadingtransform, `<+${speed}`)
  .to("#A", loadingtransform, `<+${speed}`)
  .to("#I", loadingtransform, `<+${speed}`)
  .to("#P", loadingtransform, `<+${speed}`)
  .to("#E", loadingtransform, `<+${speed}`)
  .to("#I-1", loadingtransform, `<+${speed}`);

let mouseX = 0;
let mouseY = 0;
const cursor = document.querySelector(".loadingAsset__cursor");
gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: () => {
    TweenMax.set(cursor, {
      css: {
        left: mouseX + 86,
        top: mouseY + 46,
      },
    });
  },
});
window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

let debounceId;
const resizeDebounce = () => {
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
      }, 1500); //等待動畫回到 0 0 的時間
    }
  }, 500); //debounce時間
};

//載入所有資源再進入場景
window.onload = function () {
  if (!isMobile)
    window.addEventListener("resize", () => {
      resizeDebounce();
    });

  setTimeout(() => {
    // 如果是重新整理 有可能不在一開始的位置
    document.querySelector('html').classList.add('loaded');
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();

    const loadingAsset = document.querySelector(".loadingAsset");
    loadingAsset.classList.add("loadingAsset__clickable");

    const loadedClickEvent = (e) => {
      window.addEventListener("scroll", () => {
        scrollEvent();
      });
      document.querySelector(".container").classList.add("container__loaded");
      setTimeout(() => {
        animationInit();
        menuInit();
        ParallaxFn();
        loadingAsset.classList.add("loadingAsset__loaded");
      }, 100);
      window.removeEventListener('scroll',loadedClickEvent);
    };

    window.addEventListener("scroll", loadedClickEvent);

    loadingAsset.addEventListener("click", loadedClickEvent);
  }, 500);
};

