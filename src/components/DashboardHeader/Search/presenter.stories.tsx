import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import SearchPresenter from './presenter';
import { SerchQueryContext } from '../../../context/serchQueryContext';

//SerchQueryContext
const serchQuery = 'serchQuery';
const setSerchQuery = undefined;
export default {
  title: 'DashboardHeader/SearchPresenter',
  component: SearchPresenter,
  decorators: [
    (Story) => (
      <SerchQueryContext.Provider value={{ ...{ serchQuery, setSerchQuery } }}>
        <Story />
      </SerchQueryContext.Provider>
    ),
  ],
} as ComponentMeta<typeof SearchPresenter>;

const Template: ComponentStory<typeof SearchPresenter> = (args) => (
  <SearchPresenter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isOpen: false,
  onToggle: action('clicked'),
  isMobile: true,
};
