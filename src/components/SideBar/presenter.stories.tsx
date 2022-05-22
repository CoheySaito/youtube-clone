import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import SideBarPresenter from './presenter';
import { LoginUserIdContext } from '../../context/loginUserIdrContext';
import { ApolloProvider } from '@apollo/client';
import { initializeApollo } from '../../lib/apolloClinet';
import { UploadModalContext } from '../../context/uploadModalContext';

//ApolloProvider
const client = initializeApollo();
//LoginUserIdContext
const loginUserId = undefined;
const checkLocalStorage = () => undefined;
const resetLoginUserId = () => undefined;
//UploadModalContext
const isOpen = false;
const onOpen = () => undefined;
const onClose = () => undefined;
export default {
  title: 'SideBar/SideBarPresenter',
  component: SideBarPresenter,
  decorators: [
    (Story) => (
      <ApolloProvider {...{ client }}>
        <UploadModalContext.Provider value={{ ...{ isOpen, onOpen, onClose } }}>
          <LoginUserIdContext.Provider
            value={{ ...{ loginUserId, checkLocalStorage, resetLoginUserId } }}
          >
            <Story />
          </LoginUserIdContext.Provider>
        </UploadModalContext.Provider>
      </ApolloProvider>
    ),
  ],
} as ComponentMeta<typeof SideBarPresenter>;

const Template: ComponentStory<typeof SideBarPresenter> = (args) => (
  <SideBarPresenter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  loginUserId: 'loginUserId',
  isOpen: false,
  onOpen: action('clicked'),
};
