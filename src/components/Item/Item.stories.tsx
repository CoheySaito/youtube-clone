import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import Item from './Item';
import { VideoType } from './ItemContainer';

const expectedTitle = 'expectedTitle';
const expectedViews = 1;
const expectedUsername = 'expectedUsername';
const propVideo: VideoType = {
  id: '',
  title: expectedTitle,
  description: '',
  created_at: '',
  thumbnail_url: '',
  video_url: '',
  views: expectedViews,
  user: {
    name: expectedUsername,
    profile_photo_url: '',
  },
};
export default {
  title: 'Item/Item',
  component: Item,
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args) => <Item {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  video: propVideo,
  fetchedThumbnailUrl:
    'http://img.youtube.com/vi/Auta2lagtw4/maxresdefault.jpg',
  fetchedAvatarlUrl: 'https://i.pravatar.cc/100',
  datetime: '2022/02/22',
};
