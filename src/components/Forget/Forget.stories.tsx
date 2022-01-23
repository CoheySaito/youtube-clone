import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Forget from './Forget';

export default {
  title: 'Forget/Forget',
  component: Forget,
} as ComponentMeta<typeof Forget>;

const Template: ComponentStory<typeof Forget> = (args) => <Forget {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  loading: false,
};
