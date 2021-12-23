import { useDisclosure } from '@chakra-ui/hooks';
import React, { ReactNode, useContext, useState } from 'react';
import { LoginUserIdContext } from './loginUserIdrContext';
import { SerchQueryContext } from './serchQueryContext';
import { UploadModalContext } from './uploadModalContext';

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

  //UploadModalContext
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <UploadModalContext.Provider value={{ ...{ isOpen, onOpen, onClose } }}>
      <LoginUserIdContext.Provider
        value={{ ...{ loginUserId, checkLocalStorage, resetLoginUserId } }}
      >
        <SerchQueryContext.Provider
          value={{ ...{ serchQuery, setSerchQuery } }}
        >
          {children}
        </SerchQueryContext.Provider>
      </LoginUserIdContext.Provider>
    </UploadModalContext.Provider>
  );
};

export default AppContextWrapper;
