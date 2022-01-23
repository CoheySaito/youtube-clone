import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import UserIcon from './UserIcon';
import { LoginUserIdContext } from '../../../context/loginUserIdrContext';

//LoginUserIdContext
const loginUserId = undefined;
const checkLocalStorage = () => undefined;
const resetLoginUserId = () => undefined;
export default {
  title: 'DashboardHeader/UserIcon',
  component: UserIcon,
  decorators: [
    (Story) => (
      <LoginUserIdContext.Provider
        value={{ ...{ loginUserId, checkLocalStorage, resetLoginUserId } }}
      >
        <Story />
      </LoginUserIdContext.Provider>
    ),
  ],
} as ComponentMeta<typeof UserIcon>;

const Template: ComponentStory<typeof UserIcon> = (args) => (
  <UserIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  loginUserId: 'loginUserId',
  fetchedAvatarlUrl: 'https://i.pravatar.cc/100',
};
