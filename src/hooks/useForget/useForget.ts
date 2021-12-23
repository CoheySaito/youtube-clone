import { useRef, useState } from 'react';
import firebase from '../../utils/firebase/firebaseConfig';
import { useRouter } from 'next/router';

const useForget = () => {
  const router = useRouter();
  // input
  const emailRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const clickHandler = async () => {
    if (!emailRef?.current?.value) {
      alert('メールアドレスを入力してください。');
      return;
    }
    setLoading(true);

    await firebase.auth().sendPasswordResetEmail(emailRef.current.value);
    setLoading(false);
    router.push('/login');
  };

  return { emailRef, loading, clickHandler };
};

export default useForget;
