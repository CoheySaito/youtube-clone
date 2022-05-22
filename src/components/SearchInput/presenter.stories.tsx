import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import SearchInputPresenter from './presenter';

export default {
  title: 'SearchInput/SearchInputPresenter',
  component: SearchInputPresenter,
} as ComponentMeta<typeof SearchInputPresenter>;

const Template: ComponentStory<typeof SearchInputPresenter> = (args) => (
  <SearchInputPresenter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
