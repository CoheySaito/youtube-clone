import React, { ReactNode, useState } from 'react';
import { LoginUserIdContext } from './loginUserIdrContext';
import { SerchQueryContext } from './serchQueryContext';

type AppContextProps = {
  children: ReactNode;
};

const AppContextWrapper: React.VFC<AppContextProps> = ({ children }) => {
  const [serchQuery, setSerchQuery] = useState('');

  //LoginUserIdContext
  const [loginUserId, setLoginUserId] = useState<string>(undefined);
  //LocalStorageを確認
  const checkLocalStorage = () => {
    const id = localStorage.getItem('loginUserId');
    if (id) {
      setLoginUserId(id);
    } else {
      setLoginUserId(undefined);
    }
  };
  //LoginUserIdをリセット（ログアウト時）
  const resetLoginUserId = () => {
    setLoginUserId(undefined);
  };

  return (
    <LoginUserIdContext.Provider
      value={{ ...{ loginUserId, checkLocalStorage, resetLoginUserId } }}
    >
      <SerchQueryContext.Provider value={{ ...{ serchQuery, setSerchQuery } }}>
        {children}
      </SerchQueryContext.Provider>
    </LoginUserIdContext.Provider>
  );
};

export default AppContextWrapper;
