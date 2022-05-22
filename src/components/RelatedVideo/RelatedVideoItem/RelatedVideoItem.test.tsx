/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { cleanup, screen } from '@testing-library/react';
import React from 'react';
import 'setimmediate';
import WithChakraProvider from '../../../__test__/util/withChakraProvider';
import * as formatDateImport from '../../../utils/formatDate/formatDate';

import useFetchFirebaseStorage from '../../../hooks/useFetchFirebaseStorage/useFetchFirebaseStorage';
import { VideoType } from '../../Item';
import RelatedVideoItemContainer from './RelatedVideoItemContainer';

//mock
//useFetchFirebaseStorage
jest.mock('../../../hooks/useFetchFirebaseStorage/useFetchFirebaseStorage');

describe('RelatedVideoItem', () => {
  afterEach(() => {
    cleanup();
  });
  it('表示確認:サムネイル、タイトル、username、視聴回数、日付', () => {
    //mock
    //formatDate
    const ecpectedTime = 'ecpectedTime';
    const formatDateSpy = jest.spyOn(formatDateImport, 'formatDate');
    formatDateSpy.mockReturnValue({ datetime: ecpectedTime, isNew: true });

    //useFetchFirebaseStorage
    const expectedFetchedThumbnailUrl = 'expectedFetchedThumbnailUrl';
    const mockedUseFetchFirebaseStorage =
      useFetchFirebaseStorage as jest.MockedFunction<
        typeof useFetchFirebaseStorage
      >;
    mockedUseFetchFirebaseStorage.mockReturnValue(expectedFetchedThumbnailUrl);

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

    //render
    WithChakraProvider(<RelatedVideoItemContainer video={propVideo} />);
    expect(screen.getByTestId('image')).toHaveAttribute(
      'src',
      expectedFetchedThumbnailUrl,
    );
    expect(screen.getByText(expectedVideoTitle)).toBeInTheDocument();
    expect(screen.getByText(expectedUserName)).toBeInTheDocument();
    expect(screen.getByText(`${expectedViews}回視聴`)).toBeInTheDocument();
    expect(screen.getByText(ecpectedTime)).toBeInTheDocument();
  });
});
