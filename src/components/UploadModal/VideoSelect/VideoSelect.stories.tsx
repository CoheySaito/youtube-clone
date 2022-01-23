import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import VideoSelect from './VideoSelect';

export default {
  title: 'UploadModal/VideoSelect',
  component: VideoSelect,
} as ComponentMeta<typeof VideoSelect>;

const Template: ComponentStory<typeof VideoSelect> = (args) => (
  <VideoSelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  videoURL: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
  createdURLs: [
    'http://img.youtube.com/vi/Auta2lagtw4/mqdefault.jpg',
    'http://img.youtube.com/vi/ha1Q5d-qusQ/mqdefault.jpg',
    'http://img.youtube.com/vi/jenWdylTtzs/mqdefault.jpg',
  ],
  selectedThumbnailUrl: 'http://img.youtube.com/vi/Auta2lagtw4/mqdefault.jpg',
};
