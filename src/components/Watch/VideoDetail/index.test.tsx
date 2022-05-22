/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { cleanup, screen } from '@testing-library/react';
import React from 'react';
import 'setimmediate';
import WithChakraProvider from '../../../__test__/util/withChakraProvider';
import * as formatDateImport from '../../../utils/formatDate/formatDate';
import VideoDetail, { VideosByPkType } from './index';

describe('VideoDetailテスト', () => {
  afterEach(() => {
    cleanup();
  });
  it('表示確認:タイトル、視聴回数、日付、avatar、ユーザー名、視聴回数、説明', () => {
    //mock
    //formatDate
    const ecpectedTime = 'ecpectedTime';
    const formatDateSpy = jest.spyOn(formatDateImport, 'formatDate');
    formatDateSpy.mockReturnValue({ datetime: ecpectedTime, isNew: true });

    //props
    const expectedVideoTitle = 'expectedVideoTitle';
    const expectedViews = 777;
    const expectedUserName = 'expectedUserName';
    const expectedNumberOfSubscribers = 111;
    const expectedDescription = 'expectedDescription';

    type NewType = VideosByPkType;

    const propVideo: NewType = {
      id: '',
      title: expectedVideoTitle,
      created_at: ' createdAt',
      views: expectedViews,
      description: expectedDescription,
      user: {
        name: expectedUserName,
        number_of_subscribers: expectedNumberOfSubscribers,
      },
    };
    const expectedFetchedAvatarlUrl = 'expectedFetchedAvatarlUrl';

    WithChakraProvider(
      <VideoDetail
        video={propVideo}
        fetchedAvatarlUrl={expectedFetchedAvatarlUrl}
      />,
    );
    expect(screen.getByText(expectedVideoTitle)).toBeInTheDocument();
    expect(screen.getByText(`${expectedViews}回視聴`)).toBeInTheDocument();
    expect(screen.getByText(ecpectedTime)).toBeInTheDocument();
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
    expect(
      screen.getByText(`${expectedNumberOfSubscribers} subscribers`),
    ).toBeInTheDocument();
    expect(screen.getByText(expectedDescription)).toBeInTheDocument();
  });
});
