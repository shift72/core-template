import { createCollectionItem } from './CollectionItem';
import withMock from 'storybook-addon-mock';
import { itemLimitNotReached } from './mocks/item-limit-not-reached';
import { genericPlans } from './mocks/generic-plans';
import { showMultiple } from './mocks/show-multiple';
import { getAvailabilities } from './mocks/get-availabilities';

export default {
  title: 'Organisms/CollectionItem',
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
  return createCollectionItem({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'CollectionItem',
};
Primary.parameters = {
  mockData: [
    itemLimitNotReached,
    genericPlans,
    showMultiple,
    getAvailabilities
    ]
};
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'CollectionItem',
};
Secondary.parameters = {
  mockData: [
    itemLimitNotReached,
    genericPlans,
    showMultiple,
    getAvailabilities
    ]
};
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'CollectionItem',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'CollectionItem',
};
