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
}
