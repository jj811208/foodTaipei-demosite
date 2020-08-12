"use strict";

var menuLink = {
  FactSheetLink: "https://google.com",
  FactSheetLinkChinese: "https://yahoo.com.tw",
  SVGLink: "https://google.com",
  SVGLinkChinese: "https://yahoo.com.tw",
  ExhibitorLink: "https://google.com",
  ExhibitorLinkChinese: "https://yahoo.com.tw",
  VisitorLink: "https://google.com",
  VisitorLinkChinese: "https://yahoo.com.tw",
  PCLink: "https://google.com",
  PCLinkChinese: "https://yahoo.com.tw",
  MNTLink: "https://google.com",
  MNTLinkChinese: "https://yahoo.com.tw",
  EventsLink: "https://google.com",
  EventsLinkChinese: "https://yahoo.com.tw",
  PSRLink: "https://google.com",
  PSRLinkChinese: "https://yahoo.com.tw"
};

function menuInit() {
  var menuDOM = document.querySelector(".menu__container");
  menuDOM.addEventListener("click", function () {
    menuDOM.classList.toggle("menu--active");
  });
  var menuAnime = gsap.timeline({
    repeat: -1,
    duration: 2,
    repeatDelay: 2
  }).to(".menu #topB", {
    ease: Power2.easeOut,
    yPercent: -20,
    duration: 0.8
  }, 0).to(".menu #bottomB", {
    ease: Power2.easeOut,
    yPercent: 40,
    duration: 0.8
  }, 0).to(".menu #topB,.menu #bottomB", {
    ease: Elastic.easeOut.config(1.5, 0.2),
    yPercent: 0,
    duration: 1.2
  }, 0.8);
  mouseHover(".menu", {
    mouseover: function mouseover() {
      if (window.innerWidth > 600) {
        menuAnime.pause();
        return gsap.to(".menu svg", {
          yPercent: -12,
          duration: 0.2
        });
      }
    },
    mouseout: function mouseout() {
      if (window.innerWidth > 600) {
        menuAnime.play();
        gsap.to(".menu svg", {
          yPercent: 0,
          duration: 0.2
        });
      }
    }
  });
}

function langSwitch() {
  document.querySelector("html").classList.toggle("english");
  document.querySelector("html").classList.toggle("chinese");
  ["FactSheetLink", "SVGLink", "ExhibitorLink", "VisitorLink", "PCLink", "MNTLink", "EventsLink", "PSRLink"].forEach(function (className) {
    var aTags = document.querySelectorAll("a.".concat(className));

    if (document.querySelector("html").classList.contains("english")) {
      aTags.forEach(function (aTag) {
        aTag.setAttribute("href", menuLink[className]);
      });
    } else {
      aTags.forEach(function (aTag) {
        aTag.setAttribute("href", menuLink["".concat(className, "Chinese")]);
      });
    }
  });
}