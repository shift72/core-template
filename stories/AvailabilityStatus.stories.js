import { createAvailabilityStatus } from './AvailabilityStatus';
import withMock from 'storybook-addon-mock';
import { itemLimitNotReached2 } from './mocks/item-limit-not-reached2';
import { pricingV1PlansNoPlans } from './mocks/pricing-v1-plans--no-plans';
import { showMultiple2 } from './mocks/show-multiple2';
import { getAvailabilitiesx } from './mocks/get-availabilitiesx';
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

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'AvailabilityStatus',
};
Primary.parameters = {
  mockData: [
    itemLimitNotReached2,
    pricingV1PlansNoPlans,
    showMultiple2,
    getAvailabilitiesx
    ]
};
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'AvailabilityStatus',
};
Secondary.parameters = {
  mockData: [
    itemLimitNotReached2,
    pricingV1PlansNoPlans,
    showMultiple2,
    getAvailabilitiesx
    ]
};
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'AvailabilityStatus',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'AvailabilityStatus',
};
