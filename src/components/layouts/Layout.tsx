import React, { ReactNode, useState } from 'react';
import HomeLayout from './HomeLayout';
import SidelessHomeLayout from './SidelessHomeLayout';

import firebase from '../../utils/firebase/firebaseConfig';
import { CurrentUserContext } from '../../context/CurrentUserContext';

type LayoutProps = {
  sidebar?: boolean;
  title?: string;
  children: ReactNode;
};

const Layout: React.VFC<LayoutProps> = ({ sidebar, title, children }) => {
  //FirebaseUser
  const [currentUser, setCurrentUser] = useState<firebase.User>(
    firebase.auth().currentUser,
  );

  //ログアウト時userを確認用
  const checkFirebaseUser = () => {
    setCurrentUser(firebase.auth().currentUser);
  };
  return (
    <>
      <CurrentUserContext.Provider
        value={{ ...{ currentUser, checkFirebaseUser } }}
      >
        {sidebar ? (
          <HomeLayout {...{ title, children }} />
        ) : (
          <SidelessHomeLayout {...{ title, children }} />
        )}
      </CurrentUserContext.Provider>
    </>
  );
};
export default Layout;
