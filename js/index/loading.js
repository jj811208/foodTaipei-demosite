"use strict";

var loadingtransform = {
  y: -20,
  duration: 0.4,
  yoyo: true,
  repeat: 3,
  ease: "power1.inOut"
};
var speed = ".2";
gsap.timeline({
  repeat: -1
}).to("#F", loadingtransform, 0).to("#O", loadingtransform, "<+".concat(speed)).to("#O-1", loadingtransform, "<+".concat(speed)).to("#D", loadingtransform, "<+".concat(speed)).to("#T", loadingtransform, "<+".concat(speed)).to("#A", loadingtransform, "<+".concat(speed)).to("#I", loadingtransform, "<+".concat(speed)).to("#P", loadingtransform, "<+".concat(speed)).to("#E", loadingtransform, "<+".concat(speed)).to("#I-1", loadingtransform, "<+".concat(speed));
var mouseX = 0;
var mouseY = 0;
var cursor = document.querySelector(".loadingAsset__cursor");
gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function onRepeat() {
    TweenMax.set(cursor, {
      css: {
        left: mouseX + 86,
        top: mouseY + 46
      }
    });
  }
});
window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
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
      }, 2200); //等待動畫回到 0 0 的時間
    }
  }, 500); //debounce時間
}; //載入所有資源再進入場景


window.onload = function () {
  document.documentElement.style.setProperty("--vh", "".concat(window.innerHeight / 100, "px"));

  if (isMobile) {
    window.addEventListener("orientationchange", function () {
      setTimeout(function () {
        document.documentElement.style.setProperty("--vh", "".concat(window.innerHeight / 100, "px"));
      }, 100);
      resizeDebounce();
    });
  } else {
    window.addEventListener("resize", function () {
      document.documentElement.style.setProperty("--vh", "".concat(window.innerHeight / 100, "px"));
      resizeDebounce();
    });
  } // 如果是重新整理 有可能不在一開始的位置


  window.scrollTo(0, 0);
  ScrollTrigger.refresh();
  setTimeout(function () {
    document.querySelector("html").classList.add("loaded");
    var loadingAsset = document.querySelector(".loadingAsset");
    loadingAsset.classList.add("loadingAsset__clickable");

    var loadedClickEvent = function loadedClickEvent(e) {
      window.addEventListener("scroll", function () {
        scrollEvent();
      });
      document.querySelector(".container").classList.add("container__loaded");
      setTimeout(function () {
        animationInit();
        menuInit();
        ParallaxFn();
        loadingAsset.classList.add("loadingAsset__loaded");
      }, 100);
      window.removeEventListener("scroll", loadedClickEvent);
    };

    window.addEventListener("scroll", loadedClickEvent);
    loadingAsset.addEventListener("click", loadedClickEvent);
  }, 500);
};