import withMock from 'storybook-addon-mock';
import { itemLimitNotReached } from '../mocks/shopping/v1/item_limit';
import { noUserPlans } from '../mocks/content/v1/user_plans';
import { emptyWishlist } from '../mocks/users/v1/wishlist';
import { singleFilmRentableInYourRegion, singleFilmBuyableInYourRegion, noPricesInYourRegion, singleFilmBuyableAndRentableInYourRegion, singleFilmBelongsToSingleRecurringPlan} from '../mocks/pricing/v2/prices/show_multiple';
import { currentlyRenting, emptyLibrary } from "../mocks/content/v4/user_library";
import { assortedPlans, noPlans } from './../mocks/pricing/v1/plans';
import { availableNowUntil48Hours, noAvailabilitySet } from '../mocks/content/v1/availabilities';
import { locationNewZealand } from '../mocks/geo/v1/location/where_am_i';
import { playbackProgressExists } from '../mocks/content/v1/playback_progress';

export default {
  title: 'Pages/Home',
  decorators: [withMock],
  argTypes: {
    showAwardCategories: { control: 'boolean' },
    showSponsorImage: { control: 'boolean' },
    showSponsorImageText: { control: 'boolean' },
    showAvailabilityLabel: { control: 'boolean' },
    enableCanBeWatchedButton: { control: 'boolean' },
    showTrailerButton: { control: 'boolean' },
    showWishlistButton: { control: 'boolean' },
    showShareButton: { control: 'boolean' },
    showAvailabilityLabel: { control: 'boolean' },
    showRating: { control: 'boolean' }
  },
};

export const Rentable = ({showAwardCategories, showSponsorImage, showSponsorImageText, enableCanBeWatchedButton, showTrailerButton, showWishlistButton, showShareButton, showAvailabilityLabel, showRating}, {loaded: { Component }}) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(Component, "text/html");
    const div = document.createElement('div');
    div.innerHTML = htmlDoc.body.innerHTML

    if (!showAwardCategories) {
      div.querySelector('.meta-awards')?.remove();
    }
    if (!showSponsorImage) {
      div.querySelectorAll('.sponsor')?.forEach(e => e.remove());
    }
    if (!showSponsorImageText) {
      div.querySelectorAll('.sponsor div')?.forEach(e => e.remove());
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


    return div;
};

export const InLibrary = Rentable.bind({});
export const Buyable = Rentable.bind({});
export const Unavailable = Rentable.bind({});
export const RentableAndBuyable = Rentable.bind({});
export const SubscribeToWatch = Rentable.bind({});

Rentable.loaders = InLibrary.loaders = Buyable.loaders = Unavailable.loaders = RentableAndBuyable.loaders = SubscribeToWatch.loaders = [async () => {
    return ({ Component: (await new Promise(async resolve => await fetch('homepage/index.html').then(res=>{
        return resolve(res.text())
     })))})

}];

Rentable.args = InLibrary.args = Buyable.args = Unavailable.args  = RentableAndBuyable.args = SubscribeToWatch.args = {
  showAwardCategories: true,
  showSponsorImage: true,
  showSponsorImageText: true,
  enableCanBeWatchedButton: true,
  showTrailerButton: true,
  showWishlistButton: true,
  showShareButton: true,
  showAvailabilityLabel: true,
  showRating: true,
  showSponsorImageText: true
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