import { useRef, useState } from 'react';

import { useRouter } from 'next/router';
import useFirebaseAuth from '../useFirebaseAuth/useFirebaseAuth';
import useUserCrud from '../useUserCrud/useUserCrud';
import { checkAuthToken } from '../../utils/checkAuthToken';
import Cookie from 'universal-cookie';

const useSignUp = () => {
  const { emailRef, passwordRef, createUserFn } = useFirebaseAuth();

  const nameRef = useRef<HTMLInputElement>(null);

  const { insert_users_one } = useUserCrud();

  const router = useRouter();

  const [submitLoading, setSubmitLoading] = useState(false);

  const submitHandeler = async () => {
    //loading
    setSubmitLoading(true);

    const user = await createUserFn();

    if (!user?.uid) {
      alert('ユーザーの登録に失敗しました。');
      setSubmitLoading(false);
      return;
    }

    // アカウントにトークンが設定されるまで待機
    await checkAuthToken(user.uid);

    //token→cookie
    const HASURA_TOKEN_KEY = 'https://hasura.io/jwt/claims';
    const cookie = new Cookie();

    const token = await user.getIdToken();
    cookie.set('token', token, { path: '/' });

    try {
      await insert_users_one({
        variables: {
          id: user.uid,
          name: nameRef.current.value,
          email: emailRef.current.value,
        },
      });
    } catch (error) {
      alert(error?.messagge);
    }
    setSubmitLoading(false);
    router.push('/');
  };
  return {
    nameRef,
    emailRef,
    passwordRef,
    submitHandeler,
    submitLoading,
  };
};

export default useSignUp;
