/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { act, cleanup, screen } from '@testing-library/react';
import React from 'react';
import 'setimmediate';
import WithChakraProvider from '../../../__test__/util/withChakraProvider';
import { VideoType } from '../../Item/ItemContainer';

import Video from './Video';

describe('forgetPageテスト', () => {
  afterEach(() => {
    cleanup();
  });
  it('video?.video_urlあり→iframeがレンダ―', () => {
    //props
    const expectedVideoTitle = 'expectedVideoTitle';
    const propVideo: VideoType = {
      id: '',
      title: expectedVideoTitle,
      created_at: '',
      video_url: 'testVideoUrl',
    };
    const expectedFetchedVideoUrl = 'expectedFetchedVideoUrl';

    WithChakraProvider(
      <Video video={propVideo} fetchedVideoUrl={expectedFetchedVideoUrl} />,
    );

    expect(screen.getByTestId('iframe')).toHaveAttribute(
      'title',
      expectedVideoTitle,
    );
    expect(screen.getByTestId('iframe')).toHaveAttribute(
      'src',
      expectedFetchedVideoUrl,
    );
  });
  it('video?.video_urlなし→Imageがレンダ―', () => {
    const propVideo: VideoType = {
      id: '',
      title: '',
      created_at: '',
      video_url: '',
    };

    const expectedFetchedVideoUrl = 'expectedFetchedVideoUrl';
    WithChakraProvider(
      <Video video={propVideo} fetchedVideoUrl={expectedFetchedVideoUrl} />,
    );
    expect(screen.getByTestId('image')).toHaveAttribute(
      'src',
      expectedFetchedVideoUrl,
    );
  });
});
