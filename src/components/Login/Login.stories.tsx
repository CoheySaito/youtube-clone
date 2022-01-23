import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Login from './Login';

export default {
  title: 'Login/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  loading: false,
};
