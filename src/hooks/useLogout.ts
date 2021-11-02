import firebase from '../utils/firebase/firebaseConfig';
import Cookie from 'universal-cookie';
import { unSubMeta } from './useUserChanged';

const cookie = new Cookie();

export const useLogout = () => {
  const logout = async () => {
    if (unSubMeta) {
      //サブスクリプションを停止
      unSubMeta();
    }
    //サインアウト
    await firebase.auth().signOut();

    // stateリセット

    // HTTP＿Clientのcacheを削除

    cookie.remove('token');
  };

  return { logout };
};
