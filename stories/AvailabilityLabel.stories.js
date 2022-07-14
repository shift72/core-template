import { createAvailabilityLabel } from './AvailabilityLabel';
import withMock from 'storybook-addon-mock';
import { itemLimitNotReached } from './mocks/item-limit-not-reached';
import { genericPlans } from './mocks/pricing/v1/plans';
import { showMultiple } from './mocks/show-multiple';
import { getAvailabilities } from './mocks/get-availabilities';

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

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'AvailabilityLabel',
};
Primary.parameters = {
  mockData: [
    itemLimitNotReached,
    genericPlans,
    showMultiple,
    getAvailabilities
    ]
};