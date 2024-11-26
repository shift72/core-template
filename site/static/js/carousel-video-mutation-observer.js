export default function carouselVideoPauseOnChange() {
  document.querySelectorAll('.s72-carousel-item').forEach(carousel_item => {
    let callback = (mutationsList, observer) => {
      mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          try {
            let video = carousel_item.querySelector('video');

            if (video) {
              if (carousel_item.classList.contains('current')) {
                video.play();
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
      childList: true,
      attributes: true,
    });
  });
}
