/**
 * @jest-environment jsdom
 */
import 'setimmediate';
import { renderHook, act } from '@testing-library/react-hooks';
import firebase from '../../utils/firebase/firebaseConfig';
import useFirebaseAuth from './useFirebaseAuth';
import { cleanup } from '@testing-library/react';

//Mock
jest.mock('../../utils/firebase/firebaseConfig');

describe('useForgetテスト', () => {
  afterEach(() => {
    cleanup();
  });
  describe('loginFn', () => {
    it('emailRef?.current.value && passwordRef?.current.valueなし→firebase.auth().signInWithEmailAndPassword呼び出しなし', async () => {
      //Mock
      const expectedSignInWithEmailAndPassword = jest.fn();
      (firebase.auth as jest.MockedFunction<any>).mockReturnValue({
        signInWithEmailAndPassword: expectedSignInWithEmailAndPassword,
      });

      window.alert = jest.fn();

      //render
      const { result } = renderHook(() => useFirebaseAuth());
      const { loginFn } = result.current;

      await act(async () => {
        await loginFn();
      });

      expect(expectedSignInWithEmailAndPassword).toBeCalledTimes(0);
    });
    it('emailRef?.current.value && passwordRef?.current.valueあり→firebase.auth().signInWithEmailAndPassword呼び出しあり', async () => {
      //--GIVEN--
      //Mock
      const expectedSignInWithEmailAndPassword = jest.fn();
      (firebase.auth as jest.MockedFunction<any>).mockReturnValue({
        signInWithEmailAndPassword: expectedSignInWithEmailAndPassword,
      });

      localStorage.setItem = jest.fn();
      window.alert = jest.fn();

      //render
      const { result } = renderHook(() => useFirebaseAuth());
      const { emailRef, passwordRef, loginFn } = result.current;

      //--WHEN--
      const expectedEmail = 'test@g.mail';
      emailRef.current = { ...emailRef.current, ...{ value: expectedEmail } };
      const expectedPassword = 'testPassword';
      passwordRef.current = {
        ...passwordRef.current,
        ...{ value: expectedPassword },
      };

      await act(async () => {
        await loginFn();
      });

      //--THEN--
      expect(expectedSignInWithEmailAndPassword).toBeCalledTimes(1);
      expect(expectedSignInWithEmailAndPassword).toHaveBeenCalledWith(
        expectedEmail,
        expectedPassword,
      );
    });
  });

  describe('createUserFn', () => {
    it('emailRef?.current.value && passwordRef?.current.valueなし→firebase.auth().createUserWithEmailAndPassword呼び出しなし', async () => {
      //Mock
      const expectedCreateUserWithEmailAndPassword = jest.fn();
      (firebase.auth as jest.MockedFunction<any>).mockReturnValue({
        createUserWithEmailAndPassword: expectedCreateUserWithEmailAndPassword,
      });

      window.alert = jest.fn();

      const { result } = renderHook(() => useFirebaseAuth());
      const { createUserFn } = result.current;

      await act(async () => {
        await createUserFn();
      });

      expect(expectedCreateUserWithEmailAndPassword).toBeCalledTimes(0);
    });
    it('emailRef?.current.value && passwordRef?.current.valueあり→firebase.auth().createUserWithEmailAndPassword呼び出しあり', async () => {
      //--GIVEN--
      //Mock
      const expectedCreateUserWithEmailAndPassword = jest.fn();
      (firebase.auth as jest.MockedFunction<any>).mockReturnValue({
        createUserWithEmailAndPassword: expectedCreateUserWithEmailAndPassword,
      });

      localStorage.setItem = jest.fn();
      window.alert = jest.fn();

      //remder
      const { result } = renderHook(() => useFirebaseAuth());
      const { emailRef, passwordRef, createUserFn } = result.current;

      //--WHEN--
      const expectedEmail = 'test@g.mail';
      emailRef.current = { ...emailRef.current, ...{ value: expectedEmail } };
      const expectedPassword = 'testPassword';
      passwordRef.current = {
        ...passwordRef.current,
        ...{ value: expectedPassword },
      };

      await act(async () => {
        await createUserFn();
      });

      //--THEN--
      expect(expectedCreateUserWithEmailAndPassword).toBeCalledTimes(1);
      expect(expectedCreateUserWithEmailAndPassword).toHaveBeenCalledWith(
        expectedEmail,
        expectedPassword,
      );
    });
  });
});
