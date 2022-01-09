/**
 * @jest-environment jsdom
 */
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom/extend-expect';
import { act, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import 'setimmediate';
import WithChakraProvider from '../../__test__/util/withChakraProvider';
import firebase from '../../utils/firebase/firebaseConfig';
import { useRouter } from 'next/router';
import SignUpContainer from './SignUpContainer';

//mock
jest.mock('../../utils/firebase/firebaseConfig');
jest.mock('next/router');
describe('loginPageテスト', () => {
  afterEach(() => {
    cleanup();
  });

  it('画面表示確認', async () => {
    //render
    WithChakraProvider(
      <MockedProvider mocks={[]}>
        <SignUpContainer />
      </MockedProvider>,
    );

    expect(screen.getByText('新規アカウント登録')).toBeInTheDocument();
    expect(screen.getByText('ログインはこちら')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: '新規登録' }),
    ).toBeInTheDocument();
  });

  it('ログインはこちら：login画面へのリンクあり', async () => {
    WithChakraProvider(
      <MockedProvider mocks={[]}>
        <SignUpContainer />
      </MockedProvider>,
    );
    expect(screen.getByTestId('fromSignupToLogin')).toHaveAttribute(
      'href',
      '/login',
    );
  });
  describe('新規登録処理:ボタン押下', () => {
    it('入力不備→alert', async () => {
      //alert Mock
      window.alert = jest.fn();
      WithChakraProvider(
        <MockedProvider mocks={[]}>
          <SignUpContainer />
        </MockedProvider>,
      );
      await act(async () => {
        userEvent.click(screen.getByRole('button', { name: '新規登録' }));
      });
      expect(window.alert).toHaveBeenCalledWith(
        'ユーザーの登録に失敗しました。',
      );
    });

    it('入力正常系、名前、パス、アドレスを入力、firebaseが呼び出される', async () => {
      const expectedName = 'testName';
      const expectedEmail = 'test@g.mail';
      const expectedPassword = 'testpass';

      //Mock
      const expectedCreateUserWithEmailAndPassword = jest.fn();
      const expectedRouterPush = jest.fn();
      (useRouter as jest.Mock).mockReturnValue({ push: expectedRouterPush });
      (firebase.auth as jest.MockedFunction<any>).mockReturnValue({
        createUserWithEmailAndPassword: expectedCreateUserWithEmailAndPassword,
      });

      //render
      WithChakraProvider(
        <MockedProvider mocks={[]}>
          <SignUpContainer />
        </MockedProvider>,
      );

      //メールアドレス入力
      await act(async () => {
        userEvent.type(screen.getByTestId('nameInput'), expectedName);
        userEvent.type(screen.getByTestId('emailInput'), expectedEmail);
        userEvent.type(screen.getByTestId('passwordInput'), expectedPassword);
        userEvent.click(screen.getByRole('button', { name: '新規登録' }));
      });

      expect(expectedCreateUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
      expect(expectedCreateUserWithEmailAndPassword).toHaveBeenCalledWith(
        expectedEmail,
        expectedPassword,
      );
    });
  });
});
