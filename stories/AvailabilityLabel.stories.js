import { createAvailabilityLabel } from './AvailabilityLabel';
import withMock from 'storybook-addon-mock';
import { itemLimitNotReached } from './mocks/shopping/v1/item_limit';
import { genericPlans } from './mocks/pricing/v1/plans';
import { showMultiple } from './mocks/pricing/v2/prices/show_multiple';
import { getAvailabilities } from './mocks/content/v1/availabilities';

export default {
  title: 'Molecules/AvailabilityLabel',
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
  return createAvailabilityLabel({ label, ...args });
};

export const AvailableUntil = Template.bind({});
AvailableUntil.args = {
  primary: true,
  label: 'AvailabilityLabel',
};
AvailableUntil.parameters = {
  mockData: [
    itemLimitNotReached,
    genericPlans,
    showMultiple,
    getAvailabilities
    ]
};