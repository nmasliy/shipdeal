const videoParent = document.querySelector('.video__box');

if (videoParent) {
  const videoElement = videoParent.querySelector('video');
  const videoBtn = videoParent.querySelector('.video__play-btn');

  videoParent.addEventListener('click', playVideo);
  videoBtn.addEventListener('click', playVideo);

  function playVideo() {
    if (!videoParent.classList.contains('is-active')) {
      videoElement.play();
      videoElement.controls = true;
      videoParent.classList.add('is-active');
    }
  }
}

