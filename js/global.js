function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= -20 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) /*or $(window).height() */ &&
    rect.right <=
      (window.innerWidth || document.documentElement.clientWidth) + 20 /*or $(window).width() */
  );
}

const mouseHover = (className, callback = { mouseover: () => {}, mouseout: () => {} }) => {
  const targets = document.querySelectorAll(className);
  if (targets.length === 0) return;
  const { mouseover, mouseout } = callback;
  let mouseInEvent = null;

  targets.forEach((target) => {
    target.addEventListener("mouseover", () => {
      mouseInEvent = mouseover();
    });
    target.addEventListener("mouseout", () => {
      mouseInEvent.pause();
      mouseout();
    });
  });
};
