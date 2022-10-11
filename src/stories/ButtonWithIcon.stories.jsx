import React from 'react';

import { ButtonWithIcon } from '../common/Button';
import { FaShareAlt } from 'react-icons/fa';

export default {
  title: 'Common/Button',
  component: ButtonWithIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ButtonWithIcon {...args} />;

export const buttonWithIcon = Template.bind({});
buttonWithIcon.args = {
  title: 'Share',
  style: {
    backgroundColor: "black",
    color: "white"
  },
  IconComponent: <FaShareAlt />
};
