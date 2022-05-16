import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import BasicPagination from '.';

export default {
  title: 'BasicPagination/BasicPagination',
  component: BasicPagination,
} as ComponentMeta<typeof BasicPagination>;

const Template: ComponentStory<typeof BasicPagination> = (args) => (
  <BasicPagination {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  current: 1,
  setCurrent: () => undefined,
  pageSize: 8,
  total: 16,
};
