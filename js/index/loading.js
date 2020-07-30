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
      }, 1500); //等待動畫回到 0 0 的時間
    }
  }, 500); //debounce時間
}; //載入所有資源再進入場景


window.onload = function () {
  window.addEventListener("scroll", function () {
    scrollEvent();
  });
  if (!isMobile) window.addEventListener("resize", function () {
    resizeDebounce();
  });
  setTimeout(function () {
    // 因為如果是重新整理 有可能不在一開始的位置
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
    var loadingAsset = document.querySelector(".loadingAsset");
    loadingAsset.classList.add("loadingAsset__clickable");
    loadingAsset.addEventListener("click", function (e) {
      document.querySelector(".container").classList.add("container__loaded");
      setTimeout(function () {
        animationInit();
        menuInit();
        ParallaxFn();
        loadingAsset.classList.add("loadingAsset__loaded");
      }, 100);
    });
  }, 500);
}; //如果有兩個 一個在貨架上 一個在車裡 我只要去算 到某一點trigger的時候 把貨架上的隱藏起來 然後把車裡的顯示出來飛就好了 這樣我就只需要知道那一瞬間的點有中就好