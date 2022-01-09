/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

import React from 'react';
import 'setimmediate';
import WithChakraProvider from '../../__test__/util/withChakraProvider';
import * as formatDateImport from '../../utils/formatDate/formatDate';
import useFetchFirebaseStorage from '../../hooks/useFetchFirebaseStorage/useFetchFirebaseStorage';
import ItemContainer, { VideoType } from './ItemContainer';

//mock
jest.mock('../../hooks/useFetchFirebaseStorage/useFetchFirebaseStorage');
const mockeduseFetchFirebaseStorage =
  useFetchFirebaseStorage as jest.MockedFunction<
    typeof useFetchFirebaseStorage
  >;
describe('Itemテスト', () => {
  it('表示確認', () => {
    //mock
    //formatDate
    const ecpectedTime = 'ecpectedTime';
    const formatDateSpy = jest.spyOn(formatDateImport, 'formatDate');
    formatDateSpy.mockReturnValue({ datetime: ecpectedTime, isNew: true });

    //useItem
    const expectedFetchedThumbnailUrl = 'expectedFetchedThumbnailUrl';
    const expectedfetchedAvatarlUrl = 'expectedfetchedAvatarlUrl';
    mockeduseFetchFirebaseStorage
      .mockReturnValueOnce(expectedFetchedThumbnailUrl)
      .mockReturnValueOnce(expectedfetchedAvatarlUrl);

    //data
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
    //render
    WithChakraProvider(<ItemContainer video={propVideo} />);
    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    expect(screen.getByText(`${expectedViews}回視聴`)).toBeInTheDocument();
    expect(screen.getByText(expectedUsername)).toBeInTheDocument();
    expect(screen.getByText(ecpectedTime)).toBeInTheDocument();
    expect(screen.getByTestId('image')).toHaveAttribute(
      'src',
      expectedFetchedThumbnailUrl,
    );
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });
});
