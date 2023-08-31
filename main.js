const videos = document.querySelectorAll(".app");

videoController();

window.addEventListener("scroll", videoController);

function videoController() {
  videos.forEach((video) => {
    if (isCenterInViewport(video)) {
      video.children[0].children[0].play();
    } else {
      video.children[0].children[0].pause();
    }
  });
}

function isCenterInViewport(element) {
  const elementRect = element.getBoundingClientRect();
  const elementCenter = (elementRect.top + elementRect.bottom) / 2;
  const viewportHeight = window.innerHeight;

  return elementCenter >= 0 && elementCenter <= viewportHeight;
}
