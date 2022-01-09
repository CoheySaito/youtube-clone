import React from 'react';
import useUploadModal from '../../hooks/useUploadModal/useUploadModal';
import UploadModal from './UploadModal';

type UploadModalContainerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const UploadModalContainer: React.FC<UploadModalContainerProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    selectedVideoFile,
    setSelectedVideoFile,
    setThumbFile,
    titleRef,
    descRef,
    thumbFile,
    handleSubmit,
    uploadLoading,
    errorMessage,
  } = useUploadModal();

  return (
    <UploadModal
      {...{
        isOpen,
        onClose,
        selectedVideoFile,
        setSelectedVideoFile,
        setThumbFile,
        titleRef,
        descRef,
        thumbFile,
        handleSubmit,
        uploadLoading,
        errorMessage,
      }}
    />
  );
};
export default UploadModalContainer;
