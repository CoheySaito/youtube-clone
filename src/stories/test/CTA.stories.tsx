import React from 'react';
import { Story, ComponentMeta, ComponentStory } from '@storybook/react';

import { CTA } from './CTA';

export default {
  title: 'CTA',
  component: CTA,
  argTypes: {},
} as ComponentMeta<typeof CTA>;

const Template: ComponentStory<typeof CTA> = (args) => <CTA {...args} />;

export const Primary = Template.bind({});
