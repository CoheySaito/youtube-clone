import React from 'react';
import { useUploadModalContext } from '../../../context/uploadModalContext';
import HeaderUploadPresenter from './presenter';

type HeaderUploadContainerProps = { loginUserId: string };

const HeaderUploadContainer: React.FC<HeaderUploadContainerProps> = ({
  loginUserId,
}) => {
  // UploadModal
  const { isOpen, onOpen, onClose } = useUploadModalContext();
  return (
    <HeaderUploadPresenter {...{ loginUserId, isOpen, onOpen, onClose }} />
  );
};
export default HeaderUploadContainer;
