import { createAvailabilityLabel } from './AvailabilityLabel';
import withMock from 'storybook-addon-mock';
import { itemLimitNotReached } from './mocks/shopping/v1/item_limit';
import { genericPlans } from './mocks/pricing/v1/plans';
import { showMultiple } from './mocks/pricing/v2/prices/show_multiple';
import { getAvailabilities } from './mocks/content/v1/availabilities';

export default {
  title: 'Molecules/AvailabilityLabel',
  argTypes: {
    poster: {
      control: 'text'
    },
  },
  decorators: [withMock],
};


const Template = ({ label, ...args }) => {
  return createAvailabilityLabel({ label, ...args });
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