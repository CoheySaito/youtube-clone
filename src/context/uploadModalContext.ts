import React from 'react';

type UploadModalContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const UploadModalContext =
  React.createContext<UploadModalContextType>(null);
