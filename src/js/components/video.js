const videoParent = document.querySelector('.video__box');

if (videoParent) {
  const videoElement = videoParent.querySelector('video');
  const videoBtn = videoParent.querySelector('.video__play-btn');

  videoBtn.addEventListener('click', function() {
    videoElement.play();
    videoElement.controls = true;
    videoParent.classList.add('is-active');
  })

}

