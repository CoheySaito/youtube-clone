import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonWithAlertDialogPresenter from './presenter';
import { LoginUserIdContext } from '../../context/loginUserIdrContext';
import { action } from '@storybook/addon-actions';

//LoginUserIdContext
const loginUserId = undefined;
const checkLocalStorage = () => undefined;
const resetLoginUserId = () => undefined;
export default {
  title: 'ButtonWithAlertDialog/ButtonWithAlertDialogPresenter',
  component: ButtonWithAlertDialogPresenter,
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
} as ComponentMeta<typeof ButtonWithAlertDialogPresenter>;

const Template: ComponentStory<typeof ButtonWithAlertDialogPresenter> = (
  args,
) => <ButtonWithAlertDialogPresenter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'ログアウト',
  isOpen: false,
  onOpen: action('clicked'),
};
