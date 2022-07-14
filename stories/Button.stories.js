import { createButton } from './Button';

export default {
  title: 'Atoms/Button',
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});