import { createForgotPasswordForm } from './ForgotPasswordForm';
import withMock from 'storybook-addon-mock';
import { itemLimitNotReached } from './../mocks/shopping/v1/item_limit';
import { assortedPlans } from './../mocks/pricing/v1/plans';
import { singleFilmRentableInYourRegion } from './../mocks/pricing/v2/prices/show_multiple';
import { availableNowUntil48Hours } from './../mocks/content/v1/availabilities';
import { customDocs } from './../functions/customDocs'

export default {
  title: 'Molecules/ForgotPasswordForm',
  argTypes: {
    poster: {
      control: 'text'
    },
  },
  parameters: {
    docs: { page: customDocs(`<h3>No docs written yet<h3>`) }
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
    assortedPlans,
    singleFilmRentableInYourRegion,
    availableNowUntil48Hours
    ]
};