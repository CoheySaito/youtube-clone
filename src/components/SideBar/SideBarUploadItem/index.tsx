import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import SideBarUploadItemPresenter from './presenter';

const SideBarUploadItemContainer: React.VFC = () => {
  // UploadModal
  const { isOpen, onOpen, onClose } = useDisclosure();

  return <SideBarUploadItemPresenter {...{ isOpen, onOpen, onClose }} />;
};
export default SideBarUploadItemContainer;
