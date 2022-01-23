import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import DashboardHeader from './DashboardHeader';
import { LoginUserIdContext } from '../../context/loginUserIdrContext';
import { SerchQueryContext } from '../../context/serchQueryContext';
import { UploadModalContext } from '../../context/uploadModalContext';

//LoginUserIdContext
const loginUserId = undefined;
const checkLocalStorage = () => undefined;
const resetLoginUserId = () => undefined;
//SerchQueryContext
const serchQuery = 'serchQuery';
const setSerchQuery = undefined;
//UploadModalContext
const isOpen = false;
const onOpen = () => undefined;
const onClose = () => undefined;

export default {
  title: 'DashboardHeader',
  component: DashboardHeader,
  argTypes: {},
  decorators: [
    (Story) => (
      <UploadModalContext.Provider value={{ ...{ isOpen, onOpen, onClose } }}>
        <SerchQueryContext.Provider
          value={{ ...{ serchQuery, setSerchQuery } }}
        >
          <LoginUserIdContext.Provider
            value={{ ...{ loginUserId, checkLocalStorage, resetLoginUserId } }}
          >
            <Story />
          </LoginUserIdContext.Provider>
        </SerchQueryContext.Provider>
      </UploadModalContext.Provider>
    ),
  ],
} as ComponentMeta<typeof DashboardHeader>;

const Template: ComponentStory<typeof DashboardHeader> = (args) => (
  <DashboardHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'ログアウト',
  isOpen: false,
  onOpen: action('clicked'),
};
