import React, { useContext } from 'react';

type SerchQueryContextType = {
  serchQuery: string;
  setSerchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const SerchQueryContext =
  React.createContext<SerchQueryContextType>(null);

export const useSerchQueryContext = () => useContext(SerchQueryContext);
