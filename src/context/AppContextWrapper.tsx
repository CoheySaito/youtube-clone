import React, { ReactNode, useEffect, useState } from 'react';
import { SerchQueryContext } from './SerchQueryContext';

type AppContextProps = {
  children: ReactNode;
};

const AppContextWrapper = ({ children }) => {
  const [serchQuery, setSerchQuery] = useState('');

  return (
    <SerchQueryContext.Provider value={{ ...{ serchQuery, setSerchQuery } }}>
      {children}
    </SerchQueryContext.Provider>
  );
};

export default AppContextWrapper;
