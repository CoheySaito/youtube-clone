import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import HamburgerButtonPresenter from './presenter';
import { LoginUserIdContext } from '../../../context/loginUserIdrContext';

//LoginUserIdContext
const loginUserId = undefined;
const checkLocalStorage = () => undefined;
const resetLoginUserId = () => undefined;

export default {
  title: 'DashboardHeader/HamburgerButton',
  component: HamburgerButtonPresenter,
  decorators: [
    (Story) => (
      <LoginUserIdContext.Provider
        value={{ ...{ loginUserId, checkLocalStorage, resetLoginUserId } }}
      >
        <Story />
      </LoginUserIdContext.Provider>
    ),
  ],
} as ComponentMeta<typeof HamburgerButtonPresenter>;

const Template: ComponentStory<typeof HamburgerButtonPresenter> = (args) => (
  <HamburgerButtonPresenter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isOpenDrawer: false,
  onOpenDrawer: action('clicked'),
};
