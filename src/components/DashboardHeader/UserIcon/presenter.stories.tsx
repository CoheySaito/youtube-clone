import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import UserIconPresenter from './presenter';
import { LoginUserIdContext } from '../../../context/loginUserIdrContext';

//LoginUserIdContext
const loginUserId = undefined;
const checkLocalStorage = () => undefined;
const resetLoginUserId = () => undefined;
export default {
  title: 'DashboardHeader/UserIconPresenter',
  component: UserIconPresenter,
  decorators: [
    (Story) => (
      <LoginUserIdContext.Provider
        value={{ ...{ loginUserId, checkLocalStorage, resetLoginUserId } }}
      >
        <Story />
      </LoginUserIdContext.Provider>
    ),
  ],
} as ComponentMeta<typeof UserIconPresenter>;

const Template: ComponentStory<typeof UserIconPresenter> = (args) => (
  <UserIconPresenter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  loginUserId: 'loginUserId',
  fetchedAvatarlUrl: 'https://i.pravatar.cc/100',
};
