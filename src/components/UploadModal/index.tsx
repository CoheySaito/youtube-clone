import React from 'react';
import useUploadModal from '../../hooks/useUploadModal/useUploadModal';
import UploadModalPresenter from './presenter';

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
    <UploadModalPresenter
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
