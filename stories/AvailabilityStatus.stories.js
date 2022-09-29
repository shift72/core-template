import { createAvailabilityStatus } from './AvailabilityStatus';
import withMock from 'storybook-addon-mock';

import { noItemLimits, itemLimitReached } from './mocks/shopping/v1/item_limit';
import { noPlans } from './mocks/pricing/v1/plans';
import { noUserPlans } from './mocks/content/v1/user_plans';
import { emptyWishlist } from './mocks/users/v1/wishlist';
import { singleFilmRentableInYourRegion } from './mocks/pricing/v2/prices/show_multiple';
import { availableNowUntil48Hours, availableNowUntilIndefinate } from './mocks/content/v1/availabilities';
import { currentlyRenting, emptyLibrary } from "./mocks/content/v4/user_library";

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
    noPlans,
    singleFilmRentableInYourRegion,
    availableNowUntil48Hours,
    noUserPlans,
    emptyLibrary,
    emptyWishlist
  ]
};
export const Renting = Template.bind({});

Renting.parameters = {
  mockData: [
    noPlans,
    noUserPlans,
    emptyWishlist,
    singleFilmRentableInYourRegion,
    availableNowUntilIndefinate,
    noItemLimits,
    currentlyRenting
    ]
};

