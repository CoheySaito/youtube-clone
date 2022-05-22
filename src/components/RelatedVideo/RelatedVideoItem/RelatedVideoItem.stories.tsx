import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import RelatedVideoItem from './RelatedVideoItem';
import { VideoType } from '../../Item';

export default {
  title: 'RelatedVideo/RelatedVideoItem',
  component: RelatedVideoItem,
} as ComponentMeta<typeof RelatedVideoItem>;

const Template: ComponentStory<typeof RelatedVideoItem> = (args) => (
  <RelatedVideoItem {...args} />
);

export const Primary = Template.bind({});
//props
const expectedVideoTitle = 'expectedVideoTitle';
const expectedUserName = 'expectedUserName';
const expectedViews = 777;
const propVideo: VideoType = {
  id: '',
  title: expectedVideoTitle,
  created_at: 'createdAt',
  views: expectedViews,
  user: {
    name: expectedUserName,
  },
};

Primary.args = {
  video: propVideo,
  fetchedThumbnailUrl: 'http://img.youtube.com/vi/Auta2lagtw4/hqdefault.jpg',
  datetime: '2022/02/22',
};
