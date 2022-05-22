import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import SignUpPresenter from './presenter';

export default {
  title: 'SignUp/SignUpPresenter',
  component: SignUpPresenter,
} as ComponentMeta<typeof SignUpPresenter>;

const Template: ComponentStory<typeof SignUpPresenter> = (args) => (
  <SignUpPresenter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  submitLoading: false,
};
