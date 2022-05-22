import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import HeaderUploadPresenter from './presenter';
import { ApolloProvider } from '@apollo/client';
import { initializeApollo } from '../../../lib/apolloClinet';
import { UploadModalContext } from '../../../context/uploadModalContext';

//ApolloProvider
const client = initializeApollo();
//UploadModalContext
const isOpen = false;
const onOpen = () => undefined;
const onClose = () => undefined;
export default {
  title: 'DashboardHeader/HeaderUploadPresenter',
  component: HeaderUploadPresenter,
  argTypes: { onOpen: { action: 'clicked' } },
  decorators: [
    (Story) => (
      <ApolloProvider {...{ client }}>
        <UploadModalContext.Provider value={{ ...{ isOpen, onOpen, onClose } }}>
          <Story />
        </UploadModalContext.Provider>
      </ApolloProvider>
    ),
  ],
} as ComponentMeta<typeof HeaderUploadPresenter>;

const Template: ComponentStory<typeof HeaderUploadPresenter> = (args) => (
  <HeaderUploadPresenter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  loginUserId: 'loginUserId',
  isOpen: false,
  onOpen: action('clicked'),
};
