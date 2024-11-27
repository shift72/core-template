export default function carouselVideoPauseOnChange() {
  // load the first video
  let s = document.querySelector('.s72-carousel-item.current video source');
  if (s) {
    s.setAttribute('src', s.parentNode.getAttribute('data-src'));
    s.parentNode.load();
  }

  // watch all carousel items for class change
  document.querySelectorAll('.s72-carousel-item').forEach(carousel_item => {
    let callback = (mutationsList, observer) => {
      mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          try {
            let video = carousel_item.querySelector('video');
            // get video for carousel item and load / resume if current, else pause
            if (video) {
              if (carousel_item.classList.contains('current')) {
                let s = video.querySelector('source');
                if (s.getAttribute('src')) {
                  video.play();
                } else {
                  s.setAttribute('src', video.getAttribute('data-src'));
                  video.load();
                }
              } else {
                video.pause();
              }
            }
          } catch (error) {
            console.error(error);
          }
        }
      });
    };
    const observer = new MutationObserver(callback);
    observer.observe(carousel_item, {
      attributes: true,
    });
  });
}
