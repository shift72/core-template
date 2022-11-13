import { createButton } from './Button';
import { customDocs } from './../functions/customDocs'

export default {
  title: 'Atoms/Button',
  parameters: {
    docs: { page: customDocs(`<h3>No docs written yet<h3>`) }
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});