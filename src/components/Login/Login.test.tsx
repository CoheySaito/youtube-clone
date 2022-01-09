/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { act, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import 'setimmediate';
import WithChakraProvider from '../../__test__/util/withChakraProvider';

import firebase from '../../utils/firebase/firebaseConfig';
import LoginContainer from './LoginContainer';

//mock
jest.mock('../../utils/firebase/firebaseConfig');

describe('loginPageテスト', () => {
  afterEach(() => {
    cleanup();
  });

  it('画面表示確認', async () => {
    WithChakraProvider(<LoginContainer />);

    expect(screen.getByText('アカウント作成はこちら')).toBeInTheDocument();
    expect(
      screen.getByText('パスワードを忘れた場合はこちら'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'ログイン' }),
    ).toBeInTheDocument();
  });

  it('アカウント作成はこちら：signup画面へのリンクあり', async () => {
    WithChakraProvider(<LoginContainer />);
    expect(screen.getByTestId('fromLoginToSignup')).toHaveAttribute(
      'href',
      '/signup',
    );
  });

  it('パスワードを忘れた場合はこちら：forget画面へのリンクあり', async () => {
    WithChakraProvider(<LoginContainer />);
    expect(screen.getByTestId('fromLoginToForget')).toHaveAttribute(
      'href',
      '/forget',
    );
  });

  describe('ログイン実行、ボタンを押下', () => {
    it('メールアドレス入力無し→画面変わらず', async () => {
      WithChakraProvider(<LoginContainer />);
      await act(async () => {
        userEvent.click(screen.getByRole('button'));
      });
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('入力正常系', async () => {
      const expectedEmail = 'test@g.mail';
      const expectedPassword = 'testpass';
      const expectedSignInWithEmailAndPassword = jest.fn();

      //Mock
      (firebase.auth as jest.MockedFunction<any>).mockReturnValue({
        signInWithEmailAndPassword: expectedSignInWithEmailAndPassword,
      });

      //alert Mock
      window.alert = jest.fn();

      WithChakraProvider(<LoginContainer />);

      //メールアドレス入力
      await act(async () => {
        userEvent.type(screen.getByTestId('emailInput'), expectedEmail);
        userEvent.type(screen.getByTestId('passwordInput'), expectedPassword);
        userEvent.click(screen.getByRole('button', { name: 'ログイン' }));
      });

      expect(expectedSignInWithEmailAndPassword).toHaveBeenCalledTimes(1);
      expect(expectedSignInWithEmailAndPassword).toHaveBeenCalledWith(
        expectedEmail,
        expectedPassword,
      );
    });
  });
});
