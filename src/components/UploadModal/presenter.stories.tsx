import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import UploadModal from './presenter';

export default {
  title: 'UploadModal/UploadModal',
  component: UploadModal,
} as ComponentMeta<typeof UploadModal>;

const Template: ComponentStory<typeof UploadModal> = (args) => (
  <UploadModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  onClose: action('clicked'),
  uploadLoading: false,
};
