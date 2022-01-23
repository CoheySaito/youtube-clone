import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import SignUp from './SignUp';

export default {
  title: 'SignUp/SignUp',
  component: SignUp,
} as ComponentMeta<typeof SignUp>;

const Template: ComponentStory<typeof SignUp> = (args) => <SignUp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  submitLoading: false,
};
