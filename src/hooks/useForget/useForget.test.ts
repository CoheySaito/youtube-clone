/**
 * @jest-environment jsdom
 */
import 'setimmediate';
import { renderHook, act } from '@testing-library/react-hooks';
import useForget from './useForget';
import { useRouter } from 'next/router';
import firebase from '../../utils/firebase/firebaseConfig';

//mock
jest.mock('next/router');
jest.mock('../../utils/firebase/firebaseConfig');

describe('useForgetテスト', () => {
  it('初期、loading===false', () => {
    const { result } = renderHook(() => useForget());
    const { loading } = result.current;
    expect(loading).toBe(false);
  });

  it('emailRef入力無し,clickHandler実行→alert"メールアドレスを入力してください。"', async () => {
    //alert Mock
    window.alert = jest.fn();

    const { result } = renderHook(() => useForget());
    const { clickHandler } = result.current;
    await act(async () => {
      await clickHandler();
    });
    expect(window.alert).toHaveBeenCalledWith(
      'メールアドレスを入力してください。',
    );
  });

  it('emailRef入力あり、firebase.auth().sendPasswordResetEmail呼び出し、/loginにルーティング', async () => {
    const expectedEmail = 'test@g.mail';

    //Mock
    const expectedRouterPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: expectedRouterPush });

    const expectedSendPasswordResetEmail = jest.fn();
    (firebase.auth as jest.MockedFunction<any>).mockReturnValue({
      sendPasswordResetEmail: expectedSendPasswordResetEmail,
    });

    const { result } = renderHook(() => useForget());
    const { emailRef, loading, clickHandler } = result.current;

    emailRef.current = { ...emailRef.current, ...{ value: expectedEmail } };

    await act(async () => {
      await clickHandler();
    });

    expect(expectedSendPasswordResetEmail).toHaveBeenCalledTimes(1);
    expect(expectedSendPasswordResetEmail).toHaveBeenCalledWith(expectedEmail);
    expect(expectedRouterPush).toHaveBeenCalledWith('/login');
  });
});
