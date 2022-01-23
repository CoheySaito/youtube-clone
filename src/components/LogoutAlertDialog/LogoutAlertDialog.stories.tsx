import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LogoutAlertDialog from './LogoutAlertDialog';

export default {
  title: 'LogoutAlertDialog/LogoutAlertDialog',
  component: LogoutAlertDialog,
  argTypes: { onClose: { action: 'clicked' } },
} as ComponentMeta<typeof LogoutAlertDialog>;

const Template: ComponentStory<typeof LogoutAlertDialog> = (args) => (
  <LogoutAlertDialog {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
};
