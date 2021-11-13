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

    cookie.remove('token');
    localStorage.removeItem('loginUserId');
  };

  return { logout };
};
