import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import Search from './Search';
import { SerchQueryContext } from '../../../context/serchQueryContext';

//SerchQueryContext
const serchQuery = 'serchQuery';
const setSerchQuery = undefined;
export default {
  title: 'DashboardHeader/Search',
  component: Search,
  decorators: [
    (Story) => (
      <SerchQueryContext.Provider value={{ ...{ serchQuery, setSerchQuery } }}>
        <Story />
      </SerchQueryContext.Provider>
    ),
  ],
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: false,
  onToggle: action('clicked'),
  isMobile: true,
};
