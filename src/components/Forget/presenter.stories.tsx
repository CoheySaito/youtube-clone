import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ForgetPresenter from './presenter';

export default {
  title: 'Forget/ForgetPresenter',
  component: ForgetPresenter,
} as ComponentMeta<typeof ForgetPresenter>;

const Template: ComponentStory<typeof ForgetPresenter> = (args) => (
  <ForgetPresenter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  loading: false,
};
