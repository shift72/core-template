import { createAvailabilityStatus } from './AvailabilityStatus';
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
    NoUserPlans,
    usersV1WishlistNoWishlistItems,
    showMultiple2,
    availabilitiesCurrentlyRenting,
    itemLimitNotReached3,
    currentlyRenting
    ]
};