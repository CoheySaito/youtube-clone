/**
 * @jest-environment jsdom
 */
import 'setimmediate';
import { renderHook, act } from '@testing-library/react-hooks';
import useSignUp from './useSignUp';
import { MockedProvider } from '@apollo/client/testing';
import React from 'react';
import { useRouter } from 'next/router';
import useFirebaseAuth from '../useFirebaseAuth/useFirebaseAuth';
import { checkAuthToken } from '../../utils/checkAuthToken';

//mock
jest.mock('next/router');
jest.mock('../useFirebaseAuth/useFirebaseAuth');
jest.mock('../../utils/firebase/firebaseConfig');
jest.mock('../../utils/checkAuthToken');

describe('useForgetテスト', () => {
  it('初期、submitLoading===false', () => {
    //constant
    const expectedEmail = 'test@g.mail';
    const expectedPassword = 'testpass';
    //Mock
    //useFirebaseAuth
    (useFirebaseAuth as jest.Mock).mockReturnValue({
      emailRef: { current: { value: expectedEmail } },
      passwordRef: { current: { value: expectedPassword } },
      createUserFn: null,
    });

    const wrapper = ({ children }) => (
      <MockedProvider mocks={[]}>{children}</MockedProvider>
    );

    const { result } = renderHook(() => useSignUp(), { wrapper });
    const { submitLoading } = result.current;

    expect(submitLoading).toBe(false);
  });

  it('emailRef入力無し,submitHandeler実行→alert"ユーザーの登録に失敗しました。"', async () => {
    //constant
    const expectedEmail = 'test@g.mail';
    const expectedPassword = 'testpass';
    //Mock
    //useFirebaseAuth
    const expectedCreateUserFn = jest.fn();
    (useFirebaseAuth as jest.Mock).mockReturnValue({
      emailRef: { current: { value: expectedEmail } },
      passwordRef: { current: { value: expectedPassword } },
      createUserFn: expectedCreateUserFn,
    });

    //alert Mock
    window.alert = jest.fn();

    const wrapper = ({ children }) => (
      <MockedProvider mocks={[]}>{children}</MockedProvider>
    );
    const { result } = renderHook(() => useSignUp(), { wrapper });
    const { submitHandeler } = result.current;

    await act(async () => {
      await submitHandeler();
    });
    expect(window.alert).toHaveBeenCalledWith('ユーザーの登録に失敗しました。');
  });

  it('emailRef入力あり、firebase.auth().signInWithEmailAndPassword呼び出し、/loginにルーティング', async () => {
    //--GIVEN--
    //constant
    const expectedEmail = 'test@g.mail';
    const expectedPassword = 'testpass';
    const expectedUid = 'testId';

    //Mock
    //alert Mock
    window.alert = jest.fn();

    //useFirebaseAuth
    const expectedGetIdToken = jest.fn().mockReturnValue(Promise.resolve({}));
    const expectedCreateUserFn = jest
      .fn()
      .mockReturnValue({ uid: expectedUid, getIdToken: expectedGetIdToken });
    (useFirebaseAuth as jest.Mock).mockReturnValue({
      emailRef: { current: { value: expectedEmail } },
      passwordRef: { current: { value: expectedPassword } },
      createUserFn: expectedCreateUserFn,
    });

    //useUserCrud
    // const expectedInsertUsersOne = jest
    //   .fn()
    //   .mockImplementation(({}) => Promise.resolve({}));
    // const mockUseUserCrud = useUserCrud as jest.MockedFunction<
    //   typeof useUserCrud
    // >;
    // mockUseUserCrud.mockReturnValue({
    //   insert_users_one: expectedInsertUsersOne,
    // });

    //useRouter
    const expectedRouterPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: expectedRouterPush });

    // checkAuthToken
    const expectedCheckAuthToken = jest
      .fn()
      .mockReturnValue(Promise.resolve({}));
    (checkAuthToken as jest.Mock).mockImplementation(expectedCheckAuthToken);

    const wrapper = ({ children }) => (
      <MockedProvider mocks={[]}>{children}</MockedProvider>
    );
    const { result } = renderHook(() => useSignUp(), { wrapper });
    const { submitHandeler } = result.current;

    //--WHEN--
    await act(async () => {
      await submitHandeler();
    });

    //--THEN--
    expect(expectedCreateUserFn).toHaveBeenCalledTimes(1);

    expect(expectedGetIdToken).toHaveBeenCalledTimes(1);
    expect(expectedCheckAuthToken).toHaveBeenCalledTimes(1);
    expect(expectedCheckAuthToken).toHaveBeenCalledWith(expectedUid);

    expect(window.alert).toHaveBeenCalledTimes(1);
    // expect(expectedInsertUsersOne).toHaveBeenCalledTimes(1);

    expect(expectedRouterPush).toHaveBeenCalledWith('/');
  });
});
