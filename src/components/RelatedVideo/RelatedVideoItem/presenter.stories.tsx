import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import RelatedVideoItemPresenter from './presenter';
import { VideoType } from '../../Item';

export default {
  title: 'RelatedVideo/RelatedVideoItemPresenter',
  component: RelatedVideoItemPresenter,
} as ComponentMeta<typeof RelatedVideoItemPresenter>;

const Template: ComponentStory<typeof RelatedVideoItemPresenter> = (args) => (
  <RelatedVideoItemPresenter {...args} />
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
