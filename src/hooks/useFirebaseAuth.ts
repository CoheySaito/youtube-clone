import firebase from '../utils/firebase/firebaseConfig';
import { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react';

export const useFirebaseAuth = () => {
  // 入力input
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const loginFn = useCallback(async () => {
    try {
      if (emailRef?.current.value && passwordRef?.current.value) {
        const { user } = await firebase
          .auth()
          .signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef?.current.value,
          );
        localStorage.setItem('loginUserId', user.uid);
      }
    } catch (error) {
      switch (error.code) {
        case 'auth/cancelled-popup-request':
        case 'auth/popup-closed-by-user':
          return null;
        case 'auth/email-already-in-use':
          alert('メールアドレスまたはパスワードが違います');
          return;
        case 'auth/invalid-email':
          alert('メールアドレスの形式が正しくありません');
          return;
        case 'auth/user-disabled':
          alert('サービスの利用が停止されています');
          return;
        case 'auth/user-not-found':
          alert('メールアドレスまたはパスワードが違います');
          return;
        case 'auth/user-mismatch':
          alert('メールアドレスまたはパスワードが違います');
          return;
        case 'auth/weak-password':
          alert('パスワードは6文字以上にしてください');
          return;
        case 'auth/wrong-password':
          alert('メールアドレスまたはパスワードが違います');
          return;
        case 'auth/popup-blocked':
          alert(
            '認証ポップアップがブロックされました。ポップアップブロックをご利用の場合は設定を解除してください',
          );
          return;
        case 'auth/operation-not-supported-in-this-environment':
        case 'auth/auth-domain-config-required':
        case 'auth/operation-not-allowed':
        case 'auth/unauthorized-domain':
          alert('現在この認証方法はご利用頂けません');
          return;
        case 'auth/requires-recent-login':
          alert('認証の有効期限が切れています');
          return;
        default:
          alert('エラーが発生しました。しばらく時間をおいてお試しください');
          return;
      }
    }
    // resetInput();
  }, []);

  const createUserFn = useCallback(async () => {
    let varUser: firebase.User;
    try {
      if (emailRef?.current.value && passwordRef?.current.value) {
        const { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef?.current.value,
          );
        localStorage.setItem('loginUserId', user.uid);
        varUser = user;
      }
    } catch (error) {
      switch (error.code) {
        case 'auth/cancelled-popup-request':
        case 'auth/popup-closed-by-user':
          return null;
        case 'auth/email-already-in-use':
          alert('このメールアドレスは使用されています');
          return;
        case 'auth/invalid-email':
          alert('メールアドレスの形式が正しくありません');
          return;
        case 'auth/user-disabled':
          alert('サービスの利用が停止されています');
          return;
        case 'auth/user-not-found':
          alert('メールアドレスまたはパスワードが違います');
          return;
        case 'auth/user-mismatch':
          alert('認証されているユーザーと異なるアカウントが選択されました');
          return;
        case 'auth/weak-password':
          alert('パスワードは6文字以上にしてください');
          return;
        case 'auth/wrong-password':
          alert('メールアドレスまたはパスワードが違います');
          return;
        case 'auth/popup-blocked':
          alert(
            '認証ポップアップがブロックされました。ポップアップブロックをご利用の場合は設定を解除してください',
          );
          return;
        case 'auth/operation-not-supported-in-this-environment':
        case 'auth/auth-domain-config-required':
        case 'auth/operation-not-allowed':
        case 'auth/unauthorized-domain':
          alert('現在この認証方法はご利用頂けません');
          return;
        case 'auth/requires-recent-login':
          alert('認証の有効期限が切れています');
          return;
        default:
          alert('認証に失敗しました。しばらく時間をおいて再度お試しください');
          return;
      }
    }
    // resetInput();
    return varUser;
  }, []);

  return {
    emailRef,
    passwordRef,
    loginFn,
    createUserFn,
  };
};
