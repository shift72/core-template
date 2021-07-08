import './modernizr-custom.js';
import './can-be-watched-button.component.js';

var slideObservers = [];

function initializeWishlist() {
  var wishlist = document.querySelector('s72-userwishlist');
  if (!wishlist) return;
  var originalFunction = wishlist.classList.remove;
  wishlist.classList.remove = function(className){
    if(className == 's72-hide')
    {
      // Hide this from view
      wishlist.style.opacity = '0';

      // Remove class
      originalFunction.apply(this, [ className ]);

      /* Convert this to a swiper */
      var containers = wishlist.getElementsByClassName('swiper-container');
      if(containers.length > 0) {
        var container = containers[0];
        var swiper = initializeSwiper(container, true);

        init(swiper);
        toggleButtons(container);
      }

      // Now show it
      wishlist.style.opacity = '1';
    }
    else
    {
      originalFunction.apply(this, [ className ]);
    }
  }
}

function initializeSwiper(element, force){
  if(element.swiper) {
    if(force) {
      element.swiper.destroy();
    }
    else {
      return;
    }
  }

  var isTouchscreen = isTouchscreenEnabled();

  var defaultSlidesPerView = 8;
  var slidesPerView = {
    320: 2,
    568: 2,
    667: 2,
    768: 4,
    992: 4,
    1200: 4,
    1440: 6,
    1600: 6
  }

  // Override some slider values specific sizes. Could potentially expand this for portrait vs. landscapes
  if(element.getAttribute('data-items-per-row')){
    var itemsPerRow = element.getAttribute('data-items-per-row');
    var layout = element.getAttribute('data-layout');

    if(layout == 'portrait'){
      switch(itemsPerRow) {
        case "6":
          defaultSlidesPerView = 8;
          slidesPerView[1600] = 6;
          slidesPerView[1440] = 6;
          slidesPerView[1200] = 5;
          slidesPerView[992] = 4;
          slidesPerView[768] = 4;
          slidesPerView[667] = 3;
          slidesPerView[568] = 3;
          break;

        case "4":
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
    }
    else if(layout == 'landscape'){
      switch(itemsPerRow) {
        case "4":
          defaultSlidesPerView = 5;
          slidesPerView[1600] = 4;
          slidesPerView[1440] = 4;
          slidesPerView[1200] = 3;
          slidesPerView[992] = 3;
          slidesPerView[768] = 3;
          slidesPerView[568] = 2;
          break;

        case "3":
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

  var swiper = new Swiper(element, {

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
        slidesOffsetAfter: 20
      },
      // when window width is <= 480px
      567: {
        slidesPerView: slidesPerView[568],
        spaceBetween: 2,
        slidesPerGroup: isTouchscreen ? slidesPerView[568] : 1,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20
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
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      init: function() {
        element.dispatchEvent(new Event('init'));
      },
      slideChangeTransitionEnd: function(){
        addAndRemoveSlides(element.swiper, true, true);
        toggleButtons(element);
      }
    }
  });

  element.buttons = {};

  initButton(element, element.closest('.swiper-wrapper-container').querySelector('.swiper-button-next'), 1);
  initButton(element, element.closest('.swiper-wrapper-container').querySelector('.swiper-button-prev'), -1);

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
    var buttonClone = button.cloneNode(true);
    button.parentNode.replaceChild(buttonClone, button);

    buttonClone.addEventListener('click', function(e){
      e.preventDefault();
      if (velocity > 0) {
        addAndRemoveSlides(slider.swiper, true, false);
      } else {
        addAndRemoveSlides(slider.swiper, false, true);
      }
      slider.swiper.slideToLoop(slider.swiper.realIndex + (slider.swiper.params.slidesPerView * velocity));
    });

    var direction = (velocity > 0) ? 'next' : 'prev';
    slider.buttons[direction] = buttonClone;
  }
}

function getMatchingDuplicatedSlides(slider, link){

  var result = [];

  if(!slider.destroyed){
    Array.from(slider.el.querySelectorAll('.swiper-slide')).forEach(function(slide){
      if(!slide.classList.contains('base')){
        var thisLink = slide.querySelector('a.meta-item-link').getAttribute('href');
        if(link === thisLink) result.push(slide);
      }
    })
  }

  return result;
}

function init(slider){

  slider.init();

  // Set up a mutation observer against each base slide, as it'll get redrawn as the components get rendered
  for(var x = 0; x < slider.slides.length; x++){
    var slide = slider.slides[x];

    slide.classList.add('base');

    if(infiniteScrollEnabled(slider))
    {

      var config = { subtree: true , childList: true };
      var link = slide.querySelector('a.meta-item-link').getAttribute('href');

      var observer = new MutationObserver(function(mutations, observer){
        for(var y = 0; y < mutations.length; y++){
          var mutationRecord = mutations[y];

          // var href = mutationRecord.target.closest('a.meta-item-link').getAttribute('href');
          var thisSlide = (mutationRecord.target.closest('.swiper-slide'));
          if(thisSlide){
            var thisLink = thisSlide.querySelector('a.meta-item-link').getAttribute('href');

            var duplicatedSlides = getMatchingDuplicatedSlides(slider, thisLink);

            Array.from(duplicatedSlides).forEach(function(dupe){
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

function disconnectObservers(){
  // slideObservers.forEach(function(o) { o.disconnect(); });
}

function infiniteScrollEnabled(slider){
  if(!Modernizr.smil) return false; // i.e. is this IE11

  if(isTouchscreenEnabled()) return false; // i.e. is this a touchscreen device?

  var el = slider.el;

  if(el.getAttribute('disable-infinite-scroll') !== null) {
    return false;
  }

  var prev = el.buttons.prev; var next = el.buttons.next;

  // Only infinite scroll on desktop (i.e. when the next/prev buttons are visible)
  var buttonsVisible = (prev && (prev.offsetHeight > 0)) || (next && (next.offsetHeight > 0));

  var screens = slider.slides.length / slider.params.slidesPerView;

  return buttonsVisible && (screens > 1);
}

function addAndRemoveSlides(slider, append, prepend){

  // This is a no-go
  if(!infiniteScrollEnabled(slider)) return;

  // Just in case something's gone horribly wrong
  if(slider.slides.length > 100){
    return;
  }

  if(append) {
    let lastVisibleIndex = slider.activeIndex + slider.params.slidesPerView;
    let slidesToTheRight = slider.slides.length - lastVisibleIndex;

    if(slidesToTheRight <= slider.params.slidesPerView) {
      appendBaseSlides(slider);
    }
  }

  if(prepend) {
    if(slider.activeIndex <= slider.params.slidesPerView) {
      prependBaseSlides(slider);
    }
  }
}

function getBaseSlides(slider){
  var result = Array.from(slider.el.querySelectorAll('.swiper-slide.base')).map(function(node) {
    return node.cloneNode(true);
  });

  Array.from(result).forEach(function(slide){
    slide.classList.remove('base', 'swiper-slide-visible', 'swiper-slide-active', 'swiper-slide-next', 'swiper-slide-prev');
  })

  return result;
}

function appendBaseSlides(slider){
  var baseSlides = getBaseSlides(slider).slice(0);
  slider.appendSlide(baseSlides);

  cullSlides(slider, 1);
}

function cloneBaseSlides(slider){
  var slides = getBaseSlides(slider);
  var result = [];
  for(var i = 0; i < slides.length; i++){
    result.push(slides[i].cloneNode(true));
  }
  return result;
}

function prependBaseSlides(slider){
  // var baseSlides = getBaseSlides(slider).reverse().slice(0);
  var baseSlides = getBaseSlides(slider).reverse().slice(0);

  var currentIndex = slider.activeIndex;

  for(var i = 0; i < baseSlides.length; i++){
      slider.prependSlide(baseSlides[i]);
  }
  slider.slideTo(currentIndex + baseSlides.length, 0);

  cullSlides(slider, -1);
}

// Get rid of the oldest N slides to the left of current
function cullSlides(slider, direction){
  var baseSlides = getBaseSlides(slider);
  var length = baseSlides.length;

  var indices = [];
  for(var index = 0; index < slider.slides.length; index++){
    var slide = slider.slides[index];
    if(direction > 0) {
      if((index < slider.activeIndex) && !slide.classList.contains('base')){
        indices.push(index);
      }
    }
    else
    {
      if((index > slider.activeIndex) && !slide.classList.contains('base')){
        indices.push(index);
      }
    }
  }

  if(indices.length > baseSlides.length){
    var toCullIndices = [];
    if(direction > 0){
      toCullIndices = indices.slice(0, baseSlides.length);
    }
    else
    {
      toCullIndices = indices.reverse().slice(0, baseSlides.length).reverse();
    }

    slider.removeSlide(toCullIndices.reverse());
  }
}

function initSearch() {
  var searchButton = document.querySelector('.btn-search-open');
  var searchForm = document.querySelector('.form-control-search');

  var openSearch = function() {
    document.querySelector('.form-control-search').focus();
    document.querySelector('.navbar-nav-search').classList.add('search-show');
    document.querySelector('.navbar-nav-search').classList.remove('search-hidden');
  }

  var closeSearch = function() {
    document.querySelector('.navbar-nav-search').classList.remove('search-show');
    document.querySelector('.navbar-nav-search').classList.add('search-hidden');
  }

  searchButton.addEventListener('click', openSearch, false);
  searchForm.addEventListener('focusin', openSearch, false);
  searchForm.addEventListener('focusout', closeSearch, false);
}

function initToggleScroll() {
  var nav = document.querySelector('.navbar-toggler');
  nav.addEventListener('click', function(e) {
    noScroll();
  });
}

function noScroll() {
  var body = document.querySelector('body');
  if (!body.classList.contains('no-scroll')) {
    body.classList.add('no-scroll');
  } else {
    body.classList.remove('no-scroll');
  }
}

// Checks if the subnav is overflowing
function subnavOverflowing() {
  var subnav = document.querySelector('.sub-nav');
  if (!subnav) return false;

  var padding = 0;
  padding += parseFloat(window.getComputedStyle(subnav, null).getPropertyValue('padding-left'));
  padding += parseFloat(window.getComputedStyle(subnav, null).getPropertyValue('padding-right'));

  var childrenWidth = 0;
  for (var i = 0; i < subnav.children.length; i++) {
    childrenWidth += subnav.children[i].offsetWidth;
  }

  return childrenWidth > window.innerWidth - padding;
}


function documentReady(app) {
  initializeWishlist();

  app.classificationsService.load('/classifications.all.json');

  detectTouchscreen();

  var swipers = document.getElementsByClassName('swiper-container');
  for (var i = 0; i < swipers.length; i++) {
    var el = swipers[i];
    if(el.getAttribute('is-wishlist') == undefined)
    {
      let swiper = initializeSwiper(el, false);
      init(swiper);

      toggleButtons(el);
    }
  }

  document.querySelectorAll('.btn-trailer').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      window.location = btn.getAttribute('data-url');
    });
  });

  document.querySelectorAll('.navbar-nav').forEach(function(nav) {
    nav.classList.remove('s72-hide');
  });
  if (document.querySelector('.navbar-nav-search')) {
    initSearch();
  }
  initToggleScroll();
}

function detectTouchscreen(){
  var touchEnabled = s72.utils.device.isTouchEnabled();
  document.querySelector('html').setAttribute('is-touchscreen', touchEnabled);
}

function isTouchscreenEnabled(){
  return (document.querySelector('html').getAttribute('is-touchscreen') === 'true');
}
document.addEventListener('s72loaded', function(event) {
  let app = event.detail.app;
  documentReady(app);
});
