import { createCollectionItem } from './CollectionItem';
import withMock from 'storybook-addon-mock';

import { itemLimitNotReached } from './mocks/shopping/v1/item_limit';
import { assortedPlans } from './mocks/pricing/v1/plans';
import { singleFilmRentableInYourRegion } from './mocks/pricing/v2/prices/show_multiple';
import { availableNowUntil48Hours } from './mocks/content/v1/availabilities';
import { noUserPlans } from './mocks/content/v1/user_plans';
import { emptyLibrary } from "./mocks/content/v3/user_library";
import { emptyWishlist } from './mocks/users/v1/wishlist';

export default {
  title: 'Organisms/CollectionItem',
  argTypes: {
    poster: {
      control: 'text'
    },
  },
  decorators: [withMock],
};

const Template = ({ label, ...args }) => {

  return createCollectionItem({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  Default: true,
  label: 'CollectionItem',
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

Default.parameters = {
  mockData: [
    itemLimitNotReached,
    assortedPlans,
    singleFilmRentableInYourRegion,
    availableNowUntil48Hours,
    noUserPlans,
    emptyLibrary,
    emptyWishlist
    ]
};