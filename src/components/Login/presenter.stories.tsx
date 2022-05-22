import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import LoginPresenter from './presenter';

export default {
  title: 'Login/LoginPresenter',
  component: LoginPresenter,
} as ComponentMeta<typeof LoginPresenter>;

const Template: ComponentStory<typeof LoginPresenter> = (args) => (
  <LoginPresenter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  loading: false,
};
