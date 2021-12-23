import Cookie from 'universal-cookie';
import { useRouter } from 'next/router';
import firebase from '../../utils/firebase/firebaseConfig';
import { useEffect } from 'react';

//snapshotを停止する
export let unSubMeta: () => void;

// firebaseでユーザが変わったときの処理
export const useUserChanged = () => {
  const cookie = new Cookie();
  const router = useRouter();
  const HASURA_TOKEN_KEY = 'https://hasura.io/jwt/claims';

  useEffect(() => {
    // onAuthStateChanged ユーザーが変わったことを検出
    //user:新しいユーザ情報
    const unSubUser = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        //getIdTokenResult:Tokenの内容をobjectで取得
        const idTokenResult = await user.getIdTokenResult();
        const hassuraClames = idTokenResult.claims[HASURA_TOKEN_KEY];
        if (hassuraClames) {
          //path (string): cookie path, use / as the path if you want your cookie to be accessible on all pages
          //Cokieにセット
          cookie.set('token', token, { path: '/' });
          router.push('/');
        } else {
          const userRef = firebase
            .firestore()
            .collection('user_meta')
            .doc(user.uid);
          //hassuraClamesがない場合は、onSnapshotで待つ
          //onSnapshotで変更の度に、()内の関数が実行される。
          unSubMeta = userRef.onSnapshot(async () => {
            //* forceRefresh */ true
            const token = await user.getIdToken(true);
            const idTokenResult = await user.getIdTokenResult();
            const hassuraClames = idTokenResult.claims[HASURA_TOKEN_KEY];
            if (hassuraClames) {
              cookie.set('token', token, { path: '/' });
              router.push('/');
            }
          });
        }
      }
    });
    return () => {
      //onAuthStateChanged解除
      unSubUser();
    };
  }, []);
  return {};
};
