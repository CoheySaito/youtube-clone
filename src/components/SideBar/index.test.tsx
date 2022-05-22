/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { cleanup, screen } from '@testing-library/react';
import React from 'react';
import 'setimmediate';
import WithChakraProvider from '../../__test__/util/withChakraProvider';

import { useLoginUserIdContext } from '../../context/loginUserIdrContext';
import { MockedProvider } from '@apollo/client/testing';
import { useUploadModalContext } from '../../context/uploadModalContext';
import SideBar from './index';
//mock
jest.mock('../../context/loginUserIdrContext');
const mockUseLoginUserIdContext = useLoginUserIdContext as jest.MockedFunction<
  typeof useLoginUserIdContext
>;
jest.mock('../../context/uploadModalContext');
const mockUseUploadModalContext = useUploadModalContext as jest.MockedFunction<
  typeof useUploadModalContext
>;

describe('SideBarテスト', () => {
  describe('初期表示確認', () => {
    beforeEach(() => {
      //Mock
      mockUseLoginUserIdContext.mockReturnValue({
        loginUserId: '',
        checkLocalStorage: null,
        resetLoginUserId: null,
      });
    });
    afterEach(() => {
      cleanup();
    });
    it('表示、リンク確認:ホーム', () => {
      WithChakraProvider(<SideBar />);
      expect(screen.getByText('ホーム')).toBeInTheDocument();
      expect(screen.getByTestId('homeTest')).toHaveAttribute('href', '/');
    });
    it('表示、リンク確認:トレンド', () => {
      WithChakraProvider(<SideBar />);
      expect(screen.getByText('トレンド')).toBeInTheDocument();
      expect(screen.getByTestId('trendTest')).toHaveAttribute('href', '/');
    });
    it('表示、リンク確認:登録チャンネル', () => {
      WithChakraProvider(<SideBar />);
      expect(screen.getByText('登録チャンネル')).toBeInTheDocument();
      expect(screen.getByTestId('channelTest')).toHaveAttribute('href', '/');
    });
  });

  describe('ログイン、ログアウトスイッチ', () => {
    it('loginId===true,ログアウト表示', () => {
      //Mock
      mockUseLoginUserIdContext.mockReturnValue({
        loginUserId: 'testId',
        checkLocalStorage: null,
        resetLoginUserId: null,
      });

      // const useDisclosureSpy = jest.spyOn(chakraUi, 'useDisclosure');

      // useDisclosureSpy.mockReturnValue({
      //   isOpen: true,
      //   onOpen: jest.fn(),
      //   onClose: jest.fn(),
      //   onToggle: jest.fn(),
      //   isControlled: false,
      //   getButtonProps: jest.fn(),
      //   getDisclosureProps: jest.fn(),
      // });

      mockUseUploadModalContext.mockReturnValue({
        isOpen: true,
        onOpen: jest.fn(),
        onClose: jest.fn(),
      });

      WithChakraProvider(
        <MockedProvider mocks={[]}>
          <SideBar />
        </MockedProvider>,
      );
      expect(screen.getByTestId('logoutText')).toBeInTheDocument();
    });
    it('loginId===false,ログイン表示', () => {
      //Mock
      mockUseLoginUserIdContext.mockReturnValue({
        loginUserId: '',
        checkLocalStorage: null,
        resetLoginUserId: null,
      });

      WithChakraProvider(
        <MockedProvider mocks={[]}>
          <SideBar />
        </MockedProvider>,
      );
      expect(screen.getByText('ログイン')).toBeInTheDocument();
    });
  });
});
