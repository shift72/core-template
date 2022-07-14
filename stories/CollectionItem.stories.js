import { createCollectionItem } from './CollectionItem';
import withMock from 'storybook-addon-mock';
import { itemLimitNotReached } from './mocks/shopping/v1/item_limit';
import { genericPlans } from './mocks/pricing/v1/plans';
import { showMultiple } from './mocks/pricing/v2/prices/show_multiple';
import { getAvailabilities } from './mocks/content/v1/availabilities';

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
    getAvailabilities()
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
    getAvailabilities()
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
