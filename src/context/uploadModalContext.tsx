import React, { useContext } from 'react';

type UploadModalContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const UploadModalContext =
  React.createContext<UploadModalContextType>(null);

export const useUploadModalContext = () => useContext(UploadModalContext);
