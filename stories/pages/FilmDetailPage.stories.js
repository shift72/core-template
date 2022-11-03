import withMock from 'storybook-addon-mock';
import { itemLimitNotReached } from '../mocks/shopping/v1/item_limit';
import { noUserPlans } from '../mocks/content/v1/user_plans';
import { emptyWishlist } from '../mocks/users/v1/wishlist';
import { singleFilmRentableInYourRegion, singleFilmBuyableInYourRegion, noPricesInYourRegion, singleFilmBuyableAndRentableInYourRegion, singleFilmBelongsToSingleRecurringPlan } from '../mocks/pricing/v2/prices/show_multiple';
import { currentlyRenting, emptyLibrary } from "../mocks/content/v4/user_library";
import { assortedPlans, noPlans } from './../mocks/pricing/v1/plans';
import { availableNowUntil48Hours, noAvailabilitySet } from '../mocks/content/v1/availabilities';
import { locationNewZealand } from '../mocks/geo/v1/location/where_am_i';
import { playbackProgressExists } from '../mocks/content/v1/playback_progress';
import { customDocs } from './../functions/customDocs'

export default {
  title: 'Pages/FilmDetail',
  decorators: [withMock],
  argTypes: {
    showAwardCategories: { control: 'boolean' },
    showBonusContent: { control: 'boolean' },
    showRecommended: { control: 'boolean' },
    showSponsorImage: { control: 'boolean' },
    showSponsorImageText: { control: 'boolean' },
    enableElementSwitcher: { control: 'boolean' },
    showAvailabilityLabel: { control: 'boolean' },
    enableCanBeWatchedButton: { control: 'boolean' },
    showTrailerButton: { control: 'boolean' },
    showWishlistButton: { control: 'boolean' },
    showShareButton: { control: 'boolean' },
    showAvailabilityLabel: { control: 'boolean' },
    showPoster: { control: 'boolean' },
    showRating: { control: 'boolean' }
  },
  parameters: {
    docs: { page: customDocs(`<h3>No docs written yet<h3>`) }
  },
};

export const Rentable = ({showAwardCategories, showBonusContent, showRecommended, showSponsorImage, showSponsorImageText, enableElementSwitcher, enableCanBeWatchedButton, showTrailerButton, showWishlistButton, showShareButton, showAvailabilityLabel, showPoster, showRating}, {loaded: { Component }}) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(Component, "text/html");
    const div = document.createElement('div');
    div.innerHTML = htmlDoc.body.innerHTML

    if (!showAwardCategories) {
      div.querySelector('.meta-awards')?.remove();
    }

    if (!showBonusContent) {
      div.querySelector('.meta-detail-bonus-content')?.remove();
    }
    if (!showRecommended) {
      div.querySelector('.recommendations-collection')?.remove();
    }
    if (!showSponsorImage) {
      div.querySelectorAll('.sponsor')?.forEach(e => e.remove());
    }
    if (!showSponsorImageText) {
      div.querySelectorAll('.sponsor div')?.forEach(e => e.remove());
    }
    if (!enableElementSwitcher) {
      div.querySelector('.meta-detail-switcher-tagline')?.remove();
      div.querySelector('s72-element-switcher .s72-hide')?.classList.remove('s72-hide');
    }
    if (!enableCanBeWatchedButton) {
      div.querySelector('can-be-watched-button')?.remove();
    }
    if (!showTrailerButton) {
      div.querySelector('s72-modal-player')?.remove();
    }
    if (!showWishlistButton) {
      div.querySelector('s72-userwishlist-button')?.remove();
    }
    if (!showShareButton) {
      div.querySelector('.social-media-buttons')?.remove();
    }
    if (!showAvailabilityLabel) {
      div.querySelector('s72-availability-label')?.remove();
    }
    if (!showRating) {
      div.querySelector('s72-classification-label')?.remove();
    }
    if (!showPoster) {
      const poster = div.querySelector('.poster-wrapper .poster-portrait')
      if (poster) {
        poster.innerHTML = "";
      }
    }

    return div;
};

export const InLibrary = Rentable.bind({});
export const Buyable = Rentable.bind({});
export const Unavailable = Rentable.bind({});
export const RentableAndBuyable = Rentable.bind({});
export const SubscribeToWatch = Rentable.bind({});

Rentable.loaders = InLibrary.loaders = Buyable.loaders = Unavailable.loaders = RentableAndBuyable.loaders = SubscribeToWatch.loaders = [async () => {
  return ({ Component: (await new Promise(async resolve => await fetch('film/storybook/index.html').then(res=>{
    return resolve(res.text())
  })))})
}];

Rentable.args = InLibrary.args = Buyable.args = Unavailable.args  = RentableAndBuyable.args = SubscribeToWatch.args = {
  showAwardCategories: true,
  showBonusContent: true,
  showRecommended: true,
  showSponsorImage: true,
  showSponsorImageText: true,
  enableElementSwitcher: true,
  enableCanBeWatchedButton: true,
  showTrailerButton: true,
  showWishlistButton: true,
  showShareButton: true,
  showAvailabilityLabel: true,
  showPoster: true,
  showRating: true
};

Rentable.parameters = {
  mockData: [
    itemLimitNotReached,
    noPlans,
    singleFilmRentableInYourRegion,
    availableNowUntil48Hours,
    noUserPlans,
    emptyLibrary,
    emptyWishlist,
    locationNewZealand,
    playbackProgressExists
    ]
};

SubscribeToWatch.parameters = {
  mockData: [
    itemLimitNotReached,
    assortedPlans,
    singleFilmBelongsToSingleRecurringPlan,
    noAvailabilitySet,
    noUserPlans,
    emptyLibrary,
    emptyWishlist
  ]
}

InLibrary.parameters = {
mockData: [
  itemLimitNotReached,
  noPlans,
  singleFilmRentableInYourRegion,
  availableNowUntil48Hours,
  noUserPlans,
  currentlyRenting,
  emptyWishlist,
  locationNewZealand,
  playbackProgressExists
  ]
};


Buyable.parameters = {
  mockData: [
    itemLimitNotReached,
    noPlans,
    singleFilmBuyableInYourRegion,
    availableNowUntil48Hours,
    noUserPlans,
    emptyLibrary,
    emptyWishlist,
    locationNewZealand,
    playbackProgressExists
    ]
  };


  RentableAndBuyable.parameters = {
    mockData: [
      itemLimitNotReached,
      noPlans,
      singleFilmBuyableAndRentableInYourRegion,
      availableNowUntil48Hours,
      noUserPlans,
      emptyLibrary,
      emptyWishlist,
      locationNewZealand,
      playbackProgressExists
      ]
    };

  Unavailable.parameters = {
    mockData: [
      itemLimitNotReached,
      noPlans,
      noPricesInYourRegion,
      availableNowUntil48Hours,
      noUserPlans,
      emptyLibrary,
      emptyWishlist,
      locationNewZealand,
      playbackProgressExists
      ]
    };