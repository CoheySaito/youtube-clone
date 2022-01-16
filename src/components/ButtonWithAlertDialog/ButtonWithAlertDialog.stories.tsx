import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonWithAlertDialog from './ButtonWithAlertDialog';
import { LoginUserIdContext } from '../../context/loginUserIdrContext';
import { action } from '@storybook/addon-actions';

//LoginUserIdContext
const loginUserId = undefined;
const checkLocalStorage = () => undefined;
const resetLoginUserId = () => undefined;
export default {
  title: 'ButtonWithAlertDialog',
  component: ButtonWithAlertDialog,
  argTypes: { onOpen: { action: 'clicked' } },
  decorators: [
    (Story) => (
      <LoginUserIdContext.Provider
        value={{ ...{ loginUserId, checkLocalStorage, resetLoginUserId } }}
      >
        <Story />
      </LoginUserIdContext.Provider>
    ),
  ],
} as ComponentMeta<typeof ButtonWithAlertDialog>;

const Template: ComponentStory<typeof ButtonWithAlertDialog> = (args) => (
  <ButtonWithAlertDialog {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'ログアウト',
  isOpen: false,
  onOpen: action('clicked'),
};
