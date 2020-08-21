const menuLink = {
  IndexLink: "https://www.foodtaipei.com.tw/en_US/index.html",
  IndexLinkChinese: "https://www.foodtaipei.com.tw/zh_TW/index.html",
  FactSheetLink: "https://www.foodtaipei.com.tw/en/news/data-list/industry/index.html",
  FactSheetLinkChinese: "https://www.foodtaipei.com.tw/zh-tw/news/data-list/industry/index.html",
  TVLink: "https://www.taiwantradeshows.com.tw/en_US/index.html",
  TVLinkChinese: "https://www.taiwantradeshows.com.tw/en_US/index.html",
  SVGLink: "https://www.foodtaipei.com.tw/en/media/grid-list/index.html",
  SVGLinkChinese: "https://www.foodtaipei.com.tw/zh-tw/media/grid-list/index.html",
  ExhibitorLink: "https://www.foodtaipei.com.tw/en/exhibitor/index.html",
  ExhibitorLinkChinese: "https://www.foodtaipei.com.tw/zh-tw/exhibitor/index.html",
  VisitorLink: "https://www.foodtaipei.com.tw/en/visitor/index.html",
  VisitorLinkChinese: "https://www.foodtaipei.com.tw/zh-tw/visitor/index.html",
  PCLink: "https://www.foodtaipei.com.tw/en/product/grid-list/index.html",
  PCLinkChinese: "https://www.foodtaipei.com.tw/zh-tw/product/grid-list/index.html",
  MNTLink: "https://www.foodtaipei.com.tw/en/media/index.html",
  MNTLinkChinese: "https://www.foodtaipei.com.tw/zh-tw/media/index.html",
  EventsLink: "https://www.foodtaipei.com.tw/zh_TW/act/media/info.html?id=606C2D52ABD9B796",
  EventsLinkChinese: "https://www.foodtaipei.com.tw/zh_TW/act/media/info.html?id=606C2D52ABD9B796",
  PSRLink: "https://www.foodtaipei.com.tw/en/menu/19416ACD889F225FD0636733C6861689/info.html",
  PSRLinkChinese: "https://www.foodtaipei.com.tw/zh-tw/menu/005900A58DCBBB36D0636733C6861689/info.html",
};

function menuInit() {
  const menuDOM = document.querySelector(".menu__container");
  menuDOM.addEventListener("click", () => {
    menuDOM.classList.toggle("menu--active");
  });
  const menuAnime = gsap
    .timeline({
      repeat: -1,
      duration: 2,
      repeatDelay: 2,
    })
    .to(
      ".menu #topB",
      {
        ease: Power2.easeOut,
        yPercent: -20,
        duration: 0.8,
      },
      0
    )
    .to(
      ".menu #bottomB",
      {
        ease: Power2.easeOut,
        yPercent: 40,
        duration: 0.8,
      },
      0
    )
    .to(
      ".menu #topB,.menu #bottomB",
      {
        ease: Elastic.easeOut.config(1.5, 0.2),
        yPercent: 0,
        duration: 1.2,
      },
      0.8
    );
  mouseHover(".menu", {
    mouseover: () => {
      if (window.innerWidth > 600) {
        menuAnime.pause();
        return gsap.to(".menu svg", { yPercent: -12, duration: 0.2 });
      }
    },
    mouseout: () => {
      if (window.innerWidth > 600) {
        menuAnime.play();
        gsap.to(".menu svg", { yPercent: 0, duration: 0.2 });
      }
    },
  });
}

function langSwitch() {
  document.querySelector("html").classList.toggle("english");
  document.querySelector("html").classList.toggle("chinese");
  [
    "IndexLink",
    "FactSheetLink",
    "TVLink",
    "SVGLink",
    "ExhibitorLink",
    "VisitorLink",
    "PCLink",
    "MNTLink",
    "EventsLink",
    "PSRLink",
  ].forEach((className) => {
    const aTags = document.querySelectorAll(`a.${className}`);
    if (document.querySelector("html").classList.contains("english")) {
      aTags.forEach((aTag) => {
        aTag.setAttribute("href", menuLink[className]);
      });
    } else {
      aTags.forEach((aTag) => {
        aTag.setAttribute("href", menuLink[`${className}Chinese`]);
      });
    }
  });
}
