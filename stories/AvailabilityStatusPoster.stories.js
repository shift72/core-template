import { createAvailabilityStatusPoster } from './AvailabilityStatusPoster';
import withMock from 'storybook-addon-mock';
import { itemLimitNotReached2 } from './mocks/shopping/v1/item_limit';
import { itemLimitNotReached3 } from './mocks/shopping/v1/item_limit';
import { pricingV1PlansNoPlans } from './mocks/pricing/v1/plans';
import { NoUserPlans } from './mocks/content/v1/user_plans';
import { usersV1WishlistNoWishlistItems } from './mocks/users/v1/wishlist';
import { showMultiple2 } from './mocks/pricing/v2/prices/show_multiple';
import { getAvailabilitiesx } from './mocks/content/v1/availabilities';
import { currentlyRenting } from "./mocks/content/v3/user_library.js";
import { availabilitiesCurrentlyRenting } from "./mocks/content/v1/availabilities.js";
import { itemLimitNotReached } from './mocks/shopping/v1/item_limit';
import { genericPlans } from './mocks/pricing/v1/plans';
import { showMultiple } from './mocks/pricing/v2/prices/show_multiple';
import { getAvailabilities } from './mocks/content/v1/availabilities';
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
    itemLimitNotReached2,
    pricingV1PlansNoPlans,
    showMultiple2,
    getAvailabilitiesx
    ]
};
export const Renting = Template.bind({});
Renting.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};
Renting.parameters = {
  mockData: [
    pricingV1PlansNoPlans,
    NoUserPlans,
    usersV1WishlistNoWishlistItems,
    showMultiple2,
    availabilitiesCurrentlyRenting,
    itemLimitNotReached3,
    currentlyRenting
    ]
};

export const AvailableUntil = Template.bind({});
AvailableUntil.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

AvailableUntil.parameters = {
  mockData: [
    itemLimitNotReached,
    genericPlans,
    showMultiple,
    getAvailabilities(22)
    ]
};