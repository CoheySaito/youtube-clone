import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LogoutAlertDialogPresenter from './presenter';

export default {
  title: 'LogoutAlertDialog/LogoutAlertDialogPresenter',
  component: LogoutAlertDialogPresenter,
  argTypes: { onClose: { action: 'clicked' } },
} as ComponentMeta<typeof LogoutAlertDialogPresenter>;

const Template: ComponentStory<typeof LogoutAlertDialogPresenter> = (args) => (
  <LogoutAlertDialogPresenter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
};
