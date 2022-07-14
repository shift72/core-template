import { createAvailabilityStatus } from './AvailabilityStatus';
import withMock from 'storybook-addon-mock';
import { itemLimitNotReached2 } from './mocks/item-limit-not-reached2';
import { itemLimitNotReached3 } from './mocks/item-limit-not-reached3';
import { pricingV1PlansNoPlans } from './mocks/pricing-v1-plans--no-plans';
import { contentV1UserPlansNoUserPlans } from './mocks/content-v1-userplans--no-userplans';
import { usersV1WishlistNoWishlistItems } from './mocks/users-v1-wishlist--no-wishlist-items';
import { showMultiple2 } from './mocks/show-multiple2';
import { getAvailabilitiesx } from './mocks/get-availabilitiesx';
import { currentlyRenting } from "./mocks/content/v3/user_library.js";
import { availabilitiesCurrentlyRenting } from "./mocks/content/v1/availabilities.js";
// import { storiesOf, forceReRender } from '@storybook';


export default {
  title: 'Molecules/AvailabilityStatus',
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  decorators: [withMock],
};

const Template = ({ label, ...args }) => {
  return createAvailabilityStatus({ label, ...args });
};

export const SoldOut = Template.bind({});
SoldOut.args = {
  primary: true,
  label: 'AvailabilityStatus',
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
  label: 'AvailabilityStatus',
};
Renting.parameters = {
  mockData: [
    pricingV1PlansNoPlans,
    contentV1UserPlansNoUserPlans,
    usersV1WishlistNoWishlistItems,
    showMultiple2,
    availabilitiesCurrentlyRenting,
    itemLimitNotReached3,
    currentlyRenting
    ]
};