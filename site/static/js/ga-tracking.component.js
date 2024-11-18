import { AppComponent } from 's72.ui';

const MAX_EVENT_PARAM_VALUE_LENGTH = 100;

/*
 * There is currently not way of retrieving the item title from the event payload. This
 * method exploits the fact that we render the title in the modal.
 *
 * We also truncate the title to ensure that the GA event will succeed as there is a limit
 * for event parameter values (https://support.google.com/analytics/answer/9267744).
 *
 * TODO: it would be nice to include the item title as part of the event payload.
 */
const getItemTitle = () => {
  const titleElement = document.querySelector('.s72-shopping-modal-header-title h4');

  return titleElement ? titleElement.textContent.substring(0, MAX_EVENT_PARAM_VALUE_LENGTH) : '';
};

export default class GATracking extends AppComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      webpageHeight: document.body.scrollHeight,
    };
    window.dataLayer = window.dataLayer || [];
  }

  componentDidMount() {
    this.recordAuthenticatedPageView();
    // this.recordHomeSignupPurchasePlay();
    if (window.location.pathname.startsWith('/film/')) this.recordFilmPagePurchase();
    if (window.location.pathname.split('/film/')[1]) {
      this.recordViewItem('Film');
    }
    if (window.location.pathname.split('/collections/')[1]) {
      this.recordViewItem('Collection');
    }
    this.recordPercentScrolled();
    this.recordUserLogin();
    this.recordUserSignup();
    this.recordButtonClicks();
    this.recordBeginCheckout();
    this.recordPurchase();
  }

  push(args) {
    window.dataLayer.push(args);
  }

  // working
  recordTrailerPlaybackPositions() {
    let trailer = document.querySelector('.s72-player video');

    const threeSecondCheck = event => {
      if (trailer.currentTime > 3) {
        if (trailer.currentTime < 4)
          gtag('event', 'trailer_passed_three_second', {
            eventCategory: 'watch',
            eventAction: 'trailer passed three second mark',
          });
        trailer.removeEventListener('timeupdate', threeSecondCheck);
      }
    };
    trailer.addEventListener('timeupdate', threeSecondCheck);

    const tenSecondCheck = event => {
      if (trailer.currentTime > 10) {
        if (trailer.currentTime < 11)
          gtag('event', 'trailer_passed_ten_second', {
            eventCategory: 'watch',
            eventAction: 'trailer passed ten second mark',
          });
        trailer.removeEventListener('timeupdate', tenSecondCheck);
      }
    };
    trailer.addEventListener('timeupdate', tenSecondCheck);
    trailer.addEventListener('ended', () =>
      gtag('event', 'trailer_ended', {
        eventCategory: 'event',
        eventAction: 'trailer ended',
      })
    );
  }

  /*
  recordHomeSignupPurchasePlay() {
    // user visits page, get parameters for checks
    // keep in mind this components data persists over multiple pages

    const url = window.location.href,
      location = window.location.origin;

    this.isLoggedIn = this.app.userService.isAuthenticated();

    const checks = [
      [url === `${location}/`, !this.isLoggedIn],
      [
        url === `${location}/signup.html`,
        document.referrer === `${location}/`,
        sessionStorage['s72.a'] == 1,
      ], // is signup page, came from homepage
      [
        document.referrer === `${location}/signup.html`,
        this.isLoggedIn,
        sessionStorage['s72.a'] == 2,
      ],
    ];

    // if ("user is has just visited the website" or "user has had session reset by this component")
    // set user status to "browsing website, but not currently at any stage of 'tracking path a'"
    if (sessionStorage['s72.a'] === undefined) sessionStorage['s72.a'] = 0;

    switch (parseInt(sessionStorage['s72.a'])) {
    // if (On homepage, not logged in) -> increment "s72.a" to 1
    case 0:
      if (this.allConditionsTrue(checks[0])) {
        sessionStorage['s72.a']++;
        break;
      }

      // if (On signup page, previous page was homepage, not logged in, s72.a is 1) -> increment "s72.a" to 2
    case 1:
      if (this.allConditionsTrue(checks[1])) {
        sessionStorage['s72.a']++;
        break;
      }

      // if (Previous page was signup page, now logged in) then user has signed up -> increment "s72.a" to 3
    case 2:
      if (this.allConditionsTrue(checks[2])) {
        sessionStorage['s72.a']++;

        // and also listen for user to purchase a film
        this.app.messagebus.subscribe('shopping-session-completed', session => {
          // user has purchased film, subscribe to user play button click
          this.app.messagebus.subscribe('before-play-start', url => {
            // We need relish to redirect to the player only after google tracking hit has been sent
            return new Promise((resolve, reject) => {
              gtag('set', 'dimension8', 'Funnel 1');
              gtag('send', 'pageview', { hitCallback: () => resolve() });
            });
          });
        });
        break;
      }
      // if user diverged from path before signup -> reset "s72.a"
    default:
      if (sessionStorage['s72.a'] < 3) this.resetSession('s72.a');
    }
  }
  */

  recordFilmPagePurchase() {
    this.app.messagebus.subscribe('shopping-session-completed', session => {
      gtag('event', 'item_purchase', {
        eventItem: `${window.location.pathname.split('/film/')[1]}, ${session.data.total}`,
        eventCategory: 'purchase',
        eventAction: 'purchase on film page',
      });
    });
  }

  recordPercentScrolled() {
    const pageScrollCheck = () => {
      let percentScrolled =
        ((window.pageYOffset + window.innerHeight) / this.state.webpageHeight) * 100;
      if (percentScrolled > 75) {
        gtag('event', 'screen_view', { message: 'scrolled over 75%' });
        document.removeEventListener('scroll', pageScrollCheck);
      }
    };
    document.addEventListener('scroll', pageScrollCheck);
  }

  recordUserLogin() {
    const key = 's72.tracking.notAuthenticated';
    if (!this.isLoggedIn) sessionStorage[key] = true;
    if (this.isLoggedIn && sessionStorage[key] === 'true') {
      gtag('send', 'event', {
        dimension11: `user: ${this.app.userService.current.id}, page: ${window.location.pathname}`,
        eventCategory: 'userAction',
        eventAction: 'user logged in',
      });
      sessionStorage[key] = false;
    }
  }

  recordUserSignup() {
    this.app.messagebus.subscribe('user-signed-up', ({ data }) => {
      this.push({
        event: 'new_account',
        'customer-id': data.memberId,
      });
    });
  }

  recordBeginCheckout() {
    this.app.messagebus.subscribe('shopping-session-created', ({ data }) => {
      this.push({
        event: 'begin_checkout',
        ecommerce: {
          items: [
            {
              item_id: data.slug,
              item_name: getItemTitle(),
              item_category: 'Film',
              currency: data.currency,
              price: Number(data.totalPriceNumeric),
              quantity: 1,
            },
          ],
        },
      });
    });
  }

  recordPurchase() {
    this.app.messagebus.subscribe('shopping-session-completed', ({ data }) => {
      let itemName = getItemTitle();
      let discount = Number(data.discount.replace(/[^0-9\.]+/g, ''));
      let price = Number(data.totalPriceNumeric);
      let item = {
        item_id: data.slug,
        item_name: itemName,
        item_category: 'Film',
        price,
        quantity: 1,
        discount,
        coupon: data.discountCode,
      };

      this.push({
        event: 'add_payment_info',
        ecommerce: {
          currency: data.currency,
          value: price,
          payment_type: data.paymentProvider,
          coupon: data.discountCode,
          items: [item],
        },
      });

      this.push({
        event: 'purchase',
        ecommerce: {
          currency: data.currency,
          value: price,
          transaction_id: `${data.id}:${itemName}`,
          items: [item],
        },
      });
    });
  }

  recordViewItem(item_category) {
    let elem = document.querySelector('.meta-detail-title');
    this.push({
      event: 'view_item',
      ecommerce: {
        items: [
          {
            item_id: elem.dataset.slug,
            item_name: elem.textContent,
            item_category,
          },
        ],
      },
    });
  }

  recordAuthenticatedPageView() {
    if (!this.app.userService.isAuthenticated()) return;

    let loyalty = this.app.userService._store.get('loyalty');
    this.push({
      'customer-id': loyalty.memberId,
    });
  }

  recordButtonClicks() {
    document.querySelectorAll('button').forEach(elem =>
      elem.addEventListener('click', () => {
        gtag('event', 'button_click', {
          eventLabel: elem.ariaLabel,
          eventCategory: 'event',
          eventAction: 'btnClick',
        });
        if (elem.classList.contains('s72-btn-trailer')) this.recordTrailerPlaybackPositions();
      })
    );
  }

  allConditionsTrue(arr) {
    return arr.every(v => v === true);
  }

  resetSession(a) {
    sessionStorage.removeItem(a);
  }
}
