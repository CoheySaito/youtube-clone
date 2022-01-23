import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import RelatedVideo, { RelatedVideoProps } from './RelatedVideo';

export default {
  title: 'RelatedVideo/RelatedVideo',
  component: RelatedVideo,
} as ComponentMeta<typeof RelatedVideo>;

const Template: ComponentStory<typeof RelatedVideo> = (args) => (
  <RelatedVideo {...args} />
);

export const Primary = Template.bind({});
const propsData: RelatedVideoProps = {
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
