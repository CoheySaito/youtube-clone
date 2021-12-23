import React, { useContext } from 'react';

type LoginUserIdContextType = {
  loginUserId: string;
  checkLocalStorage: () => void;
  resetLoginUserId: () => void;
};

export const LoginUserIdContext =
  React.createContext<LoginUserIdContextType>(null);

export const useLoginUserIdContext = () => useContext(LoginUserIdContext);
