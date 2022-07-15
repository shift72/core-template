import { createAvailabilityStatus } from './AvailabilityStatus';
import withMock from 'storybook-addon-mock';
import { itemLimitReached } from './mocks/shopping/v1/item_limit';
import { noItemLimits } from './mocks/shopping/v1/item_limit';
import { pricingV1PlansNoPlans } from './mocks/pricing/v1/plans';
import { NoUserPlans } from './mocks/content/v1/user_plans';
import { usersV1WishlistNoWishlistItems } from './mocks/users/v1/wishlist';
import { showMultiple2 } from './mocks/pricing/v2/prices/show_multiple';
import { availableNowUntil48Hours } from './mocks/content/v1/availabilities';
import { currentlyRenting } from "./mocks/content/v3/user_library.js";
import { availableNowUntilIndefinate } from "./mocks/content/v1/availabilities.js";

export default {
  title: 'Atoms/AvailabilityStatus',
  decorators: [withMock],
};

const Template = ({ label, ...args }) => {
  return createAvailabilityStatus({ label, ...args });
};

export const SoldOut = Template.bind({});

SoldOut.parameters = {
  mockData: [
    itemLimitReached,
    pricingV1PlansNoPlans,
    showMultiple2,
    availableNowUntil48Hours
    ]
};
export const Renting = Template.bind({});

Renting.parameters = {
  mockData: [
    pricingV1PlansNoPlans,
    NoUserPlans,
    usersV1WishlistNoWishlistItems,
    showMultiple2,
    availableNowUntilIndefinate,
    noItemLimits,
    currentlyRenting
    ]
};

