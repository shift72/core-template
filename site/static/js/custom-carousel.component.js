import { h, render, attrs, bindEachComponent, AppComponent } from 's72.ui';
import { utils } from 's72';

export default class CustomCarousel extends AppComponent {
  constructor(props, ctx) {
    super(props, ctx);

    this.imageSizeRatio = (props.imageHeight || 600) / (props.imageWidth || 1600);
    this.index = 0;

    if (props.pauseOnHover == undefined || props.pauseOnHover == true) {
      this.onMouseout = e => {
        if (this.eventIsChildMouseover(e) || this.modalOpen) return;
        this.play();
      };
      this.onMouseover = e => {
        if (this.eventIsChildMouseover(e)) return;
        this.pause();
      };
    }

    this.fadeTime = props.fadeTime || 700;
    this.playSpeed = props.playSpeed || 4000;

    this.onWindowResize = () => this.resize();

    // relies on polyfill.io normalising prefixed events
    this.onDocumentVisibilityChanged = () => (document.hidden ? this.pause() : this.play());
  }

  componentDidMount() {
    this.base.parentNode.addEventListener('mouseover', this.onMouseover, false);
    this.base.parentNode.addEventListener('mouseout', this.onMouseout, false);
    this.base.parentNode.addEventListener('focusin', this.onMouseover, false);
    this.base.parentNode.addEventListener('focusout', this.onMouseout, false);
    window.addEventListener('resize', this.onWindowResize, false);
    window.document.addEventListener('visibilitychange', this.onDocumentVisibilityChanged, false);

    this.ui = {
      prev: this.base.parentNode.querySelector('.left'),
      next: this.base.parentNode.querySelector('.right'),
      container: this.base.parentNode.querySelector('.s72-carousel-slides'),
      pagination: this.base.parentNode.querySelector('.s72-carousel-pagination'),
    };

    //show first item
    let items = this.items();
    items[0].classList.add('current');

    this.play();
    this.resize();

    //pagination/arrows
    if (this.ui.prev && this.ui.next) {
      if (items.length < 2) {
        this.ui.prev.remove();
        this.ui.next.remove();
      } else {
        this.ui.prev.addEventListener('click', () => this.previousSlide(), false);
        this.ui.next.addEventListener('click', () => this.nextSlide(), false);
      }
    }

    if (this.ui.pagination) {
      if (items.length < 2) {
        this.ui.pagination.remove();
        this.ui.pagination = undefined;
      } else {
        this.ui.pagination.querySelectorAll('.s72-carousel-page').forEach((p, i) => {
          p.addEventListener('click', e => {
            e.preventDefault();
            this.gotoSlide(i);
          });
        });
        this.ui.pagination.children[0].classList.add('current');
      }
    }

    //find the bottom Y coord
    this.lowerBound = this.base.parentNode.clientHeight + this.base.parentNode.offsetTop;

    this.app.messagebus.subscribe('modal-opened', () => {
      this.modalOpen = true;
      this.pause();
    });
    this.app.messagebus.subscribe('modal-closed', () => {
      this.modalOpen = false;
      this.play();
    });
  }

  componentWillUnmount() {
    this.base.parentNode.removeEventListener('mouseover', this.onMouseover);
    this.base.parentNode.removeEventListener('mouseout', this.onMouseout);
    this.base.parentNode.removeEventListener('focusin', this.onMouseover);
    this.base.parentNode.removeEventListener('focusout', this.onMouseout);
    window.removeEventListener('resize', this.onWindowResize, { passive: true });
    window.document.removeEventListener('visibilitychange', this.onDocumentVisibilityChanged);

    //remove click handlers?
  }

  resize() {
    // IE doesnt let us use clientWidth for some reason,
    // could be to do with carousel initially being hidden?
    let width = this.ui.container.clientWidth || this.ui.container.offsetWidth;
    this.ui.container.style.height = width * this.imageSizeRatio + 'px';
  }

  gotoSlide(i) {
    if (this.index === i) {
      return;
    }

    let items = this.items();

    let prev = this.index;
    items[prev].classList.add('out');
    items[i].classList.add('in');

    this.index = i;

    items[prev].classList.remove('current');
    items[i].classList.add('current');

    if (this.ui.pagination) {
      this.ui.pagination
        .querySelectorAll('.s72-carousel-page')
        .forEach(e => e.classList.remove('current'));
      this.ui.pagination
        .querySelector(`[data-page-index="${this.index}"]`)
        .classList.add('current');
    }

    window.setTimeout(() => {
      items[prev].classList.remove('out');
      items[i].classList.remove('in');
    }, this.fadeTime);
  }

  nextSlide() {
    let next = this.index + 1;
    if (next >= this.items().length) {
      next = 0;
    }
    this.gotoSlide(next);
  }

  previousSlide() {
    var next = this.index - 1;
    if (next < 0) {
      next = this.items().length - 1;
    }
    this.gotoSlide(next);
  }

  play() {
    if (utils.device.isTouchEnabled()) {
      return;
    }
    this.pause();

    this.playing = window.setInterval(() => {
      // PERF: dont change if window is not focused
      if ('hasFocus' in document && !document.hasFocus()) {
        return;
      }

      // PERF: dont change if carousel isnt visible due to scroll
      if (window.scrollY > this.lowerBound) {
        return;
      }

      this.nextSlide();
    }, this.playSpeed);
  }

  pause() {
    window.clearInterval(this.playing);
  }

  items() {
    return this.base.parentNode.querySelectorAll('.s72-carousel-item');
  }

  eventIsChildMouseover(e) {
    return this.base.parentNode.contains(e.relatedTarget);
  }
}

bindEachComponent('custom-carousel', e => render(h(CustomCarousel, attrs(e)), e));
