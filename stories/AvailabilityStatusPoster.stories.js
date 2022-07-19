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

import React from "react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';

export default {
  title: 'Molecules/AvailabilityStatusPoster',
  argTypes: {
    poster: {
      control: 'text'
    },

  },
  parameters: {
    docs: {
      page: () =>
      React.createElement(React.Fragment, null,
        React.createElement(Title, null),
        React.createElement(Subtitle, null),
        React.createElement(Description, null),
        React.createElement(Primary, null),
        React.createElement(ArgsTable, {
        story: PRIMARY_STORY
      }),
      React.createElement(Stories, null))
    }
  },
  // parameters: {
  //   docs: {
  //     page: (a) => {
  //     return React.createElement(
  //       "div",
  //       { style: { color: "red" } },
  //       React.createElement(Title),
  //       React.createElement(Subtitle),
  //       React.createElement(Description),
  //       React.createElement(Primary),
  //       React.createElement(ArgsTable),
  //       React.createElement(Stories,PRIMARY_STORY,PRIMARY_STORY)
  //     );
  //     return false
  //     },
  //   },
  // },
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
  ],

  // docs: {
  //   page: (a) => {
  //     console.log(a);
  //     var wrapper = document.createElement('div');
  //     // wrapper.appendChild(Title)
  //     // wrapper.appendChild(Subtitle)
  //     // wrapper.appendChild(Description)
  //     // wrapper.appendChild(Primary)
  //     // var content = document.createTextNode("cfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfdcfsgdfhgjgfd");
  //     // wrapper.appendChild(content);
  //     // console.log(ArgsTable);
  //     // wrapper.appendChild(ArgsTable)
  //     // wrapper.appendChild(Stories)
  //     // wrapper.appendChild("fffffffffffff")

  //     // <ArgsTable story={PRIMARY_STORY} />
  //     // return wrapper
  //   }
  // }
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
