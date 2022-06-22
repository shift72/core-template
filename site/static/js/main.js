import './modernizr-custom.js';
import './can-be-watched-button.component.js';

/*global Swiper, Modernizr, s72*/

let slideObservers = [];

function initializeWishlist() {
  let wishlist = document.querySelector('s72-userwishlist');
  if (!wishlist) return;
  let originalFunction = wishlist.classList.remove;
  wishlist.classList.remove = function (className) {
    if (className == 's72-hide') {
      // Hide this from view
      wishlist.style.opacity = '0';

      // Remove class
      originalFunction.apply(this, [className]);

      /* Convert this to a swiper */
      let containers = wishlist.getElementsByClassName('swiper-container');
      if (containers.length > 0) {
        let container = containers[0];
        let swiper = initializeSwiper(container, true);

        init(swiper);
        toggleButtons(container);
      }

      // Now show it
      wishlist.style.opacity = '1';
    } else {
      originalFunction.apply(this, [className]);
    }
  };
}

function initializeSwiper(element, force) {
  if (element.swiper) {
    if (force) {
      element.swiper.destroy();
    } else {
      return;
    }
  }

  let isTouchscreen = isTouchscreenEnabled();

  let defaultSlidesPerView = 8;
  let slidesPerView = {
    320: 2,
    568: 2,
    667: 2,
    768: 4,
    992: 4,
    1200: 4,
    1440: 6,
    1600: 6,
  };

  // Override some slider values specific sizes. Could potentially expand this for portrait vs. landscapes
  if (element.getAttribute('data-items-per-row')) {
    let itemsPerRow = element.getAttribute('data-items-per-row');
    let layout = element.getAttribute('data-layout');

    if (layout == 'portrait') {
      switch (itemsPerRow) {
      case '6':
        defaultSlidesPerView = 8;
        slidesPerView[1600] = 6;
        slidesPerView[1440] = 6;
        slidesPerView[1200] = 5;
        slidesPerView[992] = 4;
        slidesPerView[768] = 4;
        slidesPerView[667] = 3;
        slidesPerView[568] = 3;
        break;

      case '4':
        defaultSlidesPerView = 6;
        slidesPerView[1600] = 5;
        slidesPerView[1440] = 5;
        slidesPerView[1200] = 4;
        slidesPerView[992] = 3;
        slidesPerView[768] = 3;
        slidesPerView[667] = 3;
        slidesPerView[568] = 2;
        break;
      }
    } else if (layout == 'landscape') {
      switch (itemsPerRow) {
      case '4':
        defaultSlidesPerView = 5;
        slidesPerView[1600] = 4;
        slidesPerView[1440] = 4;
        slidesPerView[1200] = 3;
        slidesPerView[992] = 3;
        slidesPerView[768] = 3;
        slidesPerView[568] = 2;
        break;

      case '3':
        defaultSlidesPerView = 4;
        slidesPerView[1600] = 3;
        slidesPerView[1440] = 3;
        slidesPerView[1200] = 3;
        slidesPerView[992] = 2;
        slidesPerView[768] = 2;
        slidesPerView[568] = 2;
        break;
      }
    }
  }

  let swiper = new Swiper(element, {
    init: false,
    slidesPerView: defaultSlidesPerView,
    spaceBetween: 1,
    slidesPerGroup: 1, // leave this for infinite scrollings
    speed: 600,
    watchSlidesVisibility: true,

    breakpoints: {
      // when window width is <= 320px
      319: {
        slidesPerView: slidesPerView[320],
        spaceBetween: 2,
        slidesPerGroup: 1,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
      },
      // when window width is <= 480px
      567: {
        slidesPerView: slidesPerView[568],
        spaceBetween: 2,
        slidesPerGroup: isTouchscreen ? slidesPerView[568] : 1,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
      },
      // when window width is <= 640px
      666: {
        slidesPerView: slidesPerView[667],
        spaceBetween: 2,
        slidesPerGroup: isTouchscreen ? slidesPerView[667] : 1,
      },
      767: {
        slidesPerView: slidesPerView[768],
        spaceBetween: 2,
        slidesPerGroup: isTouchscreen ? slidesPerView[768] : 1,
      },
      991: {
        slidesPerView: slidesPerView[992],
        spaceBetween: 2,
        slidesPerGroup: isTouchscreen ? slidesPerView[992] : 1,
      },
      1199: {
        slidesPerView: slidesPerView[1200],
        spaceBetween: 2,
        slidesPerGroup: isTouchscreen ? slidesPerView[1200] : 1,
      },
      1439: {
        slidesPerView: slidesPerView[1440],
        spaceBetween: 2,
        slidesPerGroup: isTouchscreen ? slidesPerView[1440] : 1,
      },
      1599: {
        slidesPerView: slidesPerView[1600],
        spaceBetween: 2,
        slidesPerGroup: isTouchscreen ? slidesPerView[1600] : 1,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      init() {
        element.dispatchEvent(new Event('init'));
      },
      slideChangeTransitionEnd() {
        addAndRemoveSlides(element.swiper, true, true);
        toggleButtons(element);
      },
    },
  });

  element.buttons = {};

  initButton(
    element,
    element.closest('.swiper-wrapper-container').querySelector('.swiper-button-next'),
    1
  );
  initButton(
    element,
    element.closest('.swiper-wrapper-container').querySelector('.swiper-button-prev'),
    -1
  );

  return swiper;
}

function disableButton(button) {
  button.classList.add('swiper-button-disabled');
}

function enableButton(button) {
  button.classList.remove('swiper-button-disabled');
}

function toggleButtons(slider) {
  let currentIndex = slider.swiper.activeIndex;
  let slidesToTheLeft = currentIndex;
  let slidesPerView = slider.swiper.params.slidesPerView;
  let slidesLength = slider.swiper.slides.length;
  let lastVisibleIndex = currentIndex + slidesPerView;
  let slidesToTheRight = slidesLength - lastVisibleIndex;

  if (slidesToTheLeft == 0) {
    disableButton(slider.buttons.prev);
  } else {
    enableButton(slider.buttons.prev);
  }

  if (slidesToTheRight <= 0) {
    disableButton(slider.buttons.next);
  } else {
    enableButton(slider.buttons.next);
  }
}

function initButton(slider, button, velocity) {
  if (button) {
    button.classList.remove('s72-hide');
    // Clone the button so any pre-existing listeners are destroyed
    let buttonClone = button.cloneNode(true);
    button.parentNode.replaceChild(buttonClone, button);

    buttonClone.addEventListener('click', e => {
      e.preventDefault();
      if (velocity > 0) {
        addAndRemoveSlides(slider.swiper, true, false);
      } else {
        addAndRemoveSlides(slider.swiper, false, true);
      }
      slider.swiper.slideToLoop(
        slider.swiper.realIndex + slider.swiper.params.slidesPerView * velocity
      );
    });

    let direction = velocity > 0 ? 'next' : 'prev';
    slider.buttons[direction] = buttonClone;
  }
}

function getMatchingDuplicatedSlides(slider, link) {
  let result = [];

  if (!slider.destroyed) {
    Array.from(slider.el.querySelectorAll('.swiper-slide')).forEach(slide => {
      if (!slide.classList.contains('base')) {
        let thisLink = slide.querySelector('a.meta-item-link').getAttribute('href');
        if (link === thisLink) result.push(slide);
      }
    });
  }

  return result;
}

function init(slider) {
  slider.init();

  // Set up a mutation observer against each base slide, as it'll get redrawn as the components get rendered
  for (let x = 0; x < slider.slides.length; x++) {
    let slide = slider.slides[x];

    slide.classList.add('base');

    if (infiniteScrollEnabled(slider)) {
      let config = { subtree: true, childList: true };

      let observer = new MutationObserver(mutations => {
        for (let y = 0; y < mutations.length; y++) {
          let mutationRecord = mutations[y];

          // var href = mutationRecord.target.closest('a.meta-item-link').getAttribute('href');
          let thisSlide = mutationRecord.target.closest('.swiper-slide');
          if (thisSlide) {
            let thisLink = thisSlide.querySelector('a.meta-item-link').getAttribute('href');

            let duplicatedSlides = getMatchingDuplicatedSlides(slider, thisLink);

            Array.from(duplicatedSlides).forEach(dupe => {
              dupe.innerHTML = thisSlide.innerHTML;
            });
          }
        }
      });

      observer.observe(slide, config);

      slideObservers.push(observer);
    }
  }

  addAndRemoveSlides(slider);

  return true;
}

function infiniteScrollEnabled(slider) {
  if (!Modernizr.smil) return false; // i.e. is this IE11

  if (isTouchscreenEnabled()) return false; // i.e. is this a touchscreen device?

  let el = slider.el;

  if (el.getAttribute('disable-infinite-scroll') !== null) {
    return false;
  }

  let prev = el.buttons.prev;
  let next = el.buttons.next;

  // Only infinite scroll on desktop (i.e. when the next/prev buttons are visible)
  let buttonsVisible = (prev && prev.offsetHeight > 0) || (next && next.offsetHeight > 0);

  let screens = slider.slides.length / slider.params.slidesPerView;

  return buttonsVisible && screens > 1;
}

function addAndRemoveSlides(slider, append, prepend) {
  // This is a no-go
  if (!infiniteScrollEnabled(slider)) return;

  // Just in case something's gone horribly wrong
  if (slider.slides.length > 100) {
    return;
  }

  if (append) {
    let lastVisibleIndex = slider.activeIndex + slider.params.slidesPerView;
    let slidesToTheRight = slider.slides.length - lastVisibleIndex;

    if (slidesToTheRight <= slider.params.slidesPerView) {
      appendBaseSlides(slider);
    }
  }

  if (prepend) {
    if (slider.activeIndex <= slider.params.slidesPerView) {
      prependBaseSlides(slider);
    }
  }
}

function getBaseSlides(slider) {
  let result = Array.from(slider.el.querySelectorAll('.swiper-slide.base')).map(node => {
    return node.cloneNode(true);
  });

  Array.from(result).forEach(slide => {
    slide.classList.remove(
      'base',
      'swiper-slide-visible',
      'swiper-slide-active',
      'swiper-slide-next',
      'swiper-slide-prev'
    );
  });

  return result;
}

function appendBaseSlides(slider) {
  let baseSlides = getBaseSlides(slider).slice(0);
  slider.appendSlide(baseSlides);

  cullSlides(slider, 1);
}

function prependBaseSlides(slider) {
  // var baseSlides = getBaseSlides(slider).reverse().slice(0);
  let baseSlides = getBaseSlides(slider).reverse().slice(0);

  let currentIndex = slider.activeIndex;

  for (let i = 0; i < baseSlides.length; i++) {
    slider.prependSlide(baseSlides[i]);
  }
  slider.slideTo(currentIndex + baseSlides.length, 0);

  cullSlides(slider, -1);
}

// Get rid of the oldest N slides to the left of current
function cullSlides(slider, direction) {
  let baseSlides = getBaseSlides(slider);

  let indices = [];
  for (let index = 0; index < slider.slides.length; index++) {
    let slide = slider.slides[index];
    if (direction > 0) {
      if (index < slider.activeIndex && !slide.classList.contains('base')) {
        indices.push(index);
      }
    } else if (index > slider.activeIndex && !slide.classList.contains('base')) {
      indices.push(index);
    }
  }

  if (indices.length > baseSlides.length) {
    let toCullIndices = [];
    if (direction > 0) {
      toCullIndices = indices.slice(0, baseSlides.length);
    } else {
      toCullIndices = indices.reverse().slice(0, baseSlides.length).reverse();
    }

    slider.removeSlide(toCullIndices.reverse());
  }
}

function initSearch() {
  let searchButton = document.querySelector('.btn-search-open');
  let searchForm = document.querySelector('.form-control-search');

  let openSearch = function () {
    document.querySelector('.form-control-search').focus();
    document.querySelector('.navbar-nav-search').classList.add('search-show');
    document.querySelector('.navbar-nav-search').classList.remove('search-hidden');
  };

  let closeSearch = function () {
    document.querySelector('.navbar-nav-search').classList.remove('search-show');
    document.querySelector('.navbar-nav-search').classList.add('search-hidden');
  };

  searchButton.addEventListener('click', openSearch, false);
  searchForm.addEventListener('focusin', openSearch, false);
  searchForm.addEventListener('focusout', closeSearch, false);
}

function initScroll() {
  let nav = document.querySelector('.navbar-toggler');
  nav.addEventListener('click', () => {
    toggleScroll();
  });
}

function toggleScroll() {
  let body = document.querySelector('body');
  if (!body.classList.contains('no-scroll')) {
    body.classList.add('no-scroll');
  } else {
    body.classList.remove('no-scroll');
  }
}

function documentReady(app) {
  initializeWishlist();

  app.classificationsService.load('/classifications.all.json');
  app.urlMapService.load('/urlmap.json');

  detectTouchscreen();

  let swipers = document.getElementsByClassName('swiper-container');
  for (let i = 0; i < swipers.length; i++) {
    let el = swipers[i];
    if (el.getAttribute('is-wishlist') == undefined) {
      let swiper = initializeSwiper(el, false);
      init(swiper);

      toggleButtons(el);
    }
  }

  document.querySelectorAll('.s72-btn-trailer:not(.s72-btn-play)').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
    });
  });

  document.querySelectorAll('.navbar-nav').forEach(nav => {
    nav.classList.remove('s72-hide');
  });
  if (document.querySelector('.navbar-nav-search')) {
    initSearch();
  }
  initScroll();
}

function detectTouchscreen() {
  let touchEnabled = s72.utils.device.isTouchEnabled();
  document.querySelector('html').setAttribute('is-touchscreen', touchEnabled);
}

function isTouchscreenEnabled() {
  return document.querySelector('html').getAttribute('is-touchscreen') === 'true';
}
document.addEventListener('s72loaded', event => {
  let app = event.detail.app;
  documentReady(app);
});
