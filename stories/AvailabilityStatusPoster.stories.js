import { createAvailabilityStatusPoster } from './AvailabilityStatusPoster';
import withMock from 'storybook-addon-mock';

import { itemLimitReached, itemLimitNotReached, noItemLimits } from './mocks/shopping/v1/item_limit';
import { noPlaybackProgress, playbackProgressExists } from './mocks/content/v1/playback_progress';
import { noUserPlans } from './mocks/content/v1/user_plans';
import { emptyWishlist } from './mocks/users/v1/wishlist';
import { singleFilmRentableInYourRegion, noPricesInYourRegion } from './mocks/pricing/v2/prices/show_multiple';
import { currentlyRenting, startedWatchWindow, emptyLibrary } from "./mocks/content/v3/user_library";
import { assortedPlans, noPlans } from './mocks/pricing/v1/plans';
import { availableNowUntil48Hours, availableIn48Hours, availableNowUntilIndefinate, expired48HoursAgo } from './mocks/content/v1/availabilities';

export default {
  title: 'Molecules/AvailabilityStatusPoster',
  argTypes: {
    poster: {
      control: 'text'
    },
  },
  decorators: [withMock],
};

const Template = ({ label, ...args }) => {
  return createAvailabilityStatusPoster({ label, ...args });
};

export const SoldOut = Template.bind({});
SoldOut.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};
SoldOut.parameters = {
  mockData: [
    itemLimitReached,
    noPlans,
    singleFilmRentableInYourRegion,
    availableNowUntil48Hours,
    noUserPlans,
    emptyLibrary,
    emptyWishlist
    ]
};

export const Renting = Template.bind({});
Renting.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};
Renting.parameters = {
  mockData: [
    noPlans,
    noUserPlans,
    emptyWishlist,
    singleFilmRentableInYourRegion,
    availableNowUntilIndefinate,
    noItemLimits,
    currentlyRenting,
    noPlaybackProgress
  ]
};

export const AvailableUntil = Template.bind({});
AvailableUntil.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

AvailableUntil.parameters = {
  mockData: [
    itemLimitNotReached,
    assortedPlans,
    singleFilmRentableInYourRegion,
    availableNowUntil48Hours,
    emptyWishlist,
    noUserPlans,
    emptyLibrary
  ]
};

export const ComingSoon = Template.bind({});
ComingSoon.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

ComingSoon.parameters = {
  mockData: [
    itemLimitNotReached,
    assortedPlans,
    singleFilmRentableInYourRegion,
    availableIn48Hours,
    emptyWishlist,
    noUserPlans,
    emptyLibrary
  ]
};

export const Expired = Template.bind({});
Expired.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

Expired.parameters = {
  mockData: [
    itemLimitNotReached,
    assortedPlans,
    singleFilmRentableInYourRegion,
    expired48HoursAgo,
    noUserPlans,
    emptyLibrary,
    emptyWishlist
  ]
};

export const NotAvailable = Template.bind({});
NotAvailable.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

NotAvailable.parameters = {
  mockData: [
    noPlans,

    emptyWishlist,
    noPricesInYourRegion,
    availableNowUntilIndefinate,
    noItemLimits,
    noUserPlans,
    emptyLibrary
  ]
};

export const InWatchWindow = Template.bind({});
InWatchWindow.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

InWatchWindow.parameters = {
  mockData: [
    noPlans,
    noUserPlans,
    emptyWishlist,
    singleFilmRentableInYourRegion,
    availableNowUntilIndefinate,
    noItemLimits,
    startedWatchWindow,
    playbackProgressExists
  ]
};
