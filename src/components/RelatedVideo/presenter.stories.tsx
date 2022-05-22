import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import RelatedVideoPresenter, { Props } from './presenter';

export default {
  title: 'RelatedVideo/RelatedVideoPresenter',
  component: RelatedVideoPresenter,
} as ComponentMeta<typeof RelatedVideoPresenter>;

const Template: ComponentStory<typeof RelatedVideoPresenter> = (args) => (
  <RelatedVideoPresenter {...args} />
);

export const Primary = Template.bind({});
const propsData: Props = {
  data: {
    videos: [
      { id: 'id1', title: 'title1', created_at: '2022/02/22' },
      { id: 'id2', title: 'title2', created_at: '2022/02/22' },
    ],
  },
  id: 'id1',
};
Primary.args = {
  loading: false,
  id: '',
  data: propsData.data,
};
