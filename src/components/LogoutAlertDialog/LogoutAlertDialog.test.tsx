/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { cleanup, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import 'setimmediate';
import WithChakraProvider from '../../__test__/util/withChakraProvider';
import * as LoginUserIdrContext from '../../context/loginUserIdrContext';
import * as Logout from '../../hooks/useLogout/useLogout';
import LogoutAlertDialog from './LogoutAlertDialog';

describe('LogoutAlertDialogテスト', () => {
  afterEach(() => {
    cleanup();
  });
  it('表示確認:ログアウト確認,ボタン;キャンセル,ログアウト:キャンセル', () => {
    //Mock
    const LoginUserIdrContextSpy = jest.spyOn(
      LoginUserIdrContext,
      'useLoginUserIdContext',
    );
    LoginUserIdrContextSpy.mockReturnValue({
      loginUserId: '',
      resetLoginUserId: jest.fn(),
      checkLocalStorage: jest.fn(),
    });

    const props = { isOpen: true, onClose: () => {} };
    WithChakraProvider(<LogoutAlertDialog {...props} />);
    expect(screen.getByText('ログアウト確認')).toBeInTheDocument();
  });
  it('キャンセルボタン押下→onCloseがcall', () => {
    //Mock
    const LoginUserIdrContextSpy = jest.spyOn(
      LoginUserIdrContext,
      'useLoginUserIdContext',
    );

    LoginUserIdrContextSpy.mockReturnValue({
      loginUserId: '',
      resetLoginUserId: jest.fn(),
      checkLocalStorage: jest.fn(),
    });

    //render
    const expectedOnclose = jest.fn();
    const props = { isOpen: true, onClose: expectedOnclose };
    WithChakraProvider(<LogoutAlertDialog {...props} />);

    //WHEN
    act(() => {
      userEvent.click(screen.getByRole('button', { name: 'キャンセル' }));
    });
    //THEN
    expect(expectedOnclose).toBeCalledTimes(1);
  });
  it('ログアウトボタン押下→logoutがcall', async () => {
    //Mock
    const LoginUserIdrContextSpy = jest.spyOn(
      LoginUserIdrContext,
      'useLoginUserIdContext',
    );

    const expectedresetLoginUserId = jest.fn();
    LoginUserIdrContextSpy.mockReturnValue({
      loginUserId: '',
      resetLoginUserId: expectedresetLoginUserId,
      checkLocalStorage: jest.fn(),
    });

    const useLogouttSpy = jest.spyOn(Logout, 'useLogout');

    const expectedLogout = jest.fn();
    useLogouttSpy.mockReturnValue({
      logout: expectedLogout,
    });

    //render
    const expectedOnclose = jest.fn();
    const props = { isOpen: true, onClose: expectedOnclose };
    WithChakraProvider(<LogoutAlertDialog {...props} />);

    //WHEN
    act(() => {
      userEvent.click(screen.getByRole('button', { name: 'ログアウト' }));
    });
    //THEN
    await expect(expectedLogout).toBeCalledTimes(1);
    expect(expectedOnclose).toBeCalledTimes(1);
    expect(expectedresetLoginUserId).toBeCalledTimes(1);
  });
});
