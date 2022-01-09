import React from 'react';
import HeaderUpload from './HeaderUpload';
import { useUploadModalContext } from '../../../context/uploadModalContext';

type HeaderUploadContainerProps = { loginUserId: string };

const HeaderUploadContainer: React.FC<HeaderUploadContainerProps> = ({
  loginUserId,
}) => {
  // UploadModal
  const { isOpen, onOpen, onClose } = useUploadModalContext();
  return <HeaderUpload {...{ loginUserId, isOpen, onOpen, onClose }} />;
};
export default HeaderUploadContainer;
