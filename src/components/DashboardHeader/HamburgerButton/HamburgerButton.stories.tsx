import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import HamburgerButton from './HamburgerButton';
import { LoginUserIdContext } from '../../../context/loginUserIdrContext';

//LoginUserIdContext
const loginUserId = undefined;
const checkLocalStorage = () => undefined;
const resetLoginUserId = () => undefined;

export default {
  title: 'DashboardHeader/HamburgerButton',
  component: HamburgerButton,
  decorators: [
    (Story) => (
      <LoginUserIdContext.Provider
        value={{ ...{ loginUserId, checkLocalStorage, resetLoginUserId } }}
      >
        <Story />
      </LoginUserIdContext.Provider>
    ),
  ],
} as ComponentMeta<typeof HamburgerButton>;

const Template: ComponentStory<typeof HamburgerButton> = (args) => (
  <HamburgerButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isOpenDrawer: false,
  onOpenDrawer: action('clicked'),
};
