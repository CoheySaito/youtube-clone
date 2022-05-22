/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { cleanup, screen } from '@testing-library/react';
import WithChakraProvider from '../../../__test__/util/withChakraProvider';
import useUserIcon from '../../../hooks/useUserIcon/useUserIcon';
import React from 'react';
import { useLoginUserIdContext } from '../../../context/loginUserIdrContext';
import UserIcon from './index';

//mock
//useUserIcon
jest.mock('../../../hooks/useUserIcon/useUserIcon');
const mockedUseUserIcon = useUserIcon as jest.MockedFunction<
  typeof useUserIcon
>;

//useLoginUserIdContext
jest.mock('../../../context/loginUserIdrContext');

describe('UserIconテスト', () => {
  afterEach(() => {
    cleanup();
  });

  it('loginUserId:false→ログインボタン表示、loginへリンク', async () => {
    //mock
    mockedUseUserIcon.mockReturnValue({ fetchedAvatarlUrl: '' });

    //render
    const loginUserId = '';
    const data = {};
    WithChakraProvider(<UserIcon {...{ loginUserId, data }} />);

    expect(screen.getByText('ログイン')).toBeInTheDocument();
    expect(screen.getByTestId('loginbutton')).toHaveAttribute('href', '/login');
  });
  it('loginUserId:true→fetchedAvatarlUrl画像表示', () => {
    //mock
    const expectedFetchedAvatarlUrl = 'testurl';
    mockedUseUserIcon.mockReturnValue({
      fetchedAvatarlUrl: expectedFetchedAvatarlUrl,
    });

    (useLoginUserIdContext as jest.MockedFunction<any>).mockReturnValue({
      resetLoginUserId: null,
    });

    //render
    const loginUserId = 'testId';
    const data = {};
    WithChakraProvider(<UserIcon {...{ loginUserId, data }} />);

    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });
});
