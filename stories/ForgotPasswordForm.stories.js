import { createForgotPasswordForm } from './ForgotPasswordForm';
import withMock from 'storybook-addon-mock';
import { itemLimitNotReached } from './mocks/shopping/v1/item_limit';
import { genericPlans } from './mocks/pricing/v1/plans';
import { showMultiple } from './mocks/pricing/v2/prices/show_multiple';
import { getAvailabilities } from './mocks/content/v1/availabilities';

export default {
  title: 'Molecules/ForgotPasswordForm',
  argTypes: {
    poster: {
      control: 'text'
    },
  },
  decorators: [withMock],
};


const Template = ({ label, ...args }) => {
  return createForgotPasswordForm({ label, ...args });
};


export const Default = Template.bind({});

Default.parameters = {
  mockData: [
    itemLimitNotReached,
    genericPlans,
    showMultiple,
    getAvailabilities(22)
    ]
};