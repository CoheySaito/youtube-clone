/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { act, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import 'setimmediate';
import WithChakraProvider from '../../__test__/util/withChakraProvider';

import { useRouter } from 'next/router';
import firebase from '../../utils/firebase/firebaseConfig';
import Forget from './Forget';

//mock
jest.mock('next/router');
jest.mock('../../utils/firebase/firebaseConfig');
// const mockFirebase = firebase as jest.Mocked<typeof firebase>;

describe('forgetPageテスト', () => {
  afterEach(() => {
    cleanup();
  });
  it('画面表示確認', async () => {
    WithChakraProvider(<Forget />);

    expect(screen.getByText('パスワードの再発行')).toBeInTheDocument();
    expect(screen.getByText('ログインはこちら')).toBeInTheDocument();
  });

  it('ログインはこちら：ログイン画面へのリンクあり', () => {
    WithChakraProvider(<Forget />);
    expect(screen.getByTestId('fromForgetToLogin')).toHaveAttribute(
      'href',
      '/login',
    );
  });

  it('YouTubeロゴ：メイン画面へのリンクあり', () => {
    WithChakraProvider(<Forget />);
    expect(screen.getByTestId('fromForgetToMain')).toHaveAttribute('href', '/');
  });

  describe('メールアドレス再発行、ボタンを押下', () => {
    it('メールアドレス入力無しでボタンを押下、アラームが出てエラーとなる', async () => {
      WithChakraProvider(<Forget />);
      //alert Mock
      window.alert = jest.fn();
      //エラーメッセージ
      await userEvent.click(screen.getByRole('button'));
      expect(window.alert).toHaveBeenCalledWith(
        'メールアドレスを入力してください。',
      );
    });

    it('メールアドレスを入力、関数が呼び出されて、login画面に遷移する', async () => {
      const expectedRouterPush = jest.fn();
      (useRouter as jest.Mock).mockReturnValue({ push: expectedRouterPush });

      const expectedEmail = 'test@g.mail';
      const expectedSendPasswordResetEmail = jest.fn();
      // mockFirebase.auth.mockReturnValue({
      //   sendPasswordResetEmail: expectedSendPasswordResetEmail,
      // });

      (firebase.auth as jest.MockedFunction<any>).mockReturnValue({
        sendPasswordResetEmail: expectedSendPasswordResetEmail,
      });

      // const mockForebaseAuth = jest.spyOn(firebase, 'auth');
      // mockForebaseAuth.mockReturnValue({ sendPasswordResetEmail: jest.fn() });

      WithChakraProvider(<Forget />);

      //メールアドレス入力
      await act(async () => {
        userEvent.type(screen.getByTestId('emailInput'), expectedEmail);
        userEvent.click(
          screen.getByRole('button', { name: '再発行メールを送信' }),
        );
      });
      expect(expectedSendPasswordResetEmail).toHaveBeenCalledTimes(1);
      expect(expectedSendPasswordResetEmail).toHaveBeenCalledWith(
        expectedEmail,
      );
      expect(expectedRouterPush).toHaveBeenCalledWith('/login');
    });
  });
});
