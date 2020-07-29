const loadingtransform = { y: -60, duration: 1, yoyo: true, repeat: 3, ease: "power1.inOut" };
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
TweenMax.to({}, 0.016, {
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

const loadingAsset = document.querySelector(".loadingAsset");
let canClick=false;
loadingAsset.addEventListener("click", (e) => {
  if(canClick){
    animationInit();
    document.querySelector(".container").classList.add("container__loaded");
    setTimeout(() => {
      loadingAsset.classList.add("loadingAsset__loaded");
    }, 100);
  }
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
  ParallaxFn();
  // scrollEvent();
  window.addEventListener("scroll", () => {
    scrollEvent();
  });
  if (!isMobile)
    window.addEventListener("resize", () => {
      resizeDebounce();
    });

  setTimeout(() => {
    // 因為如果是重新整理 有可能不在一開始的位置
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
    document.querySelector(".loadingAsset").classList.add("loadingAsset__clickable");
    canClick=true;
  }, 2500);
};
