import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import SideBarUploadItem from './SideBarUploadItem';
import { ApolloProvider } from '@apollo/client';
import { LoginUserIdContext } from '../../../context/loginUserIdrContext';
import { UploadModalContext } from '../../../context/uploadModalContext';
import { initializeApollo } from '../../../lib/apolloClinet';

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
  title: 'SideBar/SideBarUploadItem',
  component: SideBarUploadItem,
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
} as ComponentMeta<typeof SideBarUploadItem>;

const Template: ComponentStory<typeof SideBarUploadItem> = (args) => (
  <SideBarUploadItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  onOpen: action('clicked'),
  onClose: action('clicked'),
};
