import React from 'react';

type LoginUserIdContextType = {
  loginUserId: string;
  checkLocalStorage: () => void;
  resetLoginUserId: () => void;
};

export const LoginUserIdContext =
  React.createContext<LoginUserIdContextType>(null);
