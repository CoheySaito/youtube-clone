import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import VideoSelectPresenter from './presenter';

export default {
  title: 'UploadModal/VideoSelectPresenter',
  component: VideoSelectPresenter,
} as ComponentMeta<typeof VideoSelectPresenter>;

const Template: ComponentStory<typeof VideoSelectPresenter> = (args) => (
  <VideoSelectPresenter {...args} />
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
